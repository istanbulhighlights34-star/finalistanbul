import type { Metadata } from "next";
import TravelGuide from "../../../_components/TravelGuide";

export const metadata: Metadata = {
  title: "Frankfurt Airport to Stadion Frankfurt: 2027 Final Guide",
  description:
    "Plan Frankfurt Airport to Stadion Frankfurt for the 2027 Europa League Final using official airport rail and stadium public-transport information.",
  alternates: { canonical: "/cities/frankfurt/airport-to-stadion-frankfurt" },
};

export default function Page() {
  return (
    <TravelGuide
      kicker="FRANKFURT / AIRPORT TO STADIUM"
      title="AIRPORT TO"
      accent="STADION FRANKFURT"
      lede="Frankfurt's airport rail network and the stadium's south-city location make public transport the natural planning starting point for a short final trip."
      facts={[
        ["S8 / S9", "Airport regional rail"],
        ["FRANKFURT STADION", "Rail stop"],
        ["26 MAY", "2027 final"],
        ["PUBLIC TRANSIT", "Planning priority"],
      ]}
      introTitle="THE AIRPORT, CITY AND STADIUM SHARE THE SAME RAIL LOGIC"
      paragraphs={[
        "Frankfurt Airport's official site lists S-Bahn lines S8 and S9 among the services using its regional station. The airport also has a separate long-distance station for ICE and IC services.",
        "Deutsche Bank Park's normal-event guidance identifies S7, S8 and S9 from Frankfurt Hauptbahnhof toward the Frankfurt Stadion stop, followed by a walk to the venue. Final-specific UEFA operations for 26 May 2027 may differ, so use this as trip-planning context rather than a final-day guarantee.",
      ]}
      cards={[
        ["FROM THE AIRPORT", "Follow signs to the Regional Train Station for S-Bahn and regional services. The airport station is below Terminal 1 and connected to the terminal areas."],
        ["FROM HAUPTBAHNHOF", "The stadium's normal-event information points visitors toward S-Bahn and regional services to Frankfurt Stadion."],
        ["LAST WALK", "Normal venue guidance describes a walk from Frankfurt Stadion station to the stadium. Exact final-day entrances and pedestrian routing are not yet confirmed."],
        ["FINAL-DAY BUFFER", "Build extra time into the journey. Large UEFA finals can involve platform controls, dedicated fan routes and access restrictions."],
      ]}
      relatedLinks={[
        { href: "/cities/frankfurt/where-to-stay", label: "Where to stay in Frankfurt" },
        { href: "/stadiums/stadion-frankfurt", label: "Stadion Frankfurt guide" },
        { href: "/finals/europa-league-final-frankfurt-2027", label: "Europa League Final 2027" },
        { href: "/cities/frankfurt", label: "Frankfurt city hub" },
      ]}
      sourceLinks={[
        { href: "https://www.frankfurt-airport.com/en/transport-and-parking/to-from-the-airport/travel-by-train.html", label: "Frankfurt Airport — Travel by train" },
        { href: "https://www.deutschebankpark.de/", label: "Deutsche Bank Park — Official venue site" },
      ]}
      note="The 2027 Europa League final may use special UEFA transport and access plans. Re-check UEFA, RMV, Deutsche Bahn and venue guidance before travel."
    />
  );
}
