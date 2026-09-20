import type { Metadata } from "next";
import TravelGuide from "../../../_components/TravelGuide";

export const metadata: Metadata = {
  title: "Where to Stay in Madrid for the Champions League Final 2027",
  description:
    "Where to stay in Madrid for the 2027 Champions League Final at Estadio Metropolitano: Centro, Las Letras, Salamanca and east Madrid compared.",
  alternates: { canonical: "/cities/madrid/where-to-stay" },
};

export default function Page() {
  return (
    <TravelGuide
      kicker="MADRID / WHERE TO STAY"
      title="WHERE TO STAY"
      accent="MADRID 2027"
      lede="The stadium is east of the historic centre, so the right hotel depends on whether you prioritise the final journey, the city weekend or the airport."
      facts={[
        ["CENTRO", "City-first base"],
        ["LAS LETRAS", "Walkable weekend base"],
        ["SALAMANCA", "East-central option"],
        ["EAST MADRID", "Venue-first option"],
      ]}
      introTitle="DO NOT BOOK BY STADIUM DISTANCE ALONE"
      paragraphs={[
        "Estadio Metropolitano sits in the Rosas area and has its own Line 7 metro station. That means many visitors can stay centrally and treat matchday as a planned metro journey rather than moving the whole weekend to the stadium district.",
        "For a short final-only trip, east Madrid can reduce the matchday transfer. For a longer first visit, Centro, Las Letras or Salamanca can give you more of Madrid outside the game while keeping the venue reachable by public transport.",
      ]}
      cards={[
        ["CENTRO", "Best suited to first-time visitors who want major sights, restaurants and nightlife around the final weekend. Expect a separate matchday journey east."],
        ["LAS LETRAS", "A walkable central base close to museums and food streets. Strong for a city-heavy weekend rather than the shortest stadium commute."],
        ["SALAMANCA", "Further east than Centro and useful for visitors who want an upscale neighborhood while shortening part of the journey toward Metropolitano."],
        ["EAST MADRID", "Prioritises the stadium and airport side of the city. It can work well for short stays, late arrivals or early departures after the final."],
      ]}
      relatedLinks={[
        { href: "/cities/madrid/airport-to-estadio-metropolitano", label: "Madrid airport to Metropolitano" },
        { href: "/finals/champions-league-final-madrid-2027", label: "Champions League Final Madrid 2027" },
        { href: "/stadiums/estadio-metropolitano", label: "Estadio Metropolitano guide" },
        { href: "/cities/madrid", label: "Madrid city hub" },
      ]}
      sourceLinks={[
        { href: "https://www.crtm.es/tu-transporte-publico/metro/estaciones/4_286?idPestana=1", label: "CRTM — Estadio Metropolitano station" },
      ]}
    />
  );
}
