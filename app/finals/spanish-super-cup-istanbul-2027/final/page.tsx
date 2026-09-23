import type { Metadata } from "next";
import MatchGuide from "../MatchGuide";

export const metadata: Metadata = { title: "Spanish Super Cup Final Istanbul 2027: RAMS Park & Travel", description: "Spanish Super Cup final, 6 February 2027 at RAMS Park: 22:00 Istanbul kick-off, stadium transport, hotel areas and ticket status.", alternates: { canonical: "/finals/spanish-super-cup-istanbul-2027/final" } };

export default function Page() { return <MatchGuide match={{
  title: "SUPER CUP", accent: "FINAL", lede: "The winners of the two semi-finals meet at RAMS Park in Istanbul on Saturday 6 February 2027. Finalists are yet to be determined.",
  date: "06 FEB", venue: "RAMS PARK", district: "Seyrantepe, European side", stadiumHref: "/stadiums/rams-park", stadiumLabel: "RAMS Park",
  paragraphs: ["The Spanish Super Cup title match is scheduled for Ali Sami Yen Sports Complex – RAMS Park. The RFEF lists a 20:00 mainland Spain kick-off, equivalent to 22:00 in Istanbul. The participating teams will be known after the 2 and 3 February semi-finals.", "Plan the route to Seyrantepe before booking a hotel. The normal M2 rail corridor is a useful reference, while final-specific station access and crowd measures remain subject to official instructions."],
  matchday: "RAMS Park is in Seyrantepe. Check the stadium guide and allow flexibility for security perimeters or changed station arrangements nearer the final.",
  stay: "A central area with access to the M2 corridor can suit a final-only trip. For all three games, compare it with Beşiktaş, Taksim and Kadıköy bases.",
  airport: "From either airport, first reach your accommodation and plan the Seyrantepe leg separately. Check the latest M2 timetable and any organizer instructions for the return after a late kick-off.",
  }} />; }
