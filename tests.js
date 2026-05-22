import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import { summarizeVotes, getConflictsForPerson, conflictLevelForExcursion, findExcursion, parseSheetsRows, renderOfferingOptions } from './core.js';
import { STATE } from './state.js';

function resetState() {
  STATE.schedule = [];
  STATE.votes = {};
}

let passed = 0, failed = 0;

function it(desc, fn) {
  try {
    fn();
    console.log(`  ✓ ${desc}`);
    passed++;
  } catch (e) {
    console.error(`  ✗ ${desc}`);
    console.error(`    ${e.message}`);
    failed++;
  }
}

const ONE = [{ date: '2026-12-31', departure_time: '09:00' }];
const TWO = [
  { date: '2026-12-31', departure_time: '09:00' },
  { date: '2027-01-01', departure_time: '10:00' },
];

/* ─────────────────────────────────────────────────
   summarizeVotes
───────────────────────────────────────────────── */
console.log('\nsummarizeVotes');

it('empty votes → score 0, all counts 0', () => {
  const r = summarizeVotes({}, ONE);
  assert.equal(r.score, 0);
  assert.equal(r.loveCount, 0);
  assert.equal(r.intCount, 0);
  assert.equal(r.skipCount, 0);
});

it('all love votes → score = 2×n, loveCount = n', () => {
  const votes = {
    Elizabeth: { vote: 'love', offering_date: '2026-12-31', offering_time: '09:00' },
    Dad:       { vote: 'love', offering_date: '2026-12-31', offering_time: '09:00' },
  };
  const r = summarizeVotes(votes, ONE);
  assert.equal(r.loveCount, 2);
  assert.equal(r.score, 4);
});

it('mix of love/interested/skip → correct score and all counts', () => {
  const votes = {
    Elizabeth: { vote: 'love',       offering_date: '2026-12-31', offering_time: '09:00' },
    Dad:       { vote: 'interested', offering_date: '2026-12-31', offering_time: '09:00' },
    Mom:       { vote: 'skip',       offering_date: null,          offering_time: null },
  };
  const r = summarizeVotes(votes, ONE);
  assert.equal(r.loveCount, 1);
  assert.equal(r.intCount, 1);
  assert.equal(r.skipCount, 1);
  assert.equal(r.score, 3); // 2 + 1
});

it('null/missing vote entries are ignored', () => {
  const votes = {
    Elizabeth: null,
    Dad:       { vote: null, offering_date: null, offering_time: null },
    Mom:       { vote: 'love', offering_date: '2026-12-31', offering_time: '09:00' },
  };
  const r = summarizeVotes(votes, ONE);
  assert.equal(r.loveCount, 1);
  assert.equal(r.score, 2);
});

it('multi-offering: votes grouped into perOffering by date|time key', () => {
  const votes = {
    Elizabeth: { vote: 'love', offering_date: '2026-12-31', offering_time: '09:00' },
    Dad:       { vote: 'love', offering_date: '2027-01-01', offering_time: '10:00' },
    Mom:       { vote: 'interested', offering_date: '2026-12-31', offering_time: '09:00' },
  };
  const r = summarizeVotes(votes, TWO);
  assert.equal(r.perOffering['2026-12-31|09:00'].loveCount, 1);
  assert.equal(r.perOffering['2026-12-31|09:00'].intCount, 1);
  assert.equal(r.perOffering['2027-01-01|10:00'].loveCount, 1);
});

it('multi-offering: vote without offering_date sets hasUnspecified', () => {
  const votes = {
    Elizabeth: { vote: 'love', offering_date: null, offering_time: null },
  };
  const r = summarizeVotes(votes, TWO);
  assert.equal(r.hasUnspecified, true);
  assert.equal(r.loveCount, 1);   // still counted in totals
  assert.deepEqual(r.perOffering, {}); // but not in any offering bucket
});

it('single offering: all votes with matching date count in perOffering', () => {
  const votes = {
    Elizabeth: { vote: 'love',       offering_date: '2026-12-31', offering_time: '09:00' },
    Dad:       { vote: 'interested', offering_date: '2026-12-31', offering_time: '09:00' },
  };
  const r = summarizeVotes(votes, ONE);
  assert.equal(r.perOffering['2026-12-31|09:00'].loveCount, 1);
  assert.equal(r.perOffering['2026-12-31|09:00'].intCount, 1);
  assert.equal(r.score, 3);
});

/* ─────────────────────────────────────────────────
   getConflictsForPerson
   Real codes used:
     MEB-006  dep 09:00  dur 4.0h  → ends 13:00  (2026-12-31)
     MEB-019  dep 10:00  dur 6.75h → ends 16:45  (2026-12-31)  [overlaps MEB-006]
     HBA-013  dep 10:00  dur 3.0h               (2027-01-03 only)
───────────────────────────────────────────────── */
console.log('\ngetConflictsForPerson');

it('empty schedule → no conflicts', () => {
  resetState();
  assert.deepEqual(getConflictsForPerson('Elizabeth', '2026-12-31'), []);
});

it('single entry → no conflict partner → no conflicts', () => {
  resetState();
  STATE.schedule = [
    { personName: 'Elizabeth', tourCode: 'MEB-006', date: '2026-12-31', departure_time: '09:00', status: 'booked' },
  ];
  assert.equal(getConflictsForPerson('Elizabeth', '2026-12-31').length, 0);
});

it('two non-overlapping entries → no conflicts', () => {
  resetState();
  // MEB-006 08:00 → ends 12:00; HBA-013 13:00 → ends 16:00 — bS(780) < aE(720) false
  STATE.schedule = [
    { personName: 'Elizabeth', tourCode: 'MEB-006', date: '2026-12-31', departure_time: '08:00', status: 'booked' },
    { personName: 'Elizabeth', tourCode: 'HBA-013', date: '2026-12-31', departure_time: '13:00', status: 'booked' },
  ];
  assert.equal(getConflictsForPerson('Elizabeth', '2026-12-31').length, 0);
});

it('two overlapping entries → one conflict pair with correct codes', () => {
  resetState();
  // MEB-006 09:00-13:00; MEB-019 10:00-16:45 → overlap
  STATE.schedule = [
    { personName: 'Elizabeth', tourCode: 'MEB-006', date: '2026-12-31', departure_time: '09:00', status: 'booked' },
    { personName: 'Elizabeth', tourCode: 'MEB-019', date: '2026-12-31', departure_time: '10:00', status: 'booked' },
  ];
  const conflicts = getConflictsForPerson('Elizabeth', '2026-12-31');
  assert.equal(conflicts.length, 1);
  const codes = [conflicts[0].a.tourCode, conflicts[0].b.tourCode].sort();
  assert.deepEqual(codes, ['MEB-006', 'MEB-019']);
});

it('dropped entries are excluded from conflict check', () => {
  resetState();
  STATE.schedule = [
    { personName: 'Elizabeth', tourCode: 'MEB-006', date: '2026-12-31', departure_time: '09:00', status: 'dropped' },
    { personName: 'Elizabeth', tourCode: 'MEB-019', date: '2026-12-31', departure_time: '10:00', status: 'booked' },
  ];
  assert.equal(getConflictsForPerson('Elizabeth', '2026-12-31').length, 0);
});

it("another person's overlapping entries are not included", () => {
  resetState();
  STATE.schedule = [
    { personName: 'Elizabeth', tourCode: 'MEB-006', date: '2026-12-31', departure_time: '09:00', status: 'booked' },
    { personName: 'Dad',       tourCode: 'MEB-019', date: '2026-12-31', departure_time: '10:00', status: 'booked' },
  ];
  assert.equal(getConflictsForPerson('Elizabeth', '2026-12-31').length, 0);
});

/* ─────────────────────────────────────────────────
   conflictLevelForExcursion
───────────────────────────────────────────────── */
console.log('\nconflictLevelForExcursion');

it('no bookings, no love votes → null', () => {
  resetState();
  assert.equal(conflictLevelForExcursion(findExcursion('MEB-006'), 'Elizabeth'), null);
});

it('booked alone with no other bookings on the day → null', () => {
  resetState();
  STATE.schedule = [
    { personName: 'Elizabeth', tourCode: 'MEB-006', date: '2026-12-31', departure_time: '09:00', status: 'booked' },
  ];
  assert.equal(conflictLevelForExcursion(findExcursion('MEB-006'), 'Elizabeth'), null);
});

it('booked + another overlapping booking on same day → confirmed', () => {
  resetState();
  // MEB-006 off dep 09:00 dur 4h → ends 13:00; MEB-019 schedule dep 10:00 dur 6.75h → overlaps
  STATE.schedule = [
    { personName: 'Elizabeth', tourCode: 'MEB-006', date: '2026-12-31', departure_time: '09:00', status: 'booked' },
    { personName: 'Elizabeth', tourCode: 'MEB-019', date: '2026-12-31', departure_time: '10:00', status: 'booked' },
  ];
  assert.equal(conflictLevelForExcursion(findExcursion('MEB-006'), 'Elizabeth'), 'confirmed');
});

it('love vote on two same-day overlapping excursions → potential', () => {
  resetState();
  // MEB-006 off dep 09:00 dur 4h; MEB-019 off dep 10:00 dur 6.75h — both 2026-12-31 → overlap
  STATE.votes['MEB-006'] = { Elizabeth: { vote: 'love', offering_date: '2026-12-31', offering_time: '09:00' } };
  STATE.votes['MEB-019'] = { Elizabeth: { vote: 'love', offering_date: '2026-12-31', offering_time: '10:00' } };
  assert.equal(conflictLevelForExcursion(findExcursion('MEB-006'), 'Elizabeth'), 'potential');
});

it('love vote with no overlapping same-day love votes → null', () => {
  resetState();
  // HBA-013 only has an offering on 2027-01-03 — different date from MEB-006 (2026-12-31) → no overlap
  STATE.votes['MEB-006'] = { Elizabeth: { vote: 'love', offering_date: '2026-12-31', offering_time: '09:00' } };
  STATE.votes['HBA-013'] = { Elizabeth: { vote: 'love', offering_date: '2027-01-03', offering_time: '10:00' } };
  assert.equal(conflictLevelForExcursion(findExcursion('MEB-006'), 'Elizabeth'), null);
});

it('love vote with specific offering chosen: only that date checked for potential conflicts', () => {
  resetState();
  // Person chose MEB-006 Jan 1; MEB-019 only runs Dec 31 → no overlap on Jan 1 → null
  // Without the fix this returns 'potential' because it checks all MEB-006 offerings including Dec 31
  STATE.votes['MEB-006'] = { Elizabeth: { vote: 'love', offering_date: '2027-01-01', offering_time: '09:00' } };
  STATE.votes['MEB-019'] = { Elizabeth: { vote: 'love', offering_date: '2026-12-31', offering_time: '10:00' } };
  assert.equal(conflictLevelForExcursion(findExcursion('MEB-006'), 'Elizabeth'), null);
});

/* ─────────────────────────────────────────────────
   parseSheetsRows
───────────────────────────────────────────────── */
console.log('\nparseSheetsRows');

it('all null inputs → empty votes/schedule/requests', () => {
  const r = parseSheetsRows(null, null, null);
  assert.deepEqual(r.votes, {});
  assert.deepEqual(r.schedule, []);
  assert.deepEqual(r.requests, []);
});

it('votes rows → STATE.votes shape; latest row for same person+code wins', () => {
  const rows = [
    ['ts1', 'Elizabeth', 'MEB-006', 'love',      '2026-12-31', '09:00'],
    ['ts2', 'Elizabeth', 'MEB-006', 'interested', '2026-12-31', '09:00'], // overwrites
  ];
  const r = parseSheetsRows(rows, null, null);
  assert.equal(r.votes['MEB-006']['Elizabeth'].vote, 'interested');
});

it('votes rows → offering_date/time stored; empty string → null', () => {
  const rows = [
    ['ts1', 'Dad', 'MEB-001', 'love', '', ''],
  ];
  const r = parseSheetsRows(rows, null, null);
  assert.equal(r.votes['MEB-001']['Dad'].offering_date, null);
  assert.equal(r.votes['MEB-001']['Dad'].offering_time, null);
});

it('votes rows with empty code are skipped', () => {
  const rows = [
    ['ts1', 'Elizabeth', '', 'love', '', ''],
    ['ts2', 'Dad', 'MEB-006', 'love', '2026-12-31', '09:00'],
  ];
  const r = parseSheetsRows(rows, null, null);
  assert.equal(Object.keys(r.votes).length, 1);
});

it('schedule rows → array of correctly-shaped objects', () => {
  const rows = [
    ['ts1', 'Elizabeth', 'MEB-006', '2026-12-31', '09:00', 'booked'],
  ];
  const r = parseSheetsRows(null, rows, null);
  assert.equal(r.schedule.length, 1);
  assert.deepEqual(r.schedule[0], {
    personName: 'Elizabeth', tourCode: 'MEB-006',
    date: '2026-12-31', departure_time: '09:00', status: 'booked',
  });
});

it('schedule: later row for same (person, tourCode, date) overwrites earlier', () => {
  const rows = [
    ['ts1', 'Elizabeth', 'MEB-006', '2026-12-31', '09:00', 'booked'],
    ['ts2', 'Elizabeth', 'MEB-006', '2026-12-31', '09:00', 'dropped'],
  ];
  const r = parseSheetsRows(null, rows, null);
  assert.equal(r.schedule.length, 1);
  assert.equal(r.schedule[0].status, 'dropped');
});

it('requests rows → array with requesterName and timestamp', () => {
  const rows = [
    ['ts1', 'Dad', 'MEB-001', '2026-12-31', '08:30', 'Please book 2 spots'],
  ];
  const r = parseSheetsRows(null, null, rows);
  assert.equal(r.requests.length, 1);
  assert.equal(r.requests[0].requesterName, 'Dad');
  assert.equal(r.requests[0].note, 'Please book 2 spots');
  assert.equal(r.requests[0].timestamp, 'ts1');
});

/* ─────────────────────────────────────────────────
   renderOfferingOptions
───────────────────────────────────────────────── */
console.log('\nrenderOfferingOptions');

it('single-offering excursion → no radio buttons, shows date/time range', () => {
  const exc = findExcursion('HBA-013'); // one offering: 2027-01-03 10:00, 3h
  const html = renderOfferingOptions(exc, null, null);
  assert.ok(!html.includes('<input type="radio"'), 'should not have radio inputs');
  assert.ok(html.includes('Jan 3'), 'should show formatted date');
  assert.ok(html.includes('10:00 AM'), 'should show start time');
  assert.ok(html.includes('1:00 PM'), 'should show end time');
});

it('multi-offering excursion → radio inputs with correct name', () => {
  const exc = findExcursion('MEB-006'); // 3 offerings
  const html = renderOfferingOptions(exc, null, null);
  assert.ok(html.includes('name="offering-MEB-006"'), 'radio name should include code');
  assert.equal((html.match(/<input type="radio"/g) || []).length, 3, 'one radio per offering');
});

it('multi-offering with matching selection → that radio is checked', () => {
  const exc = findExcursion('MEB-006'); // has 2027-01-01 09:00
  const html = renderOfferingOptions(exc, '2027-01-01', '09:00');
  // Only one radio should be checked
  assert.equal((html.match(/checked/g) || []).length, 1);
  // The checked radio should be the one for 2027-01-01 09:00 (index 1)
  assert.ok(html.includes('value="1" checked'));
});

it('multi-offering with no selection → no radio checked', () => {
  const exc = findExcursion('MEB-006');
  const html = renderOfferingOptions(exc, null, null);
  assert.ok(!html.includes('checked'), 'no radio should be checked');
});

/* ─────────────────────────────────────────────────
   DOM: port nav scroll preservation (jsdom)
───────────────────────────────────────────────── */
console.log('\nDOM: port nav scroll preservation');

{
  const html = readFileSync(new URL('./cruise-planner.html', import.meta.url), 'utf8');
  const dom = new JSDOM(html, { url: 'http://localhost' });
  const { window: w } = dom;

  global.window        = w;
  global.document      = w.document;
  global.localStorage  = w.localStorage;
  global.sessionStorage = w.sessionStorage;
  global.navigator     = w.navigator;
  global.fetch         = async () => ({ ok: false });

  await import('./app.js');

  it('#port-nav element identity preserved across renderVoteTab calls', () => {
    STATE.portIndex = 0;
    w.renderVoteTab();
    const nav1 = w.document.getElementById('port-nav');
    assert.ok(nav1, 'nav exists after first render');

    STATE.portIndex = 5;
    w.renderVoteTab();
    const nav2 = w.document.getElementById('port-nav');
    assert.strictEqual(nav1, nav2, '#port-nav must be the same DOM node after re-render');
  });

  it('active pill class updates to reflect new portIndex', () => {
    STATE.portIndex = 0;
    w.renderVoteTab();
    STATE.portIndex = 3;
    w.renderVoteTab();
    const nav = w.document.getElementById('port-nav');
    const pills = nav.querySelectorAll('.port-pill');
    assert.ok(pills[3].classList.contains('active'), 'pill 3 should be active');
    assert.ok(!pills[0].classList.contains('active'), 'pill 0 should not be active');
  });
}

/* ─────────────────────────────────────────────────
   RESULTS
───────────────────────────────────────────────── */
console.log(`\n${passed} passed, ${failed} failed\n`);
if (failed > 0) process.exit(1);
