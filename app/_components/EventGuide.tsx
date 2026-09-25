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
          <img className="brand-mark" src="/icon.svg" alt="" aria-hidden="true" />
          <span className="brand-name">
          <span>FINALS</span>
          <span>ATLAS</span></span>
        </Link>
        <nav>
          <Link href="/finals">Finals</Link>
          <Link href="/cities/istanbul">Istanbul</Link>
          <Link href="/cities/madrid">Madrid</Link>
          <Link href="/cities/frankfurt">Frankfurt</Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span aria-hidden="true">☰</span></summary>
          <div className="mobile-menu-panel">
            <Link href="/finals">Explore 2027</Link>
            <Link href="/blog">Journal</Link>
            <Link href="/arena">Arena</Link>
          </div>
        </details>
        <div className="header-actions">
          <Link className="header-blog" href="/blog">Journal</Link>
          <Link className="header-blog" href="/arena">Arena</Link>
          <Link className="header-cta" href={cityHref}>{cityName}</Link>
        </div>
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
        <figure className="ticket-feature">
          <img src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1400&q=85" alt="Floodlit football stadium ready for matchday" loading="lazy" />
          <figcaption>Matchday ticket planning · use official organiser channels only</figcaption>
        </figure>
      </section>

      <section className="trip-decisions" aria-labelledby="trip-decisions-heading">
        <p className="kicker">TRIP PLANNING</p>
        <h2 id="trip-decisions-heading">HOTELS, FLIGHTS & TICKETS</h2>
        <div className="trip-decisions-grid">
          <Link href={`${cityHref}/where-to-stay`}>
            <span>01 / HOTELS</span>
            <strong>Choose a base in {cityName}</strong>
            <p>Compare neighborhoods and connections before choosing accommodation.</p>
            <b>Explore hotel areas →</b>
          </Link>
          <Link href={guideLinks.find((guide) => /airport/i.test(guide.href))?.href || cityHref}>
            <span>02 / FLIGHTS</span>
            <strong>Plan your arrival</strong>
            <p>Check airport and city transport before booking flights or transfers.</p>
            <b>Explore arrival routes →</b>
          </Link>
          <a href="#ticket-status">
            <span>03 / TICKETS</span>
            <strong>Check ticket status</strong>
            <p>Find out what is confirmed and follow the organizer for sales updates.</p>
            <b>Read ticket guidance ↓</b>
          </a>
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
        <p className="source-note" id="ticket-status">
          Official ticket-sale details and event-specific supporter arrangements are pending publication. Check the organizer and participating clubs for authorized sales; Finals Atlas does not sell tickets.
        </p>
      </section>

      <footer>
        <div className="brand footer-brand"><img className="brand-mark" src="/icon.svg" alt="" aria-hidden="true" /><span className="brand-name"><span>FINALS</span><span>ATLAS</span></span></div>
        <p>Independent travel guide. Event and club marks are shown for editorial identification; Finals Atlas is not an official partner.</p>
        <p>© 2026 Finals Atlas</p>
      </footer>
    </main>
  );
}
