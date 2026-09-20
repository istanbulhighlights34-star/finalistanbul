import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Madrid Champions League Final 2027 Travel Guide",
  description:
    "Madrid 2027 Champions League Final guide: date, Estadio Metropolitano, where to stay and trip-planning priorities.",
  alternates: { canonical: "/cities/madrid" },
};

const zones = [
  ["CENTRO", "A first-time Madrid base for major sights, late dinners and broad city transport connections."],
  ["LAS LETRAS", "Central, walkable and well placed for combining the final weekend with museums and restaurants."],
  ["SALAMANCA", "A more polished base with dining and shopping, east of the historic center."],
  ["AIRPORT / EAST MADRID", "Useful when venue access and a fast airport departure matter more than being in the old center."],
];

export default function MadridPage() {
  return (
    <main className="content-page">
      <header className="page-header">
        <Link className="brand" href="/"><span>FINALS</span><span>ATLAS</span></Link>
        <nav>
          <Link href="/finals">Finals</Link>
          <Link href="/cities/istanbul">Istanbul</Link>
          <Link href="/cities/madrid">Madrid</Link>
          <Link href="/cities/frankfurt">Frankfurt</Link>
        </nav>
        <Link className="header-cta" href="/finals">2027 Calendar</Link>
      </header>

      <section className="page-hero city-hero">
        <p className="kicker">CITY 02 / SPAIN</p>
        <h1>MADRID<br /><span>05 JUN 2027</span></h1>
        <p className="page-lede">
          The 2026/27 UEFA Champions League season ends at Estadio Metropolitano.
          Finals Atlas is building the travel layer around the biggest club final
          in European football.
        </p>
      </section>

      <section className="city-facts">
        <div><span>05 JUN</span><strong>Final date</strong></div>
        <div><span>SATURDAY</span><strong>Matchday</strong></div>
        <div><span>METROPOLITANO</span><strong>Venue</strong></div>
        <div><span>MADRID</span><strong>Host city</strong></div>
      </section>

      <section className="detail-section">
        <div className="detail-title">
          <p className="kicker">THE FINAL</p>
          <h2>ONE NIGHT. BUILD THE WEEKEND AROUND IT.</h2>
        </div>
        <div className="prose-column">
          <p>
            Estadio Metropolitano will stage the 2027 Champions League final on
            Saturday 5 June. The stadium previously hosted the 2019 final, making
            this a familiar major-event venue with a very different location from
            Madrid's historic center.
          </p>
          <p>
            The practical decision is not simply “closest hotel to the stadium.”
            For most visitors the better question is how much of Madrid you want
            around the final, then how you plan the matchday journey east.
          </p>
        </div>
      </section>

      <section className="paper-section">
        <div className="section-heading">
          <p className="kicker">WHERE TO STAY</p>
          <h2>FOUR WAYS TO DO MADRID.</h2>
        </div>
        <div className="zone-grid">
          {zones.map(([name, text], i) => (
            <article key={name}><span>0{i + 1}</span><h3>{name}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="planning-section">
        <p className="kicker">TRAVEL GUIDES</p>
        <h2>MADRID FINAL WEEKEND.</h2>
        <div className="planning-grid">
          <Link href="/cities/madrid/where-to-stay"><span>Where to stay →</span></Link>
          <Link href="/cities/madrid/airport-to-estadio-metropolitano"><span>Airport to Metropolitano →</span></Link>
          <Link href="/finals/champions-league-final-madrid-2027"><span>Champions League Final →</span></Link>
          <Link href="/stadiums/estadio-metropolitano"><span>Metropolitano guide →</span></Link>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand"><span>FINALS</span><span>ATLAS</span></div>
        <p>Independent guide. Confirm event details with UEFA before travel.</p>
        <p>© 2026 Finals Atlas</p>
      </footer>
    </main>
  );
}
