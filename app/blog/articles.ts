export type Article = {
  slug: string; city: string; title: string; dek: string; read: string;
  image: string; imageAlt: string;
  intro: string; sections: { heading: string; paragraphs: string[] }[];
  links: { href: string; label: string }[];
};

export const articles: Article[] = [
  {
    slug: "istanbul-final-week-travel-plan", city: "Istanbul", read: "8 min read",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vodafone%20Park%2C%20Istanbul%20%28from%20outside%29.jpg", imageAlt: "Tüpraş Stadium beside the Bosphorus in Istanbul",
    title: "How to Plan a Final Week in Istanbul",
    dek: "A practical framework for choosing a base, crossing the city and protecting matchday from avoidable travel stress.",
    intro: "Istanbul rewards supporters who plan the week around geography rather than a checklist. The city spans two continents, its best experiences are spread across distinct districts, and a stadium journey can feel very different from an ordinary sightseeing day. The goal is not to schedule every hour. It is to make a few decisions early so the final remains the centre of the trip.",
    sections: [
      { heading: "Choose your base for the whole week", paragraphs: ["Start with the part of the city you want to wake up in, not the stadium gate. A central base with strong rail, metro or ferry connections gives you more flexibility before and after the event. Staying close to nightlife can suit one trip; staying close to historic sights can suit another. The useful question is how many journeys your choice simplifies across the entire stay.", "Avoid changing hotels just to shave time from one matchday transfer. Packing, check-in windows and unfamiliar routes usually cost more energy than they save. Our Istanbul accommodation guide compares the main bases from a finals-trip perspective."] },
      { heading: "Treat the two sides of the Bosphorus as part of the experience", paragraphs: ["Ferries are not only transport: they are one of the clearest ways to understand Istanbul. Build at least one cross-Bosphorus journey into a low-pressure day so you know how the city fits together before matchday. Rail and metro links should remain the backbone when time matters.", "If an event week uses more than one venue, check each venue independently. A route that works beautifully for one stadium may be a poor template for another."] },
      { heading: "Protect matchday", paragraphs: ["Keep the hours before the final deliberately light. Eat earlier than usual, charge your phone, carry only what the organizer permits and leave room for security queues or temporary crowd routing. Event-specific gates, supporter zones and special services can change, so re-check official organizer information close to travel.", "Do not build a non-refundable airport transfer immediately after the final. Extra time after the whistle is useful even when transport runs normally, and it becomes essential if crowd controls are introduced."] },
      { heading: "Use the days around the final", paragraphs: ["Put long sightseeing days before or after matchday, not on top of it. A Bosphorus morning, historic peninsula day or neighborhood-focused food day is more enjoyable when it is not competing with stadium logistics. Finals Atlas city and transport guides are designed to connect those decisions without pretending that one itinerary fits every supporter."] }
    ],
    links: [{href:"/cities/istanbul",label:"Istanbul city guide"},{href:"/cities/istanbul/where-to-stay",label:"Where to stay in Istanbul"},{href:"/cities/istanbul/airports-and-transport",label:"Istanbul airports & transport"},{href:"/stadiums/tupras-stadium",label:"Tüpraş Stadium guide"}]
  },
  {
    slug: "istanbul-matchday-transport-strategy", city: "Istanbul", read: "7 min read",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rams%20Park%20i%C3%A7%20g%C3%B6r%C3%BCn%C3%BCm%202025.jpg", imageAlt: "RAMS Park interior in Istanbul",
    title: "Istanbul Matchday Transport Plan",
    dek: "Why a resilient stadium plan needs a primary route, a fallback and enough time to absorb event-day changes.",
    intro: "The best matchday transport plan is not the one with the shortest theoretical journey. It is the one that still works when streets are busy, crowd routing changes or you decide to spend the afternoon somewhere different. Istanbul has a deep public-transport network, but final-day movement deserves more margin than an ordinary city trip.",
    sections: [
      {heading:"Start with the venue, not a generic Istanbul map",paragraphs:["Istanbul stadiums sit in different parts of a very large city. Identify the exact venue first, then map the final public-transport leg and work backwards to your hotel. This prevents the common mistake of treating every stadium as if it were reached through the same central corridor.","Save the venue name and route offline. Mobile data can be slow in dense crowds, and a screenshot of the final interchange is often more useful than repeatedly reopening a live map."]},
      {heading:"Build one fallback",paragraphs:["A fallback does not need to be a completely different journey. It can be a different interchange, a longer walk to a rail station or a route that avoids a road-dependent final leg. The point is to know your second move before you need it.","Taxis and ride-hailing can be useful elsewhere in the week, but road closures and congestion make them a poor single point of failure on a major event day. Public transport plus a realistic walking segment is often easier to adapt."]},
      {heading:"Separate arrival from departure",paragraphs:["The route that gets you to a stadium is not automatically the route you will use after the whistle. Police or organizers may hold crowds, change pedestrian flows or direct supporters toward specific stations. Follow event-day instructions even when they differ from the route you rehearsed.","Give the post-match journey breathing room. A late dinner near your base is easier to enjoy than a reservation that assumes you will leave the stadium district at an exact minute."]},
      {heading:"Check official information again",paragraphs:["Finals Atlas keeps evergreen orientation separate from event-specific claims. Close to the event, confirm operating hours, special services, gate information and any supporter routing with the organizer and local transport authority. That last check is part of the plan, not an optional extra."]}
    ],
    links:[{href:"/cities/istanbul/airports-and-transport",label:"Airports & transport guide"},{href:"/stadiums/tupras-stadium",label:"Tüpraş Stadium"},{href:"/stadiums/rams-park",label:"RAMS Park"},{href:"/stadiums/chobani-stadium",label:"Chobani Stadium"}]
  },
  {
    slug: "madrid-champions-league-final-weekend-plan", city: "Madrid", read: "8 min read",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gran%20V%C3%ADa%2C%20Madrid.jpg", imageAlt: "Gran Vía in Madrid",
    title: "How to Build a Madrid Final Weekend",
    dek: "A city-first plan for accommodation, stadium travel and the hours around a major final at Estadio Metropolitano.",
    intro: "Madrid is unusually easy to enjoy without turning a final weekend into a transport exercise. The centre is walkable, the metro does the heavy lifting for longer journeys and Estadio Metropolitano sits outside the historic core. That combination makes one principle especially useful: stay for the city, then plan the stadium journey as a dedicated matchday trip.",
    sections:[
      {heading:"Stay where the non-match hours work",paragraphs:["For most short visits, a central base keeps restaurants, plazas and major sights within easy reach. The stadium does not need to be outside your hotel window for the weekend to run smoothly. What matters is straightforward access to the metro network and a return route you are comfortable making late in the day.","Compare neighborhoods by the experience you want after breakfast and after the match. A lively central area and a quieter residential base solve different problems; neither is automatically better."]},
      {heading:"Rehearse the stadium logic",paragraphs:["Estadio Metropolitano is a destination journey from central Madrid. Before matchday, identify the metro connection you expect to use and the walk from the station to the venue area. You do not need a full rehearsal, but you should understand the direction of travel and where your key interchange sits.","On final day, allow more time than the normal journey planner suggests. Security, pedestrian controls and busy platforms are part of major-event travel even when trains themselves are running well."]},
      {heading:"Keep the centre for the rest of the weekend",paragraphs:["Madrid works best when you leave unscheduled space. A long lunch, an evening walk and a neighborhood detour can be more memorable than racing through a list of attractions. Put the most time-sensitive sightseeing on a different day from the final.","If you fly out soon after the event, treat airport timing as a separate planning problem. The final whistle is not a reliable departure time from the stadium precinct."]},
      {heading:"Final-week checks",paragraphs:["Organizer instructions can override normal stadium habits. Re-check permitted items, gates, ticket guidance and any special supporter transport shortly before the event. Use the Finals Atlas venue and airport guides for orientation, then use official sources for the details that can change."]}
    ],
    links:[{href:"/cities/madrid",label:"Madrid city guide"},{href:"/cities/madrid/where-to-stay",label:"Where to stay in Madrid"},{href:"/cities/madrid/airport-to-estadio-metropolitano",label:"Airport to Estadio Metropolitano"},{href:"/stadiums/estadio-metropolitano",label:"Estadio Metropolitano guide"}]
  },
  {
    slug: "frankfurt-europa-league-final-trip-plan", city: "Frankfurt", read: "7 min read",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Deutsche%20bank%20park.jpg", imageAlt: "Stadion Frankfurt exterior",
    title: "Frankfurt Final Trip: Make a Compact City Work for You",
    dek: "How to use Frankfurt’s scale, transport connections and central districts to keep a final trip simple.",
    intro: "Frankfurt offers a different kind of finals trip. The city is compact, the airport is close to the urban core and the stadium is connected to the wider transport network. That can make planning feel simple — but major-event crowds still reward a clear base, an early stadium departure and a sensible post-match plan.",
    sections:[
      {heading:"Use compactness as an advantage",paragraphs:["A central stay can keep the station, river, old town and dining areas within a manageable radius. Instead of optimizing for the stadium alone, choose a base that reduces friction across the whole trip. Frankfurt’s scale makes this especially effective for a two- or three-night visit.","If you arrive by rail, the main-station area can be practical, while other central districts may offer a different evening atmosphere. Compare the trade-off rather than assuming the nearest room is the best room."]},
      {heading:"Plan the stadium as a dedicated journey",paragraphs:["Stadion Frankfurt sits away from the central sightseeing core. Know the public-transport option you intend to use, then leave enough margin for busy platforms and the final walk. Event-day services and crowd management can differ from a normal fixture, so the usual travel time is only a baseline.","Keep a second route in mind and avoid relying on a tightly timed taxi. A flexible public-transport plan is easier to adapt if roads or pickup areas are controlled."]},
      {heading:"Think about arrival and departure together",paragraphs:["Frankfurt Airport’s proximity makes short trips tempting, but do not compress the itinerary too aggressively. A flight shortly after a major final creates unnecessary risk because leaving the stadium area can take longer than expected.","If possible, sleep in the city after the match and travel the next morning. When that is not possible, build a substantial buffer and confirm late-night transport options close to the event date."]},
      {heading:"Leave one block unplanned",paragraphs:["A finals trip should still feel like travel. Keep a half-day or evening free for the riverfront, central neighborhoods or simply a long meal. The smaller city footprint makes spontaneous changes easier than in many host cities — one of Frankfurt’s strengths for a short event trip."]}
    ],
    links:[{href:"/cities/frankfurt",label:"Frankfurt city guide"},{href:"/cities/frankfurt/where-to-stay",label:"Where to stay in Frankfurt"},{href:"/cities/frankfurt/airport-to-stadion-frankfurt",label:"Airport to Stadion Frankfurt"},{href:"/stadiums/stadion-frankfurt",label:"Stadion Frankfurt guide"}]
  },
  {
    slug: "final-week-travel-checklist", city: "Travel", read: "9 min read",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20Metropolitano%2C%20Madrid.png", imageAlt: "A major European football stadium prepared for matchday",
    title: "The Final-Week Travel Checklist That Actually Matters",
    dek: "A reusable checklist for any major football final: what to lock early, what to leave flexible and what to verify at the last minute.",
    intro: "Final trips combine two kinds of planning. Some decisions improve when they are made months ahead; others are safer when they stay flexible until organizers publish final operational details. A good checklist separates those categories so you do not waste energy trying to confirm information that does not yet exist — or forget the basics that were available all along.",
    sections:[
      {heading:"Lock the structural decisions",paragraphs:["Once the host city and venue are confirmed, focus on refundable or changeable travel where practical, a sensible accommodation base and the broad shape of the trip. These are the decisions that affect price and availability most. They do not require you to know a stadium gate or fan-zone location.","Save your booking references in one offline note. Include hotel address, arrival details, travel insurance information and the names of the key stations you expect to use."]},
      {heading:"Do not invent certainty",paragraphs:["Supporter allocations, fan meeting points, gate assignments, temporary transport and prohibited-item rules may be published much later. Treat rumors as rumors. Build an itinerary that still works if the operational detail changes.","The same principle applies to kickoff-day dining and transfers. Flexible reservations are worth more than a perfect-looking schedule that collapses when crowds move slowly."]},
      {heading:"Three days before travel",paragraphs:["Check the organizer, venue and local transport authority. Download tickets only through the official process, confirm identification requirements, review baggage rules and look for planned engineering works or event-specific transport notices. Check your airline or rail operator separately.","Download offline maps, charge a power bank if you use one and make sure everyone in the group knows the hotel address. Small redundancies matter when a city is busy."]},
      {heading:"On matchday",paragraphs:["Carry less, leave earlier and eat before the busiest period. Follow organizer routing at the venue even if it differs from your saved map. Keep the return journey flexible and avoid scheduling a hard connection immediately after the match.","The purpose of planning is not to control every minute. It is to remove avoidable decisions so you can enjoy the final and the host city around it."]}
    ],
    links:[{href:"/finals",label:"2027 finals calendar"},{href:"/cities/istanbul",label:"Istanbul"},{href:"/cities/madrid",label:"Madrid"},{href:"/cities/frankfurt",label:"Frankfurt"}]
  }
];

export const articleBySlug = (slug:string) => articles.find(a => a.slug === slug);
