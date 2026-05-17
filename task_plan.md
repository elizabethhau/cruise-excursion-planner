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
| Wellington | 2027-01-10 | 9 | 11 |
| Gisborne | 2027-01-11 | 8 | 10 |
| Rotorua/Tauranga | 2027-01-12 | 16 | 16 |
| Bay of Islands | 2027-01-13 | 14 | 16 |
| **TOTAL** | | **88** | **109** |

## Sheets Schema

- **Votes**: Timestamp | PersonName | TourCode | Vote (`love` | `interested` | `skip`)
- **Schedule**: Timestamp | PersonName | TourCode | Date | DepartureTime | Status (`booked` | `waitlist` | `dropped`)
- **Excursions**: auto-populated from embedded JSON on first run
- **Requests**: Timestamp | RequesterName | TourCode | Date | DepartureTime | Note

## Family Members

Dad, Mom, Elizabeth (admin 👑), Abby, Jonathan, Luke, James

## Phases

### Phase 1 — Excursion JSON Data
**Status:** `pending`
Build the complete JSON object for all 88 excursions / 109 offerings.
Fields per excursion: code, name, duration_hrs, price_usd, retail_price_usd, activity_level, meal_included, accessible, go_local, free_shore, description (2-3 sentences), offerings[]
Fields per offering: date (YYYY-MM-DD), departure_time (HH:MM 24h)
Flag: activity_level_needs_review: true on ALL entries.
Output: embedded as `const EXCURSION_DATA = {...}` JS constant in the HTML.

### Phase 2 — Google Sheets Integration
**Status:** `pending`
- Credential prompt modal on first load (API Key, OAuth Client ID, Spreadsheet ID)
- Store in localStorage
- Sheet auto-init: create Votes / Schedule / Excursions / Requests tabs if missing
- Read functions: getVotes(), getSchedule(), getRequests()
- Write functions: castVote(), bookExcursion(), dropExcursion(), submitRequest()
- 30s polling loop (foreground only, pause on visibilitychange)
- Offline queue: localStorage buffer + "⏳ Pending sync" indicator + auto-retry

### Phase 3 — Core Shell & Flow A (Name Selection)
**Status:** `pending`
- HTML skeleton with bottom tab bar (Vote, Dashboard, Schedule, Settings)
- CSS: mobile-first, CSS variables for color system, no framework
- Color system: gray=incomplete, green=complete, yellow=partial/warn, red=conflict, teal=info/alternative, purple=Elizabeth admin
- Flow A: "Who are you?" screen, 7 name buttons, store in localStorage
- Permission layer: set isElizabeth flag, show/hide admin elements throughout

### Phase 4 — Voting View (Flow B)
**Status:** `pending`
- Port tabs (scrollable), each with completion badge (⬜/🟡/✅)
- Excursion cards: name, code, all offerings with date+time+end time, price, activity badge, meal/accessible icons
- Vote buttons: ✅ Love it / 🤔 Maybe / ❌ Skip (min 44px tap targets)
- Live vote counts from Sheets data
- "Also available" teal banner for multi-offering excursions
- Conflict warnings: 🟡 potential (love vote overlaps) / 🔴 confirmed (overlaps booked)

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

### Phase 6 — Personal Schedule (Flow D)
**Status:** `pending`
- Chronological itinerary grouped by date
- Date section headers: "Melbourne — Wednesday, December 31"
- Booked excursion entries: name, time range, price, activity badge
- Free time gaps between excursions
- Conflict banner: ⚠️ red if any overlap detected
- Resolve conflict flow: side-by-side, options (a) drop, (b) switch offering [teal banner], (c) contact Elizabeth [clipboard]
- Export: plain-text schedule + copy-to-clipboard

### Phase 7 — Settings (Flow E)
**Status:** `pending`
- Change name (clears localStorage name)
- Re-enter Google credentials
- Reset my votes (delete from Sheets)
- Toggle: Show accessible tours only
- Toggle: Hide excursions over $X

### Phase 8 — Conflict Engine & Offline Queue
**Status:** `pending`
- Conflict detection: for same person + same date, check departure_time + duration_hrs overlaps
- Apply at: Flow B card render, Flow C Lock pre-check, Flow D schedule render, after every sync
- Offline queue: localStorage array of pending actions; retry on reconnect; "⏳ Pending sync" badge

### Phase 9 — Polish & Deliverables
**Status:** `pending`
- Console.log full JSON on load (for verification)
- CLAUDE.md for the repo
- Deliverable docs: Google Sheets setup steps, port-by-port summary, ambiguity log, known limitations

## Errors Encountered
| Error | Attempt | Resolution |
|---|---|---|
| — | — | — |
