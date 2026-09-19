import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Istanbul Finals & Sports Events 2027",
  description:
    "Istanbul 2027 finals travel guide: Spanish Super Cup, UEFA Conference League Final, stadiums, where to stay and matchday planning.",
  alternates: { canonical: "/cities/istanbul" },
};

const events = [
  {
    date: "02 FEB 2027",
    title: "Barcelona — Atlético Madrid",
    meta: "Spanish Super Cup semi-final · 22:00 local",
    venue: "Fenerbahçe Şükrü Saracoğlu",
  },
  {
    date: "03 FEB 2027",
    title: "Real Sociedad — Real Madrid",
    meta: "Spanish Super Cup semi-final · 22:00 local",
    venue: "Tüpraş Stadium",
  },
  {
    date: "06 FEB 2027",
    title: "Spanish Super Cup Final",
    meta: "22:00 local",
    venue: "RAMS Park",
  },
  {
    date: "02 JUN 2027",
    title: "UEFA Conference League Final",
    meta: "2026/27 season final",
    venue: "Beşiktaş Stadium",
  },
];

const zones = [
  ["BEŞİKTAŞ", "Best positioned for the Conference League final venue and Bosphorus-side matchday atmosphere."],
  ["TAKSİM", "Central base with broad transport links and easy access to Beşiktaş, Karaköy and the historic peninsula."],
  ["KARAKÖY", "A compact waterfront base for food, Galata and ferry connections across the city."],
  ["KADIKÖY", "Asian-side base close to Fenerbahçe's stadium and a strong food-and-nightlife district in its own right."],
];

export default function IstanbulPage() {
  return (
    <main className="content-page">
      <header className="page-header">
        <Link className="brand" href="/">
          <span>FINALS</span>
          <span>ATLAS</span>
        </Link>
        <nav>
          <Link href="/finals">Finals</Link>
          <Link href="/cities/istanbul">Istanbul</Link>
          <Link href="/cities/madrid">Madrid</Link>
          <Link href="/cities/frankfurt">Frankfurt</Link>
        </nav>
        <Link className="header-cta" href="/finals">2027 Calendar</Link>
      </header>

      <section className="page-hero city-hero">
        <p className="kicker">CITY 01 / TÜRKİYE</p>
        <h1>
          ISTANBUL
          <br />
          <span>2027.</span>
        </h1>
        <p className="page-lede">
          Four Spanish clubs in February. A UEFA final in June. Three major
          football venues, two continents and one of the strongest launch cities
          for Finals Atlas.
        </p>
      </section>

      <section className="city-facts">
        <div><span>02—06 FEB</span><strong>Spanish Super Cup</strong></div>
        <div><span>02 JUN</span><strong>Conference League Final</strong></div>
        <div><span>4</span><strong>Confirmed event days</strong></div>
        <div><span>3+</span><strong>Major stadiums</strong></div>
      </section>

      <section className="detail-section">
        <div className="detail-title">
          <p className="kicker">CONFIRMED EVENTS</p>
          <h2>WHY ISTANBUL IN 2027.</h2>
        </div>
        <div className="detail-list">
          {events.map((event) => (
            <article className="detail-row" key={event.title}>
              <span>{event.date}</span>
              <div>
                <h3>{event.title}</h3>
                <p>{event.meta}</p>
              </div>
              <strong>{event.venue}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="paper-section">
        <div className="section-heading">
          <p className="kicker">WHERE TO BASE YOURSELF</p>
          <h2>CHOOSE THE CITY BEFORE THE HOTEL.</h2>
          <p>
            Istanbul is large and water divides the city. Pick your neighborhood
            around the stadium, the side of the city you want to explore and
            how much time you have outside the event.
          </p>
        </div>
        <div className="zone-grid">
          {zones.map(([name, text], i) => (
            <article key={name}>
              <span>0{i + 1}</span>
              <h3>{name}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="planning-section">
        <p className="kicker">NEXT UP</p>
        <h2>THE ISTANBUL GUIDE WE'RE BUILDING.</h2>
        <div className="planning-grid">
          <span>Stadium transport</span>
          <span>Airport strategy</span>
          <span>Hotels by venue</span>
          <span>Official ticket links</span>
          <span>Fan zones</span>
          <span>48-hour city plan</span>
        </div>
        <p className="source-note">
          Supporter routing, ticket sales and fan-zone details will be added only
          after official organizer publication.
        </p>
      </section>

      <footer>
        <div className="brand footer-brand"><span>FINALS</span><span>ATLAS</span></div>
        <p>Independent guide. Confirm event details with the official organizer before travel.</p>
        <p>© 2026 Finals Atlas</p>
      </footer>
    </main>
  );
}
