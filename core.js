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
    for (const off of exc.offerings) {
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
