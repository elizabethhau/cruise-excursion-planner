import { STATE } from './state.js';
import { EXCURSION_DATA, FAMILY, SHEET_NAMES, SHEET_HEADERS } from './data.js';
import {
  toMins, formatTime, endTimeStr, fmtDate, fmtDateLong, fmtPrice, activityBadge, overlaps,
  portCompletionForPerson, portCompletionStatus, portStatusEmoji,
  voteOf, findExcursion, findPortForCode, summarizeVotes,
  getMyScheduleEntries, getConflictsForPerson, conflictLevelForExcursion,
  parseSheetsRows, renderOfferingOptions,
  buildScheduleItems, calcPersonFees, calcFamilyFees,
} from './core.js';

/* ─────────────────────────────────────────────────
   UI UTILITIES
───────────────────────────────────────────────── */
function showToast(msg, ms = 2000) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), ms);
}

function isElizabeth() { return STATE.user === 'Elizabeth'; }

/* ─────────────────────────────────────────────────
   ROUTER / TAB SWITCHING
───────────────────────────────────────────────── */
function switchTab(tab) {
  STATE.tab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('#content .screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + (tab === 'dash' ? 'dash' : tab)).classList.add('active');
  renderCurrentTab();
}

function renderCurrentTab() {
  if (STATE.tab === 'vote')         renderVoteTab();
  else if (STATE.tab === 'dash')     renderDashTab();
  else if (STATE.tab === 'schedule') renderScheduleTab();
  else if (STATE.tab === 'fees')     renderFeesTab();
  else if (STATE.tab === 'settings') renderSettingsTab();
}

/* ─────────────────────────────────────────────────
   FLOW A — NAME SELECTION
───────────────────────────────────────────────── */
function renderNameScreen() {
  const prompt = document.querySelector('.name-prompt');
  const label = prompt.querySelector('.name-prompt-label');
  prompt.innerHTML = '';
  prompt.appendChild(label);

  FAMILY.forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'name-btn' + (name === 'Elizabeth' ? ' admin' : '');
    btn.onclick = () => saveName(name);
    btn.innerHTML = `
      <span class="name-initial">${name[0]}</span>
      <span>${name}${name === 'Elizabeth' ? ' 👑' : ''}</span>
    `;
    prompt.appendChild(btn);
  });
}

function saveName(name) {
  STATE.user = name;
  localStorage.setItem('cp_user', name);
  document.getElementById('screen-name').classList.remove('active');
  document.getElementById('app').classList.remove('hidden');
  document.getElementById('header-user').textContent = name + (name === 'Elizabeth' ? ' 👑' : '');
  if (!STATE.creds.apiKey || !STATE.creds.spreadsheetId) {
    showCredsModal();
  } else {
    initApp();
  }
}

/* ─────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────── */
function init() {
  try {
    const cached = JSON.parse(sessionStorage.getItem('cp_token') || 'null');
    if (cached && cached.exp > Date.now() && STATE.accessToken) scheduleTokenRefresh(cached.exp);
  } catch {}
  renderNameScreen();
  if (STATE.user) {
    document.getElementById('screen-name').classList.remove('active');
    document.getElementById('app').classList.remove('hidden');
    document.getElementById('header-user').textContent =
      STATE.user + (STATE.user === 'Elizabeth' ? ' 👑' : '');
    initApp();
  } else {
    document.getElementById('screen-name').classList.add('active');
  }
}

function initApp() {
  renderCurrentTab();
  if (STATE.creds.apiKey && STATE.creds.spreadsheetId) {
    const start = () => syncFromSheets().then(() => startPolling());
    requireAuth().then(authed => {
      if (authed) initSheets().then(start);
      else start();
    });
  }
  updateSyncBadge();
}

/* ─────────────────────────────────────────────────
   CREDENTIALS MODAL
───────────────────────────────────────────────── */
function showCredsModal() {
  const m = document.getElementById('modal-creds');
  m.classList.add('active');
  document.getElementById('input-apikey').value   = STATE.creds.apiKey || '';
  document.getElementById('input-clientid').value = STATE.creds.clientId || '';
  document.getElementById('input-sheetid').value  = STATE.creds.spreadsheetId || '';
  document.getElementById('btn-creds-skip').style.display =
    (STATE.creds.apiKey || STATE.creds.spreadsheetId) ? '' : 'none';
}
function hideCredsModal() {
  document.getElementById('modal-creds').classList.remove('active');
}
async function saveCreds() {
  const apiKey = document.getElementById('input-apikey').value.trim();
  const clientId = document.getElementById('input-clientid').value.trim();
  const spreadsheetId = document.getElementById('input-sheetid').value.trim();
  if (!apiKey || !spreadsheetId) { showToast('API Key and Spreadsheet ID are required'); return; }

  showToast('Validating…');
  const testUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=spreadsheetId&key=${apiKey}`;
  let testOk = false;
  try { testOk = (await fetch(testUrl)).ok; } catch {}
  if (!testOk) {
    showToast('❌ Spreadsheet not found — check ID and sharing settings', 5000);
    return;
  }

  STATE.creds = { apiKey, clientId, spreadsheetId };
  localStorage.setItem('cp_apiKey', apiKey);
  localStorage.setItem('cp_clientId', clientId);
  localStorage.setItem('cp_spreadsheetId', spreadsheetId);
  hideCredsModal();
  showToast('Credentials saved — connecting…');
  renderCurrentTab();
  requireAuth().then(() => syncFromSheets().then(() => startPolling()));
}
function skipCreds() {
  hideCredsModal();
  renderCurrentTab();
}

/* ─────────────────────────────────────────────────
   GOOGLE SHEETS API
───────────────────────────────────────────────── */
async function sheetsGet(range) {
  const { apiKey, spreadsheetId } = STATE.creds;
  if (!apiKey || !spreadsheetId) return null;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}?key=${apiKey}`;
  try {
    const r = await fetch(url);
    if (!r.ok) return null;
    return (await r.json()).values || [];
  } catch { return null; }
}

async function sheetsAppend(sheetName, row) {
  const { spreadsheetId } = STATE.creds;
  if (!STATE.accessToken) {
    enqueueOffline({ type:'append', sheetName, row });
    return false;
  }
  const range = `${sheetName}!A1`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${STATE.accessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ values: [row] }),
    });
    return r.ok;
  } catch {
    enqueueOffline({ type:'append', sheetName, row });
    return false;
  }
}

async function sheetsUpdate(range, rows) {
  const { spreadsheetId } = STATE.creds;
  if (!STATE.accessToken || !spreadsheetId) return false;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}?valueInputOption=RAW`;
  try {
    const r = await fetch(url, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${STATE.accessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ values: rows }),
    });
    return r.ok;
  } catch { return false; }
}

let _initSheetsRunning = false;
async function initSheets() {
  if (_initSheetsRunning) return;
  _initSheetsRunning = true;
  try {
    const { apiKey, spreadsheetId } = STATE.creds;
    if (!apiKey || !spreadsheetId || !STATE.accessToken) return;

    const metaUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=sheets.properties.title&key=${apiKey}`;
    const metaR = await fetch(metaUrl);
    const existingTitles = new Set();
    if (metaR.ok) {
      const meta = await metaR.json();
      (meta.sheets || []).forEach(s => existingTitles.add(s.properties.title));
    }

    const allNames = Object.values(SHEET_NAMES);
    const missing = allNames.filter(n => !existingTitles.has(n));
    if (missing.length > 0) {
      const batchR = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${STATE.accessToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ requests: missing.map(n => ({ addSheet: { properties: { title: n } } })) }),
      });
      if (!batchR.ok) {
        const err = await batchR.json().catch(() => ({}));
        console.error('initSheets batchUpdate failed', batchR.status, err);
        showToast(`Sheet setup failed (${batchR.status}) — check console`, 5000);
        return;
      }
      for (const name of missing.filter(n => n !== 'Excursions')) {
        await sheetsAppend(name, SHEET_HEADERS[name]);
      }
      showToast(`Created tabs: ${missing.join(', ')}`);
    }

    const existing = await sheetsGet('Excursions!A1');
    if (!existing || existing.length <= 1) {
      const rows = [SHEET_HEADERS.Excursions];
      for (const port of EXCURSION_DATA.ports) {
        for (const e of port.excursions) {
          rows.push([e.code, e.name, port.name, e.duration_hrs, e.price_usd,
            e.retail_price_usd, e.activity_level, e.meal_included, e.accessible, e.go_local, e.free_shore]);
        }
      }
      const ok = await sheetsUpdate('Excursions!A1', rows);
      if (ok) showToast('Excursions data written to sheet ✓');
      else showToast('Excursions write failed — check token', 4000);
    }
  } finally {
    _initSheetsRunning = false;
  }
}

/* ─────────────────────────────────────────────────
   GIS OAUTH (popup flow)
───────────────────────────────────────────────── */
let _gisClient = null;
let _refreshTimer = null;

function scheduleTokenRefresh(exp) {
  if (_refreshTimer) { clearTimeout(_refreshTimer); _refreshTimer = null; }
  const delay = Math.max(0, exp - Date.now() - 5 * 60 * 1000);
  _refreshTimer = setTimeout(() => { _refreshTimer = null; refreshToken(); }, delay);
}

async function refreshToken() {
  if (!STATE.creds.clientId) return;
  if (!window.google?.accounts?.oauth2) {
    await new Promise(resolve => {
      const s = document.createElement('script');
      s.src = 'https://accounts.google.com/gsi/client';
      s.onload = resolve;
      document.head.appendChild(s);
    });
  }
  window.google.accounts.oauth2.initTokenClient({
    client_id: STATE.creds.clientId,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    callback: (resp) => {
      if (resp.error) {
        STATE.accessToken = null;
        showToast('Session expired — tap to re-authorize');
        return;
      }
      STATE.accessToken = resp.access_token;
      try {
        const exp = Date.now() + 55 * 60 * 1000;
        sessionStorage.setItem('cp_token', JSON.stringify({ tok: resp.access_token, exp }));
        scheduleTokenRefresh(exp);
      } catch {}
    },
  }).requestAccessToken({ prompt: '' });
}

function ensureGIS() {
  return new Promise((resolve) => {
    if (STATE.accessToken) { resolve(true); return; }
    if (!STATE.creds.clientId) { resolve(false); return; }
    if (!window.google?.accounts?.oauth2) {
      const s = document.createElement('script');
      s.src = 'https://accounts.google.com/gsi/client';
      s.onload = () => initGISClient(resolve);
      document.head.appendChild(s);
    } else {
      initGISClient(resolve);
    }
  });
}

function initGISClient(resolve) {
  _gisClient = google.accounts.oauth2.initTokenClient({
    client_id: STATE.creds.clientId,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    callback: (resp) => {
      if (resp.error) { resolve(false); return; }
      STATE.accessToken = resp.access_token;
      try {
        sessionStorage.setItem('cp_token', JSON.stringify({ tok: resp.access_token, exp: Date.now() + 55 * 60 * 1000 }));
      } catch {}
      initSheets();
      resolve(true);
    },
  });
  _gisClient.requestAccessToken({ prompt: '' });
}

async function requireAuth() {
  if (STATE.accessToken) return true;
  return await ensureGIS();
}

/* ─────────────────────────────────────────────────
   SYNC FROM SHEETS
───────────────────────────────────────────────── */
async function syncFromSheets() {
  if (STATE.syncing) return;
  STATE.syncing = true;
  updateSyncBadge('syncing');
  try {
    const [votesRaw, schedRaw, reqRaw] = await Promise.all([
      sheetsGet('Votes!A2:F'),
      sheetsGet('Schedule!A2:F'),
      sheetsGet('Requests!A2:F'),
    ]);

    const parsed = parseSheetsRows(votesRaw, schedRaw, reqRaw);
    if (votesRaw) STATE.votes    = parsed.votes;
    if (schedRaw) STATE.schedule = parsed.schedule;
    if (reqRaw)   STATE.requests = parsed.requests;
    STATE.lastSync = new Date();
    updateSyncBadge('ok');
    renderCurrentTab();
    await processQueue();
  } catch(e) {
    updateSyncBadge('error');
  } finally {
    STATE.syncing = false;
  }
}

function updateSyncBadge(state) {
  const el = document.getElementById('sync-badge');
  if (!el) return;
  if (!STATE.creds.spreadsheetId) { el.textContent = ''; return; }
  if (STATE.offlineQueue.length > 0) {
    el.className = 'sync-badge pending';
    el.textContent = `⏳ ${STATE.offlineQueue.length} pending`;
  } else if (state === 'syncing') {
    el.className = 'sync-badge';
    el.textContent = '↻ Syncing…';
  } else if (state === 'ok' && STATE.lastSync) {
    el.className = 'sync-badge synced';
    el.textContent = '✓ Synced';
  } else if (state === 'error') {
    el.className = 'sync-badge';
    el.textContent = '⚠ Offline';
  }
}

/* ─────────────────────────────────────────────────
   POLLING
───────────────────────────────────────────────── */
function startPolling() {
  if (STATE._pollTimer) return;
  STATE._pollTimer = setInterval(() => {
    if (document.visibilityState !== 'hidden') syncFromSheets();
  }, 30000);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') syncFromSheets();
  });
}
function stopPolling() {
  clearInterval(STATE._pollTimer);
  STATE._pollTimer = null;
}

/* ─────────────────────────────────────────────────
   OFFLINE QUEUE
───────────────────────────────────────────────── */
function enqueueOffline(action) {
  STATE.offlineQueue.push(action);
  localStorage.setItem('cp_queue', JSON.stringify(STATE.offlineQueue));
  updateSyncBadge();
}

async function processQueue() {
  if (!STATE.offlineQueue.length) return;
  const authed = await requireAuth();
  if (!authed) return;
  const queue = [...STATE.offlineQueue];
  STATE.offlineQueue = [];
  localStorage.setItem('cp_queue', '[]');
  for (const action of queue) {
    if (action.type === 'append') {
      const ok = await sheetsAppend(action.sheetName, action.row);
      if (!ok) enqueueOffline(action);
    }
  }
  updateSyncBadge();
}

/* ─────────────────────────────────────────────────
   WRITE OPERATIONS
───────────────────────────────────────────────── */
async function castVote(code, vote, offering_date, offering_time) {
  if (!STATE.votes[code]) STATE.votes[code] = {};
  STATE.votes[code][STATE.user] = { vote, offering_date: offering_date||null, offering_time: offering_time||null };
  const ts = new Date().toISOString();
  const authed = await requireAuth();
  const row = [ts, STATE.user, code, vote, offering_date||'', offering_time||''];
  if (authed) {
    await sheetsAppend('Votes', row);
  } else {
    enqueueOffline({ type:'append', sheetName:'Votes', row });
  }
}

async function bookExcursion(personName, tourCode, date, departure_time) {
  const ts = new Date().toISOString();
  const row = [ts, personName, tourCode, date, departure_time, 'booked'];
  STATE.schedule.push({personName, tourCode, date, departure_time, status:'booked'});
  const authed = await requireAuth();
  if (authed) {
    await sheetsAppend('Schedule', row);
  } else {
    enqueueOffline({ type:'append', sheetName:'Schedule', row });
  }
}

async function dropExcursion(personName, tourCode, date) {
  const ts = new Date().toISOString();
  const row = [ts, personName, tourCode, date, '', 'dropped'];
  STATE.schedule = STATE.schedule.filter(s =>
    !(s.personName === personName && s.tourCode === tourCode && s.date === date && s.status !== 'dropped')
  );
  STATE.schedule.push({personName, tourCode, date, departure_time:'', status:'dropped'});
  const authed = await requireAuth();
  if (authed) {
    await sheetsAppend('Schedule', row);
  } else {
    enqueueOffline({ type:'append', sheetName:'Schedule', row });
  }
}

async function submitRequest(tourCode, date, departure_time, note) {
  const ts = new Date().toISOString();
  const row = [ts, STATE.user, tourCode, date, departure_time, note || ''];
  STATE.requests.push({requesterName:STATE.user, tourCode, date, departure_time, note, timestamp:ts});
  const authed = await requireAuth();
  if (authed) {
    await sheetsAppend('Requests', row);
  } else {
    enqueueOffline({ type:'append', sheetName:'Requests', row });
  }
  showToast('Request submitted');
}

/* ─────────────────────────────────────────────────
   FLOW B — VOTE TAB
───────────────────────────────────────────────── */
function renderVoteTab() {
  const el = document.getElementById('screen-vote');

  // Create nav only on first render — never remove it, so scrollLeft is preserved
  let nav = document.getElementById('port-nav');
  if (!nav) {
    nav = document.createElement('div');
    nav.id = 'port-nav';
    EXCURSION_DATA.ports.forEach((port, idx) => {
      const status = portCompletionStatus(idx);
      const emoji  = portStatusEmoji(status);
      const btn = document.createElement('button');
      btn.className = `port-pill ${status}${idx === STATE.portIndex ? ' active' : ''}`;
      btn.textContent = `${emoji} ${port.name.split('/')[0]}`;
      btn.onclick = () => { STATE.portIndex = idx; renderVoteTab(); };
      nav.appendChild(btn);
    });
    el.appendChild(nav);
  } else {
    nav.querySelectorAll('.port-pill').forEach((btn, idx) => {
      const status = portCompletionStatus(idx);
      btn.className = `port-pill ${status}${idx === STATE.portIndex ? ' active' : ''}`;
      btn.textContent = `${portStatusEmoji(status)} ${EXCURSION_DATA.ports[idx].name.split('/')[0]}`;
    });
  }

  // Remove only the content below the nav (port header + cards)
  while (el.lastChild !== nav) el.removeChild(el.lastChild);

  const port = EXCURSION_DATA.ports[STATE.portIndex];

  const hdr = document.createElement('div');
  hdr.className = 'port-section-header';
  hdr.innerHTML = `
    <div class="port-section-title">${port.name}</div>
    <div class="port-section-date">${port.country} · ${port.dates.map(fmtDate).join(' & ')}</div>
  `;
  el.appendChild(hdr);

  let excursions = port.excursions;
  if (STATE.filters.accessibleOnly) excursions = excursions.filter(e => e.accessible);
  if (STATE.filters.maxPrice !== null) excursions = excursions.filter(e => e.price_usd <= STATE.filters.maxPrice);

  if (excursions.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `<div class="empty-icon">🔍</div><div class="empty-title">No excursions match filters</div><div class="empty-desc">Adjust filters in Settings.</div>`;
    el.appendChild(empty);
    return;
  }

  excursions.forEach(exc => el.appendChild(buildExcursionCard(exc)));
}

function buildExcursionCard(exc) {
  const myVoteObj = (STATE.votes[exc.code] || {})[STATE.user];
  const myVote = myVoteObj?.vote || null;
  const myOfferingDate = myVoteObj?.offering_date || null;
  const myOfferingTime = myVoteObj?.offering_time || null;
  const conflictLevel = conflictLevelForExcursion(exc, STATE.user);

  const card = document.createElement('div');
  card.className = 'excursion-card card';
  card.id = `exc-${exc.code}`;

  let conflictHTML = '';
  if (conflictLevel === 'confirmed') {
    conflictHTML = `<div class="conflict-warn confirmed">🔴 Confirmed schedule conflict</div>`;
  } else if (conflictLevel === 'potential') {
    conflictHTML = `<div class="conflict-warn potential">🟡 Potential conflict with another love vote</div>`;
  }

  const offeringsSection = renderOfferingOptions(exc, myOfferingDate, myOfferingTime);

  const needsNudge = exc.offerings.length > 1 && (myVote === 'love' || myVote === 'interested') && !myOfferingDate;
  const nudgeHTML = needsNudge ? `<div class="offering-nudge">👆 Pick a date/time above to complete your vote</div>` : '';

  const votes = STATE.votes[exc.code] || {};
  const { loveCount, intCount, skipCount, perOffering } = summarizeVotes(votes, exc.offerings);
  let voteCountHTML = '';
  if (exc.offerings.length > 1) {
    const parts = [];
    for (const o of exc.offerings) {
      const key = `${o.date}|${o.departure_time}`;
      const lbl = `${fmtDate(o.date)} ${formatTime(o.departure_time)}`;
      if (perOffering[key]?.loveCount) parts.push(`❤️ ${lbl} ×${perOffering[key].loveCount}`);
      if (perOffering[key]?.intCount)  parts.push(`🤔 ${lbl} ×${perOffering[key].intCount}`);
    }
    const specLove = Object.values(perOffering).reduce((s,o) => s + o.loveCount, 0);
    const specInt  = Object.values(perOffering).reduce((s,o) => s + o.intCount,  0);
    const unspecLove = loveCount - specLove;
    const unspecInt  = intCount  - specInt;
    if (unspecLove > 0) parts.push(`❤️ ? ×${unspecLove}`);
    if (unspecInt  > 0) parts.push(`🤔 ? ×${unspecInt}`);
    if (skipCount)      parts.push(`❌ ${skipCount}`);
    if (parts.length) voteCountHTML = `<div class="vote-counts">${parts.map(p=>`<span>${p}</span>`).join('')}</div>`;
  } else {
    if (loveCount + intCount + skipCount > 0) {
      voteCountHTML = `<div class="vote-counts">
        ${loveCount > 0 ? `<span>❤️ ${loveCount}</span>` : ''}
        ${intCount  > 0 ? `<span>🤔 ${intCount}</span>` : ''}
        ${skipCount > 0 ? `<span>❌ ${skipCount}</span>` : ''}
      </div>`;
    }
  }

  const badges = [
    activityBadge(exc.activity_level),
    exc.meal_included ? `<span class="badge badge-meal">🍽️ Meal</span>` : '',
    exc.accessible    ? `<span class="badge badge-accessible">♿ Accessible</span>` : '',
    exc.go_local      ? `<span class="badge badge-go-local">📍 Go Local</span>` : '',
    exc._review_activity ? `<span class="badge badge-review">activity unconfirmed</span>` : '',
  ].filter(Boolean).join('');

  card.innerHTML = `
    <div class="excursion-card-header">
      <div class="exc-code">${exc.code}</div>
      <div class="exc-name">${exc.name}</div>
      <div class="exc-desc">${exc.description}</div>
      <div class="exc-meta">
        ${fmtPrice(exc)}
        <span style="color:var(--gray-400);font-size:12px;">· ${exc.duration_hrs}h</span>
      </div>
      <div class="exc-meta">${badges}</div>
    </div>
    ${offeringsSection}
    ${nudgeHTML}
    ${conflictHTML}
    <div class="vote-area">
      <div class="vote-row">
        <button class="vote-btn ${myVote === 'love' ? 'active-love' : ''}"
                onclick="handleVote('${exc.code}','love')">
          <span class="vote-icon">❤️</span>Love it
        </button>
        <button class="vote-btn ${myVote === 'interested' ? 'active-interested' : ''}"
                onclick="handleVote('${exc.code}','interested')">
          <span class="vote-icon">🤔</span>Maybe
        </button>
        <button class="vote-btn ${myVote === 'skip' ? 'active-skip' : ''}"
                onclick="handleVote('${exc.code}','skip')">
          <span class="vote-icon">❌</span>Skip
        </button>
      </div>
      ${voteCountHTML}
    </div>
  `;

  return card;
}

async function handleVote(code, vote) {
  const current = voteOf(code, STATE.user);
  const newVote = (current === vote) ? null : vote;

  if (newVote === null) {
    delete (STATE.votes[code] || {})[STATE.user];
    await castVote(code, '', null, null);
    showToast('Vote removed');
  } else if (newVote === 'skip') {
    await castVote(code, 'skip', null, null);
  } else {
    const exc = findExcursion(code);
    if (exc.offerings.length > 1) {
      const sel = document.querySelector(`input[name="offering-${code}"]:checked`);
      if (!sel) { showToast('Please select a date/time first ↑'); return; }
      const o = exc.offerings[parseInt(sel.value)];
      await castVote(code, newVote, o.date, o.departure_time);
    } else {
      const o = exc.offerings[0];
      await castVote(code, newVote, o.date, o.departure_time);
    }
  }

  const exc = findExcursion(code);
  const oldCard = document.getElementById(`exc-${code}`);
  if (oldCard && exc) {
    const newCard = buildExcursionCard(exc);
    oldCard.replaceWith(newCard);
  }

  const nav = document.getElementById('port-nav');
  if (nav) {
    nav.querySelectorAll('.port-pill').forEach((btn, idx) => {
      const status = portCompletionStatus(idx);
      btn.className = `port-pill ${status}${idx === STATE.portIndex ? ' active' : ''}`;
      btn.textContent = `${portStatusEmoji(status)} ${EXCURSION_DATA.ports[idx].name.split('/')[0]}`;
    });
  }
}

function jumpToExcursion(code) {
  const port = findPortForCode(code);
  if (!port) return;
  STATE.portIndex = EXCURSION_DATA.ports.indexOf(port);
  switchTab('vote');
  const el = document.getElementById('exc-' + code);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─────────────────────────────────────────────────
   FLOW C — GROUP DASHBOARD
───────────────────────────────────────────────── */
function renderDashTab() {
  const el = document.getElementById('screen-dash');
  el.innerHTML = '';

  if (isElizabeth()) {
    const totalPeople = FAMILY.length;
    const totalPorts  = EXCURSION_DATA.ports.length;
    const completedCount = EXCURSION_DATA.ports.reduce((sum, _, idx) =>
      sum + FAMILY.filter(p => portCompletionForPerson(idx, p)).length, 0);
    const totalSlots = totalPeople * totalPorts;
    const pct = totalSlots ? Math.round(completedCount / totalSlots * 100) : 0;

    const adminDiv = document.createElement('div');
    adminDiv.className = 'admin-panel';
    adminDiv.style.margin = '14px 14px 4px';
    adminDiv.innerHTML = `
      <div class="admin-panel-header">👑 Elizabeth — Trip Organizer</div>
      <div class="admin-panel-body">
        <div style="font-size:13px;color:var(--purple-text);font-weight:500;">
          Group voting progress: ${completedCount} / ${totalSlots} port–person slots complete
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" style="width:${pct}%"></div>
        </div>
        <button class="btn btn-sm btn-outline" style="margin-top:4px;" onclick="copyReminder()">
          📋 Copy reminder message
        </button>
      </div>
    `;
    el.appendChild(adminDiv);

    const pendingReqs = STATE.requests.filter(r =>
      !STATE.schedule.some(s => s.tourCode === r.tourCode && s.personName === r.requesterName && s.status === 'booked')
    );
    if (pendingReqs.length > 0) {
      const inboxDiv = document.createElement('div');
      inboxDiv.className = 'admin-panel';
      inboxDiv.style.margin = '0 14px 4px';
      inboxDiv.innerHTML = `
        <div class="admin-panel-header">📬 Booking Requests (${pendingReqs.length})</div>
        <div class="admin-panel-body">
          ${pendingReqs.map(r => {
            const exc = findExcursion(r.tourCode);
            return `<div class="request-item">
              <div class="request-who">${r.requesterName}</div>
              <div class="request-detail">${exc ? exc.name : r.tourCode} · ${fmtDate(r.date)} ${formatTime(r.departure_time)}</div>
              ${r.note ? `<div class="request-detail" style="margin-top:2px;font-style:italic;">"${r.note}"</div>` : ''}
              <button class="btn btn-sm btn-teal" style="margin-top:8px;" onclick="openLockModal('${r.tourCode}','${r.requesterName}')">
                Lock it in
              </button>
            </div>`;
          }).join('')}
        </div>
      `;
      el.appendChild(inboxDiv);
    }
  }

  EXCURSION_DATA.ports.forEach((port, portIdx) => {
    const block = document.createElement('div');
    block.className = 'dash-port-block';

    const complete = FAMILY.filter(p => portCompletionForPerson(portIdx, p)).length;
    const total    = FAMILY.length;
    const status   = portCompletionStatus(portIdx);

    block.innerHTML = `
      <div class="dash-port-header" onclick="this.nextElementSibling.classList.toggle('hidden')">
        <div>
          <div class="dash-port-name">${port.name}</div>
          <div style="font-size:12px;color:var(--gray-400);">${port.dates.map(fmtDate).join(' & ')}</div>
        </div>
        <div class="dash-port-status">
          <span>${portStatusEmoji(status)} ${complete}/${total}</span>
          <span style="font-size:18px;">›</span>
        </div>
      </div>
    `;

    const body = document.createElement('div');
    body.className = 'dash-port-body';

    const ranked = port.excursions.map(exc => {
      const votes = STATE.votes[exc.code] || {};
      const { score } = summarizeVotes(votes, exc.offerings);
      return { exc, votes, score };
    }).sort((a,b) => b.score - a.score);

    ranked.forEach(({ exc, votes, score }) => {
      if (score === 0) return;

      const row = document.createElement('div');
      row.className = 'dash-exc-row';

      const avatars = FAMILY.map(p => {
        const v = votes[p]?.vote;
        if (!v) return '';
        return `<span class="avatar-chip ${v}">${p.slice(0,3)}</span>`;
      }).filter(Boolean).join('');

      row.innerHTML = `
        <div class="dash-score">${score}</div>
        <div class="dash-exc-info">
          <div class="dash-exc-name">${exc.name}</div>
          <div class="dash-exc-code">${exc.code} · ${exc.duration_hrs}h · ${exc.price_usd===0?'Complimentary':'$'+exc.price_usd}</div>
          <div class="avatar-row">${avatars}</div>
        </div>
        ${isElizabeth() ? `<button class="btn btn-sm btn-purple" onclick="openLockModal('${exc.code}',null)">Lock</button>` : `<button class="btn btn-sm btn-outline" onclick="openRequestModal('${exc.code}')">Request</button>`}
      `;
      body.appendChild(row);
    });

    if (ranked.every(r => r.score === 0)) {
      body.innerHTML = `<div class="gap-label">No votes yet for ${port.name}</div>`;
    }

    block.appendChild(body);
    el.appendChild(block);
    el.appendChild(document.createElement('div')).className = 'section-gap';
  });
}

function copyReminder() {
  const missing = FAMILY.filter(p =>
    EXCURSION_DATA.ports.some((_, idx) => !portCompletionForPerson(idx, p))
  );
  const lines = [
    '📋 Cruise Excursion Voting Reminder',
    '',
    'Please vote on at least one excursion you love or are interested in for each port!',
    '',
    ...missing.map(p => {
      const ports = EXCURSION_DATA.ports
        .filter((_, idx) => !portCompletionForPerson(idx, p))
        .map(port => port.name);
      return `${p}: still needs to vote on — ${ports.join(', ')}`;
    }),
    '',
    'Open cruise-planner.html to vote.',
  ];
  navigator.clipboard.writeText(lines.join('\n')).then(() => showToast('Reminder copied to clipboard'));
}

/* ── LOCK MODAL ─────────────────────────────────── */
function openLockModal(code, preselectedPerson) {
  const exc = findExcursion(code);
  if (!exc) return;

  const modal = document.getElementById('modal-generic');
  const title = document.getElementById('modal-generic-title');
  const body  = document.getElementById('modal-generic-body');
  title.textContent = `Lock: ${exc.name}`;

  const offeringOpts = exc.offerings.map((o,i) =>
    `<option value="${i}">${fmtDate(o.date)} · ${formatTime(o.departure_time)} – ${endTimeStr(o.departure_time, exc.duration_hrs)}</option>`
  ).join('');

  const memberChecks = FAMILY.map(p => {
    const alreadyBooked = STATE.schedule.some(s => s.tourCode === code && s.personName === p && s.status === 'booked');
    const checked = alreadyBooked || p === preselectedPerson ? 'checked' : '';
    const vObj = (STATE.votes[code] || {})[p];
    let prefLabel = '';
    if (vObj?.offering_date) {
      prefLabel = ` <span style="color:var(--teal);font-size:12px;">→ ${fmtDate(vObj.offering_date)} · ${formatTime(vObj.offering_time)}</span>`;
    } else if (vObj?.vote === 'love' || vObj?.vote === 'interested') {
      prefLabel = ` <span style="color:var(--gray-400);font-size:12px;">→ no pref</span>`;
    }
    return `<label style="display:flex;align-items:center;gap:8px;padding:8px 0;font-size:14px;border-bottom:1px solid var(--gray-100);">
      <input type="checkbox" ${checked} ${alreadyBooked ? 'disabled' : ''} value="${p}" class="lock-member-cb">
      ${p}${alreadyBooked ? ' ✓ booked' : ''}${prefLabel}
    </label>`;
  }).join('');

  body.innerHTML = `
    <div style="margin-bottom:16px;">
      <label class="field-label">Offering</label>
      <select class="field-input" id="lock-offering-select">${offeringOpts}</select>
    </div>
    <div style="margin-bottom:16px;">
      <label class="field-label">Who's booking this?</label>
      ${memberChecks}
    </div>
    <div id="lock-conflict-warn" style="display:none;" class="conflict-banner">
      ⚠️ Conflict detected — see details below
    </div>
    <div style="display:flex;gap:8px;margin-top:16px;">
      <button class="btn btn-outline" onclick="closeGenericModal()">Cancel</button>
      <button class="btn btn-purple btn-full" onclick="confirmLock('${code}')">Lock it in 🔒</button>
    </div>
  `;

  document.getElementById('lock-offering-select').addEventListener('change', () => checkLockConflicts(code));
  checkLockConflicts(code);

  modal.classList.add('active');
}

function checkLockConflicts(code) {
  const exc = findExcursion(code);
  const offeringIdx = parseInt(document.getElementById('lock-offering-select').value);
  const offering = exc.offerings[offeringIdx];
  const checked = [...document.querySelectorAll('.lock-member-cb:checked')].map(cb => cb.value);
  const warn = document.getElementById('lock-conflict-warn');
  const hasConflict = checked.some(person => {
    const entries = getMyScheduleEntries(person, offering.date);
    return entries.some(e => {
      if (e.tourCode === code) return false;
      const e2 = findExcursion(e.tourCode);
      return e2 && overlaps(offering.departure_time, exc.duration_hrs, e.departure_time, e2.duration_hrs);
    });
  });
  warn.style.display = hasConflict ? '' : 'none';
}

async function confirmLock(code) {
  const exc = findExcursion(code);
  const offeringIdx = parseInt(document.getElementById('lock-offering-select').value);
  const offering = exc.offerings[offeringIdx];
  const checked = [...document.querySelectorAll('.lock-member-cb:checked')].map(cb => cb.value);
  if (checked.length === 0) { showToast('Select at least one person'); return; }

  for (const person of checked) {
    await bookExcursion(person, code, offering.date, offering.departure_time);
  }
  closeGenericModal();
  showToast(`Locked ${exc.name} for ${checked.join(', ')}`);
  renderDashTab();
}

/* ── REQUEST MODAL (non-Elizabeth) ─────────────── */
function openRequestModal(code) {
  const exc = findExcursion(code);
  if (!exc) return;

  const modal = document.getElementById('modal-generic');
  const title = document.getElementById('modal-generic-title');
  const body  = document.getElementById('modal-generic-body');
  title.textContent = `Request: ${exc.name}`;

  const offeringOpts = exc.offerings.map((o,i) =>
    `<option value="${i}">${fmtDate(o.date)} · ${formatTime(o.departure_time)}</option>`
  ).join('');

  body.innerHTML = `
    <div style="margin-bottom:16px;">
      <label class="field-label">Preferred offering</label>
      <select class="field-input" id="req-offering-select">${offeringOpts}</select>
    </div>
    <div style="margin-bottom:16px;">
      <label class="field-label">Note for Elizabeth (optional)</label>
      <textarea class="field-input" id="req-note" rows="2" placeholder="e.g. Please book all 7 of us" style="resize:none;"></textarea>
    </div>
    <div style="display:flex;gap:8px;margin-top:16px;">
      <button class="btn btn-outline" onclick="closeGenericModal()">Cancel</button>
      <button class="btn btn-teal btn-full" onclick="confirmRequest('${code}')">Send Request</button>
    </div>
  `;

  modal.classList.add('active');
}

async function confirmRequest(code) {
  const exc = findExcursion(code);
  const offeringIdx = parseInt(document.getElementById('req-offering-select').value);
  const offering = exc.offerings[offeringIdx];
  const note = document.getElementById('req-note').value.trim();
  await submitRequest(code, offering.date, offering.departure_time, note);
  closeGenericModal();
}

function closeGenericModal() {
  document.getElementById('modal-generic').classList.remove('active');
}

/* ─────────────────────────────────────────────────
   FLOW D — PERSONAL SCHEDULE
───────────────────────────────────────────────── */
function renderScheduleTab() {
  const el = document.getElementById('screen-schedule');
  el.innerHTML = '';

  const hdr = document.createElement('div');
  hdr.className = 'tab-section-header';
  hdr.innerHTML = `<div class="toggle-group">
    <button class="toggle-btn ${STATE.scheduleFilter==='all'?'active':''}" onclick="toggleScheduleFilter('all')">All</button>
    <button class="toggle-btn ${STATE.scheduleFilter==='confirmed'?'active':''}" onclick="toggleScheduleFilter('confirmed')">Confirmed only</button>
  </div>`;
  el.appendChild(hdr);

  const allItems = buildScheduleItems(STATE.user);
  const items = STATE.scheduleFilter === 'confirmed' ? allItems.filter(i => i.type === 'booked') : allItems;

  if (items.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'schedule-empty';
    empty.innerHTML = `<div class="schedule-empty-icon">🗺️</div><div class="schedule-empty-text">No excursions booked yet.<br>Vote on your favourites and Elizabeth will lock them in!</div>`;
    el.appendChild(empty);
    return;
  }

  const byDate = {};
  for (const item of items) {
    if (!byDate[item.date]) byDate[item.date] = [];
    byDate[item.date].push(item);
  }

  const allDates = [...new Set(EXCURSION_DATA.ports.flatMap(p => p.dates))].sort();
  const exportLines = ['CRUISE EXCURSION SCHEDULE — ' + (STATE.user || 'My Schedule'), ''];

  allDates.forEach(date => {
    if (!byDate[date]) return;
    const dayItems = byDate[date];
    const port = EXCURSION_DATA.ports.find(p => p.dates.includes(date));
    const portName = port ? port.name : '';

    const dayHdr = document.createElement('div');
    dayHdr.className = 'schedule-day-header';
    dayHdr.innerHTML = `<div class="schedule-day-title">${portName}</div><div class="schedule-day-date">${fmtDateLong(date)}</div>`;
    el.appendChild(dayHdr);

    const conflicts = getConflictsForPerson(STATE.user, date);
    if (conflicts.length > 0) {
      const banner = document.createElement('div');
      banner.className = 'conflict-banner';
      banner.innerHTML = `⚠️ ${conflicts.length} schedule conflict${conflicts.length>1?'s':''} on this day`;
      el.appendChild(banner);
    }

    exportLines.push(`── ${portName} · ${fmtDateLong(date)} ──`);

    let prevEndMins = null;
    for (const item of dayItems) {
      const exc = item.exc;
      if (item.type === 'booked') {
        const startMins = toMins(item.departure_time);
        const endMins   = startMins + Math.round(exc.duration_hrs * 60);
        if (prevEndMins !== null && startMins > prevEndMins) {
          const gapEl = document.createElement('div');
          gapEl.className = 'gap-label';
          gapEl.textContent = `${startMins - prevEndMins} min free`;
          el.appendChild(gapEl);
        }
        const row = document.createElement('div');
        row.className = 'schedule-entry';
        row.innerHTML = `
          <div class="schedule-time">
            ${formatTime(item.departure_time)}<br>
            <span style="color:var(--gray-400);">to ${endTimeStr(item.departure_time, exc.duration_hrs)}</span>
          </div>
          <div class="schedule-entry-body">
            <div class="schedule-entry-name">${exc.name}</div>
            <div class="schedule-entry-meta">${exc.price_usd===0?'Complimentary':'$'+exc.price_usd} · ${activityBadge(exc.activity_level)}</div>
            ${isElizabeth() ? `<button class="btn btn-sm btn-danger" style="margin-top:6px;" onclick="confirmDrop('${item.tourCode}','${item.date}','${STATE.user}')">Drop</button>` : ''}
          </div>
        `;
        el.appendChild(row);
        exportLines.push(`  ${formatTime(item.departure_time)} – ${endTimeStr(item.departure_time, exc.duration_hrs)}  ${exc.name}  (${ exc.price_usd===0?'Complimentary':'$'+exc.price_usd})`);
        prevEndMins = endMins;
      } else {
        const voteIcon = item.voteType === 'love' ? '❤️' : '🤔';
        const timeStr = item.departure_time
          ? `${formatTime(item.departure_time)} – ${endTimeStr(item.departure_time, exc.duration_hrs)}`
          : null;
        const row = document.createElement('div');
        row.className = 'schedule-entry wishlist';
        row.style.cursor = 'pointer';
        row.onclick = () => jumpToExcursion(item.tourCode);
        row.innerHTML = `
          <div class="schedule-time">
            ${timeStr ? formatTime(item.departure_time) : '—'}
            ${timeStr ? `<br><span style="color:var(--gray-400);">to ${endTimeStr(item.departure_time, exc.duration_hrs)}</span>` : ''}
          </div>
          <div class="schedule-entry-body">
            <div class="schedule-entry-name">${exc.name}<span class="wishlist-badge">${voteIcon} Wishlist</span></div>
            <div class="schedule-entry-meta">${exc.price_usd===0?'Complimentary':'$'+exc.price_usd} · ${activityBadge(exc.activity_level)}</div>
            ${!timeStr ? `<div class="wishlist-pick-nudge">📅 Pick a date →</div>` : ''}
          </div>
        `;
        el.appendChild(row);
        exportLines.push(`  [Wishlist] ${timeStr || '(no date)'  }  ${exc.name}  (${exc.price_usd===0?'Complimentary':'$'+exc.price_usd})`);
      }
    }
    exportLines.push('');
  });

  const exportBtn = document.createElement('div');
  exportBtn.style.padding = '16px';
  exportBtn.innerHTML = `<button class="btn btn-outline btn-full" onclick="exportSchedule(${JSON.stringify(exportLines).replace(/</g,'&lt;')})">📋 Copy schedule to clipboard</button>`;
  el.appendChild(exportBtn);
}

function toggleScheduleFilter(val) {
  STATE.scheduleFilter = val;
  renderScheduleTab();
}

function exportSchedule(lines) {
  navigator.clipboard.writeText(lines.join('\n')).then(() => showToast('Schedule copied!'));
}

async function confirmDrop(code, date, person) {
  if (!confirm(`Drop ${code} for ${person} on ${fmtDate(date)}?`)) return;
  await dropExcursion(person, code, date);
  showToast('Dropped');
  renderScheduleTab();
}

/* ─────────────────────────────────────────────────
   FLOW F — FEES TAB
───────────────────────────────────────────────── */
function renderFeesTab() {
  const el = document.getElementById('screen-fees');
  el.innerHTML = '';

  const hdr = document.createElement('div');
  hdr.className = 'tab-section-header';
  hdr.innerHTML = `<div class="toggle-group">
    <button class="toggle-btn ${STATE.feesView==='my'?'active':''}" onclick="toggleFeesView('my')">My costs</button>
    <button class="toggle-btn ${STATE.feesView==='family'?'active':''}" onclick="toggleFeesView('family')">Family costs</button>
  </div>`;
  el.appendChild(hdr);

  if (STATE.feesView === 'my') {
    const fees = calcPersonFees(STATE.user);

    const summary = document.createElement('div');
    summary.className = 'fees-summary card';
    summary.innerHTML = `
      <div class="fees-summary-row">
        <span>Confirmed</span>
        <span class="fees-amount confirmed">$${fees.confirmed}</span>
      </div>
      <div class="fees-summary-row">
        <span>Potential (love votes, not booked)</span>
        <span class="fees-amount potential">$${fees.potential}</span>
      </div>
    `;
    el.appendChild(summary);

    if (fees.confirmed === 0 && fees.potential === 0) {
      const empty = document.createElement('div');
      empty.className = 'fees-empty';
      empty.innerHTML = `<div class="fees-empty-icon">💸</div>No paid excursions yet — all complimentary or no bookings/love votes!`;
      el.appendChild(empty);
      return;
    }

    if (fees.confirmedList.length > 0) {
      const sect = document.createElement('div');
      sect.className = 'fees-section';
      sect.innerHTML = `<div class="fees-section-title">Confirmed</div>` +
        fees.confirmedList.map(e => `<div class="fees-item">
          <span class="fees-item-name">${e.name}</span>
          <span class="fees-item-price">$${e.price}</span>
        </div>`).join('');
      el.appendChild(sect);
    }

    if (fees.potentialList.length > 0) {
      const sect = document.createElement('div');
      sect.className = 'fees-section';
      sect.innerHTML = `<div class="fees-section-title">Wishlist (not yet booked)</div>` +
        fees.potentialList.map(e => `<div class="fees-item potential">
          <span class="fees-item-name">${e.name}</span>
          <span class="fees-item-price">$${e.price}</span>
        </div>`).join('');
      el.appendChild(sect);
    }
  } else {
    const { members, totalConfirmed, totalPotential } = calcFamilyFees();

    const grandTotal = document.createElement('div');
    grandTotal.className = 'fees-grand-total';
    grandTotal.innerHTML = `<span>Grand total (confirmed)</span><span>$${totalConfirmed}</span>`;
    el.appendChild(grandTotal);

    const summary = document.createElement('div');
    summary.className = 'fees-summary card';
    summary.innerHTML = `
      <div class="fees-summary-row">
        <span>Total confirmed</span>
        <span class="fees-amount confirmed">$${totalConfirmed}</span>
      </div>
      <div class="fees-summary-row">
        <span>Total potential</span>
        <span class="fees-amount potential">$${totalPotential}</span>
      </div>
    `;
    el.appendChild(summary);

    const sect = document.createElement('div');
    sect.className = 'fees-section';
    for (const m of members) {
      const bodyId = `fees-acc-${m.person.toLowerCase()}`;
      const hasFees = m.confirmed > 0 || m.potential > 0;
      const acc = document.createElement('div');
      acc.className = 'fees-accordion card';
      acc.innerHTML = `
        <div class="fees-acc-header" onclick="toggleFeesAccordion('${m.person}')">
          <span class="fees-acc-name">${m.person}</span>
          <span>
            ${m.confirmed > 0 ? `<span class="fees-amount confirmed">$${m.confirmed}</span>` : ''}
            ${m.potential > 0 ? `<span class="fees-amount potential" style="margin-left:4px;">+$${m.potential} potential</span>` : ''}
            ${!hasFees ? `<span style="color:var(--gray-400);font-size:12px;">$0</span>` : ''}
          </span>
        </div>
        ${hasFees ? `<div class="fees-acc-body hidden" id="${bodyId}">
          ${m.confirmedList.map(e => `<div class="fees-item"><span>${e.name}</span><span>$${e.price}</span></div>`).join('')}
          ${m.potentialList.map(e => `<div class="fees-item potential"><span>${e.name} (wishlist)</span><span>$${e.price}</span></div>`).join('')}
        </div>` : ''}
      `;
      sect.appendChild(acc);
    }
    el.appendChild(sect);
  }
}

function toggleFeesView(val) {
  STATE.feesView = val;
  renderFeesTab();
}

function toggleFeesAccordion(person) {
  const body = document.getElementById(`fees-acc-${person.toLowerCase()}`);
  if (body) body.classList.toggle('hidden');
}

/* ─────────────────────────────────────────────────
   FLOW E — SETTINGS
───────────────────────────────────────────────── */
function renderSettingsTab() {
  const el = document.getElementById('screen-settings');
  el.innerHTML = '';

  const acct = document.createElement('div');
  acct.innerHTML = `
    <div class="settings-section">
      <div class="settings-section-title">Account</div>
      <div style="background:var(--white);border-radius:var(--radius-sm);overflow:hidden;">
        <div class="settings-row">
          <div>
            <div class="settings-label">Logged in as ${STATE.user}${STATE.user==='Elizabeth'?' 👑':''}</div>
            <div class="settings-desc">Tap to switch user</div>
          </div>
          <button class="btn btn-sm btn-outline" onclick="changeName()">Change</button>
        </div>
        <div class="settings-row">
          <div>
            <div class="settings-label">Google Sheets</div>
            <div class="settings-desc">${STATE.creds.spreadsheetId ? 'Connected · ' + STATE.creds.spreadsheetId.slice(0,16)+'…' : 'Not connected'}</div>
          </div>
          <button class="btn btn-sm btn-outline" onclick="showCredsModal()">Edit</button>
        </div>
      </div>
    </div>
  `;
  el.appendChild(acct);

  const filters = document.createElement('div');
  filters.innerHTML = `
    <div class="settings-section">
      <div class="settings-section-title">Filters</div>
      <div style="background:var(--white);border-radius:var(--radius-sm);overflow:hidden;">
        <div class="settings-row">
          <div>
            <div class="settings-label">Accessible tours only</div>
            <div class="settings-desc">Hide excursions without wheelchair access</div>
          </div>
          <label class="toggle">
            <input type="checkbox" id="toggle-accessible" ${STATE.filters.accessibleOnly ? 'checked' : ''}
              onchange="setFilterAccessible(this.checked)">
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="settings-row">
          <div>
            <div class="settings-label">Max price</div>
            <div class="settings-desc">Hide excursions above this price (0 = Complimentary only)</div>
          </div>
          <div class="price-input-wrap">
            <span>$</span>
            <input class="price-input" type="number" id="input-maxprice" min="0" max="2000"
              value="${STATE.filters.maxPrice !== null ? STATE.filters.maxPrice : ''}"
              placeholder="Any"
              onchange="setMaxPrice(this.value)">
          </div>
        </div>
      </div>
    </div>
  `;
  el.appendChild(filters);

  const danger = document.createElement('div');
  danger.innerHTML = `
    <div class="settings-section">
      <div class="settings-section-title">Data</div>
      <div style="background:var(--white);border-radius:var(--radius-sm);overflow:hidden;">
        <div class="settings-row">
          <div>
            <div class="settings-label">Reset my votes</div>
            <div class="settings-desc">Clears all your votes from this device (they remain in Sheets)</div>
          </div>
          <button class="btn btn-sm btn-danger" onclick="resetMyVotes()">Reset</button>
        </div>
        ${isElizabeth() ? `
        <div class="settings-row">
          <div>
            <div class="settings-label">Force sync</div>
            <div class="settings-desc">Pull latest data from Google Sheets now</div>
          </div>
          <button class="btn btn-sm btn-outline" onclick="syncFromSheets().then(()=>showToast('Synced'))">Sync</button>
        </div>` : ''}
      </div>
    </div>
    <div style="padding:16px;text-align:center;color:var(--gray-400);font-size:12px;">
      Cruise Planner · RSSC Sydney→Auckland · Dec 2026
    </div>
  `;
  el.appendChild(danger);
}

function changeName() {
  localStorage.removeItem('cp_user');
  STATE.user = null;
  document.getElementById('app').classList.add('hidden');
  document.getElementById('screen-name').classList.add('active');
  stopPolling();
}

function setFilterAccessible(val) {
  STATE.filters.accessibleOnly = val;
  localStorage.setItem('cp_filterAccessible', val);
  if (STATE.tab === 'vote') renderVoteTab();
}

function setMaxPrice(val) {
  STATE.filters.maxPrice = val === '' ? null : Number(val);
  if (STATE.filters.maxPrice !== null) {
    localStorage.setItem('cp_maxPrice', String(STATE.filters.maxPrice));
  } else {
    localStorage.removeItem('cp_maxPrice');
  }
  if (STATE.tab === 'vote') renderVoteTab();
}

function resetMyVotes() {
  if (!confirm('Clear all your votes from this device?')) return;
  Object.keys(STATE.votes).forEach(code => {
    if (STATE.votes[code]) delete STATE.votes[code][STATE.user];
  });
  showToast('Votes cleared locally');
  renderCurrentTab();
}

/* ─────────────────────────────────────────────────
   STATIC EVENT WIRING
───────────────────────────────────────────────── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});
document.getElementById('btn-creds-skip').addEventListener('click', skipCreds);
document.querySelector('#modal-creds .btn-primary').addEventListener('click', saveCreds);
document.getElementById('modal-generic').addEventListener('click', function(e) {
  if (e.target === this) closeGenericModal();
});

/* ─────────────────────────────────────────────────
   GLOBAL EXPORTS (for inline onclick handlers in dynamic HTML)
───────────────────────────────────────────────── */
Object.assign(window, {
  renderVoteTab,
  handleVote,
  openLockModal, confirmLock, closeGenericModal,
  openRequestModal, confirmRequest,
  confirmDrop, exportSchedule,
  jumpToExcursion,
  toggleScheduleFilter,
  toggleFeesView, toggleFeesAccordion,
  copyReminder,
  changeName, showCredsModal, setFilterAccessible, setMaxPrice, resetMyVotes,
  syncFromSheets, showToast,
  refreshToken, scheduleTokenRefresh,
});

/* ─────────────────────────────────────────────────
   BOOT
───────────────────────────────────────────────── */
init();
