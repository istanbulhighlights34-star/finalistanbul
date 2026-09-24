import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "2027 Sports Finals Calendar",
  description:
    "Confirmed 2027 sports finals by date, host city and venue, with event and travel guides from Finals Atlas.",
  alternates: { canonical: "/finals" },
};
const finals = [
  {
    date: "02—06 FEB 2027",
    event: "Spanish Super Cup",
    city: "Istanbul",
    country: "Türkiye",
    venue: "3 stadiums",
    href: "/finals/spanish-super-cup-istanbul-2027",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Supercopa%20Espa%C3%B1a%20Logotipo.png",
    note: "Barcelona, Atlético Madrid, Real Sociedad and Real Madrid across three Istanbul stadiums.",
  },
  {
    date: "26 MAY 2027",
    event: "UEFA Europa League Final",
    city: "Frankfurt",
    country: "Germany",
    venue: "Stadion Frankfurt",
    href: "/finals/europa-league-final-frankfurt-2027",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20Europa%20League%20logo%20%282024%20version%29.svg",
    note: "The 2026/27 Europa League decider.",
  },
  {
    date: "02 JUN 2027",
    event: "UEFA Conference League Final",
    city: "Istanbul",
    country: "Türkiye",
    venue: "Tüpraş Stadium",
    href: "/finals/conference-league-final-istanbul-2027",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20Conference%20League%20full%20logo%20%282024%20version%29.svg",
    note: "The 2026/27 Conference League final on the Bosphorus.",
  },
  {
    date: "05 JUN 2027",
    event: "UEFA Champions League Final",
    city: "Madrid",
    country: "Spain",
    venue: "Estadio Metropolitano",
    href: "/finals/champions-league-final-madrid-2027",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20Champions%20League%20Logo%20Wordmark.svg",
    note: "Europe's premier club final returns to Madrid.",
  },
];
export default function FinalsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "2027 Sports Finals Calendar",
    itemListElement: finals.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.event,
      url: "https://finalsatlas.com" + item.href,
    })),
  };
  return (
    <main className="content-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="page-header">
        <Link className="brand" href="/">
          <img className="brand-mark" src="/icon.svg" alt="" aria-hidden="true" />
          <span className="brand-name">
          <span>FINALS</span>
          <span>ATLAS</span></span>
        </Link>
        <nav>
          <Link href="/finals" aria-current="page">Finals</Link>
          <Link href="/cities/istanbul">Istanbul</Link>
          <Link href="/cities/madrid">Madrid</Link>
          <Link href="/cities/frankfurt">Frankfurt</Link>
        </nav>
        <div className="header-actions">
          <Link className="header-blog" href="/blog">Journal</Link>
          <Link className="header-blog" href="/arena">Arena</Link>
          <Link className="header-cta" href="/finals">Explore 2027</Link>
        </div>
      </header>
      <section className="page-hero">
        <p className="kicker">2027 / WORLDWIDE</p>
        <h1>
          FINALS
          <br />
          <span>CALENDAR</span>
        </h1>
        <p className="page-lede">
          The confirmed finals worth travelling for — organized by date,
          destination and venue, with dedicated event and city guides.
        </p>
      </section>
      <section className="calendar-list">
        {finals.map((item, index) => (
          <Link className="calendar-row" href={item.href} key={item.event}>
            <div className="calendar-visual">
              <span className="calendar-index">0{index + 1}</span>
              <img src={item.logo} alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div>
              <span className="calendar-date">{item.date}</span>
              <h2>{item.event}</h2>
              <p>{item.note}</p>
            </div>
            <div className="calendar-place">
              <strong>{item.city}</strong>
              <span>{item.country}</span>
              <small>{item.venue}</small>
            </div>
            <div className="calendar-arrow">↗</div>
          </Link>
        ))}
      </section>
      <section className="verification-block">
        <div>
          <p className="kicker">HOW WE BUILD THE ATLAS</p>
          <h2>CONFIRMED FIRST TRAVEL SECOND</h2>
        </div>
        <div>
          <p>
            Finals Atlas starts with primary organizer information for dates,
            host cities and venues. Travel advice is added around those verified
            facts, while ticketing, fan zones and matchday routing stay
            provisional until official guidance is published.
          </p>
          <p className="source-note">
            Event schedules can change. Always re-check the official organizer
            before booking non-refundable travel.
          </p>
        </div>
      </section>
      <footer>
        <div className="brand footer-brand">
          <img className="brand-mark" src="/icon.svg" alt="" aria-hidden="true" />
          <span className="brand-name">
          <span>FINALS</span>
          <span>ATLAS</span></span>
        </div>
        <p>
          Independent travel guide. Finals Atlas is not affiliated with event
          organizers, clubs, federations or venue operators.
        </p>
        <p>© 2026 Finals Atlas</p>
      </footer>
    </main>
  );
}
