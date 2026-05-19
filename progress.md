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

## Test Results
| Phase | Test | Result |
|---|---|---|
| Data | grep count of excursions (88) | ✅ Pass |
| Data | grep count of offerings (109) | ✅ Pass |
| Data | File opens in browser | ✅ Pass |
