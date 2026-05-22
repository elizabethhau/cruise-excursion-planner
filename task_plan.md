# Task Plan — Cruise Excursion Planner

## Goal
Build `cruise-planner.html`: a self-contained single HTML file (no build step, no framework) that 7 family members can open on mobile to vote on RSSC shore excursions. Votes persist to Google Sheets. Elizabeth (trip organizer) can lock bookings; others vote and request.

## Decisions Log (from grill-me session)

| Decision | Choice |
|---|---|
| Hosting | GitHub Pages (stable HTTPS, OAuth redirect URI compatible) |
| OAuth flow | Google OAuth Client ID + API Key + Spreadsheet ID; stored in localStorage |
| Activity levels | Infer from PDF text, flag ALL 88 for manual review by user |
| Ages | Everyone 21+ — no age restriction UI needed |
| Hobart excursions | 1 only (HBA-013) |
| Sheets polling | 30s foreground-only; pause on `visibilitychange` |
| Navigation | Bottom tab bar: Vote · Dashboard · Schedule · Settings |
| Non-Elizabeth dashboard | Same view as Elizabeth; Lock controls + tappable badge breakdown + "Ports ready to book" + Requests inbox HIDDEN |
| Voting requirement | At least 1 love/interested per port = "complete" (skip-only doesn't count) |
| Melbourne date nav | Single scrollable card list; dates labeled per offering slot (no sub-tabs) |

## Port / Date Summary (from PDF)

| Port | Date(s) | Excursions | Offerings |
|---|---|---|---|
| Melbourne | 2026-12-31, 2027-01-01 | 11 | 24 |
| Hobart | 2027-01-03 | 1 | 1 |
| Dunedin | 2027-01-07 | 11 | 12 |
| Christchurch | 2027-01-08 | 10 | 11 |
| Picton | 2027-01-09 | 8 | 8 |
| Wellington | 2027-01-10 | 9 | 10 |
| Gisborne | 2027-01-11 | 8 | 10 |
| Rotorua/Tauranga | 2027-01-12 | 16 | 16 |
| Bay of Islands | 2027-01-13 | 14 | 16 |
| **TOTAL** | | **88** | **108** |

## Sheets Schema

- **Votes**: Timestamp | PersonName | TourCode | Vote (`love` | `interested` | `skip`)
- **Schedule**: Timestamp | PersonName | TourCode | Date | DepartureTime | Status (`booked` | `waitlist` | `dropped`)
- **Excursions**: auto-populated from embedded JSON on first run
- **Requests**: Timestamp | RequesterName | TourCode | Date | DepartureTime | Note

## Family Members

Dad, Mom, Elizabeth (admin 👑), Abby, Jonathan, Luke, James

## Phases

> **Implementation note:** Phase 3 skeleton (HTML/CSS) is written first since it's the container for all other phases, even though it's listed as Phase 3.

### Phase 1 — Excursion JSON Data
**Status:** `pending`
Build the complete JSON object for all 88 excursions / 109 offerings.
Fields per excursion: code, name, duration_hrs, price_usd, retail_price_usd, activity_level, meal_included, accessible, go_local, free_shore, description (2-3 sentences), offerings[]
Fields per offering: date (YYYY-MM-DD), departure_time (HH:MM 24h)
Flag: activity_level_needs_review: true on ALL entries.
Output: embedded as `const EXCURSION_DATA = {...}` JS constant in the HTML.

Sub-tasks:
- [x] **1a** — Melbourne (11 exc, 24 offerings) + Hobart (1 exc, 1 offering); open `const EXCURSION_DATA`
- [x] **1b** — Dunedin (11 exc, 12 offerings) + Christchurch (10 exc, 11 offerings) + Picton (8 exc, 8 offerings)
- [x] **1c** — Wellington (9 exc, 11 offerings) + Gisborne (8 exc, 10 offerings)
- [x] **1d** — Rotorua/Tauranga (16 exc, 16 offerings) + Bay of Islands (14 exc, 16 offerings); close const

### Phase 2 — Google Sheets Integration
**Status:** `pending`
- Credential prompt modal on first load (API Key, OAuth Client ID, Spreadsheet ID)
- Store in localStorage
- Sheet auto-init: create Votes / Schedule / Excursions / Requests tabs if missing
- Read functions: getVotes(), getSchedule(), getRequests()
- Write functions: castVote(), bookExcursion(), dropExcursion(), submitRequest()
- 30s polling loop (foreground only, pause on visibilitychange)
- Offline queue: localStorage buffer + "⏳ Pending sync" indicator + auto-retry

Sub-tasks:
- [x] **2a** — Creds modal UI + localStorage read/write for apiKey, clientId, spreadsheetId
- [x] **2b** — GIS OAuth popup (initGIS, getAccessToken); sheetsGet(range) with API key; sheetsAppend(sheet, row) with OAuth
- [x] **2c** — Sheet auto-init (check tabs exist, create if missing with headers)
- [x] **2d** — syncFromSheets(): pull all Votes + Schedule + Requests, merge into STATE
- [x] **2e** — 30s polling loop (startPolling/stopPolling, pause on visibilitychange)
- [x] **2f** — Offline queue: buffer writes to localStorage, processQueue() on reconnect, sync badge
- [x] **2g** — Extract `parseSheetsRows(votesRaw, schedRaw, reqRaw)` from syncFromSheets into core.js; 6 unit tests

### Phase 3 — Core Shell & Flow A (Name Selection)
**Status:** `pending`
- HTML skeleton with bottom tab bar (Vote, Dashboard, Schedule, Settings)
- CSS: mobile-first, CSS variables for color system, no framework
- Color system: gray=incomplete, green=complete, yellow=partial/warn, red=conflict, teal=info/alternative, purple=Elizabeth admin
- Flow A: "Who are you?" screen, 7 name buttons, store in localStorage
- Permission layer: set isElizabeth flag, show/hide admin elements throughout

Sub-tasks:
- [x] **3a** — Create `cruise-planner.html`: DOCTYPE, viewport, Google Fonts, full CSS (variables, reset, layout, tab bar, card, badge, button, modal, utility classes)
- [x] **3b** — HTML body: placeholder screen divs, tab bar markup, modal overlay skeleton
- [x] **3c** — Core JS: FAMILY array, STATE object, toMins/addMins/formatTime/overlaps/fmtPrice helpers, render() router, init()
- [x] **3d** — Flow A: renderNameScreen() — welcome hero + 7 name buttons; saveName() handler

### Phase 4 — Voting View (Flow B)
**Status:** `pending`
- Port tabs (scrollable), each with completion badge (⬜/🟡/✅)
- Excursion cards: name, code, all offerings with date+time+end time, price, activity badge, meal/accessible icons
- Vote buttons: ✅ Love it / 🤔 Maybe / ❌ Skip (min 44px tap targets)
- Live vote counts from Sheets data
- "Also available" teal banner for multi-offering excursions
- Conflict warnings: 🟡 potential (love vote overlaps) / 🔴 confirmed (overlaps booked)

Sub-tasks:
- [x] **4a** — renderVoteTab(): port pill nav (scrollable) with completion badges per person
- [x] **4b** — renderExcursionCard(): name, code, offerings (date+formatted time+end time), fmtPrice, activity/meal/accessible/go_local badges
- [x] **4c** — Vote buttons (min 44px): castLocalVote(), update STATE.votes, queue Sheets write, re-render badges
- [x] **4d** — Live group vote counts on each card (tallied from STATE.votes)
- [x] **4e** — "Also available" teal banner for multi-offering excursions
- [x] **4f** — Conflict warnings on cards: 🟡 potential (love vote on same day) / 🔴 confirmed (overlaps booked)
- [x] **4g** — Extract `renderOfferingOptions(exc, selectedDate, selectedTime)` from card renderer into core.js; 4 unit tests

### Phase 5 — Group Dashboard (Flow C)
**Status:** `pending`
- Per-port vote badges with completion tracking (at least 1 love/interested = complete)
- Excursions ranked by score (love=2, maybe=1)
- Avatar row showing who loves/maybe/skipped each excursion
- Offerings with full/group-splits indicator + conflict flags
- Elizabeth-only: tappable badge breakdown popup + "Send reminder" clipboard copy
- Elizabeth-only: global progress bar (X of 63)
- Elizabeth-only: "Ports ready to book" section + "Review & Lock" buttons
- Elizabeth-only: Booking requests inbox
- Elizabeth-only: "Lock it in" with offering selector + member checkboxes + conflict pre-check
- Non-Elizabeth: same view minus all Elizabeth-only elements; "Request booking" button instead

Sub-tasks:
- [x] **5a** — renderDashTab(): per-port accordion sections with completion summary
- [x] **5b** — Per-port ranked excursion list (score = love×2 + maybe×1), avatar row (initials, colored by vote)
- [x] **5c** — Elizabeth-only: global progress bar + "Ports ready to book" section + "Send reminder" clipboard
- [x] **5d** — Elizabeth-only: "Lock it in" modal (offering selector + family member checkboxes + conflict pre-check + submit)
- [x] **5e** — Elizabeth-only: Booking requests inbox (from STATE.requests)
- [x] **5f** — Non-Elizabeth: "Request booking" button → submitRequest() flow

### Phase 6 — Personal Schedule (Flow D)
**Status:** `pending`
- Chronological itinerary grouped by date
- Date section headers: "Melbourne — Wednesday, December 31"
- Booked excursion entries: name, time range, price, activity badge
- Free time gaps between excursions
- Conflict banner: ⚠️ red if any overlap detected
- Resolve conflict flow: side-by-side, options (a) drop, (b) switch offering [teal banner], (c) contact Elizabeth [clipboard]
- Export: plain-text schedule + copy-to-clipboard

Sub-tasks:
- [x] **6a** — renderScheduleTab(): group STATE.schedule entries by date, chronological order, date section headers
- [x] **6b** — renderScheduleDay(): booked entry cards (name, time range, price, badge) + free-time gap labels
- [x] **6c** — Conflict detection banner (red) when overlapping entries on same day
- [ ] **6d** — Conflict resolve modal: side-by-side cards, (a) drop, (b) switch offering teal banner, (c) contact Elizabeth clipboard *(drop only implemented; full resolve modal deferred to ST-13)*
- [x] **6e** — Export: build plain-text itinerary string, copy-to-clipboard button

### Phase 7 — Settings (Flow E)
**Status:** `pending`
- Change name (clears localStorage name)
- Re-enter Google credentials
- Reset my votes (delete from Sheets)
- Toggle: Show accessible tours only
- Toggle: Hide excursions over $X

Sub-tasks:
- [x] **7a** — renderSettingsTab(): change name button (clears cp_user, re-shows name screen)
- [x] **7b** — Re-enter credentials button (re-shows creds modal)
- [x] **7c** — Reset my votes: clear from STATE locally (Sheets rows remain; append-only model)
- [x] **7d** — Accessible-only toggle + max-price filter (persist to localStorage, re-render vote tab)

### Phase 8 — Conflict Engine & Offline Queue
**Status:** `pending`
- Conflict detection: for same person + same date, check departure_time + duration_hrs overlaps
- Apply at: Flow B card render, Flow C Lock pre-check, Flow D schedule render, after every sync
- Offline queue: localStorage array of pending actions; retry on reconnect; "⏳ Pending sync" badge

Sub-tasks:
- [x] **8a** — getConflictsForPerson(person, date): returns array of overlapping {a, b} schedule entry pairs; 6 unit tests
- [x] **8b** — Wire conflict detection into vote card render (Phase 4f) and schedule render (Phase 6c)
- [x] **8c** — Wire conflict pre-check into Lock modal (Phase 5d): block submit if conflicts found
- [x] **8d** — processQueue(): replay pending offline actions; show "⏳ Pending sync" badge in header when queue non-empty
- [x] **8e** — conflictLevelForExcursion(exc, person): returns 'confirmed' | 'potential' | null; 5 unit tests

### Phase 9 — Polish & Deliverables
**Status:** `pending`
- Console.log full JSON on load (for verification)
- CLAUDE.md for the repo
- Deliverable docs: Google Sheets setup steps, port-by-port summary, ambiguity log, known limitations

Sub-tasks:
- [x] **9a** — console.log EXCURSION_DATA on load; verify port/excursion/offering counts (88 exc / 109 offerings confirmed)
- [x] **9b** — Write CLAUDE.md for the repo
- [ ] **9c** — Write Google Sheets setup instructions (separate doc or in-app help modal)

### Phase 10 — Offering Selection During Voting
**Status:** `complete`

Users must pick a specific offering (date + time) when voting love/maybe on multi-offering excursions. The preference is stored alongside the vote (informational) and surfaces in the Lock Modal so Elizabeth can book the correct offering per person.

**Decisions (from grill-me session):**
- Votes sheet gets 2 new columns: `OfferingDate`, `OfferingTime`
- Selector only shown on multi-offering excursions; single-offering auto-selects silently
- Love/maybe blocked until an offering is selected; skip has no selector
- Offering persists across vote-sentiment changes (love→maybe); always editable inline
- Vote summary on card shows love/maybe counts split by offering (e.g. "❤️ Dec 31 × 2, Jan 1 × 1")
- Lock Modal shows each person's preferred offering next to their name
- Existing love/maybe votes with no offering get a subtle "pick a date ↑" nudge on the card

Sub-tasks:
- [x] **10a** — Schema + sync: add `OfferingDate`, `OfferingTime` to Votes sheet header; update `syncFromSheets` to read them into `STATE.votes[code][person]` as `{vote, offering_date, offering_time}`
- [x] **10b** — STATE.votes structure: migrate all reads of `STATE.votes[code][person]` (currently a bare string) to the new object shape `{vote, offering_date, offering_time}`; added `voteOf(code, person)` helper
- [x] **10c** — Vote card UI: inline radio buttons for multi-offering excursions; required before love/maybe is accepted; skip shows nothing; single-offering silent
- [x] **10d** — `castVote`: include `offering_date` + `offering_time` in the row appended to Sheets
- [x] **10e** — Nudge: detect love/maybe in `STATE.votes` with no `offering_date`; render "👆 Pick a date/time above" indicator
- [x] **10f** — Vote split summary: per-offering breakdown on multi-offering excursion cards (e.g. "❤️ Dec 31 8:00 AM ×2")
- [x] **10g** — Lock Modal: show `"→ Dec 31 · 8:00 AM"` (or "no pref") next to each person's name in the people-selection list

### Phase 11 — Undo Vote (Persist to Sheets)
**Status:** `complete`

Toggle-to-undo logic already existed in `handleVote` (line 2388) but only cleared local STATE — never wrote to Sheets. After sync, the vote returned.

**Decisions (from grill-me session):**
- Sentinel value: `''` (empty string) — `voteOf()` already returns `null` for `'' || null`, so no downstream rendering changes needed
- Sheets load loop overwrites by row order (newest wins), so a later `''` row correctly cancels an earlier `'love'` row
- Toast: `showToast('Vote removed')` for feedback
- Scope: voting view only

Sub-tasks:
- [x] **11a** — `handleVote` undo branch: add `await castVote(code, '', null, null)` + `showToast('Vote removed')`

### Phase 12 — Activity Levels + Descriptions from Excel
**Status:** `complete`

Decisions (from grill-me session 2026-05-20):
- Activity level mapping: Moderate→moderate, Light→light, Strenuous→strenuous, Seated Tour→light
- Description: replace existing field with FULL Excel description (narrative + bullets + disclaimer)
- WLG-006 (only entry without bullets): use Excel narrative paragraph
- WLG-009 and BAY-011 have double-quotes in descriptions — must escape as `\"`
- Newlines in descriptions: stored as `\n` escape sequences in JS string; render with `white-space: pre-wrap` on `.exc-desc`
- `_review_activity: true` flag: removed from all 88 entries after update

Sub-tasks:
- [x] **12a** — Write update script: reads Excel → builds {code: activity_level, description} dict
- [x] **12b** — Process data.js line by line: update activity_level, remove _review_activity, replace description
- [x] **12c** — Add `white-space: pre-wrap` to `.exc-desc` in styles.css
- [x] **12d** — Verify: node tests.js passes; grep confirms 0 `_review_activity` remaining; count 88 descriptions updated

### Phase 13 — Port Nav Scroll Preservation
**Status:** `complete`

Clicking a port pill beyond the first four causes the nav row to jump back to the start. Root cause: `renderVoteTab()` calls `el.innerHTML = ''` which destroys `#port-nav` and recreates it fresh (scrollLeft = 0). Fix: save the existing nav reference before wipe, re-use it (updating pill classes in-place) on subsequent renders.

**Decisions (from grill-me session 2026-05-21):**
- Option C: skip nav re-render entirely — preserve the existing `#port-nav` DOM element reference across `renderVoteTab()` calls. Scroll position preserved as a natural consequence of element identity.
- Add jsdom (dev dependency) + write tests that verify `#port-nav` element identity is preserved and active pill class is updated correctly.

Sub-tasks:
- [x] **13a** — Add jsdom dev dependency (package.json + npm install)
- [x] **13b** — Write RED jsdom tests: nav element identity preserved + active pill updates
- [x] **13c** — Fix `renderVoteTab` to re-use existing nav; expose `renderVoteTab` via window for testing
- [ ] **13d** — Confirm GREEN; browser smoke test

## Errors Encountered
| Error | Attempt | Resolution |
|---|---|---|
| — | — | — |
