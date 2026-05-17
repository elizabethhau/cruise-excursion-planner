# Findings — Cruise Excursion Planner

## PDF Source
File: `reference_docs/RSSC-ShoreExcursions.pdf`
Extracted: 2928 lines via pdftotext (poppler 26.04.0)
Total excursions: 88 | Total offerings: 109

---

## Complete Excursion Data

### Melbourne, Australia
Dates: 2026-12-31, 2027-01-01

| Code | Name | Price | Retail | Duration | Offerings |
|---|---|---|---|---|---|
| MEB-GL1 | Melbourne Through the Eyes of a Local | $249 | $429 | 4.5h | Dec 31 08:00 |
| MEB-015 | Werribee Zoo Guided Tour Day | $0 | $179 | 4.5h | Dec 31 08:15; Jan 1 10:00 |
| MEB-001 | Sovereign Hill & Wildlife Park | $239 | $419 | 8.5h | Dec 31 08:30 |
| MEB-005 | Countryside Victoria | $0 | $129 | 4.5h | Dec 31 08:30; Jan 1 08:30 |
| MEB-006 | Leisurely Melbourne | $0 | $139 | 4.0h | Dec 31 09:00; Jan 1 09:00; Jan 1 11:00 |
| MEB-007 | Melbourne and Gardens | $0 | $129 | 4.5h | Dec 31 09:00; Jan 1 10:00 |
| MEB-010 | Melbourne Past & Present | $0 | $159 | 4.0h | Dec 31 09:15; Jan 1 09:15 |
| MEB-GG1 | Melbourne's Ecology & Yarra River | $249 | $429 | 3.0h | Dec 31 09:30; Dec 31 10:00; Jan 1 08:00; Jan 1 08:30 |
| MEB-GL2 | Urban Heart of Melbourne | $189 | $329 | 5.0h | Dec 31 09:30; Dec 31 10:00; Jan 1 08:00; Jan 1 08:30 |
| MEB-019 | Melbourne's Best Nature & Wine | $149 | $299 | 6.75h | Dec 31 10:00 |
| MEB-014 | Melbourne Museum & Yarra Cruise Tour | $159 | $309 | 4.5h | Dec 31 10:30; Jan 1 10:30 |

Activity level inferences (needs manual review):
- MEB-GL1: strenuous (3h walking, uneven, not wheelchair)
- MEB-015: moderate (1h walking, safari train)
- MEB-001: strenuous (3h walking, not wheelchair)
- MEB-005: moderate (moderate walking, unpaved)
- MEB-006: light (walking at discretion, wheelchair accessible)
- MEB-007: light (40 min walking, wheelchair accessible)
- MEB-010: light (walking at discretion, collapsible wheelchair OK)
- MEB-GG1: strenuous (kayaking, good physical condition required)
- MEB-GL2: strenuous (3.5h walking, cobblestones, 35 steps)
- MEB-019: moderate (moderate walking, not wheelchair)
- MEB-014: light (limited walking, not wheelchair but minimal mobility)

Flags:
- go_local: MEB-GL1 ✓ (GL prefix), MEB-GL2 ✓ (GL prefix), MEB-GG1 ✓ (GG prefix, local ecology guide)
- meal_included: MEB-001 ✓ (lunch), MEB-019 ✓ (lunch)
- accessible: MEB-006 ✓, MEB-007 ✓, MEB-010 ✓

---

### Hobart (Tasmania), Australia
Date: 2027-01-03

| Code | Name | Price | Retail | Duration | Offerings |
|---|---|---|---|---|---|
| HBA-013 | Tasmania's Coastal Wilderness | $209 | $359 | 3.0h | Jan 3 10:00 |

Activity: moderate (0.7 mile walking, RIB boat, uneven)
go_local: false | meal_included: false | accessible: false

---

### Dunedin, New Zealand
Date: 2027-01-07

| Code | Name | Price | Retail | Duration | Offerings |
|---|---|---|---|---|---|
| DUD-013 | Larnach Castle & Dunedin Highlights | $0 | $149 | 4.0h | Jan 7 09:30 |
| DUD-015 | Otago High Country Farming | $289 | $509 | 5.5h | Jan 7 09:30 |
| DUD-002 | Highlights of Dunedin | $0 | $99 | 4.0h | Jan 7 09:45 |
| DUD-005 | Nature's Wonders Wildlife Safari | $0 | $159 | 4.0h | Jan 7 09:45; Jan 7 11:00 |
| DUD-012 | Albatross Cruise & Nature Wonders | $259 | $449 | 4.5h | Jan 7 10:00 |
| DUD-001 | The Taieri Gorge Railway Experience | $209 | $369 | 7.5h | Jan 7 10:15 |
| DUD-006 | Taieri Gorge Railway and Olveston House | $199 | $349 | 7.25h | Jan 7 10:15 |
| DUD-003 | Dunedin Peninsula - Wildlife & Larnach Castle | $0 | $199 | 6.25h | Jan 7 10:30 |
| DUD-014 | Taste of Dunedin on Foot | $249 | $429 | 4.0h | Jan 7 10:30 |
| DUD-008 | Pride of the South Brewery & Otago Museum | $0 | $199 | 5.75h | Jan 7 10:45 |
| DUD-004 | Otago Harbor Wildlife Cruise | $0 | $129 | 2.5h | Jan 7 12:00 |

Activity inferences (needs review):
- DUD-013: light (60-90 min walking, mostly paved, lower castle accessible)
- DUD-015: strenuous (all-terrain vehicle, remote farm terrain)
- DUD-002: moderate (2h walking, collapsible wheelchair OK)
- DUD-005: moderate (limited walking, bumpy 8WD terrain)
- DUD-012: moderate (boat ramps, gravel paths, ATV)
- DUD-001: light (minimal walking, steep steps to board train)
- DUD-006: moderate (1h guided walking, 4 steep steps for train)
- DUD-003: strenuous (steep walk to Observatory, not wheelchair)
- DUD-014: moderate (2-2.5h walking, food tour)
- DUD-008: moderate (3h walking, stairs at brewery)
- DUD-004: light/seated (mostly seated cruise)

Flags:
- meal_included: DUD-003 ✓ (luncheon), DUD-001 ✓ (picnic lunch), DUD-006 ✓ (morning tea + lunch), DUD-008 ✓ (alehouse lunch)
- accessible: DUD-002 ✓ (collapsible wheelchair), DUD-001 ✓ (wheelchair car on request), DUD-006 ✓ (collapsible wheelchair)
- go_local: DUD-014 ✓ (food walk with locals)

---

### Christchurch (Lyttelton), New Zealand
Date: 2027-01-08

| Code | Name | Price | Retail | Duration | Offerings |
|---|---|---|---|---|---|
| CHC-003 | Journey Into Middle Earth | $249 | $429 | 8.0h | Jan 8 08:30 |
| CHC-006 | Christchurch Town & Country | $0 | $169 | 4.0h | Jan 8 08:30 |
| CHC-001 | High Country Explorer | $329 | $579 | 7.5h | Jan 8 08:45 |
| CHC-016 | Hanmer Springs Escape & Thermal Pools | $0 | $199 | 8.0h | Jan 8 08:45 |
| CHC-015 | Waipara Wine Trail & Lunch | $139 | $249 | 6.0h | Jan 8 09:00 |
| CHC-007 | Discover Christchurch | $0 | $179 | 3.5h | Jan 8 09:15; Jan 8 13:30 |
| CHC-009 | Historic Christchurch & Botanical Garden | $129 | $279 | 4.0h | Jan 8 09:15 |
| CHC-018 | Godley Head Walk | $229 | $399 | 3.0h | Jan 8 09:30 |
| CHC-002 | Ice & Wings | $109 | $259 | 5.0h | Jan 8 09:45 |
| CHC-020 | Taste of Christchurch: Riverside Kitchen & Market | $279 | $479 | 5.0h | Jan 8 10:00 |

Activity inferences:
- CHC-003: light (moderate walking at discretion, collapsible wheelchair OK)
- CHC-006: moderate (90 min walking, farm surfaces)
- CHC-001: strenuous (off-road vehicle + jet boat, adventurous)
- CHC-016: light (free time, flat terrain, thermal pools)
- CHC-015: light (minimal walking, wineries)
- CHC-007: light (limited walking, wheelchair space available)
- CHC-009: moderate (not wheelchair, open-top bus + trolley)
- CHC-018: strenuous (coastal trail walk, not wheelchair)
- CHC-002: moderate (3h walking, collapsible wheelchair OK)
- CHC-020: moderate (standing + walking through market)

Flags:
- meal_included: CHC-003 ✓ (rustic lunch), CHC-001 ✓ (lunch), CHC-015 ✓ (platter lunch), CHC-020 ✓ (3-course demo lunch)
- accessible: CHC-003 ✓ (collapsible wheelchair), CHC-007 ✓ (limited wheelchair space), CHC-002 ✓ (collapsible wheelchair)
- go_local: CHC-020 ✓ (local market + chef)

---

### Picton, New Zealand
Date: 2027-01-09

| Code | Name | Price | Retail | Duration | Offerings |
|---|---|---|---|---|---|
| PIC-001 | Iconic Wines of the Marlborough | $0 | $139 | 5.0h | Jan 9 09:30 |
| PIC-006 | Queen Charlotte Sounds Round the Bays | $0 | $129 | 2.5h | Jan 9 09:30 |
| PIC-008 | The Queen Charlotte Track & Scenic Cruise | $139 | $289 | 3.5h | Jan 9 09:45 |
| PIC-009 | Picton Waterfront Walk | $0 | $69 | 1.5h | Jan 9 09:45 |
| PIC-002 | Marlborough Gourmet Wine & Food | $249 | $399 | 6.0h | Jan 9 10:00 |
| PIC-011 | Kayak Queen Charlotte Sound | $139 | $289 | 3.5h | Jan 9 10:00 |
| PIC-003 | Marlborough Memories | $0 | $139 | 3.75h | Jan 9 10:15 |
| PIC-005 | Green-Shell Mussel Cruise | $259 | $409 | 3.5h | Jan 9 10:30 |

Activity inferences:
- PIC-001: light (2.5h easy-moderate walking, collapsible wheelchair OK)
- PIC-006: seated (mostly seated catamaran cruise)
- PIC-008: moderate (90 min moderate walking, not wheelchair)
- PIC-009: moderate (60 min walking, steep incline to lookout, not wheelchair)
- PIC-002: light (2.5h easy-moderate walking, collapsible wheelchair OK)
- PIC-011: strenuous (2.5h kayaking, not wheelchair)
- PIC-003: moderate (90 min easy-moderate walking, not wheelchair)
- PIC-005: seated (catamaran cruise, not wheelchair)

Flags:
- meal_included: PIC-002 ✓ (multi-course lunch), PIC-005 ✓ (mussels + wine)
- accessible: PIC-001 ✓ (collapsible wheelchair), PIC-002 ✓ (collapsible wheelchair)
- go_local: PIC-009 ✓ (local guide, waterfront walk)

---

### Wellington, New Zealand
Date: 2027-01-10

| Code | Name | Price | Retail | Duration | Offerings |
|---|---|---|---|---|---|
| WLG-003 | Seal Coast Safari | $149 | $299 | 3.5h | Jan 10 08:00 |
| WLG-018 | Wairarapa Wineries & Lunch | $249 | $439 | 6.5h | Jan 10 08:00 |
| WLG-006 | Wellington City Sights | $0 | $129 | 3.5h | Jan 10 08:15 |
| WLG-010 | In the Footsteps of Lord of the Rings | $0 | $149 | 3.5h | Jan 10 08:30; Jan 10 09:30 |
| WLG-004 | Wellington's Impressive Food & Art Scene | $319 | $499 | 6.0h | Jan 10 09:00 |
| WLG-007 | Wellington Harbour & the Storm Coast | $0 | $149 | 4.0h | Jan 10 09:15 |
| WLG-009 | Te Papa Tongarewa Museum | $0 | $149 | 4.0h | Jan 10 09:30 |
| WLG-WT1 | Wellington Sights and Yoga in the Garden | $139 | $239 | 3.5h | Jan 10 09:45 |
| WLG-017 | Shenandoah Heritage Experience | $149 | $259 | 3.5h | Jan 10 10:00 |

Activity inferences:
- WLG-003: moderate (sandy/rocky beach, off-road vehicle, not wheelchair)
- WLG-018: light (wineries, not wheelchair)
- WLG-006: light (90 min easy walking, collapsible wheelchair OK)
- WLG-010: moderate (2h moderate walking, unpaved, not wheelchair)
- WLG-004: moderate (3-5km walking, not wheelchair)
- WLG-007: light (at guest's discretion, farm)
- WLG-009: moderate (2h easy-moderate walking, collapsible wheelchair OK)
- WLG-WT1: moderate (yoga + walking, not wheelchair)
- WLG-017: moderate (farm walking, not wheelchair)

Flags:
- meal_included: WLG-018 ✓ (lunch at winery), WLG-004 ✓ (tasting lunch)
- accessible: WLG-006 ✓ (collapsible wheelchair), WLG-009 ✓ (collapsible wheelchair)
- go_local: WLG-004 ✓ (food/art with local guides), WLG-WT1 ✓ (WT = Wellness Tour, local yoga)
- wellness_tour: WLG-WT1 ✓ (WT prefix)

---

### Gisborne, New Zealand
Date: 2027-01-11

| Code | Name | Price | Retail | Duration | Offerings |
|---|---|---|---|---|---|
| GIS-002 | Gisborne City Cycling Tour | $0 | $199 | 2.5h | Jan 11 10:30 |
| GIS-001 | Gisborne Orientation | $0 | $59 | 1.5h | Jan 11 10:45; Jan 11 12:45; Jan 11 14:45 |
| GIS-004 | Eastwoodhill Arboretum | $0 | $149 | 3.5h | Jan 11 10:45 |
| GIS-006 | Steam Train to Muriwai | $0 | $179 | 3.0h | Jan 11 11:00 |
| GIS-007 | First Light, First Stories: A Gisborne Walk | $0 | $119 | 2.0h | Jan 11 11:15 |
| GIS-008 | Rural New Zealand Experience | $179 | $309 | 3.5h | Jan 11 11:45 |
| GIS-009 | Heart of Maori Culture | $329 | $569 | 2.5h | Jan 11 11:45 |
| GIS-003 | Leading Gisborne Wineries | $0 | $149 | 4.0h | Jan 11 12:00 |

Activity inferences:
- GIS-002: moderate (cycling 6.5 miles, not wheelchair, min age 10 — N/A all 21+)
- GIS-001: seated (panoramic coach, no stops, collapsible wheelchair OK)
- GIS-004: light (walking at discretion, collapsible wheelchair OK for some options)
- GIS-006: light (minimal walking, 3 steep steps to board train)
- GIS-007: moderate (4-5km walking, not strenuous)
- GIS-008: moderate (uneven farm terrain, not wheelchair)
- GIS-009: moderate (short periods standing/walking, grassy ground)
- GIS-003: moderate (easy-moderate walking, not wheelchair)

Flags:
- meal_included: none (GIS-006 has complimentary sparkling wine, not a meal)
- accessible: GIS-001 ✓ (collapsible wheelchair), GIS-004 ✓ (collapsible wheelchair for walking tour)
- go_local: GIS-009 ✓ (marae cultural immersion)

---

### Rotorua (Tauranga), New Zealand
Date: 2027-01-12

| Code | Name | Price | Retail | Duration | Offerings |
|---|---|---|---|---|---|
| TAU-019 | Te Puia & Polynesian Spa | $309 | $549 | 8.0h | Jan 12 08:45 |
| TAU-021 | Kiwi Hatchery & Agrodome Farm | $189 | $329 | 7.0h | Jan 12 08:45 |
| TAU-026 | Kohutapu Lodge: The Story of a People and Place | $269 | $469 | 8.0h | Jan 12 08:45 |
| TAU-008 | The Rotorua Experience | $129 | $279 | 6.5h | Jan 12 09:00 |
| TAU-023 | Mauao Walking Tour & Workshop | $0 | $179 | 3.0h | Jan 12 09:00 |
| TAU-009 | Rotorua Skyline & Agrodome | $119 | $279 | 6.5h | Jan 12 09:15 |
| TAU-001 | Highlights of Tauranga & Maori Culture | $0 | $169 | 4.0h | Jan 12 09:30 |
| TAU-005 | Tauranga Highlights | $0 | $99 | 3.5h | Jan 12 09:45 |
| TAU-1GT | Chef Led Manaaki & Flavors of the Land | $379 | $819 | 6.5h | Jan 12 10:00 |
| TAU-GG1 | Kayak on Lake Rotoiti | $179 | $309 | 6.5h | Jan 12 10:00 |
| TAU-WT1 | Hells Gate Mud Bath Retreat | $209 | $369 | 6.0h | Jan 12 10:15 |
| TAU-006 | Maori Culture Highlights | $0 | $139 | 4.0h | Jan 12 10:30 |
| TAU-016 | Ngati Makino - The Little Tribe That Could | $149 | $299 | 5.5h | Jan 12 10:45 |
| TAU-018 | Truffle Treasure | $139 | $289 | 4.5h | Jan 12 10:45 |
| TAU-020 | Taste of Tauranga | $199 | $339 | 5.0h | Jan 12 11:00 |
| TAU-022 | Wai Ariki Hot Springs & Spa | $329 | $569 | 5.5h | Jan 12 12:00 |

Activity inferences:
- TAU-019: moderate (3h walking, ramps at Te Puia, not wheelchair)
- TAU-021: moderate (dirt tracks, not wheelchair)
- TAU-026: moderate (bush walk, not wheelchair)
- TAU-008: moderate (half mile walking + 3h drive, collapsible wheelchair OK)
- TAU-023: strenuous (3.5km walk up volcano, uneven gravel)
- TAU-009: light (gondola + farm show, not wheelchair)
- TAU-001: light (minimal walking, collapsible wheelchair OK)
- TAU-005: light (~500 yards flat, not wheelchair)
- TAU-1GT: light (limited walking, collapsible wheelchair OK)
- TAU-GG1: strenuous (kayaking, not wheelchair, min age 8 — N/A all 21+)
- TAU-WT1: light (limited walking, not wheelchair)
- TAU-006: moderate (2h easy walking, not wheelchair)
- TAU-016: moderate (farm walking)
- TAU-018: moderate (farm + coastal drive)
- TAU-020: moderate (not wheelchair)
- TAU-022: light (limited walking, wellness spa)

Flags:
- meal_included: TAU-019 ✓ (hangi-inspired lunch + kiwi buffet), TAU-021 ✓ (buffet lunch), TAU-026 ✓ (hangi meal), TAU-008 ✓ (hangi-inspired lunch), TAU-1GT ✓ (hangi meal + jammery tasting), TAU-016 ✓ (hangi lunch), TAU-020 ✓ (light lunch at beachside café), TAU-WT1 ✓ (steam-cooked lunch)
- accessible: TAU-008 ✓ (collapsible wheelchair), TAU-001 ✓ (collapsible wheelchair), TAU-1GT ✓ (collapsible wheelchair)
- go_local: TAU-1GT ✓ (1GT = chef-led Go Local), TAU-GG1 ✓ (GG prefix), TAU-WT1 ✓ (WT = Wellness Tour), TAU-026 ✓ (tribal immersion)

---

### Bay of Islands, New Zealand
Date: 2027-01-13

| Code | Name | Price | Retail | Duration | Offerings |
|---|---|---|---|---|---|
| BAY-001 | Cruise to Cape Brett - Hole in the Rock | $79 | $229 | 3.0h | Jan 13 09:30 |
| BAY-003 | Kerikeri and Waitangi Highlights | $0 | $109 | 3.5h | Jan 13 09:45; Jan 13 10:30 |
| BAY-005 | Glow Worm Cave & Puketi Kauri Forest | $0 | $159 | 5.25h | Jan 13 09:45; Jan 13 10:30 |
| BAY-002 | Kayaking on Waitangi Estuary | $0 | $109 | 3.0h | Jan 13 10:00 |
| BAY-006 | Relaxing Cruise to Historic Russell | $0 | $159 | 3.5h | Jan 13 10:00 |
| BAY-011 | Bay of Island Fishing | $199 | $339 | 4.0h | Jan 13 10:15 |
| BAY-012 | Lagoon Bay Cruise | $169 | $299 | 4.5h | Jan 13 10:15 |
| BAY-016 | Flavours and Forest Walk | $289 | $509 | 5.5h | Jan 13 10:15 |
| BAY-017 | Paroa Bay Winery & Russell Highlights | $299 | $529 | 6.0h | Jan 13 10:15 |
| BAY-015 | Scenic Vintage Railway & Flavours of the Bay | $149 | $259 | 3.5h | Jan 13 10:30 |
| BAY-007 | Waka Taia-Mai Exploration | $0 | $109 | 3.0h | Jan 13 10:45 |
| BAY-010 | Waitangi Treaty Grounds | $0 | $159 | 3.0h | Jan 13 11:00 |
| BAY-013 | Island and Bay Adventure | $129 | $219 | 2.5h | Jan 13 11:00 |
| BAY-014 | Island Experience with Lunch | $149 | $259 | 3.75h | Jan 13 11:15 |

Activity inferences:
- BAY-001: light (limited walking, collapsible wheelchair OK)
- BAY-003: light (100yd + 700yd walking, collapsible wheelchair OK)
- BAY-005: moderate (considerable walking on uneven cave ground, not wheelchair)
- BAY-002: strenuous (2.5h kayaking, not wheelchair)
- BAY-006: light (walking at discretion in Russell, not wheelchair)
- BAY-011: seated (fishing boat, seated)
- BAY-012: moderate (uneven island terrain, optional steep hill)
- BAY-016: moderate (forest boardwalk, not wheelchair)
- BAY-017: moderate (walking in Russell, not wheelchair)
- BAY-015: seated (vintage train + tasting box, wheelchair ramps)
- BAY-007: strenuous (2.5h moderate-strenuous paddling, min age 10 — N/A all 21+)
- BAY-010: moderate (walking grounds, not wheelchair)
- BAY-013: moderate (natural island trail, moderate incline)
- BAY-014: light (optional steep hill, otherwise easy)

Flags:
- meal_included: BAY-006 ✓ (NZ lunch on cruise), BAY-012 ✓ (picnic lunch), BAY-016 ✓ (antipasto + wine), BAY-017 ✓ (family-style buffet), BAY-015 ✓ (tasting box + wine), BAY-014 ✓ (buffet lunch)
- accessible: BAY-001 ✓ (collapsible wheelchair), BAY-003 ✓ (collapsible wheelchair), BAY-015 ✓ (ramps for wheelchair)
- go_local: BAY-007 ✓ (tribal leader guided waka), BAY-010 ✓ (Maori cultural)

---

## Ambiguities / Assumptions

1. **Activity levels** — inferred from description text since PDF icons don't extract to plain text. ALL 88 flagged `activity_level_needs_review: true`. User will manually verify against PDF icons.
2. **go_local flag** — inferred from tour code prefix (GL, GG, 1GT) and description (local guide, neighborhood immersion). May need manual review.
3. **MEB-019 duration** — PDF says 6.75 hours. Confirmed: 6 hrs 45 min.
4. **CHC-007 afternoon offering** — PDF says "01:30 PM" for second offering. Captured as 13:30.
5. **GIS-001 departure times** — PDF lists "10:45 AM, 12:45 PM, 02:45 PM" = 3 offerings on same day.
6. **Hobart** — only 1 excursion in PDF. User confirmed this is correct.

---

## Technical Architecture Notes

- Single HTML file, no framework, no build step
- Google Sheets API v4 for persistence
- OAuth 2.0 implicit flow (for GitHub Pages — no server)
- All data embedded as `const EXCURSION_DATA` JS object
- LocalStorage keys: `cruisePlanner_name`, `cruisePlanner_apiKey`, `cruisePlanner_clientId`, `cruisePlanner_spreadsheetId`, `cruisePlanner_offlineQueue`
- Conflict detection: pure time arithmetic in minutes (departure + duration*60 > next_departure)
- Polling: `setInterval(syncFromSheets, 30000)` paused on `document.visibilityState === 'hidden'`
