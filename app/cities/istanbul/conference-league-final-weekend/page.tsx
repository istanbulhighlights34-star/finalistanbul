import type { Metadata } from "next";
import TravelGuide from "../../../_components/TravelGuide";

export const metadata: Metadata = {
  title: "Istanbul Conference League Final 2027: Weekend Trip Plan",
  description: "Plan an Istanbul trip around the 2 June 2027 UEFA Conference League Final at Tüpraş Stadium, with hotel, arrival and city-day priorities.",
  alternates: { canonical: "/cities/istanbul/conference-league-final-weekend" },
};

export default function Page() {
  return <TravelGuide
    kicker="ISTANBUL / CONFERENCE FINAL"
    title="FINAL WEEK IN"
    accent="ISTANBUL"
    lede="A flexible trip framework around the 2 June 2027 UEFA Conference League Final at Tüpraş Stadium."
    facts={[["02 JUN 2027","Final day"],["TÜPRAŞ","Venue"],["BEŞİKTAŞ","Stadium district"],["3 NIGHTS","Useful starting point"]]}
    introTitle="STAY FOR ISTANBUL, THEN PLAN THE FINAL"
    paragraphs={["For a short final trip, a European-side base around Beşiktaş, Taksim or Karaköy keeps the city experience close while leaving several normal transport options toward the stadium area.","Arriving at least the day before the final creates useful margin in a city where airport transfers and cross-city journeys can take time. Keep matchday flexible until UEFA and local authorities publish event-specific access and supporter information."]}
    cards={[["ARRIVAL DAY","Check in, learn the route between your base and the Beşiktaş waterfront, and keep the evening local. Do not build plans around supporter zones that have not been announced."],["FINAL DAY","Keep sightseeing close to your hotel area and re-check official guidance before travelling toward Tüpraş Stadium. Gates and supporter routing remain pending."],["CITY DAY","If possible, reserve a separate day for the historic peninsula, Bosphorus or Asian side so the final does not compete with the main sightseeing plan."],["DEPARTURE","Choose your airport transfer around the airport you actually booked, not a generic Istanbul estimate. Allow generous margin and check current transport conditions before leaving."]]}
    relatedLinks={[{href:"/finals/conference-league-final-istanbul-2027",label:"Conference League Final 2027"},{href:"/cities/istanbul/where-to-stay",label:"Where to stay in Istanbul"},{href:"/cities/istanbul/airports-and-transport",label:"Istanbul airports & transport"},{href:"/stadiums/tupras-stadium",label:"Tüpraş Stadium guide"}]}
    note="Ticketing, fan zones, gates and final-specific transport operations will be added only after publication by UEFA or the relevant local authority." competitionLogo={{src:"https://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20Conference%20League%20full%20logo%20%282024%20version%29.svg",alt:"UEFA Conference League logo",label:"UEFA Conference League Final 2027"}}
  />;
}
