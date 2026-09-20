import type { Metadata } from "next";
import TravelGuide from "../../../_components/TravelGuide";

export const metadata: Metadata = {
  title: "Where to Stay in Frankfurt for the Europa League Final 2027",
  description:
    "Where to stay in Frankfurt for the 2027 Europa League Final at Stadion Frankfurt: Innenstadt, Hauptbahnhof, Sachsenhausen and airport corridor compared.",
  alternates: { canonical: "/cities/frankfurt/where-to-stay" },
};

export default function Page() {
  return (
    <TravelGuide
      kicker="FRANKFURT / WHERE TO STAY"
      title="WHERE TO STAY"
      accent="FRANKFURT 2027."
      lede="Frankfurt is compact enough that the best base is usually about rail connections and the rest of your trip — not sleeping beside the stadium."
      facts={[
        ["INNENSTADT", "City-centre base"],
        ["HAUPTBAHNHOF", "Rail-first base"],
        ["SACHSENHAUSEN", "South-bank base"],
        ["AIRPORT", "Short-trip base"],
      ]}
      introTitle="FRANKFURT REWARDS A CONNECTION-FIRST HOTEL."
      paragraphs={[
        "Stadion Frankfurt sits south of the centre, while Frankfurt Airport is also connected directly into the regional rail network. This makes the main station and central districts practical for many visitors attending the Europa League final.",
        "If you are arriving by rail from elsewhere in Germany or Europe, staying near Hauptbahnhof can simplify both arrival and matchday. If the final is part of a longer city stay, Innenstadt or Sachsenhausen may give you a better overall base.",
      ]}
      cards={[
        ["INNENSTADT", "A central choice for restaurants, shopping and a normal city stay. Matchday becomes a short public-transport journey rather than the focus of the whole trip."],
        ["HAUPTBAHNHOF", "Strong for rail arrivals and quick transfers. Stadium-area S-Bahn and regional services are commonly routed through Frankfurt's main station."],
        ["SACHSENHAUSEN", "South of the Main and useful for visitors who want a neighborhood feel while remaining on the same side of the river as the stadium."],
        ["AIRPORT CORRIDOR", "Makes sense for one- or two-night trips with early flights. Frankfurt Airport has both regional and long-distance rail stations."],
      ]}
      relatedLinks={[
        { href: "/cities/frankfurt/airport-to-stadion-frankfurt", label: "Frankfurt Airport to stadium" },
        { href: "/finals/europa-league-final-frankfurt-2027", label: "Europa League Final Frankfurt 2027" },
        { href: "/stadiums/stadion-frankfurt", label: "Stadion Frankfurt guide" },
        { href: "/cities/frankfurt", label: "Frankfurt city hub" },
      ]}
      sourceLinks={[
        { href: "https://www.frankfurt-airport.com/en/transport-and-parking/to-from-the-airport/travel-by-train.html", label: "Frankfurt Airport — Rail connections" },
      ]}
    />
  );
}
