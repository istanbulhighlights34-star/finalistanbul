import type { Metadata } from "next";
import TravelGuide from "../../../_components/TravelGuide";

export const metadata: Metadata = {
  title: "Madrid Airport to Estadio Metropolitano: 2027 Final Guide",
  description:
    "How to plan Madrid Airport to Estadio Metropolitano for the 2027 Champions League Final, using official airport and public transport connections.",
  alternates: { canonical: "/cities/madrid/airport-to-estadio-metropolitano" },
};

export default function Page() {
  return (
    <TravelGuide
      kicker="MADRID / AIRPORT TO STADIUM"
      title="AIRPORT TO"
      accent="METROPOLITANO."
      lede="Madrid-Barajas and Estadio Metropolitano are both on the eastern side of Madrid, but the best route still depends on your terminal, hotel and final-day operating plan."
      facts={[
        ["LINE 8", "Airport metro"],
        ["LINE 7", "Metropolitano station"],
        ["T4", "Cercanías access"],
        ["05 JUN", "2027 final"],
      ]}
      introTitle="BUILD THE ROUTE AROUND YOUR HOTEL, NOT JUST THE MAP."
      paragraphs={[
        "Aena confirms that Madrid-Barajas is served by Metro Line 8 between the airport and Nuevos Ministerios. Terminal 4 also has Cercanías rail service toward central Madrid. The regional transport authority lists Estadio Metropolitano station on Metro Line 7.",
        "For most visitors, the practical route will be airport to hotel first, then hotel to the stadium on matchday. Direct event-day supporter services, crowd-control changes and any special UEFA transport plan for 5 June 2027 are not yet published.",
      ]}
      cards={[
        ["AIRPORT METRO", "Line 8 connects the airport with Nuevos Ministerios. From there, continue through Madrid's metro network according to your hotel or matchday route."],
        ["T4 RAIL", "Aena lists Cercanías service from Terminal 4 toward key central stations including Chamartín and Atocha."],
        ["METROPOLITANO", "The stadium has a dedicated Line 7 station. CRTM also marks the station as accessible, with lifts and escalators."],
        ["FINAL DAY", "Leave extra margin. UEFA or Madrid authorities may introduce special access, queueing or crowd-routing measures that differ from a normal Atlético match."],
      ]}
      relatedLinks={[
        { href: "/cities/madrid/where-to-stay", label: "Where to stay in Madrid" },
        { href: "/stadiums/estadio-metropolitano", label: "Estadio Metropolitano guide" },
        { href: "/finals/champions-league-final-madrid-2027", label: "Champions League Final 2027" },
        { href: "/cities/madrid", label: "Madrid city hub" },
      ]}
      sourceLinks={[
        { href: "https://www.aena.es/en/adolfo-suarez-madrid-barajas/getting-there/underground.html", label: "Aena — Madrid Airport Metro" },
        { href: "https://www.aena.es/en/adolfo-suarez-madrid-barajas/getting-there/trains.html", label: "Aena — Madrid Airport Trains" },
        { href: "https://www.crtm.es/tu-transporte-publico/metro/estaciones/4_286?idPestana=1", label: "CRTM — Estadio Metropolitano station" },
      ]}
      note="Do not rely on normal-match transport assumptions for the 2027 final. Finals Atlas will update this guide when UEFA and Madrid authorities publish final-specific supporter transport."
    />
  );
}
