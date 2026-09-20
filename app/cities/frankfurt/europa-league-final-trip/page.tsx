import type { Metadata } from "next";
import TravelGuide from "../../../_components/TravelGuide";

export const metadata: Metadata = {
  title: "Frankfurt Europa League Final 2027: 2-3 Night Trip Plan",
  description: "Plan a short Frankfurt trip around the 2027 Europa League Final: arrival, matchday, hotel strategy and departure planning.",
  alternates: { canonical: "/cities/frankfurt/europa-league-final-trip" },
};

export default function Page() {
  return <TravelGuide
    kicker="FRANKFURT / FINAL TRIP"
    title="THE SHORT"
    accent="FINAL TRIP."
    lede="Frankfurt works especially well as a compact two- or three-night trip around the 2027 Europa League Final."
    facts={[["25 MAY","Arrival option"],["26 MAY","Final day"],["27 MAY","Departure option"],["2–3 NIGHTS","Practical stay"]]}
    introTitle="USE FRANKFURT'S CONNECTIONS TO KEEP THE TRIP SIMPLE."
    paragraphs={["For a short trip, Tuesday 25 May gives you a buffer before the Wednesday final. Choose a hotel for airport and rail connections as well as city access rather than optimizing only for straight-line distance to the stadium.","Keep Wednesday deliberately light. Final-specific supporter routes, access times and special transport arrangements are not yet published, so leave enough flexibility to follow official UEFA and local guidance once it exists."]}
    cards={[["TUESDAY — ARRIVE","Check in and learn the normal route between your base, central Frankfurt and the stadium corridor. A central or main-station-area base can also simplify an early departure."],["WEDNESDAY — FINAL","Keep the daytime plan compact and re-check official guidance before setting out. Do not rely on assumed fan zones, gates or special services."],["THURSDAY — DEPART","A morning or afternoon departure can make this a very efficient final trip. If you have more time, add a city day rather than changing hotels."],["BOOKING ORDER","Book flexible travel and accommodation around the confirmed final date. Wait for official channels before making plans that depend on tickets or event-specific operations."]]}
    relatedLinks={[{href:"/finals/europa-league-final-frankfurt-2027",label:"Europa League Final 2027"},{href:"/cities/frankfurt/where-to-stay",label:"Where to stay in Frankfurt"},{href:"/cities/frankfurt/airport-to-stadion-frankfurt",label:"Airport to stadium"},{href:"/stadiums/stadion-frankfurt",label:"Stadion Frankfurt guide"}]}
    note="Final-specific ticketing, supporter zones, gates and special transport plans remain subject to official UEFA and local-authority publication." competitionLogo={{src:"https://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20Europa%20League%20logo%20%282024%20version%29.svg",alt:"UEFA Europa League logo",label:"UEFA Europa League Final 2027"}}
  />;
}
