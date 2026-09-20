import Link from "next/link";

type Fact = [string, string];
type Card = [string, string];

const cleanHero = (value: string) => value.replace(/[.]+$/, "");

export default function TravelGuide({
  kicker,
  title,
  accent,
  lede,
  facts,
  introKicker = "TRAVEL GUIDE",
  introTitle,
  paragraphs,
  cards,
  relatedLinks,
  sourceLinks = [],
  note,
}: {
  kicker: string;
  title: string;
  accent: string;
  lede: string;
  facts: Fact[];
  introKicker?: string;
  introTitle: string;
  paragraphs: string[];
  cards: Card[];
  relatedLinks: { href: string; label: string }[];
  sourceLinks?: { href: string; label: string }[];
  note?: string;
}) {
  return (
    <main className="content-page">
      <header className="page-header">
        <Link className="brand" href="/" aria-label="Finals Atlas home">
          <span>FINALS</span>
          <span>ATLAS</span>
        </Link>
        <nav>
          <Link href="/finals">Finals</Link>
          <Link href="/cities/istanbul">Istanbul</Link>
          <Link href="/cities/madrid">Madrid</Link>
          <Link href="/cities/frankfurt">Frankfurt</Link>
        </nav>
        <Link className="header-cta" href="/finals">
          2027 Calendar
        </Link>
      </header>

      <section className="page-hero city-hero">
        <p className="kicker">{kicker}</p>
        <h1>
          {cleanHero(title)}
          <br />
          <span>{cleanHero(accent)}</span>
        </h1>
        <p className="page-lede">{lede}</p>
      </section>

      <section className="city-facts">
        {facts.map(([a, b]) => (
          <div key={a}>
            <span>{a}</span>
            <strong>{b}</strong>
          </div>
        ))}
      </section>

      <section className="detail-section">
        <div className="detail-title">
          <p className="kicker">{introKicker}</p>
          <h2>{introTitle}</h2>
        </div>
        <div className="prose-column">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="paper-section">
        <div className="section-heading">
          <p className="kicker">COMPARE YOUR OPTIONS</p>
          <h2>MAKE THE LOCATION WORK FOR THE TRIP.</h2>
        </div>
        <div className="zone-grid">
          {cards.map(([name, text], index) => (
            <article key={name}>
              <span>0{index + 1}</span>
              <h3>{name}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="planning-section">
        <p className="kicker">KEEP EXPLORING</p>
        <h2>BUILD THE TRIP AROUND THE FINAL.</h2>
        <div className="planning-grid">
          {relatedLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <span>{link.label} →</span>
            </Link>
          ))}
        </div>

        {sourceLinks.length > 0 && (
          <div className="official-source-links">
            <p className="kicker">OFFICIAL SOURCES</p>
            {sourceLinks.map((source) => (
              <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>
                {source.label} ↗
              </a>
            ))}
          </div>
        )}

        <p className="source-note">
          {note ||
            "Final-specific transport, crowd-control and supporter-routing measures can change. Re-check official organizer and local transport information before travel."}
        </p>
      </section>

      <footer>
        <div className="brand footer-brand">
          <span>FINALS</span>
          <span>ATLAS</span>
        </div>
        <p>
          Independent travel guide. Verify event-specific operations with official
          organizers and local transport authorities before travel.
        </p>
        <p>© 2026 Finals Atlas</p>
      </footer>
    </main>
  );
}
