import assert from 'node:assert/strict';
import { summarizeVotes } from './core.js';

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
   RESULTS
───────────────────────────────────────────────── */
console.log(`\n${passed} passed, ${failed} failed\n`);
if (failed > 0) process.exit(1);
