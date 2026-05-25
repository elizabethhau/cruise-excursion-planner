export const FAMILY = [
  "Dad",
  "Mom",
  "Elizabeth",
  "Abby",
  "Jonathan",
  "Luke",
  "James",
];

export const SHEET_NAMES = {
  votes: "Votes",
  schedule: "Schedule",
  excursions: "Excursions",
  requests: "Requests",
};
export const SHEET_HEADERS = {
  Votes: [
    "Timestamp",
    "PersonName",
    "TourCode",
    "Vote",
    "OfferingDate",
    "OfferingTime",
  ],
  Schedule: [
    "Timestamp",
    "PersonName",
    "TourCode",
    "Date",
    "DepartureTime",
    "Status",
  ],
  Excursions: [
    "Code",
    "Name",
    "Port",
    "DurationHrs",
    "PriceUSD",
    "RetailPriceUSD",
    "ActivityLevel",
    "MealIncluded",
    "Accessible",
    "GoLocal",
    "FreeShore",
  ],
  Requests: [
    "Timestamp",
    "RequesterName",
    "TourCode",
    "Date",
    "DepartureTime",
    "Note",
  ],
};

export const EXCURSION_DATA = {
  ports: [
    /* ── MELBOURNE ──────────────────────────────────── */
    {
      name: "Melbourne",
      country: "Australia",
      dates: ["2026-12-31", "2027-01-01"],
      excursions: [
        {
          code: "MEB-GL1",
          name: "Melbourne Through the Eyes of a Local",
          duration_hrs: 4.5,
          price_usd: 249,
          retail_price_usd: 429,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: true,
          free_shore: false,
          description:
            "Explore Melbourne with a local that will show you places off the beaten path that will leave you with a true understanding of the city. To reach downtown, you will ride the tram with plenty of Melbournites who will be engaged in conversation. You might just listen in or the guide may introduce you and see if the other commuters would like to offer their opinions of living in Melbourne. Then, depending on your interests, the guide will lead you to areas that most tourists never see. You might head to laneways adorned with stencil art and murals, peruse small boutiques with one-of-a-kind merchandise and pass through residential neighborhoods that are up-and-coming or immensely affluent. If you’re sports-minded, you may like to take the tram to a cricket grounds or where the locals play Aussie-rules football. The guide will also take you to a favorite café, where you can enjoy a cup of coffee and discuss your impressions of Melbourne.\n·Ride the tram into Melbourne with a local guide and other Melbournites.\n·See many of the hidden, out-of-the-way places that are characteristic of Melbourne. ·Choose an interest such as shopping or art and see the best places to enjoy them. ·Discuss your impressions of Melbourne over coffee with locals and your guide. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThis tour includes approximately 3 hours of walking/standing. Guests will need to manage uneven and flat surfaces throughout the excursion. The tour is not available to wheelchair guests and may not be suitable for those with mobility concerns who are cautioned to carefully evaluate their personal level of stamina and ability. Casual, weather-appropriate clothing and comfortable, flat walking shoes are suggested.",
          offerings: [{ date: "2026-12-31", departure_time: "08:00" }],
        },

        {
          code: "MEB-015",
          name: "Werribee Zoo Guided Tour Day",
          duration_hrs: 4.5,
          price_usd: 0,
          retail_price_usd: 179,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Enjoy two vastly different guided tours through Werribee Zoo – one featuring indigenous Australian animals, the other focused on animals that roam the African savannah. The zoo provides an open-range environment that emulates a variety of habitats that allow the animals to live freely as if they were in the wild. As you follow the trail through the outback, you may spot iconic Australian creatures such as kangaroos, koalas, Tammar wallabies and emus, flightless birds that can run up to 30 miles per hour. After a cup of tea and fresh-baked scones in the zoo’s historical bluestone shearing shed, you will board an open-sided safari train and ride through the savannah. Elands, nyalas waterbucks and other antelopes are plentiful, but you can also expect to see rarer animals that are extinct in the wild. They include scimitar-horned oryxes and stocky Przewalski’s horses, a naturally skittish equine species that humans have never tamed.\n·Learn how Werribee Zoo fights wildlife extinction through its captive breeding program. ·Observe indigenous Australian animals while following a trail through the outback area. ·Ride a safari train through a savannah where African animals roam freely.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThose guests with mobility concerns are cautioned to evaluate their personal level of ability as they must walk/stand for 1 hour during the ranger guided tour. The order of the sites visited or viewed may vary.",
          offerings: [
            { date: "2026-12-31", departure_time: "08:15" },
            { date: "2027-01-01", departure_time: "10:00" },
          ],
        },

        {
          code: "MEB-001",
          name: "Sovereign Hill & Wildlife Park",
          duration_hrs: 8.5,
          price_usd: 239,
          retail_price_usd: 419,
          activity_level: "moderate",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Take a full-immersion trip back to Gold Rush days in a town that never left them, and tour a wildlife park where the fauna roams free. This adventurous day begins with a 90-minute drive to the town of Sovereign Hill, a true living museum where the shops, miners’ huts, cottages, hotels and other buildings all carefully replicate the style of the 1850s, when gold dust and nuggets were how you paid your bar bill. Informative displays document daily life in the era and the craft and jewelry shops offer similar goods to those sold during the Rush. Lunch will be served at a popular local eatery before moving on to historic Ballarat – it’s a larger city, full of showy architecture built with the considerable wealth hauled out of the ground after the first strike was discovered nearby in 1851. On a drive through the charming city center, your driver will point out Ballarat’s most notable highlights, including impressive botanical gardens planted along the shore on Lake Wendouree at the peak of the era. Later, on a visit to Ballarat Wildlife Park, you’ll encounter free-roaming kangaroos, koalas, emus, Tasmanian devils, wombats and other iconic Aussie animals.\n·Travel by coach across scenic Victoria terrain to the area where the Gold Rush of the 1850s began.\n·Step into a living time capsule in Sovereign Hill, a perfectly recreated gold mining town – right down to the stagecoaches and spittoons. ·Wander period streets, browse period shops, and enjoy lunch served with modern utensils at a popular restaurant.\n·Enjoy a guided drive through the historic center of Ballarat, the actual town where the Rush began.\n·Visit Ballarat Wildlife Park and stroll among kangaroos, koalas, wombats and other native Aussie fauna.\n·Wear casual, weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour involves up to 3-hours of walking/standing, at guests’ discretion during free time at Sovereign Hill and Ballarat Wildlife Park. Terrain varies from dirt and sealed roads to timber paths and grass areas, steps and inclines. Tour is not recommended for wheelchair guests or those with walking or mobility concerns.",
          offerings: [{ date: "2026-12-31", departure_time: "08:30" }],
        },

        {
          code: "MEB-005",
          name: "Countryside Victoria",
          duration_hrs: 4.5,
          price_usd: 0,
          retail_price_usd: 129,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Depart your ship and travel to Sherbrooke Forest, home to some of the world’s tallest hardwood species. Here you will enter entering a fantastic rainforest of spectacular Mountain Ash, stringybark, lush tree ferns. Keep a keen eye for unique Australian wildlife such as lyrebirds who like to come out especially after a rainy day. Visit Olinda or another of the area’s charming townships. These small villages are renowned for excellent craft shops. Enjoy free time to browse the shops for the work of local artists that may include jewelry, glassware, pottery, leather goods, woodcarvings and even candy shops to remind you of yesteryear. Before returning to your ship, enjoy a brief city orientation and travel through suburban Melbourne.\n·Travel by coach into the unspoiled Dandenong region for a walk in Sherbrooke Forest. ·Marvel at sky-high hardwoods.\n·Visit Olinda or another of the local mountain towns renowned for their excellent craft shops. ·Enjoy a panoramic orientation spin through Melbourne on the return.\n·Wear casual, weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended. ·Bring a hat, sunglasses and sunscreen as needed.\nThis tour is not recommended for wheelchair guests. Those with mobility concerns are cautioned to evaluate their personal level of ability as there is some moderate walking and unpaved and uneven surfaces to negotiate. Wildlife sightings, although likely, cannot be guaranteed.",
          offerings: [
            { date: "2026-12-31", departure_time: "08:30" },
            { date: "2027-01-01", departure_time: "08:30" },
          ],
        },

        {
          code: "MEB-006",
          name: "Leisurely Melbourne",
          duration_hrs: 4.0,
          price_usd: 0,
          retail_price_usd: 139,
          activity_level: "light",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: true,
          description:
            "Sit back and enjoy this panoramic orientation drive through Australia’s ‘most livable city.’ It’s vibrant, multi-cultural, sporting, fashionable, food-and-culture-loving and the capital of Victoria – and all that’s just for starters. You’ll visit the bayside suburb of St. Kilda, with its lovely beaches, Esplanade and hopping café scene. See the F1 Grand Prix circuit wrapping around Albert Park Lake, and stop for photos at the landmark Shrine of Remembrance War memorial, maybe strolling across to the Royal Botanic Gardens’ gift shop. Drive past the Rod Laver Tennis Center, where the Australian Open is played each January, and the Melbourne Cricket Ground made famous as the venue for the 1956 Olympic Games, now home to thundering Aussie Rules Football and stadium concert crowds. In the heart of the city’s historic and governmental quarter, see The Treasury, Parliament House, the Windsor Hotel, Princess Theatre and the impressive Gothic buildings that line Collins Street. And travel through the Carlton district, where the rococo Royal Exhibition Building stands alongside the ultramodern Melbourne Museum. Throughout the drive, your professional guide’s commentary will bring the city’s history and backstories to life.\n·Enjoy a panoramic introduction to Melbourne, seeing the top sights and learning about their history.\n·See everything from the beachside Esplanade in St. Kilda to the ornate Princess Theater built in 1854.\n·Pass sporting icons like the Rod Laver Tennis Center, the Melbourne Cricket Ground and the lakeside Formula One race circuit in Albert Park. ·• Visit the colonnaded Shrine of Remembrance, War memorial.\n·Wear casual, weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nWalking on this tour is mainly at guest’s discretion. The tour is available to wheelchair guests who are able to both make their way on and off the coach and sit in a coach seat. Guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina before participating. The order of sites visited or viewed may vary.",
          offerings: [
            { date: "2026-12-31", departure_time: "09:00" },
            { date: "2027-01-01", departure_time: "09:00" },
            { date: "2027-01-01", departure_time: "11:00" },
          ],
        },

        {
          code: "MEB-007",
          name: "Melbourne and Gardens",
          duration_hrs: 4.5,
          price_usd: 0,
          retail_price_usd: 129,
          activity_level: "moderate",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: true,
          description:
            "This excursion combines panoramic sightseeing, a historic garden walk, and sky-high Melbourne views from a 92-story skyscraper. The half-day begins with a drive to Fitzroy Gardens in the city center, its earliest plantings dating from 1860. Appreciate the showy Conservatory and an external visit of a charming two-story brick cottage hidden among the trees – the family home of famed explorer Captain James Cook, transplanted to this garden from Yorkshire. Rejoining your coach, settle in for a spin past landmark buildings including The Treasury, Parliament House, the Windsor Hotel, Princess Theatre and the marvelous Gothic lineup along Collins Street. A stop at the iconic Shrine of Remembrance, commemorating Australians who fought in wars and peacekeeping operations, allows time for photos and a climb up for balcony views if you’re feeling energetic. But the Melbourne views coming next will trump any others today as you visit Eureka Skydeck 88 atop one of the world’s tallest residential buildings. Lightning fast elevators whisk you from the ground to the Skydeck in a mere 40 seconds, and from the floor-to-ceiling windows up here you’ll have thrilling 360-degree views of the entire city, Port Phillip Bay and the mountains of the Dandenong Range.\n·Enjoy a narrated highlights drive through Melbourne City, passing many of its landmark sights.\n·Stop at the colonnaded Shrine of Remembrance, commemorating those who served in wars and peacekeeping operations.\n·Take a guided walk-through Fitzroy Gardens, including the flower-filled Conservatory and an external visit of the Captain Cook’s Cottage. Zip to the top of the\nEureka Tower in 40 seconds and gasp at the city-wide views from Skydeck 88. ·Wear casual, weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes approximately 40 minutes of walking over mostly even surfaces. Only an external visit of the Cook's Cottage is included in this experience. Internal visits are possible at guests own expense. Time and availability are limited. The tour is available to wheelchair guests who can both make their way on and off the coach and sit in a coach seat. Guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina before participating. The order of sites visited or viewed may vary.",
          offerings: [
            { date: "2026-12-31", departure_time: "09:00" },
            { date: "2027-01-01", departure_time: "10:00" },
          ],
        },

        {
          code: "MEB-010",
          name: "Melbourne Past & Present",
          duration_hrs: 4.0,
          price_usd: 0,
          retail_price_usd: 159,
          activity_level: "moderate",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: true,
          description:
            "Explore some of the many landmarks Melbourne has accumulated, from its 1835 founding to the 21st century. Renowned as Australia’s ‘most livable city,’ Melbourne is a place of Old World charm and magnificent parks and gardens. It’s also a cosmopolitan, constantly-emerging hotbed of progressive cultural trends, artisan food, and passionate, world-class sporting events. There’s no way to see it all, though one stop on this tour comes close as you travel by lightning-fast elevator to the Eureka Skydeck 88. Clad in floor-to-ceiling windows atop one of the world’s tallest residential buildings, you can catch amazing 360-degree views of the entire city from here along with shimmering Port Phillip Bay and the Dandenong mountains in the distance. Less lofty but very moving, you’ll visit the city’s iconic Shrine of Remembrance, honoring those who served in wars and peacekeeping operations. Climb to the balcony if you like, or take a stroll toward the adjoining Royal Botanic Gardens. Additional sights seen include the modern Crown Casino complex and Convention Center along the Yarra River and several tony residential suburbs. Later, enjoy free time to explore the natural history collections of Melbourne Museum on your own, returning to the coach at a preset time.\n·See and visit highlights from Melbourne’s elegant past and vibrant present on this coach-driven tour.\n·Zip to the top of the Eureka Tower in 40 seconds and gasp at the city-wide views from Skydeck 88.\n·Stop at the iconic Shrine of Remembrance, a moving memorial to those who served in wars and peacekeeping operations.\n·Travel past convention and casino complexes, though leafy riverside suburbs and along shopping boulevards. Enjoy free time to exploring the Melbourne\nMuseum’s collections independently.\n·Wear casual, weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended. ·Bring a hat, sunglasses and sunscreen as needed.\nAmount of walking and level of exertion on this tour is at guest’s discretion during stops. It is available to guests who utilize a collapsible wheelchair, can make their way on and off the coach and have a companion to assist them. Those guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina.",
          offerings: [
            { date: "2026-12-31", departure_time: "09:15" },
            { date: "2027-01-01", departure_time: "09:15" },
          ],
        },

        {
          code: "MEB-GG1",
          name: "Melbourne's Ecology & Yarra River",
          duration_hrs: 3.0,
          price_usd: 249,
          retail_price_usd: 429,
          activity_level: "strenuous",
          meal_included: false,
          accessible: false,
          go_local: true,
          free_shore: false,
          description:
            "Kayak along the Yarra River as it winds through downtown Melbourne and discover how the city protects its fragile environment and local birdlife. The river is considered the social heart of Melbourne because so many attractions and popular parks line its banks. As your guide will explain, the Yarra’s water quality and ecology have improved significantly since the 1970s, when the river contained high levels of industrial waste. As you paddle along at a comfortable pace, you will pass under the Princes Bridge—a landmark on the Victorian Heritage Register—and skirt by the Flinders Street Railway Station, both extraordinary examples of 19th-century architecture. Melbourne also values its greenspaces, including verdant Alexandra Gardens and lush Batman Park, which you will find on opposite sides of the Yarra. Oases such as these attract a vast array of birds, so be sure to look for parrots, grey fantails and white-plumed honeyeaters, which thrive even in dense urban habitats.\n·Paddle a kayak along the Yarra River as it meanders through downtown Melbourne ·Hear how Melbourne has protected its environment despite increased urban sprawl ·Look for birds that thrive in dense urban settings\n·Pass some of Melbourne’s iconic architecture, some of it dating to the 19th century ·Dress in weather-appropriate clothing .\n·Wear flat comfortable walking shoes .\nThis tour requires a moderate amount of activity and participants should be in good physical condition. The tour is not available to wheelchair guests and those\nwith mobility concerns, recent back or neck injuries, heart conditions, epilepsy, diabetes, respiratory conditions or pregnant women should caution their own personal stamina. Life jackets must be worn while on the water. Guests must bring their own water bottle, to keep this tour eco-friendly, single use plastic bottles will not be provided. Tour will operate during rain but may be cancelled if the weather is deemed unsafe. The itinerary may operate in a different order. Guests will be provided with transport back to the ship; however they may choose to stay in the city after their tour, but will be responsible for their own transport back to the ship. Wildlife Sightings are not guaranteed.",
          offerings: [
            { date: "2026-12-31", departure_time: "09:30" },
            { date: "2026-12-31", departure_time: "10:00" },
            { date: "2027-01-01", departure_time: "08:00" },
            { date: "2027-01-01", departure_time: "08:30" },
          ],
        },

        {
          code: "MEB-GL2",
          name: "Urban Heart of Melbourne",
          duration_hrs: 5.0,
          price_usd: 189,
          retail_price_usd: 329,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: true,
          free_shore: false,
          description:
            "Wander around the bohemian neighborhood of Fitzroy with a local who will happily show you the most intriguing shops and streets. You will start your exploration of the quirky, highly creative neighborhood with a cup of tea at your guide’s favorite café. Chances are, you will meet other locals who will share their stories and the reasons they live in Fitzroy. Much of the attraction is food and drink, as you will discover in Little Italy. While enjoying a freshly made gelato or a just-baked pastry, you can’t help but be caught up in the authenticity of this vibrant district where Melbourne’s café culture first originated. In time, the guide will lead you to some of the more eccentric boutiques, and there are plenty to choose from. You will then toast the day with a cocktail at one of Fitzroy’s local watering holes.\n·Follow a local around Melbourne’s quirky Fitzroy neighborhood.\n·Mingle with a variety of locals and really get to know them in just a short time. ·Enjoy a cup of gelato or a pastry in the Little Italy neighborhood.\n·Shop in boutiques that locals own and stock with unusual merchandise. ·Linger over a cocktail at a traditional neighborhood pub in Fitzroy.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThis tour includes approximately 3.5 hours of walking/standing. Guests will need to manage flat, cobblestones and slight inclines surfaces along with 35 steps throughout the excursion. The tour is not available to wheelchair guests and may not be suitable for those with mobility concerns who are cautioned to carefully evaluate their personal level of stamina and ability. Casual, weather-appropriate clothing and comfortable, flat walking shoes are suggested.",
          offerings: [
            { date: "2026-12-31", departure_time: "09:30" },
            { date: "2026-12-31", departure_time: "10:00" },
            { date: "2027-01-01", departure_time: "08:00" },
            { date: "2027-01-01", departure_time: "08:30" },
          ],
        },

        {
          code: "MEB-019",
          name: "Melbourne's Best Nature & Wine",
          duration_hrs: 6.75,
          price_usd: 149,
          retail_price_usd: 299,
          activity_level: "moderate",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Savor lunch and a tasting at an esteemed winery in Yarra Valley. While touring the Rochford Winery, you will learn a bit about its winemaking techniques and sample several wines that perfectly reflect the terroir. The selections may include a vegan Pinot Noir varietal and perhaps a Prosecco with hints of honeydew. An equally delightful two-course meal prepared with locally sourced ingredients will follow. While pausing at the Healesville Sanctuary, you will see many of the indigenous animals that live in the surrounding bush such as kangaroos, koalas and emus.\n·Enjoy a wine tasting and lunch at the Rochford Winery in the beautiful Yarra Valley. ·Observe a collection of iconic Australian animals at the Healesville Sanctuary. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThis tour includes a moderate amount of walking. This tour is not available to guests who utilize a wheelchair or guests with mobility concerns. Participants must be 18 years of age to consume alcohol.",
          offerings: [{ date: "2026-12-31", departure_time: "10:00" }],
        },

        {
          code: "MEB-014",
          name: "Melbourne Museum & Yarra Cruise Tour",
          duration_hrs: 4.5,
          price_usd: 159,
          retail_price_usd: 309,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Browse museum exhibits that reveal how the lives of the local indigenous people changed dramatically after Europeans arrived and view downtown Melbourne from a unique perspective while cruising the Yarra River. As you meander through the Bunjilaka Cultural Center within the Melbourne Museum, you will gain an understanding of the Aboriginal people that first settled in what became the state of Victoria. You may hear moving stories of resilience handed down from generation to generation, see artifacts that chronicle the ancient history of the area and view portrayals of early encounters between whalers and the Aboriginal people. A virtual guide will add even more insight. Later, you will cruise the lower reaches of the Yarra River, which cuts through the heart of Melbourne. Sights along the way include the Royal Botanic Gardens, the city’s modern sports and entertainment district, and Herring Island, a former basalt quarry that was filled with silt dredged from the river.\n·Become immersed in Aboriginal life while browsing the Melbourne Museum. ·Understand the dramatic impact that early Europeans had on the Aboriginal people. ·See some of Melbourne’s most iconic attractions while cruising the Yarra River. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThis tour is not available to guests who utilize a wheelchair or guests with mobility concerns.",
          offerings: [
            { date: "2026-12-31", departure_time: "10:30" },
            { date: "2027-01-01", departure_time: "10:30" },
          ],
        },
      ],
    },

    /* ── HOBART ─────────────────────────────────────── */
    {
      name: "Hobart",
      country: "Australia",
      dates: ["2027-01-03"],
      excursions: [
        {
          code: "HBA-013",
          name: "Tasmania's Coastal Wilderness",
          duration_hrs: 3.0,
          price_usd: 209,
          retail_price_usd: 359,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Behold the natural beauty of the surrounding area from a unique water perspective while cruising the waters off Hobart. It will be an exhilarating experience as you will cruise on a state-of-the-art Rigid Inflatable Boat, which unlike most RIBs features enclosed cabins with leather seating and expansive windows. There is also abundant space out on deck if you prefer to view the coastline in the fresh sea air. As you travel down the Derwent River and on into Storm Bay, you will see luxurious residences dotting Battery Point and landmarks such as the Iron Pot Lighthouse, which convicts constructed in 1832. The peak looming in the distance is Mount Wellington, which is also known by its Aboriginal name – Kunanyi. Circling the natural reserve of Betsey Island will be another highlight as it is a haven for seabirds such as gulls, cormorants and white-bellied sea eagles, the second-largest bird of prey Down Under.\n·Cruise the island-dotted waters off Hobart in a remarkably modern Rigid Inflatable Boat. ·Observe the landmarks while out on deck or from the comfort of the enclosed cabins.\n·See affluent residential areas, a historical lighthouse and Mount Wellington in the distance. ·Look for a variety of seabirds while cruising off Betsey Island, a natural reserve.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThis tour is not recommended for wheelchair guests. Those with mobility concerns are cautioned to evaluate their personal level of ability as there is some\nmoderate walking of approximately 0.7 miles and unpaved and uneven surfaces to negotiate. Guest must be able to negotiate 3 to 4 steps to enter or disembark coach. Wheelchair needs to be able to fold into the coach below, not suitable for wheelchair bound guests. Accessible vehicles are limited and cannot be guaranteed. Wild animal sightings cannot be guaranteed.",
          offerings: [{ date: "2027-01-03", departure_time: "10:00" }],
        },
      ],
    },

    /* ── DUNEDIN ─────────────────────────────────────── */
    {
      name: "Dunedin",
      country: "New Zealand",
      dates: ["2027-01-07"],
      excursions: [
        {
          code: "DUD-013",
          name: "Larnach Castle & Dunedin Highlights",
          duration_hrs: 4.0,
          price_usd: 0,
          retail_price_usd: 149,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Settle in for a leisurely and spectacularly scenic drive through Dunedin, a city revered for stunning architecture such as Larnach Castle, a 19th-century Gothic Revival masterpiece. Few introductory driving tours are quite so thorough as this one as you will see one landmark after another, often pausing to snap photos of them. The highlights will include the classical ANZ Bank building, the English Baroque-style St. Paul’s Cathedral and the Octagon, an eight-sided plaza with a statue of beloved Scottish poet Robert Burns at its center. Burns was the uncle of one of founders of Dunedin, a city with deep Scottish roots. Still, one of the most fabulous architectural treasures lies on the outskirts atop a hill on the Otago Peninsula. While meandering about Larnach Castle, you will hear about its construction – which took 200 workmen three years – its continuous renovation and the scandalous and tragic stories of its former residents.\n·Enjoy a panoramic drive through Dunedin, a city with extraordinary architecture.\n·See seemingly endless Victorian, Edwardian, and English Baroque-style buildings. ·Snap photos of attractions such St. Paul’s Cathedral and the eight-sided Octagon Plaza. ·Browse opulent Larnach Castle with a guide and its gardens independently.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThe Larnach castle’s first floor and gardens are accessible, but upper floors are not wheelchair accessible. Some walking is required at photo stops in central Dunedin, but this is generally on level, paved surfaces. Flash photography is not permitted inside Larnach Castle. Guests should be comfortable walking short distances and navigating steps. Approximately 60–90 minutes of walking total, spread across the castle interior, gardens, and Dunedin city stops.",
          offerings: [{ date: "2027-01-07", departure_time: "09:30" }],
        },

        {
          code: "DUD-015",
          name: "Otago High Country Farming",
          duration_hrs: 5.5,
          price_usd: 289,
          retail_price_usd: 509,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Experience farm life – authentic farm life – in the rugged Otago high country, a destination best reached on an all-terrain off-road vehicle. An ancient shift in the tectonic plates created this vast elevated landscape, which is mostly covered with alfalfa and tussock, a native New Zealand grass. The high country is ideal for raising livestock as you will discover at Barewood Station, a large working farm that raises mostly sheep following sustainable practices. You will witness the farmers’ daily lives as they manage their herds across a vast expanse of undulating land that is subdivided into hundreds of separate paddocks. The challenges are many as the climate is harsh with low rainfall, cold winters, and hot summers. Overcoming those difficulties has made the longevity of Barewood Station more fulfilling for the farmers. While gazing out over the inspiring vistas, you can snack on a charcuterie board of locally sourced specialties.\n·Visit a large working sheep farm in the rugged Otago high country.\n·Enjoy an authentic farm experience without pretensions or staged events. ·Gain insight into the joys and challenges of farm life in the remote high country. ·Behold the majesty of the seeming endless, gently rolling grasslands.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThe journey from Port Chalmers to Barewood Station takes approximately 1 hour, including scenic commentary and stops. This tour is not suitable for guests with limited mobility or those who require a wheelchair or walker. This tour does not operate in a standard motorcoach. Transportation is via comfortable all-terrain offroad vehicle, capable of navigating uneven and remote farm terrain.",
          offerings: [{ date: "2027-01-07", departure_time: "09:30" }],
        },

        {
          code: "DUD-002",
          name: "Highlights of Dunedin",
          duration_hrs: 4.0,
          price_usd: 0,
          retail_price_usd: 99,
          activity_level: "light",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: true,
          description:
            "Enjoy a relaxed orientation tour of Dunedin, home to some of New Zealand’s most elegant Victorian architecture, its oldest university and its first public botanical gardens. Second largest city on the South Island, central Dunedin sits deep within beautiful Otago Harbor. Your picturesque coach drive from the pier traces the harbor’s shore, passing charming Sawyer’s Bay, Roseneath and St. Leonard’s on the way into the city. A tour of the grand Jacobean house known as Olveston Historic Home provides a remarkably well-preserved glimpse into the refined Dunedin life circa 1906. Set on an acre of wooded land, this graceful 35-room residence is the epitome of English Arts & Crafts style and still contains the marvelous artwork and artifacts collected by its original owner. Continuing through the city, you’ll pass many more landmark structures including the Law Courts, Otago Boys High School and First Church, the Edwardian mansions of Royal Terrace and High Streets, and Gothic Revival-styled Otago University, founded in 1869 and as vital as ever. Spanning 69 manicured on a hilltop, magnificent Dunedin Botanic Gardens are older still, but – just like the university – thrive today. Enjoy free time for strolling here and be sure to visit the classic Winter Garden Glasshouse.\n·Enjoy a sightseeing drive to central Dunedin from the port, tracing beautiful Otago Harbor and its towns.\n·Tour a 35-room home that features fine art and intriguing collectibles, perfectly capturing the style of this city known for its worldly elegance.\n·Travel along streets lined with Edwardian and Victorian mansions, churches and cathedrals, and the Gothic campus of New Zealand’s first university. ·Stroll among camellias and rhododendrons, roses and splashing fountains in an 1863 botanic garden.\n·Ride back to the pier directly or step off in town to explore awhile longer and catch a shuttle back later.\n·Wear weather-appropriate clothing; include a light raincoat.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes approximately 2 hours of walking. It is available to guests who utilize a collapsible wheelchair, can make their way on and off the coach and have a companion to assist them. However, they may not be able to access the top level of Olveston House. Those guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina. The order of sites visited may vary. This tour does not operate with a separate guide, but rather with a driver/guide.",
          offerings: [{ date: "2027-01-07", departure_time: "09:45" }],
        },

        {
          code: "DUD-005",
          name: "Nature's Wonders Wildlife Safari",
          duration_hrs: 4.0,
          price_usd: 0,
          retail_price_usd: 159,
          activity_level: "strenuous",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Travel out to the far tip of wild Otago Peninsula and encounter tiny penguins, plump fur seals, and nesting seabirds on an all-terrain tour of remote headland bluffs and beaches. Skirting Otago Harbor’s north shore past Sawyer’s Bay, Roseneath and St. Leonard’s, your coach will round the bend at Dunedin and continue out along the craggy peninsula coast to Natures Wonders, a family-run touring farm in the epicenter of what is arguably the most precious wildlife habitat in New Zealand. You’ll travel by mini-coach for part of the tour, and 8-wheel-drive Argo vehicle for the rest. The route will bring you from the farm’s high point 659 feet above sea level all the way down to the water’s edge and back up, passing breathtaking sights and viewpoints along the way. Watch a breeding colony of New Zealand fur seals basking on the rocks and swimming in the ocean pools; see breeding colonies of spotted shag cormorants nestled on a rugged cliff face just above the crashing Pacific waves; and take a shoreside ride to Penguin Beach, where you’ll be able to observe little blue penguins, and if you’re lucky, spot some very rare and shy yellow-eyed penguins as well.\n·Enjoy a scenic drive along Otago Harbor, through Dunedin and out to the far tip of Otago Peninsula.\n·Visit the family-run farm, Natures Wonders, in the midst of spectacular headland bluffs and remote beach habitats.\n·Tour this majestic wild terrain by both 8WD vehicle and mini-coach, descending from 650-foot sea cliffs down to the water’s edge and back.\n·Anticipate encounters with wildlife at its most undisturbed – basking fur seals, spotted shags on the nest, fascinating little blue penguins and perhaps even\nshy yellow-eyed penguins.\n·Returning via Dunedin, enjoy a brief highlights drive through this city of elegant Victorian landmarks. ·Wear weather-appropriate clothing; include a warm, waterproof and windproof jacket.\n·Flat, comfortable walking shoes with non-slip soles are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes limited walking but can involve uneven and at times muddy terrain. Your vehicle will travel over bumpy and dusty roads. The tour is not recommended for guests with back, hip and/or neck problems, or limited mobility. Wildlife sightings vary by season and migratory patterns and are not guaranteed. Guests will use two modes of transport at the farm, 8WD Argo vehicle and mini-coach, switching halfway through the tour. This tour does not operate with a separate guide, but rather with a driver/guide. Bring a hat, sunglasses and sunscreen as needed.",
          offerings: [
            { date: "2027-01-07", departure_time: "09:45" },
            { date: "2027-01-07", departure_time: "11:00" },
          ],
        },

        {
          code: "DUD-012",
          name: "Albatross Cruise & Nature Wonders",
          duration_hrs: 4.5,
          price_usd: 259,
          retail_price_usd: 449,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Be awed by the natural beauty and bountiful wildlife while cruising through Otago Harbour and driving off road across an eco-sanctuary known as Natures Wonders. From the decks of the Albatross Express catamaran, you will enjoy an up-close view of the dramatic coastline as you pass the steep seaside cliffs at Aramoana Spit and Taiaroa Head, site of the oldest working lighthouse on the South Island. The birds there comprise the world’s only mainland breeding colony of Northern Royal Albatross. After disembarking at Wellers Rock, enjoy a short scenic drive to Natures Wonders, a privately owned sheep farm on the Otago Peninsula that provides a safe and undisturbed wildlife habitat. It is here you will board an 8-wheel all-terrain vehicle, embarking on an exhilarating off-road safari. Midway through your safari journey, swap to an off-road coaster bus for a more relaxed scenic drive across this breathtaking landscape. As you traverse across rolling hills and towering clifftops with stunning ocean views, the animals are particularly abundant along the coast and include fur seals and sea lions. You may also spot little blue penguins – no bigger than 13 inches high – waddling across the beach after feeding in the sea.\n·Take in the gorgeous scenery while cruising along the Otago Harbour in a catamaran. ·See precipitous cliffs, vast beaches, and a massive colony of Northern Royal Albatross. ·Ride in a safari-style ATV across the rolling hills of the Otago Peninsula.\n·Observe the abundant wildlife, especially fur seals and sea lions along the coast. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nIt is not available to guests who utilize a collapsible wheelchair, guests must be able to board/disembark vehicles and boats unaided. Those guests with mobility\nconcerns are cautioned to evaluate their personal level of ability and stamina. A moderate level of mobility and balance is required. Guests will need to navigate boat ramps, gravel paths, and steps when boarding the Argo vehicle and catamaran. Please respect local wildlife by keeping a safe distance and always following your guide’s instructions. The Argo ride carries six guests, and the approximately 15-minute ride is across open countryside, involving some steep and bumpy off-road driving. There are no toilet facilities onboard the vessel. Wildlife sightings are likely but not guaranteed.",
          offerings: [{ date: "2027-01-07", departure_time: "10:00" }],
        },

        {
          code: "DUD-001",
          name: "The Taieri Gorge Railway Experience",
          duration_hrs: 7.5,
          price_usd: 209,
          retail_price_usd: 369,
          activity_level: "moderate",
          meal_included: true,
          accessible: true,
          go_local: false,
          free_shore: false,
          description:
            "Board one of the world’s most scenic railways as you journey through the spectacular Taieri River Gorge. Welcomed aboard by a friendly crew, settle into your carriage, and get ready for a breathtaking trip into a landscape only accessible by this train. First tracing Otago Harbor, then traversing suburban Dunedin and a fertile plain, you’ll soon be climbing into the sheer cliff faces and plunging ravines of the Taieri River Gorge. Much of the ride takes place high atop soaring stone-and-lattice viaducts that early engineers, masons, and railway gangs somehow managed to build through extremely challenging wild New Zealand terrain. The fact that they succeeded is a true marvel – which you get to experience firsthand today. As you relax and watch in awe, your carriage will pass one unspoiled panorama after another, winding its way through the gorge over dramatic bridges suspended high above the placid river below, and through no fewer than 10 tunnels carved out of solid bedrock. You’ll enjoy a light picnic style boxed lunch while on board. Your journey concludes either at Dunedin Railway Station, a suitably grand Victorian landmark, or continue back to your awaiting ship.\n·Settle back and experience one of the world’s most breathtakingly scenic railway journeys.\n·Travel over countless latticed-steel and stone bridges and through 10 tunnels as you traverse the rugged Taieri River Gorge.\n·Take it all in from the civilized comfort of your carriage with morning tea and a light lunch served.\n·Disembark at Dunedin’s landmark Victorian railway station, where you can opt to remain in town awhile or return straightaway to the port. ·Wear comfortable clothing; a light raincoat is recommended.\n·Bring sun protection as needed.\nAlthough there is minimal walking on this tour, guests must be able to get on and off the railway cars – which requires managing three to four high steps. A wheelchair-accessible railway car might be available if requested in advance. There may be some wait times while boarding the train and again when returning to Dunedin Railway Station, once you’ve boarded the train, you may not disembark until tour end. Depending on the scheduled return time, free time allocated may be allocated at Dunedin Train Station as the train can only return to the port at certain times. Time permitting at the end of the tour, guests may go on their own to explore town but are responsible for getting back to the ship on time. Dunedin town is located 30 minutes from Port Chalmers where the ship is docked. Where possible, the train departs and returns to Port Chalmers and your ship. Depending on timing however, the journey between the port and Dunedin Railway Station may be replaced by coach transfer.",
          offerings: [{ date: "2027-01-07", departure_time: "10:15" }],
        },

        {
          code: "DUD-006",
          name: "Taieri Gorge Railway and Olveston House",
          duration_hrs: 7.25,
          price_usd: 199,
          retail_price_usd: 349,
          activity_level: "strenuous",
          meal_included: true,
          accessible: true,
          go_local: false,
          free_shore: false,
          description:
            "Travel through some of New Zealand’s most spectacular countryside on a legendary railway, then see how Dunedin’s elite lived over 100 years ago at a historic estate. Not far from the pier, you’ll board the famed Taieri Gorge Railway for an unforgettable trip into a landscape only accessible by this train. Your seating will be in either a beautifully restored 1920s carriage or a contemporary car with large windows and open platforms for panoramic viewing. The roundtrip journey takes you past sheer cliff faces and plunging ravines, over the Taieri River curved bridges and stone viaducts, through mountain tunnels, and across an everchanging landscape ranging from fertile farmland to forests of towering kahikatea trees. Commentary will be provided throughout the trip, as you learn about the region’s early pioneers, wild gold rush days, and other New Zealand lore. Along the way, you’ll be treated to a morning tea and a boxed picnic-style lunch. Disembarking the train back in Dunedin, you’ll travel briefly by coach to Olveston House to tour this lavishly furnished English Arts & Crafts-style residence from 1906. Now a museum, the gracious 35-room house still contains hundreds of paintings, rare artifacts and photographs collected by its original owners.\n·Settle back and experience one of the world’s most breathtakingly scenic railway journeys.\n·Travel over countless latticed-steel and stone bridges and through 10 tunnels as you travel through the dramatic cliffs and ravines of Taieri River Gorge. ·Take it all in from the civilized comfort of your carriage enjoying morning tea and a boxed picnic-style lunch.\n·Back in Dunedin, tour a 1906 home brimming with fine art, intriguing collectibles and Arts & Crafts style.\n·Return to the pier, following the scenic route through downtown and along the Otago Harbor shore.\n·Wear weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes approximately one hour of easy-to-moderate guided walking. Guests must be able to negotiate 4 steep steps to enter and exit the train car. The train ride is approximately 6 hours in duration. The tour is available to wheelchair guests who have a collapsible chair, are able to make their own way on and off the coach and train and have an able-bodied companion to assist them. Those with mobility concerns are cautioned to carefully evaluate their personal level of stamina before participating. The coach portion of this tour may operate with a driver/guide.",
          offerings: [{ date: "2027-01-07", departure_time: "10:15" }],
        },

        {
          code: "DUD-003",
          name: "Dunedin Peninsula - Wildlife & Larnach Castle",
          duration_hrs: 6.25,
          price_usd: 0,
          retail_price_usd: 199,
          activity_level: "strenuous",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "This tour visits two iconic Otago Peninsula sights, one a rookery and the other a castle. Skirting the harbor’s north shore and charming towns of Sawyer’s Bay, Roseneath and St. Leonard’s, your coach will swing through Dunedin city proper on a brief orientation spin, passing the hilltop botanic gardens and University of Otago campus. Rounding the inner tip of the harbor, you’ll head out onto the rugged Otago Peninsula to the Royal Albatross Center, where you’ll be escorted to the Observatory after an informative intro at the Reception Center. Access to the colony is strictly controlled, with every measure taken to protect these rare birds’ natural habitat. With wingspans up to 10 feet they seem ungainly on the ground – but watching one glide by in flight is a uniquely spectacular and exhilarating experience. Your visit to Larnach Castle will deliver a distinctly more civilized thrill. This impressive stone mansion, set amidst trees and colorful gardens, dates from 1885 and boasts many elaborate features including a graceful hanging staircase and intricately carved ceilings, hallmarks of the many English and Italian artisans who built it. Your time here includes a lovely luncheon, guided house tour and free time in the gardens.\n·Enjoy a scenic drive along the harbor shore, through Dunedin and out to rugged, wild Otago Peninsula.\n·Travel to the Royal Albatross Observatory, site of the world’s only mainland albatross nesting site.\n·Visit the natural habitat where you can observe these amazing seabirds up-close – maybe even see a few soaring by on 10-foot wingspans. ·Tour the no-expense-spared mansion known as Larnach Castle, built for a wealthy 19th-century banker by a small army of European artisans. ·Savor a delightful luncheon here, with some free time after to wander the sprawling grounds awhile.\n·Wear weather-appropriate clothing; include a light raincoat.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nSince the majority of sites on this tour are not wheelchair accessible, it is not considered suitable for wheelchair guests. The Castle has a number of stairs with no ramps or elevators. There is also a steep walk up to the Observatory at the Albatross Center. Those with mobility concerns are cautioned to carefully evaluate their personal level of ability before participating. The order of sites visited may vary. This tour operates with a driver/guide, with a specialist guides at both Albatross Colony and Larnach Castle.",
          offerings: [{ date: "2027-01-07", departure_time: "10:30" }],
        },

        {
          code: "DUD-014",
          name: "Taste of Dunedin on Foot",
          duration_hrs: 4.0,
          price_usd: 249,
          retail_price_usd: 429,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: true,
          free_shore: false,
          description:
            "Walk through the heart of historical Dunedin while sampling its signature foods and mingling with the locals that handcrafted them. This ultimate foodie exploration will present the city’s rich culinary heritage in settings of great architectural importance such as the Warehouse Precinct near the harbor. Once a hub for wholesale trade, the precinct has been revitalized to house trendy cafés, galleries, and workshops. You can expect to sample freshly caught seafood from New Zealand’s oldest fish-and-chip shop, a savory pie filled with minced meat from local butchers and creamy chocolates from a local company that filled a void when the city’s Cadbury chocolate factory closed after being in business 88 years. That entrepreneurial spirit will also be evident at Dunedin Craft Distillers, which ingeniously produces its premium gins and botanical spirits from surplus bread. And, in a nod to Dunedin’s Scottish roots, learn of its flourishing reputation for craft whiskey and traditional haggis, Scotland’s national dish.\n·Sample a variety of Dunedin’s favorite foods and beverages while walking through town. ·Taste fresh seafood, a hearty meat pie and artisanal chocolates.\n·Sample drinks such as a locally distilled gin made from surplus bread.\n·Meet some of the people that produced the samples for an insider’s point of view. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThis is a walking tour covering approximately 2–2.5 hours on foot, with frequent stops for tastings and storytelling. A reasonable level of fitness is\nrecommended. Restrooms are available at selected stops throughout the tour. Vegetarian and gluten free options may be available with prior notice. Guests may remain in town after the tour concludes and return to the port at their own arrangement. Be sure to check all aboard time.",
          offerings: [{ date: "2027-01-07", departure_time: "10:30" }],
        },

        {
          code: "DUD-008",
          name: "Pride of the South Brewery & Otago Museum",
          duration_hrs: 5.75,
          price_usd: 0,
          retail_price_usd: 199,
          activity_level: "moderate",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Sample the beers made at a landmark Dunedin brewery and delve into the region’s natural history at the Otago Museum. Speight’s Brewery, a Dunedin icon since it opened its doors in 1876, has done as little as possible to change with the times. Still in its original eight-story location above a natural spring that imparts trademark flavor to its wares, this gravity-fed brewery is one of just two in the world still using an open-style vat to create beers from the original recipes. Sampling several varieties, you’ll find some that deliver a distinctive 19th-century tang. A stop for lunch at a nearby alehouse often involves fresh cod fried in batter made with Speight’s beer. Then it’s on to history of another type as you browse the Stories of the South exhibit in the Otago Museum, showing how this region’s magnificently rugged landscape has shaped the lives of all who’ve settled here. The museum also boasts the world’s largest collection of extinct moa skeletons and the country’s largest fossil, a 23-foot-long aquatic plesiosaur. Your return trip to the pier includes a photo stop at the much-celebrated Dunedin Railway Station, built in checkered Edwardian Baroque style in 1906.\n·Tour an iconic gravity-fed brewery that’s been making its beer the same way since the 19th century.\n·Sample a range of their beers, including some that really do have a delicious ancient taste.\n·Browse the exhibits at the Otago Museum, where this region’s natural and cultural history are shown to be connected.\n·Enjoy a hearty alehouse lunch, and capture Instagram-worthy photos of one of the fanciest railway station facades you’ve ever seen. ·Wear weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes approximately 3 hours of easy-to-moderate walking that includes steps and stairs at the brewery. The tour is not available to wheelchair guests and those with mobility concerns are cautioned to carefully evaluate their personal level of ability before participating. Guests must be 18 or over to participate in the beer sampling. The tour sequence may vary. This tour may operate with a driver/guide. Bring a hat, sunglasses and sunscreen as needed.",
          offerings: [{ date: "2027-01-07", departure_time: "10:45" }],
        },

        {
          code: "DUD-004",
          name: "Otago Harbor Wildlife Cruise",
          duration_hrs: 2.5,
          price_usd: 0,
          retail_price_usd: 129,
          activity_level: "light",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "\nEnjoy rare close-up views of nesting albatrosses, fur seals and other fascinating wildlife on an observation cruise around Otago Harbor and out to Taiaroa Head. It’s just a short drive from the ship to the floating pontoon where you’ll board your sightseeing vessel and head out on a course past the picturesque townships of Carey’s Bay, Deborah Bay and Acheron Head. Along the way, your captain will provide rich commentary about the impressively unspoiled environment and the sights you are seeing; knowledgeable deck guides will be on hand to field any questions. Once at Taiaroa Head, you’ll be immersed in a scene alive with wildlife – boasting over 10 species of nesting birds amongst its inhabitants, including the world’s only mainland breeding colony of Royal Albatrosses. Southern Fur Seals also breed along this isolated stretch of rugged shoreline, and many other mammals make a home here as well. You might even spot some of the area’s winsome penguins and playful dolphins. Adding to this fascinating wildlife menagerie, the rocky peninsula’s volcanic terrain and traces of early settlement provide a dramatic backdrop to this very privileged nature experience.\n·Embark on a relaxed cruise out Otago Harbor to Taiaroa Head, a famous magnet for marine wildlife.\n·En route, get background on the area’s rich natural history from the captain and seasoned deckhands.\n·Enjoy rare close-up views of the captivating animal life along this rugged coast – including some 10 species of breeding seabirds, including the very rare\nRoyal Albatross.\n·Observe a breeding colony of Southern Fur Seals along with numerous other mammals, even occasional penguins and dolphins. ·Wear weather-appropriate clothing; include a warm, waterproof and windproof jacket.\n·Flat, comfortable walking shoes with non-slip soles are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nDependent on the state of the tide, access to the cruise vessel’s floating pontoon can be quite difficult for wheelchair guests or those with mobility concerns. Therefore, this tour is not recommended for guests with those issues. Wildlife sightings are not guaranteed. The order of sites visited may vary. This tour does not operate with a separate guide, but rather with a driver/guide.",
          offerings: [{ date: "2027-01-07", departure_time: "12:00" }],
        },
      ],
    },

    /* ── CHRISTCHURCH ────────────────────────────────── */
    {
      name: "Christchurch",
      country: "New Zealand",
      dates: ["2027-01-08"],
      excursions: [
        {
          code: "CHC-003",
          name: "Journey Into Middle Earth",
          duration_hrs: 8.0,
          price_usd: 249,
          retail_price_usd: 429,
          activity_level: "moderate",
          meal_included: true,
          accessible: true,
          go_local: false,
          free_shore: false,
          description:
            "Journey to a stunning and recognizable Lord of the Rings filming location in New Zealand’s Southern Alps, then enjoy a central Christchurch orientation drive. Departing Lyttelton by panoramic coach, you’ll travel through the patchwork green farmland of the Canterbury Plains, stopping in a country town for morning tea. Heading inland into the heart of the Alps, you’ll pause for a photo opportunity at Lake Camp where the views across the lake to the mountain range that forms the South Island’s backbone are outstanding on a clear day. But that’s before you encounter this tour’s true showstopper vista – the terrain at remote and beautiful Mt Potts High Country Station. The moment you set eyes on this location you’ll understand why it was chosen as the setting of Edoras in the epic Lord of the Rings trilogy. Even if you’re not a Tolkien aficionado, you’ll be taken breathless by the unspoiled beauty of this landscape of rugged mountain ranges, sparkling lakes, blue rivers and brisk alpine air. After free time to explore and photograph this magical place, you’ll relax over a rustic lunch before heading for Christchurch city and an orientation drive covering its must-see sights.\n·Settle back for a panoramic coach drive across the Canterbury Plains and into the Southern Alps.\n·Enjoy morning tea in a country town and stop at a stunning alpine lake for photos and awe.\n·Visit Mt Potts High Country Station, a setting magical enough to double for mythical Edoras in the Lord of the Rings films. ·Enjoy free time to explore this astounding place on earth, even pose for photos with replica swords.\n·Lunch in Mt Somers Village and enjoy a Christchurch orientation drive that covers its top sights.\n·Wear casual, weather-appropriate clothing including a light jacket or sweater.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes a moderate amount of walking mainly at the guest’s discretion. It is available to guests who utilize a collapsible wheelchair, can make their way on and off the coach and have a companion to assist them. Those guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina. Tour Order may vary.",
          offerings: [{ date: "2027-01-08", departure_time: "08:30" }],
        },

        {
          code: "CHC-006",
          name: "Christchurch Town & Country",
          duration_hrs: 4.0,
          price_usd: 0,
          retail_price_usd: 169,
          activity_level: "light",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "On this panoramic voyage, you’ll circle volcanic harbors and lakes, cross the Canterbury countryside, visit a working sheep farm, and see the sights of urban Christchurch. It all begins with a spin around Lyttelton Harbor – the massive caldera of an ancient volcano – then winds past idyllic Governors Bay on the Banks Peninsula before entering the lush patchwork landscape of Canterbury Plains, where white sheep dot the green hills. New Zealand is famed for its sheep farms and at Manderley Farm, you’ll get the chance to tour one up-close. After a warm greeting and morning tea, farm hands will lead you to a demonstration at the shearing shed and a lively performance by the operation’s most dedicated herders – its talented sheepdogs. Marvel at their talents and agility as they gather a flock from nearby hills, bringing the sheep down to their master and responding to whistled commands from great distances away. Your return journey traces the shore of vast Lake Ellesmere en route to Christchurch for an orientation drive through areas damaged by the 2011 earthquake as you see how the city is rebuilding and restoring some of its most iconic heritage buildings.\n·Spend a fascinating half-day experiencing the sights of both town and country by panoramic coach.\n·See harbors, lakes and lagoons formed by prehistoric volcanos and cross idyllic green pasturelands.\n·Visit a working sheep farm, meet the farm hands and watch champion New Zealand sheepdogs herding the flock by whistled command. ·Take a drive through central Christchurch and learn about its recovery from the 2011 earthquake.\n·Return via a historic mountain tunnel that reigned as New Zealand’s longest for over 50 years.\n·Wear casual, weather-appropriate clothing including a light jacket or sweater.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes approximately 90 minutes of easy-to-moderate walking and standing, with some natural surfaces to negotiate at the farm. Due to accessibility challenges at the farm, the tour is not recommended for wheelchair guests.",
          offerings: [{ date: "2027-01-08", departure_time: "08:30" }],
        },

        {
          code: "CHC-001",
          name: "High Country Explorer",
          duration_hrs: 7.5,
          price_usd: 329,
          retail_price_usd: 579,
          activity_level: "moderate",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Treat your inner adventurer to an exhilarating multi-transport survey of the Southern Alps high country by coach, offroad touring vehicle and jet boat. It all starts sedately enough, as you head out by motorcoach into the fertile earthen patchwork of the Canterbury Plains – where the island grows its wheat and grazes its cattle. But don’t get too comfortable; the scenery changes dramatically as you reach Rubicon Station on the banks of the spectacular Waimakariri river gorge and make the switch into rugged offroad touring mode. Piloted with skill around Mt Torlesse Station, bouncing heartily across a spectacular landscape framed by jagged Southern Alp peaks and gorges, you’re bound to fill your camera with social media friendly shots. A well-deserved stop for lunch provides a break from the action, but it won’t last. Soon enough, you’ll shift back into thrill gear as you board a lightning-fast jet boat capable of 360-degree spins and strap in for a ride up the steep-walled Waimakariri River gorge to Staircase Viaduct. Learn more about Kiwi Jetboating thanks to the persistence of Bill Hamilton in perfecting the water jet and providing a new way to explore parts of back country New Zealand at the Jet Boat World museum. After that little jaunt, the coach drive back to Lyttelton will feel like slow motion.\n·Experience adventure without exhaustion on a thrilling, multi-vehicle tour of the Southern Alps.\n·Travel by coach across the fertile Canterbury Plains to the Springfield Adventure Centre and a switch into offroad mode.\n·Buckle up for a rollicking drive through rugged high country terrain framed by mountains and gorges.\n·Hold onto your hat again later as you zoom up the majestic Waimakariri river gorge on a jet boat nimble enough to make 360-degree spins. ·Enjoy lunch at midday and return to port with spectacular photos and memories.\n·Wear weather-appropriate clothing including a water-resistant jacket.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nWhile this tour includes limited walking, it is geared toward the more adventurous traveler. The tour is not recommended for wheelchair guests or those with mobility concerns. This tour cannot operate when the Waimakariri River is flooded; if an issue, you will be notified by 7 a.m. on the day of the tour. Tour order may vary.",
          offerings: [{ date: "2027-01-08", departure_time: "08:45" }],
        },

        {
          code: "CHC-016",
          name: "Hanmer Springs Escape & Thermal Pools",
          duration_hrs: 8.0,
          price_usd: 0,
          retail_price_usd: 199,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Spend hours independently exploring the alpine village of Hanmer Springs, where you may soak in its soothing thermal pools or perhaps just browse the charming downtown at your leisure without a set destination in mind. Tucked into the foothills of the Southern Alps, the village is primarily known for its mineral-rich geothermally heated pools, whose silky-smooth waters have therapeutic benefits that may ease rheumatic and skin conditions. Take advantage of those revitalizing waters – whose temperatures range between 91°F to 108°F – at the Hanmer Springs Thermal Pools & Spa, an attraction with re-energizing sulfur pools, saunas, and a luxurious spa. Leave some time to meander about the village at your own pace. There are plenty of fine boutiques, art galleries and restaurants that may pique your interest. A narrated drive through Christchurch will follow, providing you with a perspective of the region’s largest urban center.\n·Spend hours of free time exploring Hanmer Springs on your own and at your own pace. ·Enjoy the casual atmosphere of this alpine village in the foothills of the Southern Alps. ·Soak in the village’s renowned geothermally heated pools if you like. Entry is included. ·Browse the shops and dine on your own.\n·Enjoy a narrated driving tour through Christchurch, a vibrant metropolis nearby. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nPlease note that approximate drive time is 2 hours each way. Guests will have approximately 2.5 hours of free time in Hanmer Springs. The coach will drop guests at the pool, where guests can directly enter the venue to enjoy their free time within the pools. Bring your swimsuit, towel, biodegradable sunscreen, dry clothes, and a hat. Swim at your own risk. Terrain in Hanmer Springs is mostly flat with paved footpaths; walking is at guests’ discretion.",
          offerings: [{ date: "2027-01-08", departure_time: "08:45" }],
        },

        {
          code: "CHC-015",
          name: "Waipara Wine Trail & Lunch",
          duration_hrs: 6.0,
          price_usd: 139,
          retail_price_usd: 249,
          activity_level: "moderate",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Enjoy tastings at three premier wineries in the Waipara Valley, a burgeoning wine region with long hot summers and cool winters that provide grapes with more time to ripen. More than 75 wineries now call the valley home, covering more than 1,200 hectares of planting. The Waipara wine region is one of New Zealand’s fasted growing wine regions. Waiparas wineries are internationally renowned for producing pinot noirs, pinot gris, reislings, chardonnays and sauvignon blancs. You will visit three different wineries where you will get to taste many different wine styles and options as well as enjoying a platter style lunch at one of the wineries. Your driver/guide will provide an interesting and informative commentary throughout the day as we travel through one of New Zealands most internationally renowned wine regions, on return to your ship you will enjoy a short city tour through the city of Christchurch.\n·Sample wines produced at three wineries in the acclaimed Waipara Valley. ·Enjoy tastings of wines that reflect the unique terroirs of the vineyards. ·Savor a platter style lunch that beautifully complement the wines.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThe drive takes approximately 1 hour and 15 minutes through scenic North Canterbury countryside. Most of the wineries visited have flat, well-maintained gravel\nor paved pathways, with minimal walking required between tasting rooms and parking areas. The wineries normally visited are Waipara Springs, Torlesse Winery and Georges Road. Wineries may be substituted if unavailable.",
          offerings: [{ date: "2027-01-08", departure_time: "09:00" }],
        },

        {
          code: "CHC-007",
          name: "Discover Christchurch",
          duration_hrs: 3.5,
          price_usd: 0,
          retail_price_usd: 179,
          activity_level: "light",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: true,
          description:
            "\nThis survey tour of Christchurch and its surrounds has it all – must-see central city sights, informative commentary, garden walks, and spectacular views from the Port Hills, all from the vantage of your double decker coach. Your Kiwi guide will bring the stories of the “Garden City” vividly to life – from its 1850 founding to the devastating back-to-back earthquakes of 2010 and 2011 and the impressive rebuild that’s been underway since. Drive by everything from the Arts Centre’s cluster of reviving Gothic Revival buildings to the Transitional Cardboard Cathedral. Observe the magnificent ruins of Christchurch Cathedral, yet to be rebuilt more than a decade on from the destructive seismic activity. Stretch your legs on a meander through stunning Mona Vale Gardens along the Avon River. Head for the hills and the Sign of the Takahe, a Tudor-style manor house high in the Port Hills. Named for a flightless New Zealand bird, this venue offers true eagle-eye views of the city, mountains and ocean.\n·See all the Christchurch must-sees as you tour the city and its outskirts by panoramic coach.\n·Visit areas damaged by the 2010-11 earthquakes and see how the exciting recovery still underway.\n·Pass landmarks like the Arts Center and Christchurch Cathedral, and take a stroll among rhododendrons and azaleas at Mona Vale Gardens. ·Travel up into the hills above Christchurch for sensational city, sea and mountain views.\n·Wear casual, weather-appropriate clothing including a light jacket or sweater.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes limited walking, mainly at the guest’s discretion during the stops. There is limited space for guests who utilize a wheelchair. Tour order may vary.",
          offerings: [
            { date: "2027-01-08", departure_time: "09:15" },
            { date: "2027-01-08", departure_time: "13:30" },
          ],
        },

        {
          code: "CHC-009",
          name: "Historic Christchurch & Botanical Garden",
          duration_hrs: 4.0,
          price_usd: 129,
          retail_price_usd: 279,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Settle in for a panoramic drive around Christchurch in an historic, open top, double-decker bus and then ride through the Botanic Gardens in an open-air trolley. In both venues, guides will point out and describe the attractions to give you an excellent understanding of what makes them so special. While traveling through the heart of Christchurch, you will pass cultural landmarks such as the Arts Centre, a collection of Gothic-style heritage buildings that house art studios and galleries. New Regent Street, one of the main shopping and dining complexes, is also on the route. The focus will turn to the natural world in the Botanic Gardens, which was founded in 1863 with the planting of a single English oak. Today, the gardens display a vast tapestry of plants where something is always in bloom. No matter what your interest – whether azaleas, roses or water plants – you will find a garden specific to it.\n·See the highlights of Christchurch while traveling through town in a double-decker bus. ·Ride through the Botanic Gardens in an open-air trolley that offers unobstructed views. ·Listen to enlightening and entertaining commentary at both venues.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThis tour is not available to guests who utilize a wheelchair or those with limited mobility. Weather appropriate clothing; sunglasses; and flat, comfortable walking shoes are recommended. Tour order may vary.",
          offerings: [{ date: "2027-01-08", departure_time: "09:15" }],
        },

        {
          code: "CHC-018",
          name: "Godley Head Walk",
          duration_hrs: 3.0,
          price_usd: 229,
          retail_price_usd: 399,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Follow a natural trail around Godley Head, an incredibly scenic wild landscape at the entrance to Lyttleton harbor. The terrain will vary throughout, starting with open farmland with views of the deep-blue Pacific in one direction and the Southern Alps in another. High above the seaside cliffs, you will pause at the observation deck on Scott’s Cabin, a historical landmark with ties to explorer Robert Falcon Scott’s failed Antarctic expedition in the early 1900s. You will pass a WWII-era coastal defense battery before descending to Boulder Bay, a beautiful cove dotted with rustic cottages known as baches. Following a delightful break for tea, you will continue to an area that offers spectacular views of the harbor, Pegasus Bay and the volcanically formed Banks Peninsula. Throughout the walk, the guide will point out and describe the headland’s flora and fauna, which will likely include nesting white-flippered penguins, a species only found in the Canterbury region. On your way back to the port enjoy travelling through the historic Lyttleton Tunnel.\n·Walk along the mostly coastal trail that winds through Godley Head.\n·Gaze out over a gorgeous landscape of seaside cliffs and open farmland.\n·Pass a World War II defensive battery decorated with local artwork.\n·Enjoy local snacks overlooking the sea at a cabin associated with an Antarctic expedition. ·Hear fascinating commentary about the headland’s indigenous flora and fauna.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThe tour is not available to wheelchair guests and may not be suitable for those with mobility concerns who are cautioned to carefully evaluate their personal level of stamina and ability. Please note that an alternative route may be taken in case of adverse weather conditions.",
          offerings: [{ date: "2027-01-08", departure_time: "09:30" }],
        },

        {
          code: "CHC-002",
          name: "Ice & Wings",
          duration_hrs: 5.0,
          price_usd: 109,
          retail_price_usd: 259,
          activity_level: "moderate",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: false,
          description:
            "Tour a captivating museum filled with Royal New Zealand Air Force planes and memorabilia, then explore a one-of-a-kind experiential museum dedicated to all things Antarctic. Located in Christchurch on the site of a former base, the Air Force Museum showcases the country’s long and valiant aviation history through hands-on exhibits – including dozens of vintage aircraft, WWI-era aviation barracks, rare uniforms and medals, and moving stories of the proud men and women who have served in the New Zealand and Allied flying services. After a leisurely guided visit, leave the museum behind as you move into cooler surroundings. Much cooler. At the International Antarctic Centre, you can experience an indoor blizzard, visit a snow cave, endure life at Scott Base and learn about other intrepid Antarctic explorers, even watch rescued Little Blue Penguins – smallest of their kind – cavort in a plush indoor/outdoor habitat. You can also take a virtual voyage down to Antarctica in the 4D Extreme Theatre and experience an epic thrill ride in the Hagglund, a genuine amphibious Antarctic transport that doesn’t let anything stand in its way. A drive back through central Christchurch reveals how well it’s recovered from the devastating 2011 earthquake.\n·Settle back for a 30-minute narrated coach drive from Lyttelton to the outskirts of Christchurch.\n·Tour the Royal New Zealand Air Force Museum, home to a vast collection of meticulously preserved aviation memorabilia including dozens of historic aircraft and a vintage barracks.\n·Enjoy an immensely fun, guided tour and interactive experience at the International Antarctic Centre, next best thing to traveling to the South Pole yourself.\n·Survive an ice storm, learn about life in modern Antarctica and visit historic Scott Base, watch Little Blue Penguins play, and crawl over an obstacle course inside a Hagglund amphibious vehicle.\n·Wear casual, weather-appropriate clothing including a light jacket or sweater. ·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes some 3 hours of moderate walking and standing over mostly flat surfaces. Additional interactive activities are at guests’ discretion. The tour is available to wheelchair guests who have a collapsible chair, can make their own way on and off the coach and have a companion to assist them. Those with mobility concerns are cautioned to carefully evaluate their personal level of stamina before participating. Guests must be over 120cm tall to ride the Antarctic vehicle Hagglund. We do not recommend the Hagglund ride for guests with heart conditions, back or neck pain or those who are pregnant. There will be time to eat and shop (at your own expense) at either of the venues.",
          offerings: [{ date: "2027-01-08", departure_time: "09:45" }],
        },

        {
          code: "CHC-020",
          name: "Taste of Christchurch: Riverside Kitchen & Market",
          duration_hrs: 5.0,
          price_usd: 279,
          retail_price_usd: 479,
          activity_level: "light",
          meal_included: true,
          accessible: false,
          go_local: true,
          free_shore: false,
          description:
            "Savor the flavors of Christchurch by enjoying tastings at a downtown market and a 3-course lunch that a chef will prepare in a cooking demonstration. While meandering through the Riverside Market, you will meet some of the purveyors and sample a selection of regional products such as artisanal cheeses, fresh-baked breads, and dips. It will be just enough to whet your appetite for the chef-led cooking demonstration at the Riverside Kitchen. Although the menu varies with the season, it may include horopito leaf-encrusted venison, gin-cured salmon or roasted lamb shoulder with red wine jus and gremolata. The demonstration will be entertaining and enlightening as the chef will offer helpful tips, easy-to-follow cooking techniques and fascinating stories about how and where the ingredients were sourced. As the dishes are served, you will be offered several New Zealand wines that pair perfectly with each course.\n·Watch a cooking demonstration at the Riverside Kitchen in Christchurch.\n·Dine on the dishes that the chef has prepared, each one thoughtfully paired with wine. ·Browse a market where you may see many of the ingredients used in the demonstration. ·Enjoy tastings at the market and meet some of the purveyors.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nEasy/Moderate activity level required as tour includes standing and walking through the market. Most dietary requirements (vegetarian, gluten-free, etc.) can be catered for — please advise in advance (72 Hours). This is a chef demonstration, not a hands-on class. However, guests are encouraged to ask questions and interact with the chef during the experience.",
          offerings: [{ date: "2027-01-08", departure_time: "10:00" }],
        },
      ],
    },

    /* ── PICTON ──────────────────────────────────────── */
    {
      name: "Picton",
      country: "New Zealand",
      dates: ["2027-01-09"],
      excursions: [
        {
          code: "PIC-001",
          name: "Iconic Wines of the Marlborough",
          duration_hrs: 5.0,
          price_usd: 0,
          retail_price_usd: 139,
          activity_level: "light",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: true,
          description:
            "Enjoy tastings at three premier wineries in New Zealand’s largest wine region and come away with a great appreciation for their unique terroirs and commitment to sustainability. The wineries are located south of Picton around Blenheim, the most populated town in the Marlborough region. The exact wines for the samplings will vary but you can be sure that they will include at least one Sauvignon Blanc. Although this green-skinned grape variety originated in the Bordeaux region of France, it flourishes in the Wairau Valley surrounding Blenheim, which lies in the heart of Marlborough. Ninety percent of New Zealand’s Sauvignon Blanc is produced in this region. As the tastings will reveal, these Sauvignon Blancs are crisp well-balanced varietals with heady citrus aromas. And what better complement to wine than chocolate? While pausing at the chocolatier Makana, you will be offered samplings of its confections, all hand-made in small batches to ensure their quality.\n·Sample a selection of inspiring wines at three wineries in the fertile Marlborough region. ·Taste the region’s iconic Sauvignon Blanc, by far the most popular wine produced there. ·Gain an appreciation for the different terroirs within the Marlborough wine region.\n·Enjoy a tasting of handmade chocolates at the confectionery Makana.\n·Wear weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\nThis tour includes approximately 2-1/2 hours of easy-to-moderate walking and standing. The tour is available to wheelchair guests who have a collapsible chair,\nare able to make their own way on and off the coach and have an able-bodied companion to assist them. Those with mobility concerns are cautioned to carefully evaluate their personal level of stamina before participating. Guests must be at least 21 years of age to participate in tastings of alcoholic beverages. In the event of scheduling conflicts, it may become necessary to substitute a winery with another of venue, including the Makana Chocolate Factory. The sequence of the tour may vary.",
          offerings: [{ date: "2027-01-09", departure_time: "09:30" }],
        },

        {
          code: "PIC-006",
          name: "Queen Charlotte Sounds Round the Bays",
          duration_hrs: 2.5,
          price_usd: 0,
          retail_price_usd: 129,
          activity_level: "light",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Cruise pristine Queen Charlotte Sound by catamaran, surrounded by beauty as you explore the rugged shoreline. Like the other sounds that combine to form the Marlborough Sounds network, Queen Charlotte was formed when deep river valleys filled with seawater at the end of the last ice age. The result is a meandering wonderland of azure separated by steep green hills and laced with alluring bays and coves. A few scattered settlements dot the otherwise-wild coastline, most of them so isolated they can only be reached by boat. In fact, this landscape hasn’t changed much at all since James Cook sheltered here during his exploratory voyages in the 1770s. And that’s the true beauty of it. Your own exploratory voyage begins right from the pier, aboard a comfortable catamaran designed for sightseeing on these typically calm waters. Rounding the bays, you’ll be treated to panoramic views bound to capture your imagination as few other places can. Along the way, you’ll loiter in Double Cove a while to feed the locals – who usually include hungry herring, mullet and cod. Don’t be surprised to see king shag cormorants swooping in to feast too; they’re highly skilled anglers.\n·Be immersed in natural beauty on a catamaran cruise around Queen Charlotte Sound.\n·Gaze in wonder at this network of river valleys swamped by the sea some 10,000 years ago.\n·Round a rugged shoreline little changed from when Captain Cook sheltered here in the 1770s.\n·In a quiet cove, spend time feeding grateful herring, mullet and cod – and watch cormorants swoop in for their share. ·Wear weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour is mostly seated with very limited walking, guests with mobility concerns are cautioned to carefully evaluate their personal level of stamina and ability to enter/exit the catamaran with limited assistance. Wildlife sightings, while likely, are not guaranteed.",
          offerings: [{ date: "2027-01-09", departure_time: "09:30" }],
        },

        {
          code: "PIC-008",
          name: "The Queen Charlotte Track & Scenic Cruise",
          duration_hrs: 3.5,
          price_usd: 139,
          retail_price_usd: 289,
          activity_level: "strenuous",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Experience the pure wonder of Queen Charlotte Sound up-close as you hike along the pathway that tracks its shoreline, ferried there and back by motor launch. You’ll board the Sounds Adventure at the pier, across the sound at a casual pace, all the better to admire the stunning scenery. Your destination is Mistletoe\nBay – where you’ll step ashore for a guided trek along an especially picturesque stretch of the 45-mile route known as the Queen Charlotte Track. You’ll be walking over a clay soil bridle path originally traveled by the Maori, through relatively level terrain that rewards you for your effort with sensational scenery nearly every step of the way. Pass bushlands laden with palms, ferns, and delicate flowering orchids. Peer up at some of the same towering rimu trees Captain Cook would have seen during his own visit to this sound in the 1770s. Spot agile gannets swooping into the water for fish and listen of the fluting calls of the greenish bellbird or the highly intelligent tui, a bird that can imitate human speech. The flora and fauna are ever changing and always awe-inspiring. After about 90 minutes, you’ll be back on the launch, bound for Picton.\n·Step directly into the scenery surrounding Queen Charlotte Sound on a guided perimeter walk.\n·Travel by motor launch across the sound to remote Mistletoe Bay, where you’ll pick up the path.\n·Trek through ancient forest and lush, ferny bushland along a track that dates back to pioneer times. ·Hear exotic bird calls as you gaze down on the sound’s majestic sea-flooded valleys and hidden coves. ·With your guide leading the way, return to the launch for the scenic run back across to the pier\n·Wear weather-appropriate clothing.\n·Flat, comfortable walking or hiking shoes are recommended. ·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes approximately 90 minutes of moderate walking over natural surfaces. The tour is not available to wheelchair guests or those with mobility concerns.",
          offerings: [{ date: "2027-01-09", departure_time: "09:45" }],
        },

        {
          code: "PIC-009",
          name: "Picton Waterfront Walk",
          duration_hrs: 1.5,
          price_usd: 0,
          retail_price_usd: 69,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: true,
          free_shore: true,
          description:
            "Take a scenic walk along Picton’s waterfront as your local guide provides color on the city’s cultural, natural and architectural landmarks. You’ll shuttle from the pier to the heart of town and the white-arched War Memorial dedicated to locals lost in the battles of World War I. Strolling the waterfront from here, you’ll learn about Picton’s whaling history and its ongoing efforts to protect these magnificent mammals. A walk around the marina’s jumble of private yachts and commercial fishing vessels puts a spotlight on how intertwined this community is with the sea. Crossing a picturesque pedestrian bridge and ascending to a lookout point, enjoy spectacular views out into Queen Charlotte Sound – part of a vast network of ancient river valleys now covered by ocean water. Separated by steeply forested peaks, these Marlborough Sounds collectively comprise a fifth of the entire New Zealand coastline. Arriving at the crafts market and the walk’s end, enjoy a complimentary coffee, tea or a uniquely Kiwi treat – a scoop of vanilla ice cream with lumps of honeycomb toffee known as a hokey pokey. Afterwards, explore Picton further at your leisure or shuttle back to the pier.\n·Enjoy a relaxed Picton walk, taking in natural beauty, waterfront landmarks and historical commentary.\n·Ascend to a lookout point for fabulous views of Queen Charlotte Sound, a river valley flooded with sea water 10,000 years ago. ·Walk the bustling city marina and see a craft market where talented artisans display their creations.\n·Sip a complimentary coffee or tea, or slurp a cool, gooey Kiwi ice cream treat known as a hokey pokey.\n·Stay in town for exploring on your own or return straightaway to the pier via complimentary shuttle.\n·Weather-appropriate clothing is advised.\n·Wear flat, sturdy walking or athletic shoes; regular street shoes are not suitable.\n·Bring a hat, a bottle of water from the ship, sunglasses and sunscreen as needed.\nThis tour includes approximately 60 minutes of easy-to-moderate walking and standing that includes a short but steep incline to reach the lookout. The remainder of the walk includes some lesser inclines. Participants should be in good physical condition, and the tour is not available to wheelchair guests or those with walking difficulties.",
          offerings: [{ date: "2027-01-09", departure_time: "09:45" }],
        },

        {
          code: "PIC-002",
          name: "Marlborough Gourmet Wine & Food",
          duration_hrs: 6.0,
          price_usd: 249,
          retail_price_usd: 399,
          activity_level: "light",
          meal_included: true,
          accessible: true,
          go_local: false,
          free_shore: false,
          description:
            "Sample several of the Marlborough region’s signature wines at three wineries, one of which will enhance the experience by serving a multi-course lunch. There are more than 160 outstanding wineries in this region and the ones chosen for these gourmet tours frequently change. Whether you visit a boutique family-owned winery or one of the larger wineries, chances are, you will sample Marlborough’s famed Sauvignon Blanc. The various terroirs of the vineyards are all ideal for growing this grape, which is used to produce varietal wine or for blending with other grapes. You might also sample a spicy Pinot Noir, a dry Reisling and a crisp citrusy Chardonnay. It all depends on the winery and its location within the Marlborough region. The lunch will also vary accordingly. The only certainties are that each course will be prepared with locally sourced ingredients and thoughtfully paired with an appropriate wine.\n·Sample a selection of inspiring wines at three wineries in the fertile Marlborough region. ·Taste the region’s iconic Sauvignon Blanc, by far the most popular wine produced there. ·Enjoy a two-course lunch featuring local ingredients at one of the wineries.\n·Wear weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\nThis tour includes approximately 2-1/2 hours of easy-to-moderate walking or standing. The tour is available to wheelchair guests who have a collapsible chair,\nare able to make their own way on and off the coach and have an able-bodied companion to assist them. Those with mobility concerns are cautioned to carefully evaluate their personal level of stamina before participating. Guests must be at least 18 years of age to participate in tastings of alcoholic beverages. In the event of scheduling conflicts, it may become necessary to substitute a given winery with another of similar quality. The sequence of the tour may vary.",
          offerings: [{ date: "2027-01-09", departure_time: "10:00" }],
        },

        {
          code: "PIC-011",
          name: "Kayak Queen Charlotte Sound",
          duration_hrs: 3.5,
          price_usd: 139,
          retail_price_usd: 289,
          activity_level: "strenuous",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Enjoy a sea-level perspective of Queen Charlotte Sound as you paddle its pristine waters, spotting seabirds and perhaps dolphins, penguins or fur seals. The adventure begins with a brief, immensely scenic drive through Whenuanui Bay Scenic Reserve, a natural wonderland that juts into Queen Charlotte Sound. At the other end is sheltered Ngakuta Bay, where you’ll receive a safety briefing and kayaking orientation before paddling off in your two-person kayak. For the next two and a half hours, you’ll be immersed in epic beauty – and likely solitude – as you skirt the shore of this isolated corner of the sprawling Marlborough Sounds, a water network so extensive it constitutes one-fifth of New Zealand’s entire coastline. Adopt an easy pace as you explore along unspoiled shores and secluded coves, keeping an eye peeled for the marine life that flourishes here. Possibilities include frolicking dolphins, fur seals basking in the sun, and little blue penguins – the world’s smallest – who congregate on the surface in small groups, then dive to feed on fish and squid. Looking skyward, expect to see endangered king shags and fluttering shearwaters who fly low and fast with bursts of rapid wing beats. Time permitting, you’ll paddle across to the wooded northern shore.\n·Enjoy a drive across a scenic reserve area along Queen Charlotte Sound to sheltered Ngakuta Bay. ·After a safety briefing and kayaking orientation, paddle into the bay and adjacent Grove Arm waters. ·Spend two and a half hours immersed in beauty as you explore pristine shorelines and secluded coves. ·Spot abundant seabirds and marine wildlife that often includes dolphins, fur seals and diving penguins. ·If time permits, paddle across to the northern shore before returning to the pier.\n·Wear weather-appropriate clothing that can get wet.\n·Flat, athletic shoes are recommended.\n·Bring a hat, a bottle of water from the ship, sunglasses and sunscreen as needed.\nThis tour includes two and a half hours of easy-to-moderate paddling. The tour is not available to wheelchair guests or those with mobility issues. Participants should be in good physical condition. Wildlife sightings, while likely, are not guaranteed. Solo tour participants may have to share a kayak with another guest.",
          offerings: [{ date: "2027-01-09", departure_time: "10:00" }],
        },

        {
          code: "PIC-003",
          name: "Marlborough Memories",
          duration_hrs: 3.75,
          price_usd: 0,
          retail_price_usd: 139,
          activity_level: "light",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Savor the full appeal of the Marlborough region with visits to a historic aviation museum, an artisanal craft brewery and a chocolate factory. About 30 scenic minutes’ coach drive from Picton, the Omaka Aviation Heritage Centre showcases one of the world’s largest private collections of WWI aircraft and vintage aviation memorabilia. See everything from Chinese Nanchang trainers to the rare, bird-like Etrich Taube, a Curtis MF Flying Boat, an agile Fokker like the Red Baron flew, and the only Caproni Ca 22 parasol monoplane in existence. This unrivaled collection that also includes historic artifacts and personal belongings from flying heroes. Not far away is Moa Brewery, where you can enjoy a flight of a different sort: of beers and ciders. Produced using zesty New Zealand hops, other local ingredients, and labor-intensive traditional brew techniques, their range is a delicious labor of love. So are the sweet temptations waiting for you at Makana Confections, one of the country’s foremost producers of hand-crafted truffles, macadamia bark, Marlborough wine gelées and even some sugar-free treats. You’ll love every bite of this visit.\n·Travel by coach into the Marlborough region, where historic and gourmet landmarks are on the agenda. ·Tour a fascinating, world-class collection of WWI-era aircraft at Omaka Aviation Heritage Centre.\n·See extremely rare planes and memorabilia, the personal collection of film director Sir Peter Jackson. ·Visit Moa Brewery, crafting award-winning beers from premium NZ hops and heritage methods.\n·Stop in at Makana Confections, home of dangerously tempting handmade chocolates and other sweet treats. ·Wear weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes approximately 90 minutes of easy-to-moderate walking and standing. The tour is not available to wheelchair guests, and those with mobility concerns are cautioned to carefully evaluate their personal level of stamina before participating. Guests must be at least 21 years of age to participate in tastings of alcoholic beverages. The sequence of the tour may vary.",
          offerings: [{ date: "2027-01-09", departure_time: "10:15" }],
        },

        {
          code: "PIC-005",
          name: "Green-Shell Mussel Cruise",
          duration_hrs: 3.5,
          price_usd: 259,
          retail_price_usd: 409,
          activity_level: "light",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Cruise through Queen Charlotte Sound/Totaranui on a luxurious catamaran while enjoying a plate of Greenshell mussels and a glass of Sauvignon Blanc. Although originally named for the wife of England’s King George III, the sound now also bears the Maori name Totaranui. One aspect of the sound hasn’t changed: the abundance of Greenshell mussels. These bi-valves, also known as green-lipped mussels, are indigenous to New Zealand. Besides being vitamin-rich, they are extraordinarily tender and flavorful. The taste is often described as clean and slightly sweet. You can decide for yourself while snacking on the plump mussels, which will be served with Sauvignon Blanc, the area’s iconic white wine. They pair beautifully. The scenery throughout the forest-rimmed sound will be just as delightful. Keep an eye out for fur seals, sea birds such as Little Blue Penguins and four species of dolphins – common, bottlenose, Dusky and Hector’s.\n·Enjoy Greenshell mussels and Sauvignon Blanc wine while cruising on a catamaran. ·Admire the gorgeous scenery while cruising through Queen Charlotte Sound/Totaranui. ·Look for fur seals, sea birds and dolphins, which are all frequently spotted.\n·Wear weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThe tour is not available to wheelchair guests, and those with mobility concerns are cautioned to carefully evaluate their personal level of stamina before participating. Guests must be at least 18 years of age to participate in the tasting of alcoholic beverages.",
          offerings: [{ date: "2027-01-09", departure_time: "10:30" }],
        },
      ],
    },

    /* ── WELLINGTON ──────────────────────────────────── */
    {
      name: "Wellington",
      country: "New Zealand",
      dates: ["2027-01-10"],
      excursions: [
        {
          code: "WLG-003",
          name: "Seal Coast Safari",
          duration_hrs: 3.5,
          price_usd: 149,
          retail_price_usd: 299,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Head off-road into the unspoiled wilds along Wellington’s southern coastline to observe a thriving colony of fur seals in their natural habitat. Expect an immensely scenic trip as your driver transports you in a offroad vehicle specifically designed for traversing rugged terrain. The landscape around here certainly qualifies; it’s craggy, hilly, and lots of it is inaccessible to anything short of the kind of rig you’re riding in. You’ll travel southwest along a fault line that runs the length of the North Island, treated to jaw-dropping views of the surrounding mountains and even those of the South Island across Cook Strait. Your destination: Tongue Point, a rocky spit of land jutting into the sea, where you’ll drive onto the beach and into a seal bonanza. Once on the brink of extinction, now-protected fur seals have made a steady comeback. Their hallmarks are visible external ears, pointy whiskered snouts, and delightfully social and animated behavior. You’ll have time to watch them interact here on the rocky shore and regularly head into the sea to cool down, while enjoying some refreshments. Able to dive underwater for as long as 11 minutes at a time, they are spectacularly nimble in the water.\n·Head out from the pier by specially equipped offroad vehicle, bound for the very southern tip of the North Island.\n·Revel in spectacular views, including all the way across windy Cook Strait, as your driver follows a fault line out to wild Tongue Point.\n·Now down on the rocky beach, spend time observing a thriving colony of fur seals in their natural habitat.\n·Watch in fascination as these plush-furred, highly social marine mammals interact on land and dive into the sea to hunt for fish, squid and octopus. ·Wear casual, weather-appropriate clothing; include a light jacket or raincoat.\n·Flat, sturdy walking shoes are recommended.\n·Bring a hat, a bottle of water from the ship, and sunglasses and sunscreen as needed.\nWalking on this tour is over sandy beach and rocky surfaces. The tour is not available to wheelchair guests and those with mobility concerns are cautioned to carefully pre-evaluate their personal level of stamina given the terrain involved. Your offroad vehicle will travel over off-road tracks and bumpy terrain; the tour is not recommended for those with back, neck or hip problems. There are no toilet facilities either en route or at the beach. This tour operates with a driver/guide, not a separate guide.",
          offerings: [{ date: "2027-01-10", departure_time: "08:00" }],
        },

        {
          code: "WLG-018",
          name: "Wairarapa Wineries & Lunch",
          duration_hrs: 6.5,
          price_usd: 249,
          retail_price_usd: 439,
          activity_level: "moderate",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Savor wine tastings and lunch at two of the premier wineries in the Wairarapa region, a fertile land particularly renowned for its award-winning reds. A panoramic drive through the lush Hutt Valley and over the majestic Remutaka mountain chain will bring you to Greytown. The oldest town in Wairarapa, it features the largest collection of wooden Victorian buildings in New Zealand. Greytown exudes history as you will discover while browsing independently. Dropping by Schoc Chocolate for a sampling of its artisanal sweets will set the stage for the tastings that await you at the wineries in nearby Martinborough. The climate there is like that in France’s esteemed Burgundy region and the terroir is well-suited to produce extraordinary pinot noirs, syrahs and sauvignon blancs. The tastings will reveal the complexities and nuances of Martinborough’s wines just as the lunch that follows will display the characteristic flavors of the locally sourced ingredients.\n·Enjoy wine tastings at two esteemed wineries in the Wairarapa region.\n·Gain an understanding of how the terroir is especially ideal for producing red wines. ·Dine at one of the wineries on a lunch that features fresh flavorful local ingredients. ·Settle in for an incredibly scenic drive to and from the Martinborough wineries. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThe tour is not available to wheelchair guests and may not be suitable for those with mobility concerns who are cautioned to carefully evaluate their personal level of stamina and ability. In case you have any dietary request, please advise excursions team onboard 48 hours prior to the Port call. Minimum age to drink alcohol is 18 years, with a companion aged 21 years or older.",
          offerings: [{ date: "2027-01-10", departure_time: "08:00" }],
        },

        {
          code: "WLG-006",
          name: "Wellington City Sights",
          duration_hrs: 3.5,
          price_usd: 0,
          retail_price_usd: 129,
          activity_level: "light",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: true,
          description:
            "The historic sites of Wellington are yours to discover during this scenic orientation tour of New Zealand's Capital City. Depart the pier for the drive along picturesque Oriental Bay en route to the summit of Mt. Victoria. Upon arrival, you will take in panoramic views and photo opportunities overlooking the city and harbor. You will then continue on through Lambton Quay, Wellington's bustling business and shopping district, before boarding a charming red cable car for the ride up the hill to Kelburn. From here, you will take in more sweeping views of the city below. Afterward, you will re-board your coach for the short drive down through the historic suburb of Thorndon, and a visit to the Wellington Botanical Gardens. Upon arrival at the Wellington Botanical Gardens, you will take a guided stroll around the Lady Norwood Garden and Begonia House. Next, you will continue on to Old St. Paul's Church, one of New Zealand's finest examples of Colonial Gothic architecture. Designed by the Reverend Frederick Thatcher and completed in 1866, it is constructed entirely of native timber. During your visit, you will have an opportunity to explore the church's interior, which is noted for its beautiful stained glass windows. Your tour will conclude with a photo stop outside Wellington's interesting Parliament buildings, including the tier-shaped Beehive building housing the executive offices of the Prime Minister and Cabinet Ministers. Following your visit, you will re-board your coach for the return drive to the ship. If you wish, you may remain in the city for more sightseeing, then return via shuttle bus to the ship. Please note: This tour includes approximately 90-minutes of easy walking. The tour is available to wheelchair guests who have a collapsible wheelchair, are able to make their own way on and off the coach and have an able-bodied companion to assist them. Those with mobility concerns are cautioned to carefully evaluate their personal level of stamina and ability. Weather appropriate layered clothing; sun cap; sunglasses; and flat, comfortable walking shoes are recommended. The order of the sites viewed or visited may vary. This tour may not operate with a separate guide, but rather with a driver/guide.",
          offerings: [{ date: "2027-01-10", departure_time: "08:15" }],
        },

        {
          code: "WLG-010",
          name: "In the Footsteps of Lord of the Rings",
          duration_hrs: 3.5,
          price_usd: 0,
          retail_price_usd: 149,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Get a rare, behind-the-scenes look at the making of The Lord of the Rings trilogy on a tour of director Peter Jackson’s Weta Workshop special effects studio. A picturesque drive along sandy Oriental Bay toward Mount Victoria brings you to wondrous Wellington Harbor views and a stop to stroll the dense forest that served as the Outer Shire where Frodo and company began their epic journey. But the feature attraction of this journey is further ahead in Miramar, where a LOTR expert guide will lead you on an exclusive peek into the movie magic lurking inside the Weta Workshop and Weta Cave. Insights into the production process will be revealed as you tour these custom-built facilities full of props, models, costumes and Middle Earth weaponry. Interactive exhibits go into deeper detail as you learn about over 20 years of blockbuster effects work that’s been brought to life here. Even if you don’t know an Orc from a Dwarf, this will be a fascinating glimpse behind the screen. At tour’s end, ride back to the pier or request an optional drop-off in the city.\n·Visit the Wellington studio where local-hero Peter Jackson brought The Lord of the Rings and other film legends masterfully to life.\n·En route, stop for epic views over Wellington and stroll the same woods the Hobbits did at the start of their long film journey.\n·Tour the Weta Workshop complex with a crewmember as they share fascinating secrets and show off props, models, and weapons made for the LOTR films\nand many more.\n·Wear layered, weather-appropriate clothing.\n·Flat, comfortable walking or hiking shoes are recommended.\n·Bring a hat, a bottle of water from the ship, sunglasses and sunscreen as needed.\nThis tour involves about 2 hours of moderate walking and standing over unpaved and sloping walkways. The tour is not available to wheelchair guests or those\nwith limited mobility. No photography or filming is permitted within the actual Weta Workshop. There is a specific area before entering the workshop where photos are allowed.",
          offerings: [
            { date: "2027-01-10", departure_time: "08:30" },
            { date: "2027-01-10", departure_time: "09:30" },
          ],
        },

        {
          code: "WLG-004",
          name: "Wellington's Impressive Food & Art Scene",
          duration_hrs: 6.0,
          price_usd: 319,
          retail_price_usd: 499,
          activity_level: "moderate",
          meal_included: true,
          accessible: false,
          go_local: true,
          free_shore: false,
          description:
            "Discover why Wellington has gained such widespread accolades for its food and art during this behind-the-scenes gastronomy and gallery tour. After a quick transfer hop out for your relaxed walk through some of Wellington’s liveliest back streets, where the craft gallery browsing is eclectic, the designer stores are filled with temptation, and the local artisanal cuisine sampling is...flavorful. Starting with a visit to a popular local cafe, you'll hear the story of an NZ invention that’s gone global – the'flat white' barista made coffee. From here, we'll head on foot to a nearby chocolatier with a 'bean to bar' philosophy. You'll enjoy a decadent chocolate tasting while learning about their sustainability practices, including fair trade and a focus on producing additive free products. Next up, we'll visit a leading public art collection at one of the major cultural institutions in Wellington.The main event is yet to come: a light, tasting lunch paired with New Zealand wines at a leading Wellington restaurant. Eventually, with your visual and culinary appetites well-satisfied, you’ll reboard a shuttle for the return drive to your waiting ship.\n·Enjoy a guided, curated dive into Wellington’s renowned – and buzzing – food and art scene. ·Experience the capital city with mature, local guides and get to know about life in Aotearoa New Zealand. ·View leading public art collections at a cultural institution.\n·Meet local food and beverage producers and hear their stories.\n·Cap this sensory extravaganza with tasting lunch and wines at a top Wellington resto.\n·Wear weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour is not available to guests who utilize a wheelchair. Those guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina. Participants may be required to walk 3km-5kms along formed paths. The sequence of restaurants, cafés and galleries visited may vary. Venues may vary in case of special events or public holidays.",
          offerings: [{ date: "2027-01-10", departure_time: "09:00" }],
        },

        {
          code: "WLG-007",
          name: "Wellington Harbour & the Storm Coast",
          duration_hrs: 4.0,
          price_usd: 0,
          retail_price_usd: 149,
          activity_level: "light",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Explore Wellington Harbour, one of the most beautiful natural harbors in the world, during this scenic half-day tour of its eastern shoreline. Depart the pier for the drive to Petone, where Wellington's first settlers arrived in 1840. Along the way, you will pass through some delightful bays, route to the pretty seaside suburb of Eastbourne. From Eastbourne, you will proceed along the spectacular unpaved coastal road through Pencarrow Station, one of the first sheep and cattle stations in the Wellington area. Comprised of 2,000 acres, Pencarrow Station is home to hidden lakes, New Zealand's oldest lighthouse and several sacred Maori sites. Your driver will relate entertaining and informative stories of the shipwrecks hidden just off the coast as you make your way to Pencarrow Lodge. From this vantage-point, on a clear day you may take in expansive views and photo opportunities across Cook Strait and on the South Island. As you sip your morning tea and admire the incredible vistas, lodge owners Don McCreary and his team will be happy to discuss life in such a remote and dramatic location. They will also provide you with a short sheep dog demonstration where his highly trained sheep dogs will muster a small flock of sheep.\n·Travel the picturesque eastern shoreline through charming bays.\n·Discover this quaint seaside suburb nestled between the hills and the sea.\n·On a clear day Take in stunning panoramic views across Cook Strait to South Island from this dramatic coastal retreat. ·Wear casual, weather-appropriate clothing; include a light jacket or raincoat.\n·Flat, sturdy walking shoes are recommended.\n·Bring a hat, a bottle of water from the ship, and sunglasses and sunscreen as needed.\nFollowing your visit, you will re-board your coach for the return drive to the pier and ship.",
          offerings: [{ date: "2027-01-10", departure_time: "09:15" }],
        },

        {
          code: "WLG-009",
          name: "Te Papa Tongarewa Museum",
          duration_hrs: 4.0,
          price_usd: 0,
          retail_price_usd: 149,
          activity_level: "light",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: true,
          description:
            "Gain great insight into the Maori culture at Te Papa Tongarewa, the national museum of New Zealand, where many of the most significant Maori treasures are displayed. Depart from the pier and enjoy a short drive to the Te Papa Tongarewa Museum, a landmark national museum constructed in an architectural style that reflects New Zealand's history and evolving identity. Symbolism is abundant throughout the museum and includes entrance boulders that reflect Mother Earth and the local Maori heritage, and elaborate \"waharoa\" gateways that serve as thresholds to the country's natural and cultural heritage. The museum holds more than 30,000 cultural treasures known as \"taongas\" in its Taonga Maori Collection, the focus of your visit. While browsing the exhibits, you'll learn the history of the most highly prized tribal artifacts, which include ancestral carvings, garments, shells and weapons. There are also fine examples of Maori weaving that beautifully express the different techniques used for baskets, cordage and house panels. Following your exploration of Te Papa, you'll be treated to Kapu Ti, a sampling of traditional dishes and a hot drink. Then, you'll drive back to the pier.\n·Explore New Zealand’s iconic national museum, a striking architectural landmark rich in symbolism. ·See intricate examples of Maori weaving used in baskets, cordage, and decorative panels.\n·Gain insight into Maori heritage, traditions, and storytelling through expertly curated exhibits.\n·Wear casual, weather-appropriate clothing; include a light jacket or raincoat.\n·Flat, sturdy walking shoes are recommended.\n·Bring a hat, a bottle of water from the ship, and sunglasses and sunscreen as needed.\nThis tour includes approximately 2-hours of easy to moderate walking/standing. The tour is available to wheelchair guests who have a collapsible wheelchair,\ncan make their own way on and off the coach and have an able-bodied companion to assist them. Those with mobility concerns are cautioned to carefully evaluate their personal level of stamina and ability. Weather appropriate clothing; sunglasses; and flat, comfortable walking shoes are recommended. Tour order may vary.",
          offerings: [{ date: "2027-01-10", departure_time: "09:30" }],
        },

        {
          code: "WLG-WT1",
          name: "Wellington Sights and Yoga in the Garden",
          duration_hrs: 3.5,
          price_usd: 139,
          retail_price_usd: 239,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: true,
          free_shore: false,
          description:
            "Practice yoga amid fragrant roses and herbs in Wellington Botanic Garden, then breathe in amazing views from atop Mount Victoria. Long established as New Zealand’s capital and recently as its “Capital of Cool,” Wellington brims with landmarks both architectural and natural – and you’ll encounter many of them during your brief drive to Wellington Botanic Garden. First planted in the 1860s, this 61-acre urban oasis features everything from a rare begonia conservatory to tranquil duck ponds to a hefty slice of old-growth forest. It’s also the picture-perfect locale for a yoga session. Led by your instructor, you’ll move through a series of postures and deep-breathing techniques, becoming ever more self-aware and attuned to your world connection. While practiced in many forms, all yoga has physical and emotional well-being as its goal. Feeling calmed, yet invigorated, you’ll depart the garden and resume your rolling survey of the city’s top areas of interest. A drive up to the Mount Vic lookout rewards you 360-degree panoramas of Wellington, its iconic harbor and the ocean beyond. By the way, the dense forest surrounding this mountain is so enchanting, it was used for filming Hobbit scenes in the Lord of the Rings movies.\n·Take in some of the highlights of New Zealand’s capital city en route to a tranquil botanic garden.\n·Experience inner calm and outer awareness during an instructor-led yoga session amidst heritage rose gardens and ferneries. ·Travel up to the Mount Victoria lookout, renowned for its breathtaking views of Wellington Harbor.\n·Ride back to the city centre on Wellington’s historic Cable Car.\n·Wear light clothing that allows free movement.\n·Flat, comfortable sneakers or walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour is not available to guests who utilize a wheelchair. Those guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina. Tour order may vary.",
          offerings: [{ date: "2027-01-10", departure_time: "09:45" }],
        },

        {
          code: "WLG-017",
          name: "Shenandoah Heritage Experience",
          duration_hrs: 3.5,
          price_usd: 149,
          retail_price_usd: 259,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Become acquainted with rural life at a historical working farm by exploring the grounds and hearing stories about the homestead’s past. Upon arriving at Shenandoah Farm, you will meet Simon, a passionate raconteur with a deep connection to this beautiful setting perched above the Pauatahanui Inlet. Besides showing you around, he will reveal how the land was once a fortified Maori village, a key battleground in the 19th-century New Zealand Wars and a U.S. Marine Corps training base during WWII. As the story unfolds, you will enjoy exclusive access to Simon’s private museum, which holds rare artifacts unearthed on the property over the past 150 years. It also contains a collection of vintage Harley-Davidson motorcycles, all meticulously restored. You will also have the chance to meander through the formal gardens, interact with the farm animals and observe the birds that inhabit the surrounding reserve. A relaxing tea and snack will make the experience more enjoyable.\n·Explore a working farm with a local Kiwi with a deep connection to the land. ·Learn about the land’s historical importance through the centuries.\n·Browse a private museum with unusual artifacts found on the property.\n·Stroll the farm’s formal gardens and observe the birds in the surrounding reserve. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThe tour is not available to wheelchair guests and may not be suitable for those with mobility concerns who are cautioned to carefully evaluate their personal level of stamina and ability. In case you have any dietary request, please advise excursions team onboard 48 hours prior to the Port call.",
          offerings: [{ date: "2027-01-10", departure_time: "10:00" }],
        },
      ],
    },

    /* ── GISBORNE ────────────────────────────────────── */
    {
      name: "Gisborne",
      country: "New Zealand",
      dates: ["2027-01-11"],
      excursions: [
        {
          code: "GIS-002",
          name: "Gisborne City Cycling Tour",
          duration_hrs: 2.5,
          price_usd: 0,
          retail_price_usd: 199,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Take a seat for a leisurely two-wheeled spin through downtown Gisborne and out along a level cycling trail. Along the way, you’ll encounter much the city’s local color and many of its most significant sites – and even take out time for morning tea at a lovely Art Deco café. A town that knows how to appreciate life’s pleasures, Gisborne – or “Gizzy,” as it is affectionately known, has a colorful backstory that revolves around the 1769 meeting of European explorer James Cook and the local Maori who had migrated to these shores hundreds of years earlier. Your guide will elaborate on that history and show you the spot where the meet-up happened, along with other landmarks that usually include an extraordinary post office clock tower, the rustic Tairawhiti Museum nestled in the trees, and the Taruheru River that winds lazily through the city. You’ll also see plenty of “First to See the Light” signs; Gisborne is proud to be New Zealand’s easternmost city and the world’s first to greet the rising sun each new day. Your ride also carries you out of the city center and along part of a long stretch of beach that hugs the arc of Poverty Bay.\n·Follow your guide on a cycle though compact downtown Gisborne and out along a shoreside path.\n·See the main sights and monuments, including the one marking where James Cook landed in 1769.\n·Encounter the lovely river that winds through town, surfer-pleasing beaches that line the coast, and the boulevards where the city relaxes and shops. ·Stop mid-ride for a civilized morning tea break at an Art Deco café.\n·Learn about how this town has the distinction of being “First to See the Light.”\n·Wear casual, weather-appropriate clothing.\n·Flat, closed-toe shoes are mandatory.\n·Bring a hat, a bottle of water from the ship, sunglasses and sunscreen as needed.\nThe cycling is on flat terrain on cruiser-style, low-step touring cycles suitable for all age groups. Total route covers approximately 6.5 miles in approximately 2.5 hours. The tour is not available to wheelchair guests or those with mobility issues. Participants should be in good physical condition. The minimum age to participate is 10 years old.",
          offerings: [{ date: "2027-01-11", departure_time: "10:30" }],
        },

        {
          code: "GIS-001",
          name: "Gisborne Orientation",
          duration_hrs: 1.5,
          price_usd: 0,
          retail_price_usd: 59,
          activity_level: "light",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: true,
          description:
            "Take an introductory drive through easy-going “Gizzy,” where a surf beach and a bottle of locally-made wine are never far from hand. These shores are legendary for their beauty, as you will see driving along the coast and past where the great explorer, Captain James Cook, first landed and met the native Maori people in 1769. Traveling up to the top of Kaiti Hill, you’ll be treated to glorious views of beach-lined Poverty Bay and of the white bluffs sitting across the turquoise water; that’s Young Nick’s Head, the first land sighted by Cook’s crew and named for the young lad who spied it. As your coach hugs the shoreline, Wainui and Okitu appear, two showy surfing beaches known for their impressive rollers – and the photogenic sand dunes of Lysnar Reserve. A few miles further out, the scenery changes dramatically as you come into Gisborne’s idyllic rural area. Enjoy the views as you drive along roads bordered by sweet-smelling orchards and award-winning vineyards, and see lush green fields dotted with fluffy sheep and quaint farmhouses. Back in the city, you’ll spin down tree-lined Gladstone Road, where the city shops, dines and people-watches. Hop off here if you’d like to solo-explore.\n·Enjoy an introductory coach tour of Gisborne, a laid-back East Cape town that knows how to enjoy life.\n·Pass gnarly surfing beaches, impressive dunes, New Zealand’s largest Maori meeting house, and Captain Cook’s 1769 landing spot. ·Enjoy panoramic views of Poverty Bay, Young Nicks Head and your ship from atop Kaiti Hill.\n·Travel outside the city to where the vineyards and orchards flourish, and contented sheep graze.\n·Hop off for independent exploring along the café-lined Gladstone Road or stay aboard back to the pier.\n·Wear casual, weather-appropriate clothing.\n·Flat, comfortable shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour is panoramic in nature and there are no stops. The tour is available to wheelchair guests who have a collapsible chair, are able to make their own way on and off the coach and have an able-bodied companion to assist them.",
          offerings: [
            { date: "2027-01-11", departure_time: "10:45" },
            { date: "2027-01-11", departure_time: "12:45" },
            { date: "2027-01-11", departure_time: "14:45" },
          ],
        },

        {
          code: "GIS-004",
          name: "Eastwoodhill Arboretum",
          duration_hrs: 3.5,
          price_usd: 0,
          retail_price_usd: 149,
          activity_level: "moderate",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: true,
          description:
            "Experience an extraordinary collection of Northern Hemisphere trees in a surprising place: over 2,500 miles below the Equator outside Gisborne. Established in 1918 on over 300 acres of fertile North Island ground in the hills of Poverty Bay, Eastwoodhill is New Zealand’s national arboretum – and home to a diverse collection of mature trees that is breathtakingly comprehensive. Hundreds of colorful maples, oaks, ironwoods and poplars as well as fragrant flowering trees – even a towering California redwood – flourish here. On the coach drive to the reserve, a docent from the Friends of the Eastwoodhill will provide background and context on the arboretum – including how modern more-restrictive international agricultural regulations would make it completely impossible to replicate this collection today. Luckily, it’s already here for you to enjoy. And upon arrival, you can choose the manner of enjoying it that suits you best. Options include a 30-minute guided walking tour through the Homestead Garden, a broader-range guided tour in a 4WD vehicle, or the tried-and-true method of setting out on your own two feet with a detailed map and signage to guide you. Either way, you’ll have about two hours here to satisfy your arboreal cravings.\n·Enjoy a scenic drive through the Gisborne hills to tour New Zealand’s 100-year-old national arboretum.\n·Explore parts of Eastwoodhill’s extraordinary 325-acre collection by one of several methods.\n·Follow a guide on a 30-minute narrated walk, take a guided tour by 4WD vehicle, or just go old-school and wander the paths with map in hand. ·See specimen maples, oaks, ironwoods and poplars too numerous to count.\n·Depending on the season, many trees could be in bloom with delightful scents wafting through the air.\n·Wear casual, weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nWhile walking is required on this tour, it is primarily at guests’ discretion; a moderate level of fitness is required for those who wish to walk independently. The tour is available to wheelchair guests who have a collapsible chair, are able to make their own way on and off the coach and have an able-bodied companion to assist them. The 4X4 vehicles cannot accommodate wheelchair guests. Those with other mobility concerns are cautioned to carefully evaluate their personal level of stamina before participating. The 4X4 vehicles are open-air and do not operate in the rain; these are only 4-passenger vehicles and there can be a significant wait-time for one.",
          offerings: [{ date: "2027-01-11", departure_time: "10:45" }],
        },

        {
          code: "GIS-006",
          name: "Steam Train to Muriwai",
          duration_hrs: 3.0,
          price_usd: 0,
          retail_price_usd: 179,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Relive the golden age of steam rail travel on a scenic vintage train journey with a charming Maori cultural performance at the turnaround point. Built in 1897, “WA 165” was brought to Gisborne in 1911, faithfully working the north line until its 1942 retirement to a children’s playground. Rediscovered and lovingly restored to original working condition, it runs again in all its Victorian glory. Stroll or shuttle over from the pier, settle into an upholstered seat in a heritage carriage, and toast your good fortune with a complimentary glass of sparkling wine or juice as you watch the passing scenery in the style of travelers a century ago. Traversing the Poverty Bay Coastline, you’ll pass the Captain Cook Statue and enjoy views across the bay to the famous Young Nick’s Head bluffs. The ride to the rural Maori settlement of Muriwai takes about 40 minutes, and on arrival, you’ll alight on a grass platform where you’ll enjoy a heartwarming performance of traditional songs and dances, often performed with the help of local school children. With the train now turned around, you’ll return to Gisborne – either disembarking at a downtown station for some solo exploring or riding on to the pier.\n·Experience a roundtrip ride in early 20th-century style on a fully-restored heritage steam train.\n·Seated in comfort, cross picturesque coastal terrain and fertile farmland en route to a rural settlement where Maori roots run deep.\n·At Muriwai, enjoy an engaging performance of traditional songs and dance – often with the participation of local school children.\n·On the return, opt to disembark at the Grey Street Railway Station for some independent exploring or stay onboard for the rest of the ride back to the pier. ·Wear weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThere is limited required walking on this tour, but guests must be able to negotiate 3 steep steps to enter and exit the train cars, and the surfaces at Muriwai are natural and uneven. The tour is not available to wheelchair guests and those with mobility concerns are cautioned to carefully evaluate their personal level of ability before participating. Three of the train carriages are air-conditioned but the Heritage carriage is not. There are restrooms on the train.",
          offerings: [{ date: "2027-01-11", departure_time: "11:00" }],
        },

        {
          code: "GIS-007",
          name: "First Light, First Stories: A Gisborne Walk",
          duration_hrs: 2.0,
          price_usd: 0,
          retail_price_usd: 119,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "\nSee Gisborne from a historical and cultural perspective on a leisurely walk that presents the most revealing landmarks in this city of firsts. It was here in the mid-14th century that the migratory Maori first landed and where the English explorer Captain James Cook first set foot in New Zealand in 1769. Being New Zealand’s easternmost city, Gisborne also has the distinction of being the world’s first city to greet the rising sun each new day. You will see a statue of Cook, another of his cabin boy who spotted New Zealand, the fishing pier at Wattie’s Wharf, streets lined with Art Deco buildings and an enormous pohutakawa, a native tree that holds prominence in Maori legends. Variety is the beauty of this walking tour as you will come away with an excellent overall understanding of Gisborne’s appeal. For an even deeper look, you can opt to browse the art and artifacts in the Tairawhiti Museum.\n·Stop at historical and cultural landmarks on a leisurely 3-mile walk through Gisborne. ·Hear entertaining commentary about Gisborne and the city’s many firsts.\n·See a statue of the famed Captain Cook, who first landed in New Zealand at Gisborne. ·Admire the city’s Art Deco architecture and learn about the influence of the Maoris. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nWhile the tour is not strenuous, guests should be comfortable standing and walking for extended periods. This tour is around 4-5 kilometers of easy walking.\nGuests are please asked to ensure all rubbish is appropriately discarded into bins. At the conclusion of the walking tour, guests may remain in town to explore independently and return to the port at their own discretion. Please note that no shuttle service is provided, so guests must ensure they make their own way back to the ship and are mindful of all aboard time. Tour order may vary.",
          offerings: [{ date: "2027-01-11", departure_time: "11:15" }],
        },

        {
          code: "GIS-008",
          name: "Rural New Zealand Experience",
          duration_hrs: 3.5,
          price_usd: 179,
          retail_price_usd: 309,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Discover the joys and challenges of rural life at the Waipura Station, whose owners will candidly share their experiences. Sprawling over 2,100 acres of rolling farmland on the outskirts of Gisborne, Waipura, which means “plentiful water” in Maori, is an idyllic spot that the fifth generation of the Maclaurin family owns. Your local hosts will happily show you around the station. After watching sheep being sheared in the woolshed, you will see a muster demonstration, in which herding dogs show off their prodigious skills by following their shepherd’s commands, whistles and body language to round up the sheep. You can’t help but be awed by their teamwork as the shepherd and dogs work in perfect sync. During tea in the century-old homestead, the family will share personal stories about farm life and how it continues to evolve. You will come away with a much deeper understanding and respect for rural living.\n·Visit the Waipura sheep station, whose owners will show you around the farm. ·Watch a sheep-shearing demonstration in the woolshed.\n·See herding dogs masterfully round up stray sheep in the fields.\n·Hear stories about farm life as you share tea and pastries with the owners. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nNot suitable for guests using wheelchairs or with significant mobility limitations due to uneven ground and farm infrastructure. Guests must be able to walk short\ndistances over uneven surfaces and board/disembark the coach unaided. Guests will experience a mix of terrain typical of a working hill-country farm. Surfaces include flat and uneven grassy paddocks, gravel farm paths, and a few gentle inclines. Access to the woolshed and garden areas involves a few steps. After rainy conditions, muddy patches are more frequent, so appropriate footwear is essential. Minimum age to participate is 10 years of age.",
          offerings: [{ date: "2027-01-11", departure_time: "11:45" }],
        },

        {
          code: "GIS-009",
          name: "Heart of Maori Culture",
          duration_hrs: 2.5,
          price_usd: 329,
          retail_price_usd: 569,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: true,
          free_shore: false,
          description:
            "Become immersed in the culture of New Zealand’s indigenous people by visiting a marae, a traditional gathering place that is essential to the Maori way of life. On the way to Te Ohako Marae, a tribal elder will present a short history of the Maori through stories, more of which you will hear at the marae. During the customary welcome ceremony – known as a powhiri – a karanga caller will offer a unique greeting, which will be followed by the heralding sound of a conch, a warrior challenge to test your intentions, formal speeches, and Maori songs. You will then witness a hongi, in which two people press their noses and foreheads together, as a sign of welcoming you into their home. The rest of your time in the marae will be just as authentic and enlightening as the Maori invite you to share their intriguing culture.\n·Engage in the Maori way of life by visiting an authentic tribal gathering place. ·Watch and participate in an elaborate greeting ceremony unique to the Maori. ·Enjoy Maori foods and refreshments as part of your cultural immersion. ·Hear an elder describe Maori history and culture on the way to the marae. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nVenues visited may change depending on availability. Guests should be comfortable standing and walking for short periods, including on grassy or uneven\nground. Some indoor areas may require removing footwear. Photos may be restricted in certain areas—your guide will advise where appropriate. Tour order may vary.",
          offerings: [{ date: "2027-01-11", departure_time: "11:45" }],
        },

        {
          code: "GIS-003",
          name: "Leading Gisborne Wineries",
          duration_hrs: 4.0,
          price_usd: 0,
          retail_price_usd: 149,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Taste the distinctive North Island terroir as you visit two leading Gisborne vineyards and sample their most characteristic wines. Blessed with a Mediterranean-style climate, fertile alluvial soil and low-altitude river plains, this area is fast becoming one of New Zealand’s largest wine-producing regions – renowned especially for its chardonnays and gewürztraminers. On this tour, you’ll have the delicious opportunity to find out what all the fuss is about. Traveling by coach from the pier, it’s a short but picturesque drive out into the rolling, green hills of wine country. At Bushmere Estate, where the Egan family has been growing grapes for over 40 years, you’ll sample their selections accompanied by a light antipasto platter. The tasting may include their elegant chardonnay redolent of nectarine and grapefruit, or an excellent gewürztraminer, known for its lychee flavor with a touch of honey and a lime/ginger finish. At Matawhero Wines, the offerings can be quite adventurous; founder Bill Irwin defied convention from the get-go in 1968, making wines of boutique standing and bringing acclaim to New Zealand’s prowess in the process. At one point, absolutely everyone was drinking Matawhero’s wines – even the Queen of England. You’ll sample their varietals while nibbling on complimentary cheeses.\n·Travel out to Gisborne wine country and sample the wares at two prominent vineyards.\n·At the family-run Bushmere Estate, taste wines of standout character created for generations.\n·Visit the tasting room at Matawhero Wines, known for their inventive, renegade spirit – and a gewürztraminer fit for a Queen. ·Learn about the unique growing conditions that make this region heaven for chardonnay and gewürztraminer grapes. ·Nibble light antipasto and cheese.\n·Wear casual, weather-appropriate clothing.\n·Flat, comfortable shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes some easy to moderate walking/standing and there will be a few steps to negotiate as well as natural and gravel surfaces. The tour is not available to wheelchair guests and those with mobility concerns are cautioned to carefully evaluate their personal level of stamina and ability.",
          offerings: [{ date: "2027-01-11", departure_time: "12:00" }],
        },
      ],
    },

    /* ── ROTORUA / TAURANGA ──────────────────────────── */
    {
      name: "Rotorua / Tauranga",
      country: "New Zealand",
      dates: ["2027-01-12"],
      excursions: [
        {
          code: "TAU-019",
          name: "Te Puia & Polynesian Spa",
          duration_hrs: 8.0,
          price_usd: 309,
          retail_price_usd: 549,
          activity_level: "strenuous",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Behold the geothermal wonders in Te Puia, a natural reserve with a deep connection to the Maori, and soak in the therapeutic waters of a hot spring’s spa. While wandering the trails that wind through Te Puia, you will gaze out over a Jurassic-like landscape of steaming geysers, bubbling mud pools and mineral-rich hot springs. The raw power of nature will be evident throughout this reserve that the Maori hold sacred. Your friendly local guide for a fascinating tour of the most geothermal valley in NZ and the NZ Maori Arts & Crafts Institute. At the Polynesian Spa in Rotorua, you can ease into its hot springs, whose geothermally heated waters have been harnessed to offer a variety of wellness experiences. You can expect to emerge from the outdoor bathing pools with glowing skin and an overall sense of relaxation and rejuvenation. Later, while driving through orchards of kiwi, you will pause to sample this iconic nutrient-rich fruit.\n·Be awed by Te Puia’s steaming geysers and mud pools in the primeval Whakarewarewa Valley. ·Discover why the Maori consider the valley sacred.\n·Soak in the naturally heated outdoor bathing pools at the Polynesian Spa.\n·Feast on a Kiwi-style buffet.\n·Sample fresh-picked kiwi while pausing at a fruit orchard. ·Dress in weather-appropriate clothing.\n·Bring a swimsuit, towel, and sunscreen.\n·Wear flat comfortable walking shoes.\nThis tour includes approximately 3 hours of walking. It is not recommended to guests who utilize a wheelchair. Those guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina. There are ramps at Te Puia & Polynesian Spa. Guests must stay on the marked trails. As with all geothermal regions, the smell of hydrogen sulfide permeates the atmosphere. Guests must not leave the marked trails as boiling mud, water, and steaming vents that can burn them. Lockers, Towels and changing facilities are provided at Polynesian Spa. Please advise of any Dietary requirements 48 Hours in advance of the Port call. Please note that tour order may vary.",
          offerings: [{ date: "2027-01-12", departure_time: "08:45" }],
        },

        {
          code: "TAU-021",
          name: "Kiwi Hatchery & Agrodome Farm",
          duration_hrs: 7.0,
          price_usd: 189,
          retail_price_usd: 329,
          activity_level: "moderate",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Visit a hatchery that raises kiwi birds and ride an ATV through fertile farmland that is home to all sorts of domesticated animals. The National Kiwi Hatchery is the country’s largest, most successful such conservation facility and offers an up-close look at New Zealand’s national bird. You will see kiwi eggs being incubated, watch footage of the hatching process and maybe even observe a newly hatched chick. Kiwis are flightless, have furlike plumage and lay eggs six times larger than eggs laid by birds of a similar size. Being nocturnal, they also have relatively poor eyesight and rely on their sense of smell and hearing and cat-like whiskers to feel their way around in the dark. You will see a variety of other animals up-close while riding around the nearby Agrodome in an all-terrain tractor trailer. This is an interactive visit, so you'll meet and possibly hand-feed loads of friendly animals, including Romney sheep, cattle, deer, llamas and alpacas. Enjoy a buffet lunch in the Farmyard Café featuring kiwi-inspired food before making your way back to the port.\n·Learn more about New Zealand’s national bird than you ever thought possible at a kiwi hatchery. ·See kiwis in various stages of development and learn unusual facts about the birds.\n·Ride around the Agrodome farm in all-weather, all-terrain tractor trailer.\n·View a variety of domesticated animals ranging from deer to Romney sheep.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThe tour is not available to wheelchair guests and may not be suitable for those with mobility concerns who are cautioned to carefully evaluate their personal\nlevel of stamina and ability, as there are dirt tracks, grass fields and gravel. Please advise of any Dietary requirements 48 Hours in advance of the Port call. Please note that tour order may vary.",
          offerings: [{ date: "2027-01-12", departure_time: "08:45" }],
        },

        {
          code: "TAU-026",
          name: "Kohutapu Lodge: The Story of a People and Place",
          duration_hrs: 8.0,
          price_usd: 269,
          retail_price_usd: 469,
          activity_level: "moderate",
          meal_included: true,
          accessible: false,
          go_local: true,
          free_shore: false,
          description:
            "Delve deeply into the Maori culture at the lakeside Kohutapu Lodge, where the Ngati Manawa tribal people will show you their traditional way of life. For a historical perspective of the Maori, you will walk through the bush to view centuries-old rock art in a once-hidden forest location. During the journey, you will learn about the spiritual significance of this ancestral land and how the Maori have always lived in harmony with the natural world. Back at the lodge, you will feast on a meal slow cooked in a hangi underground pit oven. The buffet offerings will be surprisingly diverse and likely include items ranging from wild pork to root vegetables such as kumara, a type of sweet potato. Learn about how the longfin eels are used as a food source and might be included in the lunch. Snake-like fish are so essential to the local culture that the Ngati Manawa are often referred to as the Eel People.\n·Visit an authentic Maori village that still practices a traditional way of life.\n·See Maori rock art that was carved more than 400 years ago in a hidden forest location. ·Experience daily life in Kohutapu, a village where the Maori tribe Ngati Manawa live. ·Feast on a meal cooked in an underground pit oven.\n·Gain insight into the cultural importance of the longfin eels in the village lake.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nIt is not recommended to guests who utilize a wheelchair. Those guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina. Please advise of any Dietary requirements 48 Hours in advance of the Port call. Please note that tour order may vary.",
          offerings: [{ date: "2027-01-12", departure_time: "08:45" }],
        },

        {
          code: "TAU-008",
          name: "The Rotorua Experience",
          duration_hrs: 6.5,
          price_usd: 129,
          retail_price_usd: 279,
          activity_level: "moderate",
          meal_included: true,
          accessible: true,
          go_local: false,
          free_shore: false,
          description:
            "Enjoy an immersive excursion into the historic spa region of Rotorua, where breathtaking geothermal activity and traditional Maori culture are among the chief draws. From the Tauranga pier, a scenic 90-minute spin inland past sprawling kiwifruit orchards leads to internationally renowned Te Puia and the Whakarewarewa Thermal Reserve. Foremost among the sights you’ll encounter as you explore on foot here is Pohutu Geyser, a showy display of nature’s raw force as it erupts with steam and superheated water, sometimes as high as 100 feet. You’ll also see pools of boiling mud, silica terraces and hissing fissures – and visit Te Puia’s Arts & Crafts Institute where young Maori apprentices are taught the ancient art of carving and weaving by masters of these crafts. Entering the sacred marae, you’ll be presented with a Maori performance including the famous “haka” war dance, before making your way into the Wharekai dining hall for a hangi-inspired lunch, cooked in the traditional Maori method using hot rocks in an earthen oven. During your time at Te Puia, be sure to keep an eye out for the native kiwi bird. Handsome, furry and flightless, it’s been New Zealand’s national symbol since the First World War.\n·Travel across the NZ countryside by coach to visit a natural and cultural icon just outside Rotorua.\n·Explore a steaming world of geothermal wonders at Te Puia, home to the famous Pohutu Geyser and more bubbling mud pools and hissing vents than you can count.\n·See the traditional skills of the Maori culture being handed down from masters to their young apprentices at Te Puia’s Maori Arts & Crafts Institute. ·Enter the sacred marae for an exciting performance by Maori dancers, then relax over a savory lunch cooked in “hangi” earth oven style.\n·Wear lightweight, comfortable clothing.\n·Flat, closed-toe walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour requires a moderate amount of walking, including about a half mile of paved pathways and well-maintained tracks at Te Puia. Round trip drive time is approximately 3 hours. The tour is available to wheelchair guests who have a collapsible chair, are able to make their own way on and off the coach and have an able-bodied companion to assist them. Those with mobility concerns are cautioned to carefully evaluate their personal level of stamina before participating. In Rotorua there can be a strong smell of sulfur and this tour is not recommended for those sensitive or allergic to strong smell of sulfur.",
          offerings: [{ date: "2027-01-12", departure_time: "09:00" }],
        },

        {
          code: "TAU-023",
          name: "Mauao Walking Tour & Workshop",
          duration_hrs: 3.0,
          price_usd: 0,
          retail_price_usd: 179,
          activity_level: "strenuous",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Ascend the extinct volcano Mount Maunganui by walking a winding natural trail that offers sweeping ocean views and discover how the native bush plants are used in a hands-on workshop. The volcano is Tauranga’s most iconic landmark as it rises majestically above the urban landscape. While following the mountain’s summit path of about two miles, you will gaze out over the city and the turquoise sea. The higher you go, the more spectacular the views. Birds such as yellow-crowned parakeets and sacred kingfishers may appear along the way, adding another natural element to the experience. You can’t help but feel a deep connection to the land, much like the local Maori. Storytelling during the workshop will reveal more about Maori traditions. You will also focus on how indigenous plants such as flax can be used as a medicine for various ailments, for weaving mats and fishing nets and as a construction material.\n·Follow the trail up Mount Maunganui, the dormant volcano that looms over Tauranga.\n·Take in the gorgeous views of beach-blessed Tauranga and the sparkling sea beyond.\n·Learn about the Maoris’ reverence for the volcano, which they call Mauao and hold sacred.\n·See how native plants are used for medicine, weaving and construction in a hands-on workshop. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nNot suitable for guests with any mobility concerns. The walk consists of uneven gravel paths. Participants should be prepared to walk for about 90 minutes, with some steps included. The total distance is approximately 3.5 km. Guides will educate guests about the customs associated with the Mauao and outline what is culturally acceptable. Please advise of any Dietary requirements 48 Hours in advance of the Port call. Please note that tour order may vary.",
          offerings: [{ date: "2027-01-12", departure_time: "09:00" }],
        },

        {
          code: "TAU-009",
          name: "Rotorua Skyline & Agrodome",
          duration_hrs: 6.5,
          price_usd: 119,
          retail_price_usd: 279,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Admire the gorgeous panoramas while riding up Mount Ngongotaha in a window-walled gondola and delve into the world of sheep and sheepdogs at the Agrodome. You will get a good look at the area’s natural beauty on the way to Rotorua, as you will pass orchards of kiwifruit and Lake Rotorua. Still, the ultimate view of the sprawling city and shimmering lake will be from the Skyline gondola as you ascend the mountain. The higher you go, the more spectacular the vistas. Upon reaching the summit, you will dine at a restaurant that offers yet another perspective of the beautiful scenery below. Your attention will turn to sheep at the Agrodome, a real working farm. The show includes prize rams parading across the stage, sheep being sheared at jaw-dropping speeds and farm dogs using their prodigious skills to herd sheep – and even ducks for good measure.\n·Ride an enclosed, window-walled gondola up to the summit of Mount Ngongotaha.\n·Enjoy a literal bird’s-eye view of the city of Rotorua, its namesake lake and mountains beyond. ·Gain an understanding of rural life at the Agrodome, a large working farm.\n·Watch a sheep-shearing demonstration and highly intelligent farm dogs herding sheep.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThis tour includes approximately 3 hours of total driving time. It is not available to guests who utilize a wheelchair. The order of the sites visited or viewed may vary. Weather appropriate clothing and flat, comfortable walking shoes are recommended. In Rotorua there can be a strong smell of sulfur and this tour is not recommended for those sensitive or allergic to strong smell of sulfur.",
          offerings: [{ date: "2027-01-12", departure_time: "09:15" }],
        },

        {
          code: "TAU-001",
          name: "Highlights of Tauranga & Maori Culture",
          duration_hrs: 4.0,
          price_usd: 0,
          retail_price_usd: 169,
          activity_level: "moderate",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: true,
          description:
            "\nTake an intimate cultural journey into Maori heritage at a local indigenous village and catch stunning views of the Bay of Plenty from Minden Lookout. From the pier, you’ll travel through modern, booming Tauranga and the Bethlehem suburbs on your way to Ngati Ranginui Marae. Arriving at this Maori village, you’ll be greeted by a gracious indigenous guide and escorted on a fascinating tour of this village well known for its hospitality. The tangata whenua, the local people, will help you feel at home as you explore their working settlement, where the ways of the Maori and early New Zealand settlers remain deeply tied to contemporary life. During your visit, you’ll have an opportunity to view craft-making and cooking underway and to experience the Maoris’ famous oral storytelling. Your hosts will also treat you to a refreshing tea before you depart for the wider world. Arriving up at Minden Lookout, you’ll find the perspective has gotten wide indeed. Expect to see across Tauranga, out into the Bay of Plenty, and, if conditions are favorable, even plumes of wispy smoke and steam rising from volcanic Whakaari, the White Island, offshore to the east.\n·Travel out into the countryside surrounding Tauranga to visit a local Maori village, known as a marae.\n·Be welcomed by an indigenous guide as you begin an intimate tour of the village, meeting its hospitable residents and learning about their lives.\n·Witness traditional craft-making and cooking underway, experience Maori’s tradition of storytelling, and share tea with your hosts.\n·Driven up to Minden Lookout, be swept away by exceptional views out across the Bay of Plenty – and perhaps out to Whakaari volcano, puffing away some\n30 miles offshore.\n·Wear casual, weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended. ·Bring a hat, sunglasses and sunscreen as needed.\nThis tour is acceptable for guests with mobility concerns and for those who utilize collapsible wheelchairs. Ngati Ranginui Maori Marae could be substituted with another similar local Marae and the order of sights may be reversed. This tour operates with a driver and guide.",
          offerings: [{ date: "2027-01-12", departure_time: "09:30" }],
        },

        {
          code: "TAU-005",
          name: "Tauranga Highlights",
          duration_hrs: 3.5,
          price_usd: 0,
          retail_price_usd: 99,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Settle in for a half-day orientation tour that visits key Tauranga sights. Driving into town from across Tauranga Harbor, you’ll survey this the fast-growing city on in the Bay of Plenty. Abundant in natural attractions and supporting a high quality of life, Tauranga was founded by a group of 19th-century missionaries who left a behind a legacy of well-planned parks and gardens. Your first stop is the Tauranga Historic Village, a charming collection of historical buildings that showcase the region's rich heritage. Stroll through the village, engage with local artisans, and gain insight into the area's vibrant history and artistic culture.Next, enjoy a scenic drive through central Tauranga and into the lush countryside, where nearly all of New Zealand's kiwifruit is cultivated. Pass through Te Puke, proudly known as the Kiwifruit Capital of the World, and marvel at the sprawling orchards. Your guide will share fascinating details about the unique conditions that make this area perfect for growing kiwifruit.The tour continues to the Paengaroa Community Hall, where you'll enjoy a delightful morning tea featuring fresh fruit, juices, and a tasting of kiwifruit liqueur. Browse a selection of kiwifruit-inspired gifts and souvenirs to take home a piece of your experience. Conclude your tour with a scenic return drive to the ship, enriched by the history, culture, and natural beauty of Tauranga.\n·Enjoy a drive around Tauranga, whose natural attributes have made it one of New Zealand’s fastest-growing cities. ·Discover the regions heritage and culture, and meet local artisans at Tauranga Historic Village.\n·Learn about the thriving kiwifruit industry, how they are grown and sample some of the ways they can be enjoyed. ·Wear weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes approximately 500 yards of walking over flat surfaces. It is not available to guests who utilize a wheelchair. Those guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina.",
          offerings: [{ date: "2027-01-12", departure_time: "09:45" }],
        },

        {
          code: "TAU-1GT",
          name: "Chef Led Manaaki & Flavors of the Land",
          duration_hrs: 6.5,
          price_usd: 379,
          retail_price_usd: 819,
          activity_level: "moderate",
          meal_included: true,
          accessible: true,
          go_local: true,
          free_shore: false,
          description:
            "Chef-Led tours are never more than 18 guests and always led by the chef instructor onboard, learn traditional cooking methods hands-on, dine on the bountiful lunch that you have prepared and become immersed in the local Maori culture throughout the experience. Your host will be native New Zealander and former pro rugby player Deon Muir, who will treat you with manaaki, a Maori term meaning great respect and hospitality. The meal will be cooked in a hangi, a traditional earthen pit oven in which the ingredients are wrapped in flax leaves, placed on hot coals in the ground and left to slow-cook. During that time, Muir will show you around the village of Maketu, where the original Maori landed after crossing the ocean in canoes. Muir will describe that great and perilous migration while pointing out the most meaningful cultural landmarks. After dining on the hangi meal, along with fried bread and steamed pudding, you will head to The Jammery to sample local kiwi products and honeys with toasted breads.\n·Help to prepare a meal that will be slow-cooked in an earthen oven known as a hangi. ·Feast on the traditional Maori hangi meal along with tasty side dishes.\n·Learn about the Maori culture that is so prevalent in the village of Maketu.\n·Stop at The Jammery for a tasting of kiwi products and locally produced honeys. ·Enjoy the company and hospitality of host Deon Muir, a former pro rugby player. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThis tour includes limited walking, mainly at the guest's discretion. It is available to guests who utilize a collapsible wheelchair, can make their way on and off the coach and have a companion to assist them. The order of the sites visited or viewed may vary.",
          offerings: [{ date: "2027-01-12", departure_time: "10:00" }],
        },

        {
          code: "TAU-GG1",
          name: "Kayak on Lake Rotoiti",
          duration_hrs: 6.5,
          price_usd: 179,
          retail_price_usd: 309,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: true,
          free_shore: false,
          description:
            "Kayak across serene Lake Rotoiti, a sheltered waterway with abundant wildlife and natural geothermal pools along its scenic shoreline. After a briefing on how to get the most out of the adventure, you will ease into a double kayak and paddle off. Lake Rotoiti is wonderfully picturesque, in part because a lowland forest borders much of it. Pohutukawa, known as the Christmas tree for its crimson flowers and greens, also grows there. You can expect to spot wildlife along the way, especially water birds such as black swans. Once you reach the mineral-rich Manupirua hot pools, you will have the opportunity to soak in the soothing waters. The springs are of varying temperatures, so you can surely find one to your liking. You will also paddle through a cave softly illuminated by glow worms. It is quite the natural phenomenon.\n·Kayak along the shores of Lake Rotoiti, a natural paradise with plenty of wildlife. ·Relax your muscles by soaking in the mineral-rich hot pools along the lake’s coast. ·Paddle through a cave illuminated only by glow worms.\n·Dress in weather-appropriate clothing.\n·Wear a swimsuit under your clothing.\n·Wear flat comfortable walking shoes.\nParticipants must be at least 8 years of age. This tour includes a moderate amount of walking over paved and unpaved ground with surfaces which can be wet\nand uneven. It is not recommended for guest who use a wheelchair. Those guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina. Casual, weather-appropriate clothing and comfortable, flat walking shoes are suggested. 2 person per kayak. Step on to kayak from shoreline. Guests will likely get wet in getting on and off kayak. Wildlife is not guaranteed.",
          offerings: [{ date: "2027-01-12", departure_time: "10:00" }],
        },

        {
          code: "TAU-WT1",
          name: "Hells Gate Mud Bath Retreat",
          duration_hrs: 6.0,
          price_usd: 209,
          retail_price_usd: 369,
          activity_level: "moderate",
          meal_included: true,
          accessible: false,
          go_local: true,
          free_shore: false,
          description:
            "Tour the steamy terrain of Hells Gate Geothermal Park, dine on lunch cooked in a superheated pool, and slip into a luxurious mud bath at the spa complex. It all starts with an immensely scenic drive inland to reach this place of healing and revitalization where native Maori have lived for centuries. An introductory tour acquaints you with the park’s boiling mud baths, steaming fumaroles and incredibly hot waterfall. You’ll learn about Hells Gate’s cultural importance to its Maori owners and have the opportunity to feel different types of geothermal mud used to treat arthritis, rheumatism, burns – even to cook. In fact, your meal here will be cooked by steam pot in one of the hot pools, a unique alternative to the traditional Maori earth-oven method using heated rocks. The menu varies, but typically includes chicken, prawns, mussels, corn and a local sweet potato known as kumara. After nourishing your body, you’ll nourish your skin as you ease into a mud bath at the Hells Gate spa. The heated, nutrient-rich mud has a silky-smooth texture that naturally exfoliates, detoxifies and polishes your skin. You’ll emerge relaxed, glowing, and ready to show off your vigor back to the ship.\n·Settle in for a scenic coach drive inland from the pier to the historic spa region around Lake Rotorua.\n·Tour Hells Gate Geothermal Park – some 50 acres of heated mud baths, steaming fumaroles and the Southern Hemisphere’s hottest waterfall ·Get a hands-on intro to the forms of therapeutic geothermal mud used in this place of revitalization long revered by the Maori people.\n·Dine on a healthy lunch cooked in a thermal pool, then head to the spa for a very satisfying mud bath.\n·Step out of your session naturally detoxified, exfoliated and fabulously relaxed.\n·Wear spa-casual, weather-appropriate clothing.\n·Flat, comfortable shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes limited walking, mainly at the guest’s discretion. It is not available to guests who utilize a wheelchair. Those guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina.If the guest has had or is suffering from any of the following medical conditions, such as Pregnancy, Low or High Blood Pressure, Mobility Problems, Heart Conditions, Epilepsy, Skin diseases/disorders, Diabetes, Metal Pins/ Plates, Recent Surgery, or Sulphur Allergies, we strongly advise that they seek advice from their doctor prior to using the geothermal pools.",
          offerings: [{ date: "2027-01-12", departure_time: "10:15" }],
        },

        {
          code: "TAU-006",
          name: "Maori Culture Highlights",
          duration_hrs: 4.0,
          price_usd: 0,
          retail_price_usd: 139,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Discover the rich cultural heritage and scenic beauty of Tauranga and Mount Maunganui on this immersive tour designed for cruise ship guests. Start your adventure with an experienced Maori guide, who will lead you through the picturesque coastal towns of Tauranga and Mount Maunganui. Your first stop is the summit of Papamoa Hills, where you’ll be treated to breathtaking views and an exploration of the Papamoa Hills Archaeological Complex—New Zealand's largest historic site. Here, you’ll learn about ancient Maori fortifications and the area's deep historical significance. Continue your journey with panoramic vistas of the Bay of Plenty, including Tauranga, Mount Maunganui, and the expansive kiwifruit orchards. A short drive takes you to the marae (meeting place) of the Waitaha iwi (tribe). At the marae, you’ll receive a traditional Maori welcome, followed by an enlightening visit to the meeting house where the importance of ancestral reverence is shared. Enjoy a delightful morning tea in the wharekai (dining hall), and be captivated by a vibrant Maori cultural performance featuring traditional songs, poi dances, weaponry displays, and the iconic haka (war dance). The tour concludes with a visit to Te Puke, the Kiwifruit Capital of the World. Here, you’ll enjoy free time to discover this quintessential rural town. Take some time to explore the local shops, meet the friendly locals, sip on a refreshing beverage, or visit the boutique art gallery housed in the historic Police Station, complete with outdoor cells.\n·Enjoy breathtaking views and explore ancient Maori fortifications at New Zealand's largest historic archaeological site.\n·Receive a warm welcome, learn about Maori ancestral reverence, and enjoy a cultural performance with songs, poi dances, and the haka. ·Explore the charming township, browse local shops, and visit the boutique art gallery in the historic Police Station.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThis tour includes approximately 2-hours of easy walking/standing over mostly flat surfaces. The tour is not available to wheelchair guests.",
          offerings: [{ date: "2027-01-12", departure_time: "10:30" }],
        },

        {
          code: "TAU-016",
          name: "Ngati Makino - The Little Tribe That Could",
          duration_hrs: 5.5,
          price_usd: 149,
          retail_price_usd: 299,
          activity_level: "moderate",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Become immersed in the culture of the Ngati Makino while visiting this Maori tribe’s fortified settlement, known as a pa. As the tribal members show you around their seaside village, you will walk along the defensive ramparts and see how traditional life is embraced. An eel-fishing demonstration will deepen your understanding of the lifestyle as will watching your lunch being prepared to steam-cook in a hangi, a traditional earthen pit oven. The ingredients are typically wrapped in flax leaves and placed on hot coals in the bottom of the hangi and left to cook for several hours. Oral storytelling plays a prominent role in Maori life because the Maori didn’t have a written language until the first Europeans arrived. As you will discover, storytelling is more than narration; it’s an emotionally moving performance that involves dancing, singing, chanting and praying. As a gesture of kinship, you can help plant a native manuka tree on the tribal grounds.\n·Gain an understanding of traditional Maori life in a tribal village. ·Watch demonstrations of eel fishing and cooking.\n·Enjoy lunch cooked in a hangi earthen pit oven.\n·Listen to Maori storytellers recount ancient legends.\n·Help plant a tree to commemorate the experience. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nWeather appropriate clothing; sunglasses; and flat, comfortable walking shoes are recommended.",
          offerings: [{ date: "2027-01-12", departure_time: "10:45" }],
        },

        {
          code: "TAU-018",
          name: "Truffle Treasure",
          duration_hrs: 4.5,
          price_usd: 139,
          retail_price_usd: 289,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Discover the wonderful world of truffles and enjoy a tasting at a farm that harvests these highly prized fungi. After a panoramic drive through Tauranga, you will head into the country to a truffière or truffle grove. In hopes of growing truffles, the owners planted hundreds of oaks and hazelnuts and inoculated them with the spores of Perigord truffles, as these trees often develop a symbiotic relationship with truffles. As you will discover, their experiment was a success. You will watch the farm dogs sniff out the truffles, which must be carefully extracted from the soil to prevent damage. It is a methodical process that reflects the value of truffles. You will also be treated to a sampling of truffle-infused products such as cheeses, honey and ice cream, all thoughtfully paired with beer or wine. Afterwards, you will drive along the coast in the shadow of the dormant volcano Mount Maunganui.\n·Tour a truffle farm and learn how the owners encouraged truffles to grow there.\n·Watch trained truffle dogs sniff out the truffles that grow beneath the oaks and hazelnuts. ·Sample a selection of truffle-infused delicacies paired with local wine or beer.\n·Behold Mount Maunganui, a dormant volcano that is sacred among the Maori.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nWeather appropriate clothing; sunglasses; and flat, comfortable walking shoes are recommended.",
          offerings: [{ date: "2027-01-12", departure_time: "10:45" }],
        },

        {
          code: "TAU-020",
          name: "Taste of Tauranga",
          duration_hrs: 5.0,
          price_usd: 199,
          retail_price_usd: 339,
          activity_level: "moderate",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Head into the idyllic rolling countryside on the outskirts of Tauranga to sample a remarkable variety of iconic foods and to converse with the artisans that produce them. Along the way, you may meet pastry chefs, organic farmers and orchard owners that will happily share their passion for locally sourced ingredients. You may watch cows being milked at a dairy farm and taste fresh milk straight from the source if you like. Other possible foodie experiences include sampling fresh-picked avocados while walking through the orchard, enjoying exotic-flavored ice cream with a cup of hot tea or coffee, and trying flaky pastries filled with fruit or jam. You may also be offered tastes of other local specialties such as macadamia nut oils, cheeses, honeys, and berries. The artisans that produce them will describe how they got involved in the burgeoning foodie culture and the local mindset that has helped it flourish. Your tour then takes you through Te Puke, the kiwifruit capital of the world, before arriving in the seaside settlement of Maketu. Here, history and beauty combine as you enjoy a light lunch at a beachside café. With stunning ocean views and delicious local fare, it's a fitting finale to this flavorful Bay of Plenty adventure.\n·Taste an array of foods made with locally sourced ingredients.\n·Meet the artisans that made the foods and discover why the foods are so special. ·Sample organic fruits, fresh berries, flaky pastry, and milk straight from the source. ·Recognize how the local foodie culture developed and the reasons behind its popularity. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThe tour is not available to wheelchair guests and may not be suitable for those with mobility concerns who are cautioned to carefully evaluate their personal level of stamina and ability. Please advise of any Dietary requirements 48 Hours in advance of the Port call. Please note that tour order may vary.",
          offerings: [{ date: "2027-01-12", departure_time: "11:00" }],
        },

        {
          code: "TAU-022",
          name: "Wai Ariki Hot Springs & Spa",
          duration_hrs: 5.5,
          price_usd: 329,
          retail_price_usd: 569,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Treat yourself to a restorative experience at Wai Ariki Hot Springs & Spa, a holistic wellness destination on the shores of Lake Rotorua that follows the healing practices of its owners, the Ngati Whakaue Maori tribe. After a welcoming Maori prayer, you will indulge in a series of rituals that optimize the therapeutic powers of the geothermal pools, mineral-rich muds, steam rooms and serenity of the setting. Each element is designed to re-center the mind, revitalize the body and uplift the spirit. The seven-step elements include touching blessing stones imbued with spiritual powers, a waterfall shower experience and immersions in fire and ice caves. As you move through the restorative journey, you will gain insight into the cultural significance of each practice that honors manaakitanga, the centuries-old Maori tradition of generous hospitality and spiritual care. Wai Ariki means “chiefly waters,” a reference to Maori chiefs – known as akiris – also partaking of the geothermal waters.\n·Indulge in a remarkable restorative experience at a Maori-owned wellness destination. ·Luxuriate in a seven-step journey meant to revitalize the body and enhance the spirit. ·Soak in geothermal pools and enjoy the benefits of soothing mists and mineral-rich muds. ·Learn about the cultural meanings of the restorative steps as you experience them. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nLunch is not included. Guests will have time to purchase lunch at their own expense before returning to Tauranga. Travel time is 1.5 hours each way. The smell of sulfur permeates the air in Rotorua and is quite strong. A Towel will be provided for guests at Wai Ariki Hot Springs and Spa.",
          offerings: [{ date: "2027-01-12", departure_time: "12:00" }],
        },
      ],
    },

    /* ── BAY OF ISLANDS ──────────────────────────────── */
    {
      name: "Bay of Islands",
      country: "New Zealand",
      dates: ["2027-01-13"],
      excursions: [
        {
          code: "BAY-001",
          name: "Cruise to Cape Brett - Hole in the Rock",
          duration_hrs: 3.0,
          price_usd: 79,
          retail_price_usd: 229,
          activity_level: "light",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: false,
          description:
            "Cruise the turquoise waters and unspoiled inlets of the Bay of Islands and see Cape Brett Lighthouse, the Hole-in-the-Rock Sea arch and more. You’ll depart the pier aboard a stable catamaran featuring roomy indoor and outdoor viewing decks, sailing under what could be the earth’s bluest skies into a constellation of 150 unspoiled islands off the North Island’s northeast corner. The Bay of Islands is both magnificent and historically significant: New Zealand’s earliest Maori settlers migrated here 700 years ago, and its first British missionary settlers arrived in 1814. Charles Darwin stopped by not long after, and in more modern times, American adventure writer Zane Grey popularized the islands as a big-game fishing paradise. You’ll journey through these fabled waters today, passing picturesque islets as you make for crisply white Cape Brett Lighthouse, perched high atop a spectacular headland’s cliff. You’ll see Motukokako Island with its dramatic Hole-in-the-Rock arch and visit another major highlight, the majestic Grand Cathedral Cave. Slowly cruising among the inner islands, you may have engaging encounters with the schools of dolphin that frequent these waters. Commentary from the captain will help fill in the natural and cultural history of it all.\n·Cruise into the Bay of Islands aboard a comfortable catamaran with indoor and outdoor viewing decks.\n·Journey through legendary big-game fishing waters en route to the Cape Brett Lighthouse.\n·Pass beautiful Motukokako Island and the famous Hole-in-the-Rock sea cliff, and see majestic Grand Cathedral Cave. ·Learn about this region’s key role in New Zealand history from the captain’s commentary.\n·Be on the lookout for playful dolphin and other marine wonders as you take in the peaceful beauty of the inner islands. ·Wear layered, weather-appropriate clothing.\n·Flat, comfortable shoes are recommended.\n·Bring sunglasses and other sun protection as needed.\nThis tour includes limited walking; however, there are steps to enter/exit the catamaran. The tour is available to wheelchair guests who have a collapsible chair, can make their own way on and off the vessel with limited assistance and have an able-bodied companion to assist them. Guests with mobility concerns are cautioned to carefully evaluate their personal level of ability before participating. Those prone to motion sickness should take the necessary precautions. Cruising to and through the Hole in the Rock is dependent on sea and weather conditions; a cruise of only the bay will be done during poor weather conditions Sightings of marine life are not guaranteed.",
          offerings: [{ date: "2027-01-13", departure_time: "09:30" }],
        },

        {
          code: "BAY-003",
          name: "Kerikeri and Waitangi Highlights",
          duration_hrs: 3.5,
          price_usd: 0,
          retail_price_usd: 109,
          activity_level: "light",
          meal_included: false,
          accessible: true,
          go_local: false,
          free_shore: true,
          description:
            "Discover the stories and places tied to New Zealand’s early Maori and European history during a scenic journey to Kerikeri and Waitangi. Your discoveries begin with a drive to the coastal town of Paihia, where one of the earliest British missionary stations was established in 1823. Some 16 miles away in the lush orcharding town of Kerikeri, visit Kemp House (Built 1821- 1822), and the Stone Store (Constructed 1832- 1836), remnants of a Mission Station established even earlier, in 1819. You Will visit the most renowned North Island cultural touchstone at the Waitangi Treaty Grounds, the site where the Treaty of Waitangi was first signed on 6 February 1840. Often called the ‘Birthplace of our Nation’, Waitangi weaves together the strands and stories of many peoples, events and places to reveal the rich cultural history of New Zealand. During your guided tour, you will discover the stories, people and events that shaped the past, present and future. View the Treaty House, Te Whare Runanga (carved meeting house) and the world’s largest ceremonial war canoe. After your tour, re-join your transportation for the short ride back to the wharf or stay at the Treaty grounds and make your own way back.\n·Travel to historic landmarks where New Zealand’s Maori and British history has taken place.\n·See an early missionary station in Paihia, then visit an even earlier one in Kerikeri, home to the oldest wooden and stone buildings in New Zealand, Kemp House and the Stone Store.\n·Enjoy a guided tour of the Waitangi Treaty Grounds, where you will discover the stories, people and events that shaped the past, present and future of New Zealand.\n·View the Treaty House, Te Whare Runanga (carved meeting house) and the world’s largest ceremonial war canoe. ·Wear layered, weather-appropriate clothing.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour involves approximately 100 yards of walking to the Kemp House and Stone Store and another 700 yards of mostly downhill walking at the Waitangi Treaty House and grounds. There are 12 steps in the Stone Store to access the 1st floor, which may be skipped. The tour is available to wheelchair guests who have a collapsible chair, are able to make their own way on and off the transportation and have an able-bodied companion to assist them. Those with mobility concerns are cautioned to carefully evaluate their personal level of stamina before participating.",
          offerings: [
            { date: "2027-01-13", departure_time: "09:45" },
            { date: "2027-01-13", departure_time: "10:30" },
          ],
        },

        {
          code: "BAY-005",
          name: "Glow Worm Cave & Puketi Kauri Forest",
          duration_hrs: 5.25,
          price_usd: 0,
          retail_price_usd: 159,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Visit thrilling natural wonders like a cavern illuminated by glowworms and a forest of giant kauri trees, and see several man-made attractions, too. Kawiti Caves contains plenty of bizarre and impressive stalagmites and stalactites, but its most wondrous sight is the galaxy of blue-green lights given off by thousands of tiny glowworms attached to the inky-black ceiling. It’s a spectacular sight and your guide will share fascinating facts about the lifecycle of these famous little New Zealand residents. The denizens of Puketi Forest are a bit larger – like, say, 150 feet tall and up to 2,000 years old. Rivaling the California redwood in height and girth, thousands of mighty kauri trees once cloaked the Bay of Islands. The reserve you’ll tour is one of the last protected areas where they still stand, and the boardwalk through the forest allows visitors to admire these gargantuan wonders up-close without damaging their sensitive roots. A side trip to colorful Kawakawa adds levity to the day, with its train tracks running down the main street and whimsical public restrooms designed by an Austrian artist.\n·Enjoy a guided tour of Kawiti Caves and see the brilliant light show created by thousands of tiny glowworms attached to cavern ceiling. ·Stroll along a boardwalk path through the towering kauri trees of Puketi Forest reserve.\n·Visit Kawakawa, where the vintage railroad runs through downtown and the public restrooms are... colorful.\n·Wear casual, weather-appropriate clothing; include a light jacket or sweater.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThis tour includes a considerable amount of walking on uneven ground at the caves. The tour is not available to wheelchair guests. Those with mobility\nconcerns are cautioned to carefully evaluate their personal level of ability before participating. The tour is not recommended for those inclined to claustrophobia. Photography is not permitted in the caves. The Puketi Forest visit is guided.",
          offerings: [
            { date: "2027-01-13", departure_time: "09:45" },
            { date: "2027-01-13", departure_time: "10:30" },
          ],
        },

        {
          code: "BAY-002",
          name: "Kayaking on Waitangi Estuary",
          duration_hrs: 3.0,
          price_usd: 0,
          retail_price_usd: 109,
          activity_level: "strenuous",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Paddle the tranquil waters of Waitangi Estuary on a scenic kayaking tour that visits mangroves and waterfalls. Your seasoned guide will walk with you across the Waitangi Bridge to the kayak launch for a safety briefing and gear-up before heading out into the estuary waters. Working your way through this beautiful natural setting, you’ll glide by a low forest of mangrove trees, their glistening root systems protruding out from beneath the water to create a crucial breeding ground for many species of small fish. This protected habitat is a crucial component of not only the estuary but the whole Bay of Islands ecosystem. After a time, you’ll reach Haruru Falls, surrounded on one side by the lush Waitangi Forest. The falls themselves, while not especially high, are nonetheless a spectacular sight when seen from the water like this, especially if any recent rainfall has added oomph to their volume. Take a rest break and enjoy a cup of tea served at a nearby picnic area before returning to the ship via van.\n·Enjoy a guided paddle by tandem kayak into Waitangi Estuary, where the river joins the bay.\n·Glide along normally calm waters past ranks of deep green mangroves whose exposed prop roots create an essential breeding habitat for small fish. ·Reach the end of the estuary at Haruru Falls, not always mighty but always magnificent from the water.\n·Step out onto land and relax awhile over supplied a cup of tea at a picnic area near the falls.\n·Refreshed, make the return via van to Waitangi Wharf.\n·Wear a bathing suit under shorts or a cover-up; bring a jacket in case conditions change.\n·Waterproof beach shoes are recommended.\n·Bring a hat, sunglasses and sunscreen as needed.\nThe Waitangi Estuary is normally very calm and well protected; however, Strong winds can make the kayaking challenging. Therefore, the tour may run in reverse order starting with the drive to the waterfall and returning via kayak (depending on wind and weather conditions on the day). This tour is not available to wheelchair guests and not recommended for those with limited mobility. There are approximately 400 yards of walking from Waitangi Wharf to the kayaking center. Participants must be at least 10 years old and accompanied by a parent. Double kayaks are used for this tour. Tour runs one way in kayak and one way in vehicle.",
          offerings: [{ date: "2027-01-13", departure_time: "10:00" }],
        },

        {
          code: "BAY-006",
          name: "Relaxing Cruise to Historic Russell",
          duration_hrs: 3.5,
          price_usd: 0,
          retail_price_usd: 159,
          activity_level: "light",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: true,
          description:
            "Enjoy a sumptuous lunch as you cruise calm Bay of Islands waters, passing a vineyard, an oyster farm and numerous historic sites en route to the port of Russell. Voyaging from Waitangi, where New Zealand’s founding document between the British Crown and the Maori chieftains was signed in 1840, your leisurely coastline cruise winds past many sites that influenced the country’s history since. Okiato was the first capital city – but only for two years until Auckland took over. Omata, once a favored arrival point for European immigrants, is now a favored wine-growing region. As you encounter these and other sights, you’ll savor a traditional New Zealand lunch and learn much about the Bay of Islands’ evolution from rustic frontier settlement to top-shelf travel destination. Once you dock at Russell, enjoy an hour of free time to explore independently before the return to Waitangi. Long known by the unfortunate moniker of “Hell Hole of the Pacific,” Russell was the original lawless whaling, sealing and trading port on the North Island – notoriously inhabited by crusty mariners, deserters and convicts on the lam. Today, it’s a delightfully picturesque time capsule, rich with history and meticulously restored mid-19th-century buildings – with musket ball scars.\n·Enjoy a sumptuous shipboard lunch as you cruise through the beautiful waters of the Bay of Islands.\n·Pass by about fascinating sights along the shoreline like Okiato, New Zealand’s earliest capital, and Omata, once an immigration port, now a winegrowing center.\n·Pull in at Kororareka, now known as Russell, the largest whaling port in the southern hemisphere during the 19th century – and the most lawless. ·Enjoy an hour of free time here to explore at your leisure before the return sail.\n·Discover a picturesque waterfront village of historic restored homes, churches, and wooden cottages.\n·Wear casual, weather-appropriate clothing; include a light jacket or sweater.\n·Flat, comfortable walking shoes are recommended.\n·Bring a hat, a bottle of water from the ship, sunglasses and sunscreen as needed.\nWalking on this tour is mainly at guests’ discretion for those who elect to explore Russell. Guests will have to enter and exit the boat with limited assistance. The\ntour is not available to wheelchair guests and those with mobility concerns are cautioned to carefully evaluate their personal level of ability before participating. Depending on the tour timings lunch will be served before or after the free time in Russell.",
          offerings: [{ date: "2027-01-13", departure_time: "10:00" }],
        },

        {
          code: "BAY-011",
          name: "Bay of Island Fishing",
          duration_hrs: 4.0,
          price_usd: 199,
          retail_price_usd: 339,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            'Fish for snapper and other prized game fish in the crystal-clear waters of the Bay of Islands. The captain will select the exact location based on the day’s water conditions, but it won’t take long to reach the prime fishing grounds. On the way there, the crew will prepare your fishing tackle and describe the kinds of species that are often caught. Everything you need for fishing will be provided on the boat, allowing you to better concentrate on reeling them in. You might hook a hard-fighting trevally as they travel in schools or maybe a blue cod, an indigenous species that typically inhabits rocky sea bottoms. Another possibility is catching a tarakihi, a mildly flavored fish that is often deep-fried in fish and chips. Whatever you catch, it will be a thrill to reel in and then release back into the sea for another day.\n·Fish for some of the New Zealand’s most sought-after, hard-fighting game fish.\n·Follow the crew’s tips to increase your chances of catching snapper, trevally and blue cod. ·Board a fishing boat ready to go, as everything will be provided and set up.\n·Enjoy the experience of being aboard a fishing boat with an affable captain.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\n·Hat, sunscreen, and bottled water recommended.\nAll gear, including bait and tackle is supplied. A catch is not guaranteed. Any fish caught cannot be kept on board the cruise ship, is "catch and release". There is no fishing license required by guests for this Tour as this is held by the Tour supplier. There are 16 fishing rods with spares if needed, therefore no need to rotate these.',
          offerings: [{ date: "2027-01-13", departure_time: "10:15" }],
        },

        {
          code: "BAY-012",
          name: "Lagoon Bay Cruise",
          duration_hrs: 4.5,
          price_usd: 169,
          retail_price_usd: 299,
          activity_level: "strenuous",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Cruise through the stunningly beautiful Bay of Islands on a catamaran and relax however you please on Motuarohia, an island that the early Maoris settled in great numbers. While cruising the bay’s turquoise waters, keep an eye out for dolphin, which are often seen swimming along in the boat’s wake. Wildlife is also abundant on Motuarohia, especially since the island became a protected refuge in the 1950s. During free time, you might observe the ever-changing parade of colorful marine life while snorkeling, take a refreshing swim in the crystal-clear sea or just stretch out on the beach and bask in the sun. If you are feeling energetic, you might follow a trail through the native bush to the top of the island for a spectacular 360° view of the Bay of Islands. You could also go birding for often-spotted species such as yellowhammers, little penguins, and brown quails.\n·Take in the breathtaking views while cruising a catamaran through the Bay of Islands. ·Spend free time on Motuarohia Island, a protected reserve.\n·Swim in the sea, bask in the sun and enjoy a picnic lunch.\n·Dress in weather-appropriate clothing with a swimsuit underneath.\n·Bring a hat, towel, and sunscreen.\n·Wear flat comfortable walking shoes.\nNot suitable for guests with limited mobility. Terrain is uneven on the Island and includes an optional walk up a steep hill to the viewpoint. There are three stairs to board the boat which will be moving slightly in the water.",
          offerings: [{ date: "2027-01-13", departure_time: "10:15" }],
        },

        {
          code: "BAY-016",
          name: "Flavours and Forest Walk",
          duration_hrs: 5.5,
          price_usd: 289,
          retail_price_usd: 509,
          activity_level: "strenuous",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Enjoy a sampling of local delicacies and wines before stretching your legs on a meandering walk through the towering trees in Puketi Forest. While the exact samplings will depend on what’s seasonal and freshest that day, you will likely enjoy just-picked fruits from Keri Berries Farm Store, creamy artisan chocolates from Makana Confections and award-winning wines from Marsden Winery. The wines will be thoughtfully paired with an antipasto platter of delicious local specialties such as salami, prosciutto, smoked olives, quince paste and fresh-baked breads. You will then stroll the boardwalk that winds through a largely endemic forest that includes mature stands of kauri trees, a massive species that can live for more than 2,000 years. They are truly humbling to behold. Horseshoe-shaped Haruru Falls on the Waitangi River is another impressive natural wonder on the way to Waitangi Lookout, where you will gaze out over the Bay of Islands and your cruise ship.\n·Sample fresh fruits, creamy chocolates, and premium wines, all locally produced. ·Enjoy a delicious antipasto platter paired with wines from Marsden Winery. ·Stand in awe of the towering kauri trees in Puketi Forest and behold Haruru Falls. ·Admire the panoramic view from atop the Waitangi Lookout.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nMinimum age to participate is 18 years of age. It is not recommended to guests who utilize a wheelchair. Those guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina.",
          offerings: [{ date: "2027-01-13", departure_time: "10:15" }],
        },

        {
          code: "BAY-017",
          name: "Paroa Bay Winery & Russell Highlights",
          duration_hrs: 6.0,
          price_usd: 299,
          retail_price_usd: 529,
          activity_level: "strenuous",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Ride the ferry across the Bay of Islands for an enlightening tour of Russell and a delightful culinary experience in the surrounding countryside. New Zealand’s first seaport, capital city and European settlement, Russell has retained its original 1843 layout and many of its most historical buildings. While strolling the quaint streets, you may pass the waterfront Duke of Marlborough Hotel – which holds the first liquor license granted in New Zealand – and the country’s oldest existing church, Christ Church, which still carries musket balls from the New Zealand Land Wars. You will discover more while browsing the Russell Museum, whose exhibits focus on the Maori, European explorers and whalers. On the outskirts of town, you will enjoy a sampling of inspiring wines from the boutique winery Paroa Bay and an exquisite lunch at Sage, the winery’s restaurant. The family-style buffet menu typically includes grilled ribeye steak, oysters in raspberry vinegar and piri piri-spiced cabbage.\n·Cross the Bay of Islands on the ferry that runs between Waitangi and Russell. ·Walk through historical Old Russell, New Zealand’s original capital.\n·Browse the Russell Museum for a deeper look into the city’s intriguing history. ·Sample wines from Paroa Bay Winery and dine at its fine restaurant.\n·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nMinimum age to participate is 18 years of age. It is not recommended to guests who utilize a wheelchair. Those guests with mobility concerns are cautioned to evaluate their personal level of ability and stamina.",
          offerings: [{ date: "2027-01-13", departure_time: "10:15" }],
        },

        {
          code: "BAY-015",
          name: "Scenic Vintage Railway & Flavours of the Bay",
          duration_hrs: 3.5,
          price_usd: 149,
          retail_price_usd: 259,
          activity_level: "moderate",
          meal_included: true,
          accessible: true,
          go_local: false,
          free_shore: false,
          description:
            "Ride roundtrip between Kawakawa and Opua on a beautifully restored vintage train and enjoy a selection of local specialties that will enhance the experience. The oldest passenger line on the North Island, the narrow-gauge railway started operating in 1867 and still evokes a sense of nostalgia. It famously runs down along Kawakawa’s main street before easing into the countryside, a landscape of native bush, dense forests, pristine wetlands, and fertile farmland. For added excitement, the train will cross the longest curved wooden railway bridge in the Southern Hemisphere. The onboard guides will share captivating stories of the region’s cultural heritage with an emphasis on the Maoris and the deep connection between the land and its people. For a literal taste of the Bay of Islands, you will be served a curated tasting box of artisan cheeses, dips and canapés paired with your choice of wine.\n·Ride a vintage train through a largely untouched landscape of native bush and wetlands. ·Enjoy the ambiance of traveling in a beautifully restored 19th-century train carriage. ·Pass over the Southern Hemisphere’s longest curved railway viaduct.\n·Savor a tasting box of local specialties that pair perfectly with a glass of wine.\n·Look for wildlife, especially water birds, while following the Kawakawa River. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nThere are ramps and open carriage for wheelchair users. Smaller chairs can fit in the vintage carriage doorway.",
          offerings: [{ date: "2027-01-13", departure_time: "10:30" }],
        },

        {
          code: "BAY-007",
          name: "Waka Taia-Mai Exploration",
          duration_hrs: 3.0,
          price_usd: 0,
          retail_price_usd: 109,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: true,
          free_shore: true,
          description:
            "Board a 40-foot Maori canoe for an experience that’s half eco-adventure, half interactive cultural encounter. Guided by a tribal leader who knows local history as only an insider could, you and your fellow cruisers will paddle together through typically tranquil estuary waters to visit a locale sacred to the Maori. Your stable-riding traditional canoe, known as a “waka,” is like those carved from single, massive trees centuries ago; it’s believed the Maori first arrived in New Zealand by waka from faraway Polynesia. The exact direction of today’s paddle will depend on the tides. If favorable, you’ll head up the Waitangi River past forested banks rich with wildlife, to Haruru Falls. This is a place of great spiritual significance to the Maori, named for the sound of the horseshoe-shaped wall of water that crashes into the river below. If tides prevent approach to the falls, you’ll paddle to another site the tribe holds sacred. It’s the place where their chieftains met to discuss the terms of the 1840 Treaty of Waitangi with the British Crown. Here, you will meet members of the Ngapuhi tribe, many of them direct descendants of the chiefs who signed the treaty.\n·Enjoy an immersive eco-cultural experience that could only happen here in the Bay of Islands.\n·With a Maori tribal leader on board as your guide, group-paddle a 40-foot “waka” canoe through the typically tranquil waters of the Waitangi estuary. ·Pass forested banks that are home to diverse animal and bird life and tiny fish nurseries nestled among the mangrove roots.\nIf the tide allows head for horseshoe shaped Haruru Falls, a place of spiritual significance to the Maori.\n·Alternatively, visit a sacred meeting place where tribal chieftains met to discuss their pending treaty with Queen Victoria in 1840. ·Wear waterproof clothing or a bathing suit under shorts or cover-up.\n·Comfortable shoes that can get wet are recommended.\n·Bring a hat and sun protection as needed.\nThis tour includes approximately 2-1/2 hours of moderate-to-strenuous paddling. Participants should be in good physical condition and must be able to enter and exit the canoe with limited assistance. Participants must be at least 10 years of age.",
          offerings: [{ date: "2027-01-13", departure_time: "10:45" }],
        },

        {
          code: "BAY-010",
          name: "Waitangi Treaty Grounds",
          duration_hrs: 3.0,
          price_usd: 0,
          retail_price_usd: 159,
          activity_level: "moderate",
          meal_included: false,
          accessible: false,
          go_local: true,
          free_shore: true,
          description:
            "Explore the site where New Zealand’s founding document was signed in 1840 and watch a cultural performance in a carved meeting house on the property. The Waitangi Treaty was a formal agreement between the colonizing British government and the Maori chiefs that was meant to protect the indigenous people. Although the treaty wasn’t followed to the letter, it is still considered a watershed document. While visiting the grounds where the treaty was signed, you will gain a deeper understanding of the Maori culture. To honor their heritage, the Maori will perform traditional songs and a group war dance known as a haka, which embodies their cultural pride and unity. You will also see one of the world’s largest ceremonial canoes, a double-hulled vessel that the Maori built in 1940 to celebrate the centenary of the signing of the Waitangi Treaty. Although 114-feet long, the canoe is seaworthy and is launched annually during Waitangi Day.\n·See where the British and the Maoris signed the pivotal Treaty of Waitangi in 1840. ·Watch a Maori cultural performance inside a whare runanga communal house.\n·Be struck by the enormity of a ceremonial war canoe that is one of the world’s largest. ·Browse a museum that presents the history of the Treaty of Waitangi in captivating ways. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nIt is not recommended to guests who utilize a wheelchair. Guests are cautioned to evaluate their personal level of ability and stamina.",
          offerings: [{ date: "2027-01-13", departure_time: "11:00" }],
        },

        {
          code: "BAY-013",
          name: "Island and Bay Adventure",
          duration_hrs: 2.5,
          price_usd: 129,
          retail_price_usd: 219,
          activity_level: "strenuous",
          meal_included: false,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Cruise through the breathtakingly beautiful Bay of Islands and stop along the way at destinations that are especially historical and scenic. After passing through the inner harbor, you will enter the bay, a subtropical region of 144 islands surrounded by clear blue waters. Golden beaches, secluded coves, dramatic coastlines, and dense forests all contribute to the natural beauty and allure. Highlights include passing the Twin Lagoons and visiting the site where Captain James Cook first landed, putting the Bay of Islands on the world map. Whalers, traders, and entrepreneurs soon followed, disrupting the lives of the indigenous Maoris that first settled the islands. You will pause at one of those idyllic islands and walk to a panoramic lookout for a spectacular elevated view of the bay. Chances are, you will spot marine life throughout the cruise, including bottlenose dolphins and fur seals. Sea birds are also abundant.\n·Be awed by the natural beauty while cruising through the Bay of Islands. ·Pass the Twin Lagoons, one of the bay’s most photogenic spots. ·Behold the surrounding islands and bay from atop a panoramic lookout. ·Stop where Captain James Cook first landed in 1769.\n·Look for marine life such as dolphins and fur seals. ·Dress in weather-appropriate clothing.\n·Wear flat comfortable walking shoes.\nGuests must be physically fit to walk on their own without any assistance. The walking portion of the tour involves a short, moderately inclined track on a natural island trail. The surface includes well-formed dirt and gravel paths with some uneven terrain and occasional tree roots. There are no paved areas, but the track is clearly marked and suitable for those with moderate mobility. There may be a few steps or steeper sections leading up to the lookout point. Sturdy, comfortable footwear is recommended.",
          offerings: [{ date: "2027-01-13", departure_time: "11:00" }],
        },

        {
          code: "BAY-014",
          name: "Island Experience with Lunch",
          duration_hrs: 3.75,
          price_usd: 149,
          retail_price_usd: 259,
          activity_level: "strenuous",
          meal_included: true,
          accessible: false,
          go_local: false,
          free_shore: false,
          description:
            "Cruise to Urupukapuka Island, a serene beach-blessed oasis where you can relax for hours however you please. To reach this largest of the 144 islands in the gorgeous Bay of Islands, you will cruise through a stunningly beautiful seascape, where you may spot bottlenose dolphins and other marine life. Upon arriving at Otehei Bay, which is tucked between two headlands on the island’s southern shore, you will be free to enjoy the golden sands and crystal-clear waters. You might take a refreshing swim in the sea, stretch on a towel and bask in the sun and ease into a bean-bag chair and gaze out over the sheltered waters. Once populated by the Maori, the island still holds several of their fortified areas known as pas. American author Zane Grey used Urupukapuka as a base for his early 20th-century fishing expeditions and his writings brought great attention to the Bay of Islands.\n·Cruise through the beautiful Bay of Islands to Urupukapuka, the largest of the islands. ·Spend free time enjoying Urupukapuka at your leisure, whether swimming or just relaxing. ·Enjoy a buffet lunch along Otehei Bay on the island’s southern shore.\n·Walk to a scenic lookout point and a former Maori fortified area if you wish.\n·Dress in weather-appropriate clothing with a swimsuit underneath.\n·Bring a hat, towel, and sunscreen.\n·Wear flat comfortable walking shoes.\nThere is a 150m medium incline hill on island to get to viewpoints, however this portion of the tour is optional. This tour is not recommended for guests that have difficulty walking. Please advise of any Dietary requirements 48 Hours in advance of the Port call.",
          offerings: [{ date: "2027-01-13", departure_time: "11:15" }],
        },
      ],
    },
  ],
};

console.log(
  "EXCURSION_DATA loaded:",
  EXCURSION_DATA.ports.length,
  "ports,",
  EXCURSION_DATA.ports.reduce((s, p) => s + p.excursions.length, 0),
  "excursions,",
  EXCURSION_DATA.ports.reduce(
    (s, p) => s + p.excursions.reduce((t, e) => t + e.offerings.length, 0),
    0,
  ),
  "offerings",
);
