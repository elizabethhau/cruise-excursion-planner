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
- EXCURSION_DATA: 9 ports, 88 excursions, 109 offerings (confirmed by grep count)
- console.log fires on load with counts

## Session 3 — 2026-05-20

### Completed
- [x] Restructured single HTML file into multi-file ES module architecture (cruise-planner.html, styles.css, data.js, state.js, core.js, app.js)
- [x] Added Node.js localStorage/sessionStorage guards in state.js for test compatibility
- [x] Set up `node tests.js` test runner (no install needed)
- [x] TDD: `summarizeVotes(votesByPerson, offerings)` — 7 tests, all passing
- [x] Wired `summarizeVotes` into app.js, replacing 3 scattered vote-counting sites

### Pending
- [ ] Write tests for conflict engine (`getConflictsForPerson`, `conflictLevelForExcursion`)
- [ ] Extract + test sync pipeline: `fetchSheetsData`, `parseSheetsData`, `applySyncResult` (currently one monolithic block in app.js)
- [ ] Extract + test offering selector rendering: `renderOfferingOptions` (currently inline in the card renderer)

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

## Test Results
| Phase | Test | Result |
|---|---|---|
| Data | grep count of excursions (88) | ✅ Pass |
| Data | grep count of offerings (109) | ✅ Pass |
| Data | File opens in browser | ✅ Pass |
| core.js | summarizeVotes — 7 behaviors | ✅ Pass |
