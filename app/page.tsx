const events = [
  {
    eyebrow: "02—06 FEB 2027",
    title: "Spanish Super Cup",
    subtitle: "Barcelona · Atlético · Real Sociedad · Real Madrid",
    venue: "Three stadiums across Istanbul",
    status: "NEXT",
  },
  {
    eyebrow: "02 JUN 2027",
    title: "UEFA Conference League Final",
    subtitle: "The 2026/27 season decider",
    venue: "Beşiktaş Stadium",
    status: "FINAL",
  },
  {
    eyebrow: "24—26 SEP 2027",
    title: "Turkish Grand Prix",
    subtitle: "Formula 1 returns to Istanbul",
    venue: "Istanbul Park",
    status: "RACE",
  },
];

const guides = [
  {
    number: "01",
    title: "EVENTS",
    text: "Dates, venues, official sources and the practical details you need before you travel.",
  },
  {
    number: "02",
    title: "STADIUMS",
    text: "Arrival routes, gates, transport options and neighborhood orientation for matchday.",
  },
  {
    number: "03",
    title: "STAY",
    text: "Where to stay based on your venue, airport, nightlife plans and time in the city.",
  },
  {
    number: "04",
    title: "ISTANBUL",
    text: "Make a trip of it: neighborhoods, food, Bosphorus experiences and essential city tips.",
  },
];

const spanishSuperCup = [
  ["02 FEB", "Barcelona — Atlético Madrid", "22:00 local · Fenerbahçe"],
  ["03 FEB", "Real Sociedad — Real Madrid", "22:00 local · Beşiktaş"],
  ["06 FEB", "Spanish Super Cup Final", "22:00 local · RAMS Park"],
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Final Istanbul",
    url: "https://finalistanbul.com",
    description:
      "Independent travel and matchday guide to Istanbul's biggest sporting events.",
    inLanguage: "en",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Final Istanbul home">
          <span>FINAL</span>
          <span>ISTANBUL</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#events">Events</a>
          <a href="#guide">Guide</a>
          <a href="#istanbul">Istanbul</a>
        </nav>
        <a className="header-cta" href="#events">
          Explore 2027
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-noise" />
        <div className="hero-topline">
          <span>INDEPENDENT EVENT & TRAVEL GUIDE</span>
          <span>ISTANBUL · TÜRKİYE</span>
        </div>

        <div className="hero-copy">
          <p className="kicker">FINAL / ISTANBUL</p>
          <h1>
            THE BIGGEST EVENTS.
            <br />
            <span>ONE EXTRAORDINARY CITY.</span>
          </h1>
          <p className="hero-description">
            Your independent guide to Istanbul&apos;s biggest sporting events —
            from matchday logistics and stadiums to hotels, transport and the
            city beyond the final whistle.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#events">
              See upcoming events
            </a>
            <a className="button-secondary" href="#guide">
              Plan your trip
            </a>
          </div>
        </div>

        <div className="next-event-strip">
          <div>
            <span className="label">NEXT IN ISTANBUL</span>
            <strong>SPANISH SUPER CUP 2027</strong>
          </div>
          <div className="next-event-meta">
            <span>02—06 FEB 2027</span>
            <span>3 STADIUMS</span>
            <span>4 CLUBS</span>
          </div>
        </div>
      </section>

      <section className="events-section" id="events">
        <div className="section-heading">
          <p className="kicker">2027 / CALENDAR</p>
          <h2>COMING TO ISTANBUL</h2>
          <p>
            Major confirmed events worth planning a trip around. Information is
            checked against official organizer sources.
          </p>
        </div>

        <div className="event-grid">
          {events.map((event, index) => (
            <article className="event-card" key={event.title}>
              <div className="event-card-top">
                <span>{event.status}</span>
                <span>0{index + 1}</span>
              </div>
              <div className="event-card-body">
                <p>{event.eyebrow}</p>
                <h3>{event.title}</h3>
                <p className="event-subtitle">{event.subtitle}</p>
              </div>
              <div className="event-card-footer">
                <span>{event.venue}</span>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="spotlight">
        <div className="spotlight-title">
          <p className="kicker">FIRST SPOTLIGHT</p>
          <h2>
            SPANISH
            <br />
            SUPER CUP
            <br />
            <span>ISTANBUL 2027</span>
          </h2>
        </div>

        <div className="spotlight-content">
          <p className="spotlight-lede">
            Four Spanish clubs. Three Istanbul stadiums. One week built for
            football and the city around it.
          </p>
          <div className="fixtures">
            {spanishSuperCup.map(([date, match, meta]) => (
              <div className="fixture" key={match}>
                <span>{date}</span>
                <strong>{match}</strong>
                <small>{meta}</small>
              </div>
            ))}
          </div>
          <p className="source-note">
            Schedule shown in Istanbul local time. Always confirm ticketing and
            last-minute event details with the official organizer before travel.
          </p>
        </div>
      </section>

      <section className="guide-section" id="guide">
        <div className="section-heading dark">
          <p className="kicker">THE FINAL GUIDE</p>
          <h2>FROM LANDING TO KICK-OFF.</h2>
        </div>
        <div className="guide-grid">
          {guides.map((guide) => (
            <article key={guide.number}>
              <span>{guide.number}</span>
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="istanbul-section" id="istanbul">
        <div className="istanbul-wordmark" aria-hidden="true">
          ISTANBUL
        </div>
        <div className="istanbul-copy">
          <p className="kicker">MAKE A TRIP OF IT</p>
          <h2>THE FINAL IS ONLY THE BEGINNING.</h2>
          <p>
            Stay for the Bosphorus, neighborhood restaurants, historic streets
            and the energy of a city split across two continents. Final Istanbul
            will connect event travel with a concise, useful city guide.
          </p>
          <a className="text-link" href="#top">
            Final Istanbul guide — coming soon <span>→</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand">
          <span>FINAL</span>
          <span>ISTANBUL</span>
        </div>
        <p>
          Independent guide. Final Istanbul is not affiliated with UEFA, RFEF,
          Formula 1, participating clubs or venue operators.
        </p>
        <p>© 2026 Final Istanbul</p>
      </footer>
    </main>
  );
}
