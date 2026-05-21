export const FAMILY = ['Dad', 'Mom', 'Elizabeth', 'Abby', 'Jonathan', 'Luke', 'James'];

export const SHEET_NAMES = { votes:'Votes', schedule:'Schedule', excursions:'Excursions', requests:'Requests' };
export const SHEET_HEADERS = {
  Votes:      ['Timestamp','PersonName','TourCode','Vote','OfferingDate','OfferingTime'],
  Schedule:   ['Timestamp','PersonName','TourCode','Date','DepartureTime','Status'],
  Excursions: ['Code','Name','Port','DurationHrs','PriceUSD','RetailPriceUSD','ActivityLevel','MealIncluded','Accessible','GoLocal','FreeShore'],
  Requests:   ['Timestamp','RequesterName','TourCode','Date','DepartureTime','Note'],
};

export const EXCURSION_DATA = { ports: [

/* ── MELBOURNE ──────────────────────────────────── */
{ name: "Melbourne", country: "Australia", dates: ["2026-12-31","2027-01-01"], excursions: [
  { code:"MEB-GL1", name:"Melbourne Through the Eyes of a Local", duration_hrs:4.5, price_usd:249, retail_price_usd:429, activity_level:"strenuous", meal_included:false, accessible:false, go_local:true, free_shore:false, _review_activity:true,
    description:"Walk through Melbourne's vibrant laneways with a local guide, discovering hidden street art, café culture, and neighbourhood secrets. Explore Fitzroy's creative precinct and the iconic Queen Victoria Market. Requires 3 hours of walking on uneven surfaces.",
    offerings:[{date:"2026-12-31",departure_time:"08:00"}] },

  { code:"MEB-015", name:"Werribee Zoo Guided Tour Day", duration_hrs:4.5, price_usd:0, retail_price_usd:179, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Explore Werribee Open Range Zoo aboard a safari bus, encountering African animals roaming vast grasslands. A guided naturalist leads the experience with behind-the-scenes access. Includes approximately 1 hour of walking plus a safari train ride.",
    offerings:[{date:"2026-12-31",departure_time:"08:15"},{date:"2027-01-01",departure_time:"10:00"}] },

  { code:"MEB-001", name:"Sovereign Hill & Wildlife Park", duration_hrs:8.5, price_usd:239, retail_price_usd:419, activity_level:"strenuous", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Step back into Victoria's 1850s gold rush era at Sovereign Hill, an award-winning outdoor museum with costumed characters and gold panning. Continue to a native wildlife park to meet koalas and kangaroos up close. Includes a full buffet lunch.",
    offerings:[{date:"2026-12-31",departure_time:"08:30"}] },

  { code:"MEB-005", name:"Countryside Victoria", duration_hrs:4.5, price_usd:0, retail_price_usd:129, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Journey through rolling green hills and charming country towns that typify Victoria's pastoral heartland. Visit a working farm and learn about Australian rural life, with photo stops at scenic lookouts. Moderate walking on some unpaved surfaces.",
    offerings:[{date:"2026-12-31",departure_time:"08:30"},{date:"2027-01-01",departure_time:"08:30"}] },

  { code:"MEB-006", name:"Leisurely Melbourne", duration_hrs:4.0, price_usd:0, retail_price_usd:139, activity_level:"light", meal_included:false, accessible:true, go_local:false, free_shore:true, _review_activity:true,
    description:"A relaxed introduction to Melbourne's city highlights, including the Royal Botanic Gardens, Federation Square, and Southbank Promenade. Walk at your own pace through this cosmopolitan city. Wheelchair accessible throughout.",
    offerings:[{date:"2026-12-31",departure_time:"09:00"},{date:"2027-01-01",departure_time:"09:00"},{date:"2027-01-01",departure_time:"11:00"}] },

  { code:"MEB-007", name:"Melbourne and Gardens", duration_hrs:4.5, price_usd:0, retail_price_usd:129, activity_level:"light", meal_included:false, accessible:true, go_local:false, free_shore:true, _review_activity:true,
    description:"Discover Melbourne's world-class Royal Botanic Gardens with its 10,000 plant species, followed by highlights of the city centre. Enjoy the Shrine of Remembrance and relaxed walking through parklands. Wheelchair accessible.",
    offerings:[{date:"2026-12-31",departure_time:"09:00"},{date:"2027-01-01",departure_time:"10:00"}] },

  { code:"MEB-010", name:"Melbourne Past & Present", duration_hrs:4.0, price_usd:0, retail_price_usd:159, activity_level:"light", meal_included:false, accessible:true, go_local:false, free_shore:true, _review_activity:true,
    description:"Trace Melbourne's evolution from colonial outpost to cosmopolitan metropolis, visiting heritage buildings, the Immigration Museum, and modern architectural landmarks. Walk at your own discretion through accessible city streets. Collapsible wheelchair welcome.",
    offerings:[{date:"2026-12-31",departure_time:"09:15"},{date:"2027-01-01",departure_time:"09:15"}] },

  { code:"MEB-GG1", name:"Melbourne's Ecology & Yarra River", duration_hrs:3.0, price_usd:249, retail_price_usd:429, activity_level:"strenuous", meal_included:false, accessible:false, go_local:true, free_shore:false, _review_activity:true,
    description:"Kayak along the Yarra River with a local ecology expert, paddling through wetlands and spotting native birdlife. Learn about Melbourne's urban waterway restoration efforts firsthand. Requires good physical condition for 2–3 hours of paddling.",
    offerings:[{date:"2026-12-31",departure_time:"09:30"},{date:"2026-12-31",departure_time:"10:00"},{date:"2027-01-01",departure_time:"08:00"},{date:"2027-01-01",departure_time:"08:30"}] },

  { code:"MEB-GL2", name:"Urban Heart of Melbourne", duration_hrs:5.0, price_usd:189, retail_price_usd:329, activity_level:"strenuous", meal_included:false, accessible:false, go_local:true, free_shore:false, _review_activity:true,
    description:"Explore Melbourne's dynamic inner suburbs with a local guide: Fitzroy's street art, Carlton's Italian quarter, and the historic Queen Victoria Market. Walk 3.5 hours through cobblestone laneways and 35 steps at key sites. Not suitable for limited mobility.",
    offerings:[{date:"2026-12-31",departure_time:"09:30"},{date:"2026-12-31",departure_time:"10:00"},{date:"2027-01-01",departure_time:"08:00"},{date:"2027-01-01",departure_time:"08:30"}] },

  { code:"MEB-019", name:"Melbourne's Best Nature & Wine", duration_hrs:6.75, price_usd:149, retail_price_usd:299, activity_level:"moderate", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Combine the Mornington Peninsula's scenic coastline with tastings at acclaimed wineries producing world-class Pinot Noir and Chardonnay. Visit a working winery cellar door and enjoy a gourmet lunch overlooking the vines. Moderate walking on uneven vineyard terrain.",
    offerings:[{date:"2026-12-31",departure_time:"10:00"}] },

  { code:"MEB-014", name:"Melbourne Museum & Yarra Cruise Tour", duration_hrs:4.5, price_usd:159, retail_price_usd:309, activity_level:"light", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Cruise the Yarra River past Melbourne's skyline before exploring the award-winning Melbourne Museum, home to natural history and Indigenous culture exhibits. Limited walking with comfortable seating throughout. Minimal mobility required.",
    offerings:[{date:"2026-12-31",departure_time:"10:30"},{date:"2027-01-01",departure_time:"10:30"}] },
]},

/* ── HOBART ─────────────────────────────────────── */
{ name: "Hobart", country: "Australia", dates: ["2027-01-03"], excursions: [
  { code:"HBA-013", name:"Tasmania's Coastal Wilderness", duration_hrs:3.0, price_usd:209, retail_price_usd:359, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Speed through Hobart's rugged coastline on an inflatable RIB boat, exploring sea caves and dramatic dolerite cliffs. Walk 0.7 miles on uneven coastal terrain to discover hidden beaches and native wildlife. A thrilling encounter with Tasmania's wild southern shores.",
    offerings:[{date:"2027-01-03",departure_time:"10:00"}] },
]},

/* ── DUNEDIN ─────────────────────────────────────── */
{ name: "Dunedin", country: "New Zealand", dates: ["2027-01-07"], excursions: [
  { code:"DUD-013", name:"Larnach Castle & Dunedin Highlights", duration_hrs:4.0, price_usd:0, retail_price_usd:149, activity_level:"light", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Visit New Zealand's only castle, the magnificent Victorian-era Larnach perched on the Otago Peninsula with sweeping harbour views. Continue to Dunedin's grand Victorian and Edwardian city centre. 60–90 minutes of mostly paved walking.",
    offerings:[{date:"2027-01-07",departure_time:"09:30"}] },

  { code:"DUD-015", name:"Otago High Country Farming", duration_hrs:5.5, price_usd:289, retail_price_usd:509, activity_level:"strenuous", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Journey deep into Otago's vast high country sheep station, accessible only by all-terrain vehicle through spectacular remote landscapes. Witness authentic mustering and shearing demonstrations on a working merino farm. Remote terrain and adventure travel required.",
    offerings:[{date:"2027-01-07",departure_time:"09:30"}] },

  { code:"DUD-002", name:"Highlights of Dunedin", duration_hrs:4.0, price_usd:0, retail_price_usd:99, activity_level:"moderate", meal_included:false, accessible:true, go_local:false, free_shore:true, _review_activity:true,
    description:"Discover Dunedin's Scottish heritage through its grand railway station, the world's steepest street, and the elegant Octagon city centre. Two hours of guided walking through well-preserved Victorian architecture. Collapsible wheelchair permitted.",
    offerings:[{date:"2027-01-07",departure_time:"09:45"}] },

  { code:"DUD-005", name:"Nature's Wonders Wildlife Safari", duration_hrs:4.0, price_usd:0, retail_price_usd:159, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Traverse the Otago Peninsula on an 8-wheel-drive Argo vehicle, accessing penguin colonies, fur seals, and the world's rarest sea lion on rugged coastal terrain. Witness yellow-eyed penguins waddling home at dusk. Bumpy off-road terrain throughout.",
    offerings:[{date:"2027-01-07",departure_time:"09:45"},{date:"2027-01-07",departure_time:"11:00"}] },

  { code:"DUD-012", name:"Albatross Cruise & Nature Wonders", duration_hrs:4.5, price_usd:259, retail_price_usd:449, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Cruise Otago Harbour to the Royal Albatross Centre, home to the only mainland albatross colony in the Southern Hemisphere. Continue by ATV to see penguins and fur seals in their natural habitat. Includes boat ramps, gravel paths, and ATV travel.",
    offerings:[{date:"2027-01-07",departure_time:"10:00"}] },

  { code:"DUD-001", name:"The Taieri Gorge Railway Experience", duration_hrs:7.5, price_usd:209, retail_price_usd:369, activity_level:"light", meal_included:true, accessible:true, go_local:false, free_shore:false, _review_activity:true,
    description:"Board a vintage train for one of the world's great rail journeys, winding through the dramatic Taieri Gorge on historic Victorian viaducts. Picnic lunch included as you traverse 100km of spectacular scenery. Wheelchair car available on request.",
    offerings:[{date:"2027-01-07",departure_time:"10:15"}] },

  { code:"DUD-006", name:"Taieri Gorge Railway and Olveston House", duration_hrs:7.25, price_usd:199, retail_price_usd:349, activity_level:"moderate", meal_included:true, accessible:true, go_local:false, free_shore:false, _review_activity:true,
    description:"Combine the spectacular Taieri Gorge Railway with a tour of Olveston, Dunedin's finest historic home filled with international treasures. Morning tea and a full lunch included. Four steep steps to board the train; collapsible wheelchair welcome.",
    offerings:[{date:"2027-01-07",departure_time:"10:15"}] },

  { code:"DUD-003", name:"Dunedin Peninsula - Wildlife & Larnach Castle", duration_hrs:6.25, price_usd:0, retail_price_usd:199, activity_level:"strenuous", meal_included:true, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"A comprehensive Otago Peninsula expedition: Larnach Castle gardens, the Royal Albatross Centre, penguin colonies, and a full luncheon at a historic homestead. Includes a steep walk to the Observatory lookout. Not suitable for limited mobility.",
    offerings:[{date:"2027-01-07",departure_time:"10:30"}] },

  { code:"DUD-014", name:"Taste of Dunedin on Foot", duration_hrs:4.0, price_usd:249, retail_price_usd:429, activity_level:"moderate", meal_included:false, accessible:false, go_local:true, free_shore:false, _review_activity:true,
    description:"Walk Dunedin's culinary trail with a local food expert, sampling artisan cheese, craft beer, and boutique chocolate at family-run producers. Explore the city's thriving food scene through 2–2.5 hours of walking between tastings. Not wheelchair accessible.",
    offerings:[{date:"2027-01-07",departure_time:"10:30"}] },

  { code:"DUD-008", name:"Pride of the South Brewery & Otago Museum", duration_hrs:5.75, price_usd:0, retail_price_usd:199, activity_level:"moderate", meal_included:true, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Tour the iconic Speight's Brewery — the 'Pride of the South' — and discover how Southern Man lager has been brewed since 1876. Continue to the fascinating Otago Museum before an alehouse lunch. Three hours of walking including brewery stairs.",
    offerings:[{date:"2027-01-07",departure_time:"10:45"}] },

  { code:"DUD-004", name:"Otago Harbor Wildlife Cruise", duration_hrs:2.5, price_usd:0, retail_price_usd:129, activity_level:"light", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Cruise scenic Otago Harbour, New Zealand's deepest natural harbour, spotting albatross, little blue penguins, fur seals, and sea lions from the comfort of a vessel. Mostly seated with panoramic views. Minimal walking required.",
    offerings:[{date:"2027-01-07",departure_time:"12:00"}] },
]},

/* ── CHRISTCHURCH ────────────────────────────────── */
{ name: "Christchurch", country: "New Zealand", dates: ["2027-01-08"], excursions: [
  { code:"CHC-003", name:"Journey Into Middle Earth", duration_hrs:8.0, price_usd:249, retail_price_usd:429, activity_level:"light", meal_included:true, accessible:true, go_local:false, free_shore:false, _review_activity:true,
    description:"Venture into the rugged Southern Alps landscapes used as the backdrop for Middle-earth in Peter Jackson's Lord of the Rings trilogy. Visit filming locations and enjoy a rustic three-course lunch in the mountains. Collapsible wheelchair welcome.",
    offerings:[{date:"2027-01-08",departure_time:"08:30"}] },

  { code:"CHC-006", name:"Christchurch Town & Country", duration_hrs:4.0, price_usd:0, retail_price_usd:169, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Explore Christchurch's remarkable post-earthquake renaissance alongside the rolling farmland of the Banks Peninsula. Walk 90 minutes through the Botanic Gardens and city rebuild projects, then tour a working farm. Some uneven farm surfaces.",
    offerings:[{date:"2027-01-08",departure_time:"08:30"}] },

  { code:"CHC-001", name:"High Country Explorer", duration_hrs:7.5, price_usd:329, retail_price_usd:579, activity_level:"strenuous", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"An adrenaline-fuelled adventure into New Zealand's dramatic Southern Alps via off-road 4WD, culminating in a thrilling jet boat ride through narrow river canyons. A full lunch at a high country lodge included. Adventurous; not for limited mobility.",
    offerings:[{date:"2027-01-08",departure_time:"08:45"}] },

  { code:"CHC-016", name:"Hanmer Springs Escape & Thermal Pools", duration_hrs:8.0, price_usd:0, retail_price_usd:199, activity_level:"light", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Escape to Hanmer Springs Alpine Spa Resort, surrounded by forested mountains, for a relaxing soak in natural thermal mineral pools. Free time to explore the charming alpine village and its boutique shops. Flat terrain; minimal walking required.",
    offerings:[{date:"2027-01-08",departure_time:"08:45"}] },

  { code:"CHC-015", name:"Waipara Wine Trail & Lunch", duration_hrs:6.0, price_usd:139, retail_price_usd:249, activity_level:"light", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Discover the Waipara Valley, one of New Zealand's finest wine regions, sampling celebrated Riesling and Pinot Noir at boutique wineries. A generous platter lunch is served amid the vines with panoramic mountain views. Minimal walking.",
    offerings:[{date:"2027-01-08",departure_time:"09:00"}] },

  { code:"CHC-007", name:"Discover Christchurch", duration_hrs:3.5, price_usd:0, retail_price_usd:179, activity_level:"light", meal_included:false, accessible:true, go_local:false, free_shore:true, _review_activity:true,
    description:"See Christchurch's inspiring rebuild story: the ReStart Mall, Cardboard Cathedral, and riverside Ōtākaro Avon River Corridor. A guided city tour revealing how resilience has shaped a new Christchurch. Limited walking; wheelchair space available.",
    offerings:[{date:"2027-01-08",departure_time:"09:15"},{date:"2027-01-08",departure_time:"13:30"}] },

  { code:"CHC-009", name:"Historic Christchurch & Botanical Garden", duration_hrs:4.0, price_usd:129, retail_price_usd:279, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Ride an open-top bus and heritage tram through Christchurch's Victorian streetscapes, then explore the magnificent Christchurch Botanic Gardens on foot. Includes heritage trolley ride through Hagley Park. Not wheelchair accessible.",
    offerings:[{date:"2027-01-08",departure_time:"09:15"}] },

  { code:"CHC-018", name:"Godley Head Walk", duration_hrs:3.0, price_usd:229, retail_price_usd:399, activity_level:"strenuous", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Hike the spectacular Godley Head Walkway along dramatic coastal cliffs with sweeping views over Banks Peninsula and the Pacific Ocean. Explore WWII gun emplacements and native bush. Strenuous coastal trail walking; not wheelchair accessible.",
    offerings:[{date:"2027-01-08",departure_time:"09:30"}] },

  { code:"CHC-002", name:"Ice & Wings", duration_hrs:5.0, price_usd:109, retail_price_usd:259, activity_level:"moderate", meal_included:false, accessible:true, go_local:false, free_shore:false, _review_activity:true,
    description:"Visit the International Antarctic Centre for an immersive polar experience, then tour the Air Force Museum of New Zealand with its impressive aircraft collection. Three hours of walking including interactive exhibits. Collapsible wheelchair welcome.",
    offerings:[{date:"2027-01-08",departure_time:"09:45"}] },

  { code:"CHC-020", name:"Taste of Christchurch: Riverside Kitchen & Market", duration_hrs:5.0, price_usd:279, retail_price_usd:479, activity_level:"moderate", meal_included:true, accessible:false, go_local:true, free_shore:false, _review_activity:true,
    description:"A culinary journey through the Riverside Market with a local chef, hand-selecting artisan produce before a three-course cooking demonstration and lunch. Stand and walk through the vibrant market setting. Not wheelchair accessible.",
    offerings:[{date:"2027-01-08",departure_time:"10:00"}] },
]},

/* ── PICTON ──────────────────────────────────────── */
{ name: "Picton", country: "New Zealand", dates: ["2027-01-09"], excursions: [
  { code:"PIC-001", name:"Iconic Wines of the Marlborough", duration_hrs:5.0, price_usd:0, retail_price_usd:139, activity_level:"light", meal_included:false, accessible:true, go_local:false, free_shore:true, _review_activity:true,
    description:"Sample Marlborough's world-renowned Sauvignon Blanc at three boutique wineries set among rows of vines stretching to the mountains. Easy-moderate walking of 2.5 hours through vineyard grounds. Collapsible wheelchair OK.",
    offerings:[{date:"2027-01-09",departure_time:"09:30"}] },

  { code:"PIC-006", name:"Queen Charlotte Sounds Round the Bays", duration_hrs:2.5, price_usd:0, retail_price_usd:129, activity_level:"light", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Cruise the impossibly beautiful Queen Charlotte Sound aboard a catamaran, gliding past forested hillsides and secluded bays. Spot dolphins, sea birds, and marine life from the comfort of the vessel deck. Mostly seated cruise.",
    offerings:[{date:"2027-01-09",departure_time:"09:30"}] },

  { code:"PIC-008", name:"The Queen Charlotte Track & Scenic Cruise", duration_hrs:3.5, price_usd:139, retail_price_usd:289, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Cruise into the Sounds by boat then walk a spectacular section of the Queen Charlotte Track through native bush with harbour views. 90 minutes of moderate walking on a well-maintained trail. Not wheelchair accessible.",
    offerings:[{date:"2027-01-09",departure_time:"09:45"}] },

  { code:"PIC-009", name:"Picton Waterfront Walk", duration_hrs:1.5, price_usd:0, retail_price_usd:69, activity_level:"moderate", meal_included:false, accessible:false, go_local:true, free_shore:true, _review_activity:true,
    description:"Stroll Picton's picturesque foreshore with a knowledgeable local guide, discovering the town's maritime history, the Edwin Fox Museum, and the Edwin Fox heritage ship. Includes a steep incline to a scenic lookout. 60 minutes of walking.",
    offerings:[{date:"2027-01-09",departure_time:"09:45"}] },

  { code:"PIC-002", name:"Marlborough Gourmet Wine & Food", duration_hrs:6.0, price_usd:249, retail_price_usd:399, activity_level:"light", meal_included:true, accessible:true, go_local:false, free_shore:false, _review_activity:true,
    description:"An epicurean tour of Marlborough's finest estates, pairing award-winning wines with artisan cheese and olive oil tastings. A multi-course lunch at a celebrated estate restaurant completes this gourmet indulgence. Easy-moderate walking; collapsible wheelchair welcome.",
    offerings:[{date:"2027-01-09",departure_time:"10:00"}] },

  { code:"PIC-011", name:"Kayak Queen Charlotte Sound", duration_hrs:3.5, price_usd:139, retail_price_usd:289, activity_level:"strenuous", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Paddle a sea kayak through the calm, sheltered waters of Queen Charlotte Sound, exploring hidden coves and pristine beaches inaccessible by road. 2.5 hours of kayaking with stunning forested scenery. Not suitable for limited mobility.",
    offerings:[{date:"2027-01-09",departure_time:"10:00"}] },

  { code:"PIC-003", name:"Marlborough Memories", duration_hrs:3.75, price_usd:0, retail_price_usd:139, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"A scenic overview of the Marlborough wine region, including the Taylor Pass lookout with panoramic valley views and visits to two contrasting wineries. 90 minutes of easy-moderate walking on vineyard paths. Not wheelchair accessible.",
    offerings:[{date:"2027-01-09",departure_time:"10:15"}] },

  { code:"PIC-005", name:"Green-Shell Mussel Cruise", duration_hrs:3.5, price_usd:259, retail_price_usd:409, activity_level:"light", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Board a working mussel boat and cruise the Sounds as the crew demonstrate sustainable aquaculture, then feast on freshly harvested New Zealand green-shell mussels with local wine. Mostly seated aboard the vessel.",
    offerings:[{date:"2027-01-09",departure_time:"10:30"}] },
]},

/* ── WELLINGTON ──────────────────────────────────── */
{ name: "Wellington", country: "New Zealand", dates: ["2027-01-10"], excursions: [
  { code:"WLG-003", name:"Seal Coast Safari", duration_hrs:3.5, price_usd:149, retail_price_usd:299, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Venture to Wellington's wild south coast in a specially equipped off-road vehicle, visiting fur seal colonies on dramatic rocky headlands battered by the Tasman Sea. Sandy and rocky beach walking; not wheelchair accessible.",
    offerings:[{date:"2027-01-10",departure_time:"08:00"}] },

  { code:"WLG-018", name:"Wairarapa Wineries & Lunch", duration_hrs:6.5, price_usd:249, retail_price_usd:439, activity_level:"light", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Cross the Remutaka Range to the Wairarapa wine country, famous for bold Pinot Noir, visiting two acclaimed wineries with cellar door tastings. A long leisurely lunch at a vineyard restaurant completes this indulgent day. Minimal walking.",
    offerings:[{date:"2027-01-10",departure_time:"08:00"}] },

  { code:"WLG-006", name:"Wellington City Sights", duration_hrs:3.5, price_usd:0, retail_price_usd:129, activity_level:"light", meal_included:false, accessible:true, go_local:false, free_shore:true, _review_activity:true,
    description:"Glide up to Mount Victoria lookout for sweeping harbour views before exploring Te Papa Museum and the vibrant Cuba Street arts district. 90 minutes of easy walking through flat city streets. Collapsible wheelchair OK.",
    offerings:[{date:"2027-01-10",departure_time:"08:15"}] },

  { code:"WLG-010", name:"In the Footsteps of Lord of the Rings", duration_hrs:3.5, price_usd:0, retail_price_usd:149, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Explore Wellington's Lord of the Rings film locations with Weta Workshop props and behind-the-scenes stories from the trilogy's production. Walk through filming sites in the hills above Wellington on unpaved trails. 2 hours of moderate walking.",
    offerings:[{date:"2027-01-10",departure_time:"08:30"},{date:"2027-01-10",departure_time:"09:30"}] },

  { code:"WLG-004", name:"Wellington's Impressive Food & Art Scene", duration_hrs:6.0, price_usd:319, retail_price_usd:499, activity_level:"moderate", meal_included:true, accessible:false, go_local:true, free_shore:false, _review_activity:true,
    description:"Immerse in Wellington's acclaimed culinary and arts scene with a local guide: a chef-led tasting lunch at a celebrated restaurant, Te Papa Museum highlights, and gallery visits. 3–5km of walking through the city. Not wheelchair accessible.",
    offerings:[{date:"2027-01-10",departure_time:"09:00"}] },

  { code:"WLG-007", name:"Wellington Harbour & the Storm Coast", duration_hrs:4.0, price_usd:0, retail_price_usd:149, activity_level:"light", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Explore Wellington's iconic harbour foreshore and the rugged south coast where the Tasman Sea meets Cook Strait, visiting a working farm along the way. Walking at guests' discretion; farm terrain.",
    offerings:[{date:"2027-01-10",departure_time:"09:15"}] },

  { code:"WLG-009", name:"Te Papa Tongarewa Museum", duration_hrs:4.0, price_usd:0, retail_price_usd:149, activity_level:"moderate", meal_included:false, accessible:true, go_local:false, free_shore:true, _review_activity:true,
    description:"Spend a rich morning at Te Papa, New Zealand's national museum, exploring Māori treasures, natural history, and interactive exhibits across multiple floors. 2 hours of easy-moderate walking through galleries. Collapsible wheelchair OK.",
    offerings:[{date:"2027-01-10",departure_time:"09:30"}] },

  { code:"WLG-WT1", name:"Wellington Sights and Yoga in the Garden", duration_hrs:3.5, price_usd:139, retail_price_usd:239, activity_level:"moderate", meal_included:false, accessible:false, go_local:true, free_shore:false, _review_activity:true,
    description:"Begin with a guided city highlights tour, then unwind with a yoga session in Wellington's Botanic Garden led by a local instructor. Combines sightseeing with mindful movement. Walking and yoga on grass; not wheelchair accessible.",
    offerings:[{date:"2027-01-10",departure_time:"09:45"}] },

  { code:"WLG-017", name:"Shenandoah Heritage Experience", duration_hrs:3.5, price_usd:149, retail_price_usd:259, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Visit Shenandoah Station, a working heritage farm in the Hutt Valley, for demonstrations of traditional New Zealand rural skills including sheep shearing and dog trials. Farm walking on uneven terrain. Not wheelchair accessible.",
    offerings:[{date:"2027-01-10",departure_time:"10:00"}] },
]},

/* ── GISBORNE ────────────────────────────────────── */
{ name: "Gisborne", country: "New Zealand", dates: ["2027-01-11"], excursions: [
  { code:"GIS-002", name:"Gisborne City Cycling Tour", duration_hrs:2.5, price_usd:0, retail_price_usd:199, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Pedal through Gisborne on a guided bicycle tour, exploring Māori cultural sites, the Captain Cook memorial, and the first city in the world to see each new day's sunrise. 6.5 miles of cycling on mostly flat terrain.",
    offerings:[{date:"2027-01-11",departure_time:"10:30"}] },

  { code:"GIS-001", name:"Gisborne Orientation", duration_hrs:1.5, price_usd:0, retail_price_usd:59, activity_level:"light", meal_included:false, accessible:true, go_local:false, free_shore:true, _review_activity:true,
    description:"A panoramic coach tour introducing Gisborne's key landmarks: the Young Nick's Head lookout, Poverty Bay winery district, and the waterfront Tūranganui River. No stops; entirely aboard the coach. Collapsible wheelchair OK.",
    offerings:[{date:"2027-01-11",departure_time:"10:45"},{date:"2027-01-11",departure_time:"12:45"},{date:"2027-01-11",departure_time:"14:45"}] },

  { code:"GIS-004", name:"Eastwoodhill Arboretum", duration_hrs:3.5, price_usd:0, retail_price_usd:149, activity_level:"light", meal_included:false, accessible:true, go_local:false, free_shore:true, _review_activity:true,
    description:"Wander through Eastwoodhill, New Zealand's National Arboretum, with over 4,000 exotic tree species on 135 hectares of stunning hill country. Walk at your own pace through graded forest paths. Collapsible wheelchair accessible on most paths.",
    offerings:[{date:"2027-01-11",departure_time:"10:45"}] },

  { code:"GIS-006", name:"Steam Train to Muriwai", duration_hrs:3.0, price_usd:0, retail_price_usd:179, activity_level:"light", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Board a vintage steam train for a nostalgic journey through lush Poverty Bay farmland to the Muriwai Valley, with a complimentary glass of Gisborne sparkling wine. Minimal walking; three steep steps to board the heritage carriages.",
    offerings:[{date:"2027-01-11",departure_time:"11:00"}] },

  { code:"GIS-007", name:"First Light, First Stories: A Gisborne Walk", duration_hrs:2.0, price_usd:0, retail_price_usd:119, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Walk the storied waterfront of the world's first city to greet each dawn, exploring sites of Māori legend, Captain Cook's first landing, and Gisborne's vibrant wine culture. 4–5km of walking; not strenuous.",
    offerings:[{date:"2027-01-11",departure_time:"11:15"}] },

  { code:"GIS-008", name:"Rural New Zealand Experience", duration_hrs:3.5, price_usd:179, retail_price_usd:309, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Experience authentic New Zealand farm life at a working station in the hills above Gisborne, with sheep dog demonstrations, shearing displays, and a farm vehicle tour. Uneven farm terrain; not wheelchair accessible.",
    offerings:[{date:"2027-01-11",departure_time:"11:45"}] },

  { code:"GIS-009", name:"Heart of Maori Culture", duration_hrs:2.5, price_usd:329, retail_price_usd:569, activity_level:"moderate", meal_included:false, accessible:false, go_local:true, free_shore:false, _review_activity:true,
    description:"An exclusive cultural immersion at a local marae, where a Māori family shares their heritage through traditional welcome ceremonies, storytelling, waiata (song), and carving. Short periods of standing and walking on grassy ground.",
    offerings:[{date:"2027-01-11",departure_time:"11:45"}] },

  { code:"GIS-003", name:"Leading Gisborne Wineries", duration_hrs:4.0, price_usd:0, retail_price_usd:149, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Tour three of Gisborne's acclaimed wineries — known for Chardonnay grown in New Zealand's sunniest region — with guided cellar door tastings and vineyard walks. Easy-moderate walking on vineyard paths. Not wheelchair accessible.",
    offerings:[{date:"2027-01-11",departure_time:"12:00"}] },
]},

/* ── ROTORUA / TAURANGA ──────────────────────────── */
{ name: "Rotorua / Tauranga", country: "New Zealand", dates: ["2027-01-12"], excursions: [
  { code:"TAU-019", name:"Te Puia & Polynesian Spa", duration_hrs:8.0, price_usd:309, retail_price_usd:549, activity_level:"moderate", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Visit Te Puia's geothermal valley with its erupting Pōhutu Geyser and Māori arts school, then relax in the legendary Polynesian Spa's mineral pools. A hangi-inspired lunch and kiwi cultural show included. 3 hours walking; ramps available but not fully wheelchair accessible.",
    offerings:[{date:"2027-01-12",departure_time:"08:45"}] },

  { code:"TAU-021", name:"Kiwi Hatchery & Agrodome Farm", duration_hrs:7.0, price_usd:189, retail_price_usd:329, activity_level:"moderate", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Visit Rainbow Springs Kiwi Wildlife Park's acclaimed hatchery, supporting New Zealand's endangered national bird, before the Agrodome's lively farm show with 19 sheep breeds. Buffet lunch included. Dirt tracks; not wheelchair accessible.",
    offerings:[{date:"2027-01-12",departure_time:"08:45"}] },

  { code:"TAU-026", name:"Kohutapu Lodge: The Story of a People and Place", duration_hrs:8.0, price_usd:269, retail_price_usd:469, activity_level:"moderate", meal_included:true, accessible:false, go_local:true, free_shore:false, _review_activity:true,
    description:"An intimate tribal experience at Kohutapu Lodge on the shores of Lake Rotoiti, where Māori hosts share their ancestral story through ceremony, bush walking, and a traditional hangi feast. Bush walking on uneven terrain.",
    offerings:[{date:"2027-01-12",departure_time:"08:45"}] },

  { code:"TAU-008", name:"The Rotorua Experience", duration_hrs:6.5, price_usd:129, retail_price_usd:279, activity_level:"moderate", meal_included:true, accessible:true, go_local:false, free_shore:false, _review_activity:true,
    description:"A comprehensive Rotorua introduction: the sulphurous Wai-O-Tapu Thermal Wonderland, the Agrodome farm show, and a traditional Māori hangi-inspired lunch at a geothermal village. Half mile of walking plus 3-hour drive. Collapsible wheelchair OK.",
    offerings:[{date:"2027-01-12",departure_time:"09:00"}] },

  { code:"TAU-023", name:"Mauao Walking Tour & Workshop", duration_hrs:3.0, price_usd:0, retail_price_usd:179, activity_level:"strenuous", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Hike to the summit of Mauao (Mount Maunganui) along the base track and summit trail, with breathtaking views of the Bay of Plenty and beyond. A challenging 3.5km walk with uneven gravel paths and significant elevation gain.",
    offerings:[{date:"2027-01-12",departure_time:"09:00"}] },

  { code:"TAU-009", name:"Rotorua Skyline & Agrodome", duration_hrs:6.5, price_usd:119, retail_price_usd:279, activity_level:"light", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Glide up Skyline Rotorua's gondola for panoramic crater lake views, then experience the Agrodome's celebrated farm show featuring 19 sheep breeds and live shearing. Luge rides optional. Not wheelchair accessible.",
    offerings:[{date:"2027-01-12",departure_time:"09:15"}] },

  { code:"TAU-001", name:"Highlights of Tauranga & Maori Culture", duration_hrs:4.0, price_usd:0, retail_price_usd:169, activity_level:"light", meal_included:false, accessible:true, go_local:false, free_shore:true, _review_activity:true,
    description:"Explore Tauranga's key attractions: The Elms Mission House, a Māori cultural presentation, and the stunning views from the Kaimai Range. Minimal walking with comfortable coach travel throughout. Collapsible wheelchair OK.",
    offerings:[{date:"2027-01-12",departure_time:"09:30"}] },

  { code:"TAU-005", name:"Tauranga Highlights", duration_hrs:3.5, price_usd:0, retail_price_usd:99, activity_level:"light", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"A quick yet comprehensive tour of Tauranga's highlights, from the volcanic White Island viewpoint to the historic McLaren Falls Park and the city waterfront. Approximately 500 yards of flat walking.",
    offerings:[{date:"2027-01-12",departure_time:"09:45"}] },

  { code:"TAU-1GT", name:"Chef Led Manaaki & Flavors of the Land", duration_hrs:6.5, price_usd:379, retail_price_usd:819, activity_level:"light", meal_included:true, accessible:true, go_local:true, free_shore:false, _review_activity:true,
    description:"A premium culinary journey through the Bay of Plenty with an award-winning Māori chef, hand-harvesting local ingredients before a feast celebrating manaakitanga (hospitality). Includes Jammery tasting and a traditional hangi meal. Collapsible wheelchair OK.",
    offerings:[{date:"2027-01-12",departure_time:"10:00"}] },

  { code:"TAU-GG1", name:"Kayak on Lake Rotoiti", duration_hrs:6.5, price_usd:179, retail_price_usd:309, activity_level:"strenuous", meal_included:false, accessible:false, go_local:true, free_shore:false, _review_activity:true,
    description:"Paddle a kayak across the pristine waters of Lake Rotoiti, guided by a local naturalist through the Okawa Bay and the sacred Te Weta geothermal inlet. 2.5 hours of paddling in the heart of the Rotorua lakes district. Not suitable for limited mobility.",
    offerings:[{date:"2027-01-12",departure_time:"10:00"}] },

  { code:"TAU-WT1", name:"Hells Gate Mud Bath Retreat", duration_hrs:6.0, price_usd:209, retail_price_usd:369, activity_level:"light", meal_included:true, accessible:false, go_local:true, free_shore:false, _review_activity:true,
    description:"Soak in the geothermal mud baths and sulphur pools of Hells Gate — Rotorua's most active geothermal reserve — before a steam-cooked hangi lunch in a natural earth oven. Limited walking; a deeply restorative wellness experience.",
    offerings:[{date:"2027-01-12",departure_time:"10:15"}] },

  { code:"TAU-006", name:"Maori Culture Highlights", duration_hrs:4.0, price_usd:0, retail_price_usd:139, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Experience the heart of Māori culture at Tamaki Māori Village, with a traditional pōwhiri welcome, haka performance, and guided tour of a recreated pre-European village. 2 hours of easy walking. Not wheelchair accessible.",
    offerings:[{date:"2027-01-12",departure_time:"10:30"}] },

  { code:"TAU-016", name:"Ngati Makino - The Little Tribe That Could", duration_hrs:5.5, price_usd:149, retail_price_usd:299, activity_level:"moderate", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"An authentic encounter with the Ngāti Makino people at their sacred Lake Rotoiti marae, sharing their remarkable story of cultural revival through ceremony and a traditional hangi lunch. Farm walking on marae grounds.",
    offerings:[{date:"2027-01-12",departure_time:"10:45"}] },

  { code:"TAU-018", name:"Truffle Treasure", duration_hrs:4.5, price_usd:139, retail_price_usd:289, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Hunt for elusive New Zealand black truffles with trained dogs on a premium truffle farm, then learn the art of truffle cookery with a chef demonstration and tasting. Farm and coastal drive; moderate walking.",
    offerings:[{date:"2027-01-12",departure_time:"10:45"}] },

  { code:"TAU-020", name:"Taste of Tauranga", duration_hrs:5.0, price_usd:199, retail_price_usd:339, activity_level:"moderate", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Discover Tauranga's thriving artisan food scene with visits to a craft brewery, a kiwifruit orchard, and a beachside café for a light lunch with ocean views. Moderate walking between venues. Not wheelchair accessible.",
    offerings:[{date:"2027-01-12",departure_time:"11:00"}] },

  { code:"TAU-022", name:"Wai Ariki Hot Springs & Spa", duration_hrs:5.5, price_usd:329, retail_price_usd:569, activity_level:"light", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Indulge at Wai Ariki Hot Springs & Spa, Rotorua's newest luxury wellness destination, with its geothermal mineral pools, wellness rituals, and Māori healing traditions. Limited walking; a deeply restorative wellness escape.",
    offerings:[{date:"2027-01-12",departure_time:"12:00"}] },
]},

/* ── BAY OF ISLANDS ──────────────────────────────── */
{ name: "Bay of Islands", country: "New Zealand", dates: ["2027-01-13"], excursions: [
  { code:"BAY-001", name:"Cruise to Cape Brett - Hole in the Rock", duration_hrs:3.0, price_usd:79, retail_price_usd:229, activity_level:"light", meal_included:false, accessible:true, go_local:false, free_shore:false, _review_activity:true,
    description:"Cruise through the stunning Bay of Islands to the iconic Hole in the Rock at Cape Brett, passing 150 islands and spotting dolphins along the way. Mostly seated with spectacular scenery throughout. Collapsible wheelchair OK.",
    offerings:[{date:"2027-01-13",departure_time:"09:30"}] },

  { code:"BAY-003", name:"Kerikeri and Waitangi Highlights", duration_hrs:3.5, price_usd:0, retail_price_usd:109, activity_level:"light", meal_included:false, accessible:true, go_local:false, free_shore:true, _review_activity:true,
    description:"Visit the Waitangi Treaty Grounds where New Zealand's founding document was signed, then explore historic Kerikeri with its stone store and mission house. Approximately 100 yards then 700 yards of walking. Collapsible wheelchair OK.",
    offerings:[{date:"2027-01-13",departure_time:"09:45"},{date:"2027-01-13",departure_time:"10:30"}] },

  { code:"BAY-005", name:"Glow Worm Cave & Puketi Kauri Forest", duration_hrs:5.25, price_usd:0, retail_price_usd:159, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Explore an enchanting glow worm cave lit by thousands of bioluminescent larvae, then walk through the ancient Puketi Kauri Forest among 500-year-old kauri trees. Considerable walking on uneven cave ground and forest trails.",
    offerings:[{date:"2027-01-13",departure_time:"09:45"},{date:"2027-01-13",departure_time:"10:30"}] },

  { code:"BAY-002", name:"Kayaking on Waitangi Estuary", duration_hrs:3.0, price_usd:0, retail_price_usd:109, activity_level:"strenuous", meal_included:false, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Paddle a sea kayak through the tranquil Waitangi River estuary, exploring mangrove forests and spotting coastal birdlife in the Bay of Islands. 2.5 hours of paddling on calm waters. Not suitable for limited mobility.",
    offerings:[{date:"2027-01-13",departure_time:"10:00"}] },

  { code:"BAY-006", name:"Relaxing Cruise to Historic Russell", duration_hrs:3.5, price_usd:0, retail_price_usd:159, activity_level:"light", meal_included:true, accessible:false, go_local:false, free_shore:true, _review_activity:true,
    description:"Sail to Russell, New Zealand's first capital, for a guided walk through its charming historic streets and a New Zealand lunch aboard the return cruise. Walking at discretion in Russell town. Not wheelchair accessible.",
    offerings:[{date:"2027-01-13",departure_time:"10:00"}] },

  { code:"BAY-011", name:"Bay of Island Fishing", duration_hrs:4.0, price_usd:199, retail_price_usd:339, activity_level:"light", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Cast your line in the legendary Bay of Islands, one of the world's premier game fishing destinations, targeting snapper, kingfish, and seasonal species. Mostly seated aboard a purpose-built fishing vessel with all equipment provided.",
    offerings:[{date:"2027-01-13",departure_time:"10:15"}] },

  { code:"BAY-012", name:"Lagoon Bay Cruise", duration_hrs:4.5, price_usd:169, retail_price_usd:299, activity_level:"moderate", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Cruise to a secluded island in the Bay of Islands for a picnic lunch and free time to snorkel, swim, or explore the natural island trail. An optional steep hill leads to panoramic views. Uneven island terrain.",
    offerings:[{date:"2027-01-13",departure_time:"10:15"}] },

  { code:"BAY-016", name:"Flavours and Forest Walk", duration_hrs:5.5, price_usd:289, retail_price_usd:509, activity_level:"moderate", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Walk a stunning forest boardwalk through ancient kauri trees, then visit an artisan producer for tastings of local honey, olive oil, and wines, finishing with a generous antipasto and wine feast. Not wheelchair accessible.",
    offerings:[{date:"2027-01-13",departure_time:"10:15"}] },

  { code:"BAY-017", name:"Paroa Bay Winery & Russell Highlights", duration_hrs:6.0, price_usd:299, retail_price_usd:529, activity_level:"moderate", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Visit the acclaimed Paroa Bay Winery for cellar door tastings and a family-style buffet lunch with bay views, then explore Russell's Georgian-era streets and Christ Church. Walking in Russell; not wheelchair accessible.",
    offerings:[{date:"2027-01-13",departure_time:"10:15"}] },

  { code:"BAY-015", name:"Scenic Vintage Railway & Flavours of the Bay", duration_hrs:3.5, price_usd:149, retail_price_usd:259, activity_level:"light", meal_included:true, accessible:true, go_local:false, free_shore:false, _review_activity:true,
    description:"Board a vintage train for a scenic journey through the Bay of Islands, enjoying a curated tasting box of local artisan foods and wines. Wheelchair ramps provided; a relaxed, seated cultural journey.",
    offerings:[{date:"2027-01-13",departure_time:"10:30"}] },

  { code:"BAY-007", name:"Waka Taia-Mai Exploration", duration_hrs:3.0, price_usd:0, retail_price_usd:109, activity_level:"strenuous", meal_included:false, accessible:false, go_local:true, free_shore:true, _review_activity:true,
    description:"Paddle a traditional Māori waka (war canoe) under the guidance of a tribal elder, learning chants and paddling techniques on the historic Waitangi River. 2.5 hours of moderate-strenuous paddling. Not suitable for limited mobility.",
    offerings:[{date:"2027-01-13",departure_time:"10:45"}] },

  { code:"BAY-010", name:"Waitangi Treaty Grounds", duration_hrs:3.0, price_usd:0, retail_price_usd:159, activity_level:"moderate", meal_included:false, accessible:false, go_local:true, free_shore:true, _review_activity:true,
    description:"An in-depth exploration of the Waitangi Treaty Grounds with Māori cultural guides, visiting the carved meeting house, the world's largest war canoe, and the original treaty signing site. Walking across the grounds; not wheelchair accessible.",
    offerings:[{date:"2027-01-13",departure_time:"11:00"}] },

  { code:"BAY-013", name:"Island and Bay Adventure", duration_hrs:2.5, price_usd:129, retail_price_usd:219, activity_level:"moderate", meal_included:false, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Speed across the Bay of Islands to a pristine island for snorkelling, kayaking, and exploring a natural island trail with panoramic bay views. Moderate incline on island; not suitable for limited mobility.",
    offerings:[{date:"2027-01-13",departure_time:"11:00"}] },

  { code:"BAY-014", name:"Island Experience with Lunch", duration_hrs:3.75, price_usd:149, retail_price_usd:259, activity_level:"light", meal_included:true, accessible:false, go_local:false, free_shore:false, _review_activity:true,
    description:"Cruise to a private island in the Bay of Islands for a buffet lunch in an idyllic beachside setting, with optional activities including swimming and a gentle scenic walk. An optional steep hill leads to panoramic views; otherwise easy terrain.",
    offerings:[{date:"2027-01-13",departure_time:"11:15"}] },
]},

]};

console.log(
  'EXCURSION_DATA loaded:',
  EXCURSION_DATA.ports.length, 'ports,',
  EXCURSION_DATA.ports.reduce((s,p)=>s+p.excursions.length,0), 'excursions,',
  EXCURSION_DATA.ports.reduce((s,p)=>s+p.excursions.reduce((t,e)=>t+e.offerings.length,0),0), 'offerings'
);
