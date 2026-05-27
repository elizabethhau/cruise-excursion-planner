import { STATE } from './state.js';
import { EXCURSION_DATA, FAMILY } from './data.js';

/* ─────────────────────────────────────────────────
   TIME / DATE UTILITIES
───────────────────────────────────────────────── */
export function toMins(t) {
  const [h,m] = t.split(':').map(Number);
  return h * 60 + m;
}
export function addMins(t, m) {
  const total = toMins(t) + m;
  return String(Math.floor(total / 60)).padStart(2,'0') + ':' + String(total % 60).padStart(2,'0');
}
export function formatTime(t) {
  const [h,m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  return (h % 12 || 12) + ':' + String(m).padStart(2,'0') + ' ' + ampm;
}
export function endTimeStr(depTime, durHrs) {
  return formatTime(addMins(depTime, Math.round(durHrs * 60)));
}
export function fmtDate(d) {
  // "2026-12-31" → "Dec 31"
  const [,mo,dy] = d.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return months[parseInt(mo)-1] + ' ' + parseInt(dy);
}
export function fmtDateLong(d) {
  const dt = new Date(d + 'T00:00:00');
  return dt.toLocaleDateString('en-US', {weekday:'long', month:'long', day:'numeric'});
}
export function overlaps(aStart, aDurHrs, bStart, bDurHrs) {
  const aS = toMins(aStart), aE = aS + Math.round(aDurHrs * 60);
  const bS = toMins(bStart), bE = bS + Math.round(bDurHrs * 60);
  return aS < bE && bS < aE;
}

/* ─────────────────────────────────────────────────
   DISPLAY UTILITIES
───────────────────────────────────────────────── */
export function fmtPrice(exc) {
  if (exc.price_usd === 0) return `<span class="exc-price free">Complimentary</span><span style="font-size:11px;color:var(--gray-400);margin-left:4px;">(retail $${exc.retail_price_usd})</span>`;
  return `<span class="exc-price">$${exc.price_usd}</span><span style="font-size:11px;color:var(--gray-400);margin-left:4px;">(retail $${exc.retail_price_usd})</span>`;
}
export function activityBadge(level) {
  const map = {
    seated:    ['🪑','Seated',   'badge-activity-seated'],
    light:     ['🚶','Light',    'badge-activity-light'],
    moderate:  ['🥾','Moderate', 'badge-activity-moderate'],
    strenuous: ['⛰️','Strenuous','badge-activity-strenuous'],
  };
  const [icon, label, cls] = map[level] || map.light;
  return `<span class="badge ${cls}">${icon} ${label}</span>`;
}

/* ─────────────────────────────────────────────────
   PORT COMPLETION
───────────────────────────────────────────────── */
export function portCompletionForPerson(portIdx, person) {
  const codes = EXCURSION_DATA.ports[portIdx].excursions.map(e => e.code);
  return codes.some(code => ['love','interested'].includes(voteOf(code, person)));
}
export function portCompletionStatus(portIdx) {
  const total = FAMILY.length;
  const done  = FAMILY.filter(p => portCompletionForPerson(portIdx, p)).length;
  if (done === 0)    return 'none';
  if (done < total)  return 'partial';
  return 'complete';
}
export function portStatusEmoji(status) {
  return { none:'⬜', partial:'🟡', complete:'✅' }[status];
}

/* ─────────────────────────────────────────────────
   VOTE LOOKUP
───────────────────────────────────────────────── */
export function voteOf(code, person) {
  return ((STATE.votes[code] || {})[person] || {}).vote || null;
}

/* ─────────────────────────────────────────────────
   EXCURSION LOOKUP
───────────────────────────────────────────────── */
export function findExcursion(code) {
  for (const port of EXCURSION_DATA.ports) {
    const e = port.excursions.find(x => x.code === code);
    if (e) return e;
  }
  return null;
}
export function findPortForCode(code) {
  return EXCURSION_DATA.ports.find(p => p.excursions.some(e => e.code === code));
}

/* ─────────────────────────────────────────────────
   VOTE SUMMARY
───────────────────────────────────────────────── */
export function summarizeVotes(votesByPerson, offerings) {
  let loveCount = 0, intCount = 0, skipCount = 0, hasUnspecified = false;
  const perOffering = {};

  for (const vObj of Object.values(votesByPerson)) {
    if (!vObj?.vote) continue;
    const { vote, offering_date: od, offering_time: ot } = vObj;
    if (vote === 'skip') { skipCount++; continue; }
    if (vote === 'love') loveCount++;
    if (vote === 'interested') intCount++;
    if (!od) { hasUnspecified = true; continue; }
    const key = `${od}|${ot}`;
    if (!perOffering[key]) perOffering[key] = { loveCount: 0, intCount: 0 };
    if (vote === 'love') perOffering[key].loveCount++;
    if (vote === 'interested') perOffering[key].intCount++;
  }

  const score = loveCount * 2 + intCount;
  return { score, loveCount, intCount, skipCount, perOffering, hasUnspecified };
}

/* ─────────────────────────────────────────────────
   SHEETS DATA PARSING
───────────────────────────────────────────────── */
export function parseSheetsRows(votesRaw, schedRaw, reqRaw) {
  const votes = {};
  if (votesRaw) {
    for (const [, person, code, vote, offering_date = '', offering_time = ''] of votesRaw) {
      if (!code) continue;
      if (!votes[code]) votes[code] = {};
      votes[code][person] = { vote, offering_date: offering_date || null, offering_time: offering_time || null };
    }
  }
  const schedMap = {};
  if (schedRaw) {
    for (const [, personName, tourCode, date, departure_time, status] of schedRaw) {
      schedMap[`${personName}|${tourCode}|${date}`] = { personName, tourCode, date, departure_time, status };
    }
  }
  const schedule = Object.values(schedMap);
  const requests = reqRaw
    ? reqRaw.map(([ts, requesterName, tourCode, date, departure_time, note]) =>
        ({ requesterName, tourCode, date, departure_time, note, timestamp: ts }))
    : [];
  return { votes, schedule, requests };
}

/* ─────────────────────────────────────────────────
   OFFERING OPTIONS RENDERING
───────────────────────────────────────────────── */
export function renderOfferingOptions(exc, selectedDate, selectedTime) {
  if (exc.offerings.length > 1) {
    const radios = exc.offerings.map((o, i) => {
      const checked = selectedDate === o.date && selectedTime === o.departure_time ? 'checked' : '';
      return `<label class="offering-radio-label">
        <input type="radio" name="offering-${exc.code}" value="${i}" ${checked}>
        <span>${fmtDate(o.date)} · ${formatTime(o.departure_time)} – ${endTimeStr(o.departure_time, exc.duration_hrs)}</span>
      </label>`;
    }).join('');
    return `<div class="offering-selector"><div class="offering-selector-label">📅 Select your date/time</div>${radios}</div>`;
  }
  const o = exc.offerings[0];
  return `<div class="exc-offerings"><div class="exc-offering-row">
    <span class="offering-date">${fmtDate(o.date)}</span>
    <span class="offering-time">${formatTime(o.departure_time)} – ${endTimeStr(o.departure_time, exc.duration_hrs)}</span>
  </div></div>`;
}

/* ─────────────────────────────────────────────────
   CONFLICT ENGINE
───────────────────────────────────────────────── */
export function getMyScheduleEntries(person, date) {
  return STATE.schedule.filter(s =>
    s.personName === person &&
    s.date === date &&
    s.status !== 'dropped'
  );
}

export function getConflictsForPerson(person, date) {
  const entries = getMyScheduleEntries(person, date);
  const conflicts = [];
  for (let i = 0; i < entries.length; i++) {
    for (let j = i+1; j < entries.length; j++) {
      const a = entries[i], b = entries[j];
      const excA = findExcursion(a.tourCode);
      const excB = findExcursion(b.tourCode);
      if (!excA || !excB) continue;
      if (overlaps(a.departure_time, excA.duration_hrs, b.departure_time, excB.duration_hrs)) {
        conflicts.push({a, b, excA, excB});
      }
    }
  }
  return conflicts;
}

/* ─────────────────────────────────────────────────
   SCHEDULE ITEMS (booked + wishlist unified)
───────────────────────────────────────────────── */
export function buildScheduleItems(person) {
  const bookedEntries = STATE.schedule.filter(s =>
    s.personName === person && s.status === 'booked'
  );
  const bookedCodes = new Set(bookedEntries.map(e => e.tourCode));
  const items = [];

  for (const entry of bookedEntries) {
    const exc = findExcursion(entry.tourCode);
    if (!exc) continue;
    items.push({ type: 'booked', tourCode: entry.tourCode, date: entry.date, departure_time: entry.departure_time, exc });
  }

  for (const [code, byPerson] of Object.entries(STATE.votes)) {
    const vObj = byPerson[person];
    if (!vObj || !['love', 'interested'].includes(vObj.vote)) continue;
    if (bookedCodes.has(code)) continue;
    const exc = findExcursion(code);
    if (!exc) continue;
    let date = vObj.offering_date;
    let departure_time = vObj.offering_time || null;
    if (!date) {
      const port = findPortForCode(code);
      date = port ? port.dates[0] : null;
      departure_time = null;
    }
    if (!date) continue;
    items.push({ type: 'wishlist', tourCode: code, date, departure_time, exc, voteType: vObj.vote });
  }

  items.sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? -1 : 1;
    if (!a.departure_time && !b.departure_time) return 0;
    if (!a.departure_time) return 1;
    if (!b.departure_time) return -1;
    return toMins(a.departure_time) - toMins(b.departure_time);
  });

  return items;
}

/* ─────────────────────────────────────────────────
   SCHEDULE ITEM HTML (accordion cards)
───────────────────────────────────────────────── */
export function buildScheduleAccordionBody(item) {
  const { tourCode: code, exc } = item;
  return `<div class="schedule-accordion-body">
  <div class="exc-desc">${exc.description || ''}</div>
  <div class="schedule-badge-row">
    ${exc.meal_included ? '<span class="badge badge-meal">🍽️ Meal</span>' : ''}
    ${exc.accessible ? '<span class="badge badge-accessible">♿ Accessible</span>' : ''}
    ${exc.go_local ? '<span class="badge badge-go-local">📍 Go Local</span>' : ''}
  </div>
  <button class="btn btn-sm btn-outline schedule-vote-btn" onclick="event.stopPropagation(); jumpToExcursion('${code}')">Vote →</button>
</div>`;
}

export function buildScheduleItemHTML(item, isExpanded, opts = {}) {
  const { isAdmin = false, person = '' } = opts;
  const { tourCode: code, exc, departure_time, type, voteType } = item;
  const timeCol = departure_time
    ? `${formatTime(departure_time)}<br><span style="color:var(--gray-400);">to ${endTimeStr(departure_time, exc.duration_hrs)}</span>`
    : '—';
  const voteIcon = voteType === 'love' ? '❤️' : '🤔';
  const dropBtn = isAdmin && type === 'booked'
    ? `<button class="btn btn-sm btn-danger" style="margin-top:6px;" onclick="event.stopPropagation(); confirmDrop('${code}','${item.date}','${person}')">Drop</button>`
    : '';
  const nudge = !departure_time && type === 'wishlist'
    ? '<div class="wishlist-pick-nudge">📅 Pick a date →</div>'
    : '';
  return `<div class="schedule-entry${type === 'wishlist' ? ' wishlist' : ''}" data-code="${code}"><div class="schedule-item-header" onclick="toggleScheduleItem('${code}')"><div class="schedule-time">${timeCol}</div><div class="schedule-entry-body"><div class="schedule-entry-name">${exc.name}${type === 'wishlist' ? `<span class="wishlist-badge">${voteIcon} Wishlist</span>` : ''}</div><div class="schedule-entry-meta">${exc.price_usd === 0 ? 'Complimentary' : '$' + exc.price_usd} · ${activityBadge(exc.activity_level)}</div>${dropBtn}${nudge}</div><span class="schedule-chevron">${isExpanded ? '▼' : '▶'}</span></div>${isExpanded ? buildScheduleAccordionBody(item) : ''}</div>`;
}

/* ─────────────────────────────────────────────────
   FEES CALCULATION
───────────────────────────────────────────────── */
export function calcPersonFees(person) {
  const bookedCodes = new Set(
    STATE.schedule
      .filter(s => s.personName === person && s.status === 'booked')
      .map(s => s.tourCode)
  );

  const confirmedList = [];
  for (const code of bookedCodes) {
    const exc = findExcursion(code);
    if (!exc || exc.price_usd === 0) continue;
    confirmedList.push({ code, name: exc.name, price: exc.price_usd });
  }

  const potentialList = [];
  for (const [code, byPerson] of Object.entries(STATE.votes)) {
    const vObj = byPerson[person];
    if (!vObj || vObj.vote !== 'love') continue;
    if (bookedCodes.has(code)) continue;
    const exc = findExcursion(code);
    if (!exc || exc.price_usd === 0) continue;
    potentialList.push({ code, name: exc.name, price: exc.price_usd });
  }

  const confirmed = confirmedList.reduce((s, e) => s + e.price, 0);
  const potential = potentialList.reduce((s, e) => s + e.price, 0);
  return { confirmed, potential, confirmedList, potentialList };
}

export function calcFamilyFees() {
  const members = FAMILY.map(person => ({ person, ...calcPersonFees(person) }));
  const totalConfirmed = members.reduce((s, m) => s + m.confirmed, 0);
  const totalPotential = members.reduce((s, m) => s + m.potential, 0);
  return { members, totalConfirmed, totalPotential };
}

export function bookedCountForExcursion(code) {
  const people = new Set(
    STATE.schedule
      .filter(s => s.tourCode === code && s.status === 'booked')
      .map(s => s.personName)
  );
  return people.size;
}

export function bookedPeopleForPort(portCodes) {
  const people = new Set(
    STATE.schedule
      .filter(s => portCodes.includes(s.tourCode) && s.status === 'booked')
      .map(s => s.personName)
  );
  return people.size;
}

export function conflictLevelForExcursion(exc, person) {
  // Check booked conflicts (confirmed)
  for (const off of exc.offerings) {
    const myEntries = getMyScheduleEntries(person, off.date);
    const isBooked = myEntries.some(s => s.tourCode === exc.code && s.status !== 'dropped');
    if (!isBooked) continue;
    for (const other of myEntries) {
      if (other.tourCode === exc.code) continue;
      const otherExc = findExcursion(other.tourCode);
      if (otherExc && overlaps(off.departure_time, exc.duration_hrs, other.departure_time, otherExc.duration_hrs)) {
        return 'confirmed';
      }
    }
  }
  // Check love-vote potential conflicts
  if (voteOf(exc.code, person) === 'love') {
    const myVotedDate = ((STATE.votes[exc.code] || {})[person] || {}).offering_date;
    const offeringsToCheck = myVotedDate
      ? exc.offerings.filter(o => o.date === myVotedDate)
      : exc.offerings;
    for (const off of offeringsToCheck) {
      for (const code2 of Object.keys(STATE.votes)) {
        if (code2 === exc.code) continue;
        if (voteOf(code2, person) !== 'love') continue;
        const exc2 = findExcursion(code2);
        if (!exc2) continue;
        for (const off2 of exc2.offerings) {
          if (off2.date !== off.date) continue;
          if (overlaps(off.departure_time, exc.duration_hrs, off2.departure_time, exc2.duration_hrs)) {
            return 'potential';
          }
        }
      }
    }
  }
  return null;
}
