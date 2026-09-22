import Link from "next/link";

const events = [
  {
    eyebrow: "26 MAY 2027",
    title: "UEFA Europa League Final",
    subtitle: "Frankfurt · Germany",
    venue: "Stadion Frankfurt",
    status: "FINAL",
    href: "/cities/frankfurt",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20Europa%20League%20logo%20%282024%20version%29.svg",
  },
  {
    eyebrow: "02 JUN 2027",
    title: "UEFA Conference League Final",
    subtitle: "Istanbul · Türkiye",
    venue: "Tüpraş Stadium",
    status: "FINAL",
    href: "/cities/istanbul",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20Conference%20League%20full%20logo%20%282024%20version%29.svg",
  },
  {
    eyebrow: "05 JUN 2027",
    title: "UEFA Champions League Final",
    subtitle: "Madrid · Spain",
    venue: "Estadio Metropolitano",
    status: "FINAL",
    href: "/cities/madrid",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20Champions%20League%20Logo%20Wordmark.svg",
  },
];

const guides = [
  {
    number: "01",
    title: "FINALS",
    text: "Confirmed dates, host cities, venues and official-source updates for major finals worldwide.",
  },
  {
    number: "02",
    title: "CITIES",
    text: "Destination guides built around the event: neighborhoods, local transport and what to do before and after.",
  },
  {
    number: "03",
    title: "STADIUMS",
    text: "Venue orientation, arrival routes, matchday logistics and practical planning for visiting supporters.",
  },
  {
    number: "04",
    title: "TRAVEL",
    text: "Where to stay, airport options, transfers and useful planning information for a finals trip.",
  },
];

const spanishSuperCup = [
  ["02 FEB", "Barcelona — Atlético Madrid", "22:00 local · Chobani Stadium"],
  ["03 FEB", "Real Sociedad — Real Madrid", "22:00 local · Tüpraş Stadium"],
  ["06 FEB", "Spanish Super Cup Final", "22:00 local · RAMS Park"],
];

const latestArticles = [
  {
    city: "Istanbul",
    read: "8 min read",
    title: "How to Plan a Final Week in Istanbul",
    text: "Choose the right base, cross the city with confidence and keep matchday clear of avoidable travel stress.",
    href: "/blog/istanbul-final-week-travel-plan",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Vodafone%20Park%2C%20Istanbul%20%28from%20outside%29.jpg",
    imageAlt: "Tüpraş Stadium beside the Bosphorus in Istanbul",
  },
  {
    city: "Madrid",
    read: "8 min read",
    title: "How to Build a Madrid Final Weekend",
    text: "A city-first plan for accommodation, stadium travel and the hours around a major final at Estadio Metropolitano.",
    href: "/blog/madrid-champions-league-final-weekend-plan",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20Metropolitano%2C%20Madrid.png",
    imageAlt: "Estadio Metropolitano in Madrid",
  },
  {
    city: "Frankfurt",
    read: "7 min read",
    title: "Make a Compact Final City Work for You",
    text: "Use Frankfurt’s scale and transport connections to keep a short final trip simple, flexible and enjoyable.",
    href: "/blog/frankfurt-europa-league-final-trip-plan",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Deutsche%20bank%20park.jpg",
    imageAlt: "Stadion Frankfurt exterior",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Finals Atlas",
    url: "https://finalsatlas.com",
    description:
      "A global travel guide to major sports finals, host cities and stadiums.",
    inLanguage: "en",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-header">
        <Link className="brand" href="/" aria-label="Finals Atlas home">
          <img className="brand-mark" src="/icon.svg" alt="" aria-hidden="true" />
          <span className="brand-name">
            <span>FINALS</span>
            <span>ATLAS</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/finals">Finals</Link>
          <Link href="/cities/istanbul">Istanbul</Link>
          <Link href="/cities/madrid">Madrid</Link>
          <Link href="/cities/frankfurt">Frankfurt</Link>
        </nav>
        <div className="header-actions">
          <Link className="header-blog" href="/blog">
            Journal
          </Link>
          <Link className="header-blog" href="/arena">
            Arena
          </Link>
          <Link className="header-cta" href="/finals">
            Explore 2027
          </Link>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" aria-hidden="true">
          <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Wembley%20Stadium%20interior.jpg" alt="" />
        </div>
        <a className="hero-photo-credit" href="https://commons.wikimedia.org/wiki/File:Wembley_Stadium_interior.jpg" target="_blank" rel="noreferrer">Wembley Stadium · Photo: Jbmg40 / CC BY-SA 3.0</a>
        <div className="hero-noise" />
        <div className="hero-topline">
          <span>GLOBAL FINALS & TRAVEL GUIDE</span>
          <span>WORLDWIDE · EST. 2026</span>
        </div>

        <div className="hero-copy">
          <p className="kicker">FINALS / WORLDWIDE</p>
          <h1>
            FOLLOW THE FINAL
            <br />
            <span>ARRIVE IN THE CITY</span>
          </h1>
          <p className="hero-description">
            A global travel guide built around major sports finals — dates,
            host cities and stadiums, plus where to stay, how to get there and
            what to do once you arrive.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" href="/finals">
              Explore the finals
            </Link>
            <Link className="button-secondary" href="/cities/istanbul">
              Start with Istanbul
            </Link>
          </div>
        </div>

        <Link className="next-event-strip" href="/cities/istanbul">
          <div>
            <span className="label">NEXT DESTINATION</span>
            <strong>ISTANBUL · SPANISH SUPER CUP 2027</strong>
          </div>
          <div className="next-event-meta">
            <span>02—06 FEB 2027</span>
            <span>3 STADIUMS</span>
            <span>4 CLUBS</span>
          </div>
        </Link>
      </section>

      <section className="events-section" id="events">
        <div className="section-heading">
          <p className="kicker">2027 / FINALS CALENDAR</p>
          <h2>FINALS ON THE MAP</h2>
          <p>
            Confirmed host cities and venues worth building a trip around.
            Finals Atlas uses official organizer information as the starting
            point for every event guide.
          </p>
        </div>

        <div className="event-grid">
          {events.map((event, index) => (
            <Link className="event-card" href={event.href} key={event.title}>
              <div className="event-card-top">
                <span>{event.status}</span>
                <span>0{index + 1}</span>
              </div>
              <div className="event-card-body">
                <img className="event-card-logo" src={event.logo} alt="" aria-hidden="true" loading="lazy" />
                <p>{event.eyebrow}</p>
                <h3>{event.title}</h3>
                <p className="event-subtitle">{event.subtitle}</p>
              </div>
              <div className="event-card-footer">
                <span>{event.venue}</span>
                <span aria-hidden="true">↗</span>
              </div>
            </Link>
          ))}
        </div>

        <Link className="text-link home-more-link" href="/finals">
          View full 2027 finals calendar <span>→</span>
        </Link>
      </section>

      <section className="spotlight">
        <div className="spotlight-title">
          <p className="kicker">FIRST DESTINATION</p>
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
            football — and a city worth staying for.
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
          <Link className="text-link spotlight-link" href="/cities/istanbul">
            Open Istanbul guide <span>→</span>
          </Link>
          <figure className="home-stadium-feature">
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Rams%20Park%20i%C3%A7%20g%C3%B6r%C3%BCn%C3%BCm%202025.jpg" alt="RAMS Park in Istanbul" loading="lazy" />
            <figcaption>RAMS Park · Spanish Super Cup Final venue · Photo: Antoloji / Wikimedia Commons</figcaption>
          </figure>
          <p className="source-note">
            Schedule shown in Istanbul local time. Always confirm ticketing and
            last-minute event details with the official organizer before travel.
          </p>
        </div>
      </section>

      <section className="guide-section" id="guide">
        <div className="section-heading dark">
          <p className="kicker">THE ATLAS</p>
          <h2>FROM HOST CITY TO FINAL WHISTLE</h2>
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

      <section className="latest-section" aria-labelledby="latest-heading">
        <div className="latest-heading">
          <div>
            <p className="kicker">JOURNAL / FIELD NOTES</p>
            <h2 id="latest-heading">LATEST FROM THE ATLAS</h2>
          </div>
          <Link className="text-link" href="/blog">
            View all articles <span>→</span>
          </Link>
        </div>
        <div className="latest-grid">
          {latestArticles.map((article, index) => (
            <Link className="latest-card" href={article.href} key={article.href}>
              <div className="latest-card-image">
                <img src={article.image} alt={article.imageAlt} loading="lazy" />
              </div>
              <div className="latest-card-meta">
                <span>{article.city}</span>
                <span>{article.read}</span>
              </div>
              <span className="latest-card-number">0{index + 1}</span>
              <h3>{article.title}</h3>
              <p>{article.text}</p>
              <span className="latest-card-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="istanbul-section" id="cities">
        <div className="istanbul-wordmark" aria-hidden="true">
          ISTANBUL
        </div>
        <div className="istanbul-copy">
          <p className="kicker">LAUNCH CITY / 01</p>
          <h2>STARTING IN ISTANBUL BUILT FOR THE WORLD</h2>
          <p>
            Finals Atlas starts with Istanbul as its first deep city hub, then
            expands final by final into Madrid, Frankfurt and beyond. Each city
            guide connects the event to the trip around it.
          </p>
          <Link className="text-link" href="/cities/istanbul">
            Open Istanbul city hub <span>→</span>
          </Link>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand">
          <img className="brand-mark" src="/icon.svg" alt="" aria-hidden="true" />
          <span>FINALS</span>
          <span>ATLAS</span>
        </div>
        <p>
          Independent editorial guide. Event and club marks identify the subjects covered; Finals Atlas is not affiliated with UEFA, RFEF,
          Formula 1, participating clubs, federations or venue operators.
        </p>
        <p>© 2026 Finals Atlas</p>
      </footer>
    </main>
  );
}
