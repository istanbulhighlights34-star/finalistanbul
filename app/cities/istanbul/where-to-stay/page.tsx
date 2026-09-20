import type { Metadata } from "next";
import TravelGuide from "../../../_components/TravelGuide";

export const metadata: Metadata = {
  title: "Where to Stay in Istanbul for the 2027 Finals",
  description:
    "Where to stay in Istanbul for the 2027 Spanish Super Cup and UEFA Conference League Final: Beşiktaş, Taksim, Karaköy, Kadıköy and stadium-first planning.",
  alternates: { canonical: "/cities/istanbul/where-to-stay" },
};

export default function Page() {
  return (
    <TravelGuide
      kicker="ISTANBUL / WHERE TO STAY"
      title="WHERE TO STAY"
      accent="ISTANBUL 2027."
      lede="Choose the neighborhood around the event you are attending — not simply the hotel with the shortest straight-line distance to a stadium."
      facts={[
        ["BEŞİKTAŞ", "Conference League base"],
        ["KADIKÖY", "Fenerbahçe-side base"],
        ["TAKSİM", "Central connection point"],
        ["KARAKÖY", "Waterfront city base"],
      ]}
      introTitle="ONE CITY. VERY DIFFERENT MATCHDAY BASES."
      paragraphs={[
        "Istanbul's 2027 football calendar is spread across both sides of the Bosphorus. The Spanish Super Cup uses Fenerbahçe, Beşiktaş and RAMS Park, while the UEFA Conference League final is at Beşiktaş Stadium. That makes neighborhood choice a transport decision as much as a hotel decision.",
        "For a single match, staying on the same side of the city can simplify the day. For a multi-match trip, a central base with good rail or ferry connections can be more useful than being next to only one venue.",
      ]}
      cards={[
        ["BEŞİKTAŞ", "The natural base for the Conference League final and the Spanish Super Cup semi-final at Tüpraş Stadium. Strong Bosphorus atmosphere and useful links toward Taksim and Kabataş."],
        ["TAKSİM", "A flexible central option for visitors balancing football with sightseeing. The F1 funicular connects Taksim with Kabataş, where ferry and tram connections broaden your options."],
        ["KARAKÖY", "Useful for the historic peninsula, Galata and waterfront transport. It is a city-first base rather than a stadium-first one, which suits longer stays."],
        ["KADIKÖY", "The strongest base for the Fenerbahçe semi-final and Asian-side nightlife. Sabiha Gökçen Airport also connects to Kadıköy via the M4 metro corridor."],
      ]}
      relatedLinks={[
        { href: "/cities/istanbul/airports-and-transport", label: "Istanbul airports & transport" },
        { href: "/finals/spanish-super-cup-istanbul-2027", label: "Spanish Super Cup Istanbul 2027" },
        { href: "/finals/conference-league-final-istanbul-2027", label: "Conference League Final Istanbul 2027" },
        { href: "/cities/istanbul", label: "Istanbul city hub" },
      ]}
      sourceLinks={[
        { href: "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=F1", label: "Metro Istanbul — F1 Taksim–Kabataş" },
        { href: "https://www.sabihagokcen.aero/passengers-and-visitors/transport-and-parking/transportation/metro-en", label: "Sabiha Gökçen Airport — Metro" },
      ]}
    />
  );
}
