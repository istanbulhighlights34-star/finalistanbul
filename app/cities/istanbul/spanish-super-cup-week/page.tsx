import type { Metadata } from "next";
import TravelGuide from "../../../_components/TravelGuide";

export const metadata: Metadata = {
  title: "Spanish Super Cup Istanbul 2027: 5-Day Trip Plan",
  description: "Plan the 2-6 February 2027 Spanish Super Cup week in Istanbul across Chobani Stadium, Tüpraş Stadium and RAMS Park.",
  alternates: { canonical: "/cities/istanbul/spanish-super-cup-week" },
};

export default function Page() {
  return <TravelGuide
    kicker="ISTANBUL / SUPER CUP WEEK"
    title="FIVE DAYS"
    accent="THREE STADIUMS"
    lede="A city-first framework for the 2–6 February 2027 Spanish Super Cup, with matches spread across both sides of Istanbul."
    facts={[["02 FEB","Chobani Stadium"],["03 FEB","Tüpraş Stadium"],["04–05 FEB","City days"],["06 FEB","RAMS Park final"]]}
    introTitle="PLAN BY SIDE OF THE CITY, NOT JUST BY STADIUM"
    paragraphs={["The opening semi-final is at Chobani Stadium in Kadıköy on the Asian side, followed the next night by the second semi-final at Tüpraş Stadium on the European side. The final is at RAMS Park on 6 February.","That spread makes one well-connected hotel base more practical for many visitors than changing hotels between matches. Keep 4 and 5 February open for Istanbul itself and for any official event information published closer to the tournament."]}
    cards={[["02 FEB — KADIKÖY","Treat the first match as an Asian-side day. Build the daytime around Kadıköy and keep the pre-match schedule flexible until official access information is released."],["03 FEB — BEŞİKTAŞ","Shift the city focus to the European waterfront for the second semi-final at Tüpraş Stadium. Confirm normal transport options again on the day."],["04–05 FEB — ISTANBUL","These are the natural city days between the semi-finals and final. Use them for the historic peninsula, Bosphorus or neighborhoods rather than unnecessary stadium travel."],["06 FEB — FINAL","RAMS Park hosts the final. Use the normal Seyrantepe corridor as your planning reference, but follow official instructions if event-specific routing is announced."]]}
    relatedLinks={[{href:"/finals/spanish-super-cup-istanbul-2027",label:"Spanish Super Cup 2027"},{href:"/cities/istanbul/where-to-stay",label:"Where to stay in Istanbul"},{href:"/cities/istanbul/airports-and-transport",label:"Istanbul airports & transport"},{href:"/cities/istanbul",label:"Istanbul city hub"}]}
    note="Official ticketing, supporter zones, gates and event-specific transport arrangements are not assumed. Check RFEF and local authorities when those details are published." competitionLogo={{src:"https://commons.wikimedia.org/wiki/Special:FilePath/Supercopa%20Espa%C3%B1a%20Logotipo.png",alt:"Spanish Super Cup logo",label:"Spanish Super Cup 2027"}}
  />;
}
