import type { Metadata } from "next";
import MatchGuide from "../MatchGuide";

export const metadata: Metadata = { title: "Barcelona vs Atlético Madrid Istanbul 2027: Stadium & Travel", description: "Barcelona vs Atlético Madrid, 2 February 2027 at Chobani Stadium: kick-off, Kadıköy hotel base, airport transport and ticket status.", alternates: { canonical: "/finals/spanish-super-cup-istanbul-2027/barcelona-atletico-madrid" } };

export default function Page() { return <MatchGuide match={{
  title: "BARCELONA VS", accent: "ATLÉTICO", lede: "The first Spanish Super Cup semi-final takes place at Chobani Stadium in Kadıköy on Tuesday 2 February 2027.",
  date: "02 FEB", venue: "CHOBANI", district: "Kadıköy, Asian side", stadiumHref: "/stadiums/chobani-stadium", stadiumLabel: "Chobani Stadium",
  paragraphs: ["FC Barcelona face Club Atlético de Madrid at Chobani Stadium Fenerbahçe Şükrü Saracoğlu Sports Complex. The RFEF lists a 20:00 mainland Spain kick-off, equivalent to 22:00 in Istanbul.", "Kadıköy is the practical neighborhood to explore for this match. If you are attending other Super Cup games too, compare a single well-connected base with the longer cross-city trips on subsequent matchdays."],
  matchday: "Chobani Stadium is in Kadıköy on Istanbul's Asian side. Use its venue guide for context; entry gates and special matchday traffic measures are still to be published.",
  stay: "Kadıköy keeps you on the same side of the Bosphorus as the stadium. A central base can work for all three matches if you allow time for the crossing.",
  airport: "Sabiha Gökçen Airport (SAW) connects to Kadıköy on the M4 metro corridor. From Istanbul Airport (IST), choose the route to your accommodation first and recheck late-evening services.",
  }} />; }
