import TravelGuide from "../../_components/TravelGuide";

const hub = "/finals/spanish-super-cup-istanbul-2027";
const schedule = "https://rfef.es/es/noticias/definida-la-hoja-de-ruta-de-la-supercopa-2027-que-se-celebrara-en-estambul";

export type Match = {
  title: string;
  accent: string;
  lede: string;
  date: string;
  venue: string;
  district: string;
  stadiumHref: string;
  stadiumLabel: string;
  paragraphs: string[];
  matchday: string;
  stay: string;
  airport: string;
};

export default function MatchGuide({ match }: { match: Match }) {
  return <TravelGuide
    kicker="SPANISH SUPER CUP / ISTANBUL 2027"
    title={match.title}
    accent={match.accent}
    lede={match.lede}
    facts={[[match.date, "February 2027"], ["22:00", "Istanbul local time"], [match.venue, match.district], ["TICKETS", "Sale details pending"]]}
    introKicker="MATCH GUIDE"
    introTitle="PLAN THE MATCHDAY"
    paragraphs={match.paragraphs}
    cards={[
      ["THE STADIUM", match.matchday],
      ["WHERE TO STAY", match.stay],
      ["FROM THE AIRPORT", match.airport],
      ["TICKETS", "Official sale dates, prices and authorized sales channels have not been announced. Check RFEF and the participating clubs before buying; this guide does not sell tickets."],
    ]}
    relatedLinks={[
      { href: match.stadiumHref, label: match.stadiumLabel + " stadium guide" },
      { href: "/cities/istanbul/where-to-stay", label: "Choose an Istanbul hotel base" },
      { href: "/cities/istanbul/airports-and-transport", label: "Airports and transport" },
      { href: "/cities/istanbul/spanish-super-cup-week", label: "Five-day Super Cup trip plan" },
      { href: hub, label: "All Spanish Super Cup matches" },
    ]}
    sourceLinks={[{ href: schedule, label: "RFEF — official 2027 schedule and stadiums" }]}
    note="The RFEF schedule lists 20:00 in mainland Spain, which is 22:00 in Istanbul in February. Gates, supporter zones, special transport and ticket sales are pending official announcements. Recheck the organizer and transport operators before travel."
    competitionLogo={{src:"https://commons.wikimedia.org/wiki/Special:FilePath/Supercopa%20Espa%C3%B1a%20Logotipo.png",alt:"Spanish Super Cup logo",label:"Spanish Super Cup 2027"}}
  />;
}
