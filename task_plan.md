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
| Schedule tab filter | Toggle "All \| Confirmed only" — affects view and export |
| Schedule wishlist placement | No offering_date → place under port's first offering date with "📅 Pick a date" nudge |
| Schedule click-through | Tap wish-list card → jump to Vote tab, scroll to `#exc-{code}` |
| Fees tab scope | Booked (confirmed) + love-not-booked (potential) as separate subtotals; $0 excluded |
| Fees tab price field | price_usd only |
| Fees tab nav | 5th tab for all users: Vote · Dashboard · Schedule · Fees · Settings |
| Fees tab family view | Per-person accordion + expandable excursion list + grand total; toggle available to all (not Elizabeth-only) |

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

### Phase 14 — Token Auto-Refresh
**Status:** `in_progress`

Keep token in sessionStorage (55-min TTL) but add a proactive refresh timer so sessions never silently expire mid-use without a popup.

**Decisions (from grill-me session 2026-05-25):**
- Token stays in sessionStorage (not localStorage)
- Proactive timer fires 5 min before expiry (at 50 min); if < 5 min left on startup, refresh immediately
- Module-level `let _refreshTimer = null` (not in STATE)
- `initGISClient` callback: skip `initSheets()` on refresh — pass `isRefresh` flag or split callbacks
- `refreshToken()`: creates a one-off GIS client (no `initSheets`); on success → update `STATE.accessToken` + sessionStorage + schedule next refresh; on failure → clear `STATE.accessToken` + toast "Session expired — tap to re-authorize"
- `scheduleTokenRefresh(exp)`: reads `exp`, schedules `_refreshTimer` at `exp - 5 min`; < 5 min → immediate
- At startup: read `exp` from sessionStorage and call `scheduleTokenRefresh(exp)` if token was restored
- On silent refresh failure: clear token, toast, let `requireAuth()` handle next re-auth normally
- Call `ensureGIS()` from inside the refresh timer callback (lazy — GIS may not be loaded if session was restored from cache)

Sub-tasks:
- [ ] **14a** — Write RED tests: `scheduleTokenRefresh` fires at correct time, `refreshToken` updates token + sessionStorage, failure path clears token
- [ ] **14b** — Implement `scheduleTokenRefresh(exp)` and `refreshToken()` in app.js; guard `initSheets()` call
- [ ] **14c** — Wire startup: call `scheduleTokenRefresh` when token is restored from sessionStorage on load
- [ ] **14d** — Confirm GREEN; manual smoke test in browser

### Phase 15 — Schedule Tab Wishlist Expansion
**Status:** `pending`

Show love/interested excursions inline with booked ones so users can spot duplicate activity types across the trip at a glance.

**Decisions (from grill-me session 2026-05-25):**
- Wish-list items (love/interested, not booked) render in the same chronological flow as booked entries, visually differentiated (dashed border, muted background, "Unconfirmed" label)
- If a wish-list excursion has `offering_date`/`offering_time` from voting, use that to place it; if not, place under the port's first offering date with a "📅 Pick a date" nudge
- If an excursion is both booked and loved, show once as booked — mark it as ❤️ booked to surface the love signal without duplication
- Wish-list card content: name, price, activity badge, vote indicator (❤️/🤔), full description, time range (if offering picked); no Drop button
- Clicking a wish-list card navigates to the Vote tab, selects the correct port, and scrolls to that excursion card (excursion cards get `id="exc-{code}"`)
- Tab-level toggle: "All | Confirmed only" — affects both view and export
- Export includes wish-list items labeled "[Wishlist]"; "Confirmed only" export omits them

Sub-tasks:
- [x] **15a** — Extract `buildScheduleItems(person)` into core.js: collects booked entries + love/interested wish-list (deduped against booked, date assigned); returns unified sorted array with `{type: 'booked'|'wishlist', ...}`; write RED tests (empty, booked only, wishlist only, dedup booked+loved, no-offering fallback to first port date), then GREEN
- [x] **15b** — Add `id="exc-{code}"` to each excursion card in `renderVoteTab()`; implement `jumpToExcursion(code)` in app.js (switch to vote tab, set `STATE.port`, re-render, `scrollIntoView`)
- [x] **15c** — Add "All | Confirmed only" toggle to schedule tab header; persist selection in `STATE.scheduleFilter` (in-memory only, resets on tab switch is fine)
- [x] **15d** — Update `renderScheduleTab()` to use `buildScheduleItems`, render wish-list cards with dashed-border style, vote indicator, full description, click-to-jump handler; apply `scheduleFilter`
- [x] **15e** — Update `exportSchedule()` to include wish-list items labeled "[Wishlist]"; respect `scheduleFilter` toggle

### Phase 16 — Fees Tab (Flow F)
**Status:** `pending`

New 5th tab showing excursion costs (paid only, $0 excluded). Personal view for everyone; family-wide view available via toggle.

**Decisions (from grill-me session 2026-05-25):**
- New "Fees" tab added to bottom nav: Vote · Dashboard · Schedule · Fees · Settings
- Toggle on tab: "My costs | Family costs" — available to all users, not Elizabeth-only
- Scope: booked (confirmed) + love-not-yet-booked (potential) shown as two separate subtotals
- Price field: `price_usd` only; complimentary ($0) excursions excluded entirely
- My costs view: confirmed subtotal + potential subtotal + flat list of each paid excursion with cost and status
- Family costs view: per-person accordion rows showing name + confirmed + potential subtotals, expandable to show excursion list; grand total row at bottom summing all confirmed across all people

Sub-tasks:
- [x] **16a** — Extract `calcPersonFees(person)` into core.js: returns `{confirmed: number, potential: number, confirmedList: [{code, name, price}], potentialList: [{code, name, price}]}`; write RED tests (all complimentary→zeros, mix of booked/loved/skipped, dedup love-already-booked from potential), then GREEN
- [x] **16b** — Extract `calcFamilyFees()` into core.js: calls `calcPersonFees` for each FAMILY member, returns `[{person, confirmed, potential, confirmedList, potentialList}]` + `{totalConfirmed, totalPotential}`; write RED tests (empty family, single person, grand total math), then GREEN
- [x] **16c** — Add `fees` tab to bottom nav markup in `cruise-planner.html`; add `#screen-fees` div; wire `render()` router in app.js to call `renderFeesTab()`
- [x] **16d** — Implement `renderFeesTab()` in app.js: "My costs | Family costs" toggle; personal view renders confirmed + potential subtotals + itemised list (excursion name + price + booked/love badge)
- [x] **16e** — Family costs view in `renderFeesTab()`: per-person accordion rows (tap to expand/collapse excursion list), grand total footer row

### Phase 17 — Schedule Tab Accordion Expansion
**Status:** `complete`

Replace the current click-to-navigate behavior on schedule items with an accordion that expands inline to show full details, with a button inside to navigate to the voting page.

**Decisions (from grill-me session 2026-05-25):**
- Accordion applies to BOTH booked and wishlist items
- Expanded section shows: full description + badges not already visible (meal_included, accessible, go_local, free_shore)
- Multiple accordions open simultaneously — independent toggles per card
- Drop button (Elizabeth, booked only) stays inline on collapsed card; needs `event.stopPropagation()` to prevent toggling accordion
- Expand trigger: tap anywhere on the card header row
- Expand state: resets on every tab visit (no STATE entry — DOM-only toggle)
- "Vote →" button inside expanded section navigates to vote tab via `jumpToExcursion(code)`
- "📅 Pick a date →" nudge stays on the collapsed card (not moved into expanded)
- Chevron indicator (▶/▼) in collapsed header to signal expandability

Sub-tasks:
- [x] **17a** — Write RED tests for `buildScheduleItemHTML(item, isExpanded)` — 10 behaviors:
  1. Collapsed: contains excursion name
  2. Collapsed: contains chevron indicator (▶)
  3. Collapsed: does NOT contain description text
  4. Collapsed: does NOT contain "Vote →"
  5. Collapsed wishlist, no departure_time: contains "📅 Pick a date →"
  6. Collapsed wishlist, with departure_time: does NOT contain "📅 Pick a date →"
  7. Expanded: contains full description text
  8. Expanded: contains "Vote →"
  9. Expanded: meal badge present when meal_included true; absent when false
  10. Expanded: accessible badge present when accessible true; absent when false
- [x] **17b** — Extract `buildScheduleItemHTML(item, isExpanded)` into core.js; make GREEN (10/10)
- [x] **17c** — Update `renderScheduleTab()` in app.js: render all items collapsed; wire `toggleScheduleItem(code)` as onclick on card; `stopPropagation()` on Drop button; "Vote →" calls `jumpToExcursion(code)`
- [x] **17d** — Add `.schedule-accordion-body` CSS (hidden/shown); chevron rotation class; description uses existing `.exc-desc` (pre-wrap already set)
- [ ] **17e** — Confirm: `node tests.js` green; browser smoke test both booked and wishlist items expand/collapse, "Vote →" navigates correctly

### Phase 18 — Dashboard Lock Button Status + Port Booked Badge
**Status:** `complete`

Make the dashboard more intuitive by surfacing real booking state: Lock button reflects how many people are booked, and the port header shows a per-port booked headcount (Elizabeth-only).

**Decisions (from grill-me session 2026-05-26):**
- ≥1 person booked → show "Booked: N" button instead of "Lock"; still opens same Lock modal (add-only; existing bookings remain read-only inside modal)
- Three-state button colors: purple "Lock" (0 booked), amber "Booked: N" (1–6 booked), green "Booked: N" (7/7 booked)
- Port header: add `📖 N/7` badge showing unique people with ≥1 booked excursion at that port — Elizabeth-only, only rendered when N ≥ 1

**New `core.js` functions (testable, no DOM):**
- `bookedCountForExcursion(code, schedule)` → count of unique FAMILY members with `status: 'booked'` for that tourCode
- `bookedPeopleForPort(portCodes, schedule)` → count of unique FAMILY members with ≥1 booked excursion among the given codes

Sub-tasks:
- [x] **18a** — Write RED tests for `bookedCountForExcursion`: empty schedule returns 0; one person booked; multiple people booked; `dropped` status excluded; different tourCode excluded
- [x] **18b** — Write RED tests for `bookedPeopleForPort`: no bookings returns 0; partial across multiple codes; full 7/7; counts each person only once even if they have multiple excursions at port
- [x] **18c** — Implement both functions in `core.js`; confirm GREEN
- [x] **18d** — Update dashboard excursion row in `app.js` (~line 798): replace static "Lock" button with three-state button using `bookedCountForExcursion`; add `btn-amber` + `btn-green` CSS classes to `styles.css`
- [x] **18e** — Update port header in `app.js` (~line 757): inject `📖 N/7` badge when `isElizabeth() && N >= 1`, using `bookedPeopleForPort`
- [ ] **18f** — Browser smoke test: Dunedin shows "Booked: 7" in green + `📖 7/7` in header

## Errors Encountered
| Error | Attempt | Resolution |
|---|---|---|
| — | — | — |
