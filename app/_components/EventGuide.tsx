import Link from "next/link";

type Fact = [string, string];
type Item = [string, string];

type MediaAsset = {
  src: string;
  alt: string;
  credit?: string;
  creditHref?: string;
};

type Team = {
  name: string;
  logo: string;
};

const cleanHero = (value: string) => value.replace(/[.]+$/, "");

export default function EventGuide({
  kicker,
  title,
  accent,
  lede,
  facts,
  introTitle,
  paragraphs,
  items,
  cityHref,
  cityName,
  venueLinks = [],
  guideLinks = [],
  eventLogo,
  heroImage,
  teams = [],
  teamsCredit,
}: {
  kicker: string;
  title: string;
  accent: string;
  lede: string;
  facts: Fact[];
  introTitle: string;
  paragraphs: string[];
  items: Item[];
  cityHref: string;
  cityName: string;
  venueLinks?: { href: string; label: string }[];
  guideLinks?: { href: string; label: string }[];
  eventLogo?: MediaAsset;
  heroImage?: MediaAsset;
  teams?: Team[];
  teamsCredit?: { label: string; href: string };
}) {
  const hasMedia = eventLogo || heroImage || teams.length > 0;

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
        <Link className="header-cta" href={cityHref}>{cityName}</Link>
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

      {hasMedia && (
        <section className="event-visuals">
          <div className="event-media-grid">
            {eventLogo && (
              <div className="event-logo-panel">
                <img src={eventLogo.src} alt={eventLogo.alt} loading="eager" />
                {(eventLogo.credit || eventLogo.creditHref) && (
                  <p className="media-credit">
                    {eventLogo.creditHref ? (
                      <a href={eventLogo.creditHref} target="_blank" rel="noreferrer">
                        {eventLogo.credit || "Logo source"} ↗
                      </a>
                    ) : eventLogo.credit}
                  </p>
                )}
              </div>
            )}
            {heroImage && (
              <figure className="event-photo-panel">
                <img src={heroImage.src} alt={heroImage.alt} loading="eager" />
                {(heroImage.credit || heroImage.creditHref) && (
                  <figcaption className="media-credit media-credit-overlay">
                    {heroImage.creditHref ? (
                      <a href={heroImage.creditHref} target="_blank" rel="noreferrer">
                        {heroImage.credit || "Photo credit"} ↗
                      </a>
                    ) : heroImage.credit}
                  </figcaption>
                )}
              </figure>
            )}
          </div>

          {teams.length > 0 && (
            <div className="team-crest-section">
              <div className="team-crest-heading">
                <p className="kicker">TEAMS</p>
                <span>Confirmed participants</span>
              </div>
              <div className="team-crest-row">
                {teams.map((team) => (
                  <div className="team-crest-card" key={team.name}>
                    <img src={team.logo} alt={team.name + " crest"} loading="lazy" />
                    <strong>{team.name}</strong>
                  </div>
                ))}
              </div>
              {teamsCredit && (
                <p className="team-credit">
                  Crest source: <a href={teamsCredit.href} target="_blank" rel="noreferrer">{teamsCredit.label} ↗</a>
                </p>
              )}
            </div>
          )}
        </section>
      )}

      <section className="city-facts">
        {facts.map(([a, b]) => (
          <div key={a}><span>{a}</span><strong>{b}</strong></div>
        ))}
      </section>

      <section className="detail-section">
        <div className="detail-title">
          <p className="kicker">EVENT GUIDE</p>
          <h2>{introTitle}</h2>
        </div>
        <div className="prose-column">
          {paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>

      <section className="paper-section">
        <div className="section-heading">
          <p className="kicker">PLAN THE TRIP</p>
          <h2>WHAT WE KNOW NOW</h2>
        </div>
        <div className="zone-grid">
          {items.map(([a, b], i) => (
            <article key={a}><span>0{i + 1}</span><h3>{a}</h3><p>{b}</p></article>
          ))}
        </div>
      </section>

      <section className="planning-section">
        <p className="kicker">KEEP EXPLORING</p>
        <h2>BUILD THE FINAL AROUND THE CITY</h2>
        <div className="planning-grid">
          <Link href={cityHref}><span>{cityName} city guide →</span></Link>
          {guideLinks.map((g) => <Link href={g.href} key={g.href}><span>{g.label} →</span></Link>)}
          {venueLinks.map((v) => <Link href={v.href} key={v.href}><span>{v.label} →</span></Link>)}
          <Link href="/finals"><span>2027 finals calendar →</span></Link>
        </div>
        <p className="source-note">
          Ticketing, fan-zone, gate and event-specific supporter transport details are pending official organizer publication. Finals Atlas will not publish unverified details as confirmed information.
        </p>
      </section>

      <footer>
        <div className="brand footer-brand"><span>FINALS</span><span>ATLAS</span></div>
        <p>Independent travel guide. Event and club marks are shown for editorial identification; Finals Atlas is not an official partner.</p>
        <p>© 2026 Finals Atlas</p>
      </footer>
    </main>
  );
}
