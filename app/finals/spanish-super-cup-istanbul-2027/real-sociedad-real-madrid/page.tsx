import type { Metadata } from "next";
import MatchGuide from "../MatchGuide";

export const metadata: Metadata = { title: "Real Sociedad vs Real Madrid Istanbul 2027: Stadium & Travel", description: "Real Sociedad vs Real Madrid, 3 February 2027 at Tüpraş Stadium: kick-off, Beşiktaş hotel base, transport and ticket status.", alternates: { canonical: "/finals/spanish-super-cup-istanbul-2027/real-sociedad-real-madrid" } };

export default function Page() { return <MatchGuide match={{
  title: "REAL SOCIEDAD VS", accent: "REAL MADRID", lede: "The second Spanish Super Cup semi-final takes place at Tüpraş Stadium in Beşiktaş on Wednesday 3 February 2027.",
  date: "03 FEB", venue: "TÜPRAŞ", district: "Beşiktaş, European side", stadiumHref: "/stadiums/tupras-stadium", stadiumLabel: "Tüpraş Stadium",
  paragraphs: ["Real Sociedad de Fútbol meet Real Madrid CF at Tüpraş Stadium. The RFEF lists a 20:00 mainland Spain kick-off, equivalent to 22:00 in Istanbul.", "This match is on the European waterfront. Beşiktaş is a convenient local base; Taksim and Karaköy are alternatives for visitors planning a broader Istanbul stay."],
  matchday: "Tüpraş Stadium sits by the Beşiktaş waterfront. Allow extra time around the venue and follow official gate and crowd guidance when released.",
  stay: "Beşiktaş is closest to the match. Taksim and Karaköy offer broader city connections, particularly if you are attending more than one game.",
  airport: "Both Istanbul Airport (IST) and Sabiha Gökçen Airport (SAW) require a city connection. Choose your hotel base first; a trip from SAW involves crossing from the Asian side.",
  }} />; }
