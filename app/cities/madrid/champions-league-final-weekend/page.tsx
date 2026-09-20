import type { Metadata } from "next";
import TravelGuide from "../../../_components/TravelGuide";

export const metadata: Metadata = {
  title: "Madrid Champions League Final Weekend 2027: 3-Day Plan",
  description: "Plan a 3-day Madrid trip around the 2027 Champions League Final: arrival day, matchday priorities, neighborhoods and departure planning.",
  alternates: { canonical: "/cities/madrid/champions-league-final-weekend" },
};

export default function Page() {
  return <TravelGuide
    kicker="MADRID / FINAL WEEKEND"
    title="THREE DAYS IN"
    accent="MADRID"
    lede="A practical three-day framework for the 2027 Champions League Final weekend without relying on event details that UEFA has not yet published."
    facts={[["04 JUN","Arrival day"],["05 JUN","Final day"],["06 JUN","Departure / city day"],["METROPOLITANO","Final venue"]]}
    introTitle="BUILD THE WEEKEND AROUND ONE FIXED DATE"
    paragraphs={["Friday is the useful buffer: arrive, check in and learn the route between your hotel area and the east of Madrid. Keep the evening flexible rather than building a tight schedule around an early Saturday start.","Saturday 5 June is matchday. Keep sightseeing light and leave room for official UEFA instructions once supporter meeting points, access windows and any special transport arrangements are published. Sunday can be a departure day or the main sightseeing day for a longer stay."]}
    cards={[["FRIDAY — ARRIVE","Check in, orient yourself around your neighborhood and confirm the normal public-transport route toward Estadio Metropolitano. Avoid non-refundable plans that depend on unannounced event operations."],["SATURDAY — FINAL","Keep the daytime schedule simple. Re-check UEFA and Madrid transport guidance before leaving; final-specific access, supporter routing and gates are deliberately not assumed here."],["SUNDAY — RESET","Use Sunday for central Madrid, museums or a relaxed meal if your flight or train allows. A later departure gives the trip more value than treating Madrid only as a stadium stop."],["BOOKING ORDER","Secure transport and a cancellable hotel first. Treat match tickets, official fan activity and event-specific transfers as separate decisions when official information becomes available."]]}
    relatedLinks={[{href:"/finals/champions-league-final-madrid-2027",label:"Champions League Final 2027"},{href:"/cities/madrid/where-to-stay",label:"Where to stay in Madrid"},{href:"/cities/madrid/airport-to-estadio-metropolitano",label:"Airport to Metropolitano"},{href:"/stadiums/estadio-metropolitano",label:"Estadio Metropolitano guide"}]}
    note="This itinerary is a planning framework, not an event operations guide. Follow UEFA and local authorities for final-specific ticketing, gates, supporter zones and transport instructions when published." competitionLogo={{src:"https://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20Champions%20League%20Logo%20Wordmark.svg",alt:"UEFA Champions League logo",label:"UEFA Champions League Final 2027"}}
  />;
}
