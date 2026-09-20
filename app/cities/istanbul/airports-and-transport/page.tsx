import type { Metadata } from "next";
import TravelGuide from "../../../_components/TravelGuide";

export const metadata: Metadata = {
  title: "Istanbul Airports & Stadium Transport for 2027 Finals",
  description:
    "Plan Istanbul airport and stadium transport for 2027 finals: IST vs SAW, M2 to Seyrantepe, M4 from Sabiha Gökçen and connections toward Beşiktaş.",
  alternates: { canonical: "/cities/istanbul/airports-and-transport" },
};

export default function Page() {
  return (
    <TravelGuide
      kicker="ISTANBUL / AIRPORTS & TRANSPORT"
      title="MOVE THROUGH"
      accent="ISTANBUL."
      lede="Two airports, two continents and multiple stadiums mean the best route depends on your match, hotel base and arrival side of the city."
      facts={[
        ["IST", "Istanbul Airport"],
        ["SAW", "Sabiha Gökçen Airport"],
        ["M2", "Seyrantepe corridor"],
        ["M4", "SAW–Kadıköy corridor"],
      ]}
      introTitle="PLAN THE CORRIDOR BEFORE THE MATCHDAY."
      paragraphs={[
        "Sabiha Gökçen Airport is directly connected to the M4 metro line, which runs toward Kadıköy and links with Marmaray at Ayrılık Çeşmesi. This can be especially practical for visitors attending the Spanish Super Cup semi-final at Fenerbahçe.",
        "Metro Istanbul lists the M2 as the Yenikapı–Seyrantepe–Hacıosman line, making Seyrantepe the key rail corridor for RAMS Park. Taksim and Kabataş are connected by the F1 funicular, which is useful for visitors staying centrally and moving toward the Beşiktaş waterfront area.",
      ]}
      cards={[
        ["ARRIVING AT SAW", "Use the M4 corridor when Kadıköy or the Asian side is your base. The airport's official site confirms direct metro access and onward connections to Marmaray and ferries."],
        ["RAMS PARK", "Seyrantepe is the rail reference point on the M2 corridor. Final-day crowd controls or special operating plans for February 2027 have not yet been published."],
        ["BEŞİKTAŞ / KABATAŞ", "Taksim connects to Kabataş via the F1 funicular. From the waterfront area, walking and local connections become relevant for Beşiktaş Stadium."],
        ["ARRIVING AT IST", "Treat Istanbul Airport routing as a city-base decision first. Check the airport and local transport authorities again close to travel because service patterns can change before 2027."],
      ]}
      relatedLinks={[
        { href: "/cities/istanbul/where-to-stay", label: "Where to stay in Istanbul" },
        { href: "/stadiums/rams-park", label: "RAMS Park guide" },
        { href: "/stadiums/tupras-stadium", label: "Tüpraş Stadium guide" },
        { href: "/stadiums/fenerbahce-sukru-saracoglu", label: "Fenerbahçe stadium guide" },
      ]}
      sourceLinks={[
        { href: "https://www.metro.istanbul/", label: "Metro Istanbul — network and lines" },
        { href: "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=F1", label: "Metro Istanbul — F1 Taksim–Kabataş" },
        { href: "https://www.sabihagokcen.aero/passengers-and-visitors/transport-and-parking/transportation/metro-en", label: "Sabiha Gökçen Airport — Metro" },
      ]}
      note="No 2027 event-specific crowd routing, extended service, supporter shuttle or road-closure plan is treated as confirmed until the relevant organizer or transport authority publishes it."
    />
  );
}
