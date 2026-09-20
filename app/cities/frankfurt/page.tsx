import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frankfurt Europa League Final 2027 Travel Guide",
  description:
    "Frankfurt 2027 Europa League Final guide: date, Stadion Frankfurt, where to stay and final-week travel planning.",
  alternates: { canonical: "/cities/frankfurt" },
};

const zones = [
  ["INNENSTADT", "Central base for restaurants, shopping and quick access to the main city transport network."],
  ["BAHNHOFVIERTEL", "Highly connected around the main station; practical for rail arrivals and short stays."],
  ["SACHSENHAUSEN", "South of the Main with traditional food-and-drink streets and a more neighborhood feel."],
  ["AIRPORT CORRIDOR", "Useful for very short final trips where airport access and stadium logistics take priority."],
];

export default function FrankfurtPage() {
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
        <p className="kicker">CITY 03 / GERMANY</p>
        <h1>FRANKFURT<br /><span>26 MAY 2027.</span></h1>
        <p className="page-lede">
          Stadion Frankfurt hosts the 2026/27 UEFA Europa League final. A compact,
          well-connected host city makes this one of 2027's most straightforward
          finals trips to plan.
        </p>
      </section>

      <section className="city-facts">
        <div><span>26 MAY</span><strong>Final date</strong></div>
        <div><span>WEDNESDAY</span><strong>Matchday</strong></div>
        <div><span>STADION FRANKFURT</span><strong>Venue</strong></div>
        <div><span>FRANKFURT</span><strong>Host city</strong></div>
      </section>

      <section className="detail-section">
        <div className="detail-title">
          <p className="kicker">THE FINAL</p>
          <h2>A SHORT-TRIP CITY WITH A BIG-EVENT STADIUM.</h2>
        </div>
        <div className="prose-column">
          <p>
            The 2027 Europa League final is set for Wednesday 26 May at Stadion
            Frankfurt. The venue was used during UEFA EURO 2024 and has a long
            record of hosting international tournament football.
          </p>
          <p>
            Frankfurt's airport, central station and relatively compact center
            make it particularly suitable for a two- or three-night final trip.
            Our guide focuses on efficient arrival, hotel location and the stadium journey.
          </p>
        </div>
      </section>

      <section className="paper-section">
        <div className="section-heading">
          <p className="kicker">WHERE TO STAY</p>
          <h2>PICK FOR CONNECTIONS, NOT JUST DISTANCE.</h2>
        </div>
        <div className="zone-grid">
          {zones.map(([name, text], i) => (
            <article key={name}><span>0{i + 1}</span><h3>{name}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="planning-section">
        <p className="kicker">TRAVEL GUIDES</p>
        <h2>FRANKFURT FINAL WEEK.</h2>
        <div className="planning-grid">
          <Link href="/cities/frankfurt/where-to-stay"><span>Where to stay →</span></Link>
          <Link href="/cities/frankfurt/airport-to-stadion-frankfurt"><span>Airport to stadium →</span></Link>
          <Link href="/finals/europa-league-final-frankfurt-2027"><span>Europa League Final →</span></Link>
          <Link href="/stadiums/stadion-frankfurt"><span>Stadion Frankfurt guide →</span></Link>
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
