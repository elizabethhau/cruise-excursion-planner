# Progress Log — Cruise Excursion Planner

## Session 1 — 2026-05-17

### Completed
- [x] Installed poppler, extracted PDF text (2928 lines)
- [x] Read full PDF, catalogued all 88 excursions / 109 offerings across 9 ports
- [x] Grill-me session: resolved 10 key design decisions (see task_plan.md Decisions Log)
- [x] Created task_plan.md, findings.md, progress.md

### Decisions Made This Session
- GitHub Pages for hosting (OAuth redirect URI compatible)
- 30s foreground polling
- Bottom tab bar navigation (4 tabs)
- Non-Elizabeth dashboard: same view, Lock + inbox + tappable badges hidden
- Voting completion: ≥1 love/interested per port (not all excursions)
- Melbourne: single scroll list, no date sub-tabs in voting view

### Next Up
- Phase 1: Build excursion JSON (88 excursions, 109 offerings)
- Read frontend-design skill before writing any HTML/CSS

### Known Issues / Blockers
- None yet

## Session 2 — 2026-05-17

### Completed
- [x] Added sub-task breakdown to task_plan.md (nested within phases)
- [x] Created `cruise-planner.html` — full skeleton + CSS (ST-01 / 3a+3b)
- [x] Embedded all 88 excursions / 109 offerings as EXCURSION_DATA (Phase 1: 1a–1d)
- [x] Core JS: STATE, helpers, router, init() (Phase 3: 3c)
- [x] Flow A: name selection screen with welcome hero + 7 name buttons (Phase 3: 3d)
- [x] Google Sheets API: creds modal, GIS OAuth, sheetsGet/sheetsAppend, syncFromSheets, 30s polling, offline queue (Phase 2)
- [x] Flow B: voting view — port pills, excursion cards, vote buttons, conflict warnings, vote counts (Phase 4)
- [x] Conflict engine: overlaps(), getConflictsForPerson(), conflictLevelForExcursion() (Phase 8)
- [x] Flow C: group dashboard — ranked excursions, avatar chips, Elizabeth admin panel, Lock modal with conflict pre-check, Requests inbox, Request booking flow (Phase 5)
- [x] Flow D: personal schedule — grouped by date, free-time gaps, conflict banners, drop button (Elizabeth), export to clipboard (Phase 6)
- [x] Flow E: settings — change name, re-enter creds, accessible-only toggle, max-price filter, reset votes (Phase 7)
- [x] CLAUDE.md written (Phase 9)

### Known Gaps / Deferred
- Phase 6d (conflict resolve modal with switch-offering flow) not yet built — only "Drop" is wired
- Phase 9c (Google Sheets setup instructions doc) pending

### Verified
- HTML file: 2808 lines
- EXCURSION_DATA: 9 ports, 88 excursions, 109 offerings (confirmed by grep count — later corrected to 108, see Session 5)
- console.log fires on load with counts

## Session 3 — 2026-05-20

### Completed
- [x] Restructured single HTML file into multi-file ES module architecture (cruise-planner.html, styles.css, data.js, state.js, core.js, app.js)
- [x] Added Node.js localStorage/sessionStorage guards in state.js for test compatibility
- [x] Set up `node tests.js` test runner (no install needed)
- [x] TDD: `summarizeVotes(votesByPerson, offerings)` — 7 tests, all passing
- [x] Wired `summarizeVotes` into app.js, replacing 3 scattered vote-counting sites

### Pending
- [x] Write tests for conflict engine (`getConflictsForPerson`, `conflictLevelForExcursion`)
- [x] Extract + test sync pipeline: extracted `parseSheetsRows` into core.js; wired into app.js `syncFromSheets`
- [x] Extract + test offering selector rendering: extracted `renderOfferingOptions` into core.js; wired into app.js card renderer

## Session 4 — 2026-05-20

### Completed
- [x] Phase 12: Updated all 88 excursion activity levels from Excel (Moderate→moderate, Light→light, Strenuous→strenuous, Seated Tour→light)
- [x] Replaced all 88 descriptions with full Excel descriptions (narrative + bullets + disclaimer)
- [x] Removed `_review_activity: true` flag from all 88 entries
- [x] Added `white-space: pre-wrap` to `.exc-desc` so bullet points render on separate lines
- [x] Fixed re.sub `\n`-in-replacement bug (used direct line construction instead)
- [x] WLG-009 and BAY-011 double-quotes properly escaped as `\"`

### Verification
- `node tests.js`: 7/7 passed
- `_review_activity` remaining: 0
- Description lines: 88 (all single-line, no unterminated strings)
- Activity level counts: light=18, moderate=56, strenuous=14 (total 88)

## Session 5 — 2026-05-20

### Completed
- [x] Verified all offerings against Excel — PDF is source of truth; Excel sign-up sheet omits some time slots (CHC-007 13:30, WLG-010 08:30, BAY-003 09:45 confirmed correct per PDF)
- [x] TDD: `getConflictsForPerson` — 6 tests (empty, single, non-overlapping, overlapping, dropped excluded, different person excluded)
- [x] TDD: `conflictLevelForExcursion` — 5 tests (null base, booked alone, confirmed overlap, potential love votes, no same-day overlap)
- [x] Extracted `parseSheetsRows(votesRaw, schedRaw, reqRaw)` from `syncFromSheets` into core.js — 6 tests (null inputs, vote shape, empty string→null, empty code skipped, schedule shape, requests shape)
- [x] Extracted `renderOfferingOptions(exc, selectedDate, selectedTime)` from card renderer into core.js — 4 tests (single offering, multi radio count, checked selection, no selection)
- [x] Wired both new functions into app.js, replacing the original inline logic

### Verification
- `node tests.js`: 28/28 passed

## Test Results
| Phase | Test | Result |
|---|---|---|
| Data | grep count of excursions (88) | ✅ Pass |
| Data | grep count of offerings (108, PDF is source of truth) | ✅ Pass |
| Data | File opens in browser | ✅ Pass |
| core.js | summarizeVotes — 7 behaviors | ✅ Pass |
| core.js | getConflictsForPerson — 6 behaviors | ✅ Pass |
| core.js | conflictLevelForExcursion — 5 behaviors | ✅ Pass |
| core.js | parseSheetsRows — 6 behaviors | ✅ Pass |
| core.js | renderOfferingOptions — 4 behaviors | ✅ Pass |
