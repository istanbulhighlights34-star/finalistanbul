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
    home: "Barcelona",
    away: "Atlético Madrid",
    meta: "Spanish Super Cup semi-final · 22:00 local",
    venue: "Chobani Stadium",
    competitionLogo: "https://commons.wikimedia.org/wiki/Special:FilePath/Supercopa%20Espa%C3%B1a%20Logotipo.png",
    homeLogo: "https://assets.footylogos.com/logos/fc-barcelona/fc-barcelona-logo-footylogos.svg",
    awayLogo: "https://assets.footylogos.com/logos/atletico-madrid/atletico-madrid-logo-footylogos.svg",
  },
  {
    date: "03 FEB 2027",
    home: "Real Sociedad",
    away: "Real Madrid",
    meta: "Spanish Super Cup semi-final · 22:00 local",
    venue: "Tüpraş Stadium",
    competitionLogo: "https://commons.wikimedia.org/wiki/Special:FilePath/Supercopa%20Espa%C3%B1a%20Logotipo.png",
    homeLogo: "https://assets.footylogos.com/logos/real-sociedad/real-sociedad-logo-footylogos.svg",
    awayLogo: "https://assets.footylogos.com/logos/real-madrid/real-madrid-logo-footylogos.svg",
  },
  {
    date: "06 FEB 2027",
    title: "Spanish Super Cup Final",
    meta: "22:00 local",
    venue: "RAMS Park",
    competitionLogo: "https://commons.wikimedia.org/wiki/Special:FilePath/Supercopa%20Espa%C3%B1a%20Logotipo.png",
  },
  {
    date: "02 JUN 2027",
    title: "UEFA Conference League Final",
    meta: "2026/27 season final",
    venue: "Tüpraş Stadium",
    competitionLogo: "https://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20Conference%20League%20full%20logo%20%282024%20version%29.svg",
  },
];

const zones = [
  ["BEŞİKTAŞ", "Best positioned for the Conference League final venue and Bosphorus-side matchday atmosphere."],
  ["TAKSİM", "Central base with broad transport links and easy access to Beşiktaş, Karaköy and the historic peninsula."],
  ["KARAKÖY", "A compact waterfront base for food, Galata and ferry connections across the city."],
  ["KADIKÖY", "Asian-side base close to Chobani Stadium and a strong food-and-nightlife district in its own right."],
];

export default function IstanbulPage() {
  return (
    <main className="content-page">
      <header className="page-header">
        <Link className="brand" href="/"><img className="brand-mark" src="/icon.svg" alt="" aria-hidden="true" /><span className="brand-name"><span>FINALS</span><span>ATLAS</span></span></Link>
        <nav>
          <Link href="/finals">Finals</Link>
          <Link href="/cities/istanbul">Istanbul</Link>
          <Link href="/cities/madrid">Madrid</Link>
          <Link href="/cities/frankfurt">Frankfurt</Link>
        </nav>
        <div className="header-actions"><Link className="header-blog" href="/blog">Journal</Link><Link className="header-cta" href="/finals">2027 Calendar</Link></div>
      </header>

      <section className="page-hero city-hero">
        <p className="kicker">CITY 01 / TÜRKİYE</p>
        <h1>ISTANBUL<br/><span>2027</span></h1>
        <p className="page-lede">
          Four Spanish clubs in February. A UEFA final in June. Three major football venues,
          two continents and one of the strongest launch cities for Finals Atlas.
        </p>
      </section>

      <figure className="city-photo-band">
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Vodafone%20Park%2C%20Istanbul%20%28from%20outside%29.jpg" alt="Tüpraş Stadium and the Bosphorus waterfront in Istanbul" loading="eager" />
        <figcaption><span>ISTANBUL / BOSPHORUS</span><span>Photo: Olos88 · CC0 / Wikimedia Commons</span></figcaption>
      </figure>

      <section className="city-facts">
        <div><span>02—06 FEB</span><strong>Spanish Super Cup</strong></div>
        <div><span>02 JUN</span><strong>Conference League Final</strong></div>
        <div><span>4</span><strong>Confirmed event days</strong></div>
        <div><span>3+</span><strong>Major stadiums</strong></div>
      </section>

      <section className="city-competition-showcase" aria-label="Istanbul 2027 competitions">
        <Link className="competition-showcase-card" href="/finals/spanish-super-cup-istanbul-2027">
          <div className="competition-logo-wrap">
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Supercopa%20Espa%C3%B1a%20Logotipo.png" alt="Spanish Super Cup logo" loading="eager" />
          </div>
          <div>
            <span>02—06 FEB 2027</span>
            <h2>SPANISH SUPER CUP</h2>
            <p>Barcelona · Atlético Madrid · Real Sociedad · Real Madrid</p>
          </div>
        </Link>
        <Link className="competition-showcase-card" href="/finals/conference-league-final-istanbul-2027">
          <div className="competition-logo-wrap">
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/UEFA%20Conference%20League%20full%20logo%20%282024%20version%29.svg" alt="UEFA Conference League logo" loading="eager" />
          </div>
          <div>
            <span>02 JUN 2027</span>
            <h2>UEFA CONFERENCE LEAGUE</h2>
            <p>Final · Tüpraş Stadium · Istanbul</p>
          </div>
        </Link>
      </section>

      <section className="detail-section">
        <div className="detail-title">
          <p className="kicker">CONFIRMED EVENTS</p>
          <h2>WHY ISTANBUL IN 2027</h2>
        </div>
        <div className="detail-list">
          {events.map((event) => (
            <article className="detail-row detail-row-with-logos" key={event.date + (event.title || event.home)}>
              <div className="event-date-logo">
                <span>{event.date}</span>
                <img src={event.competitionLogo} alt="" aria-hidden="true" loading="lazy" />
              </div>

              <div className="event-title-block">
                {event.home && event.away ? (
                  <>
                    <div className="fixture-match-line">
                      <div className="fixture-team fixture-team-home">
                        <h3>{event.home}</h3>
                        <img src={event.homeLogo} alt="" aria-hidden="true" loading="lazy" />
                      </div>
                      <span className="fixture-dash">—</span>
                      <div className="fixture-team fixture-team-away">
                        <img src={event.awayLogo} alt="" aria-hidden="true" loading="lazy" />
                        <h3>{event.away}</h3>
                      </div>
                    </div>
                    <p className="fixture-meta">{event.meta}</p>
                  </>
                ) : (
                  <>
                    <h3 className="event-final-title">{event.title}</h3>
                    <p>{event.meta}</p>
                  </>
                )}
              </div>

              <strong>{event.venue}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="paper-section">
        <div className="section-heading">
          <p className="kicker">WHERE TO BASE YOURSELF</p>
          <h2>CHOOSE THE CITY BEFORE THE HOTEL</h2>
          <p>
            Istanbul is large and water divides the city. Pick your neighborhood around the stadium,
            the side of the city you want to explore and how much time you have outside the event.
          </p>
        </div>
        <div className="zone-grid">
          {zones.map(([name,text],i)=><article key={name}><span>0{i+1}</span><h3>{name}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="planning-section">
        <p className="kicker">TRAVEL GUIDES</p>
        <h2>PLAN ISTANBUL BEFORE MATCHDAY</h2>
        <div className="planning-grid">
          <Link href="/cities/istanbul/spanish-super-cup-week"><span>5-day Super Cup plan →</span></Link>
          <Link href="/cities/istanbul/conference-league-final-weekend"><span>Conference final weekend →</span></Link>
          <Link href="/cities/istanbul/where-to-stay"><span>Where to stay →</span></Link>
          <Link href="/cities/istanbul/airports-and-transport"><span>Airports & transport →</span></Link>
          <Link href="/finals/spanish-super-cup-istanbul-2027"><span>Spanish Super Cup 2027 →</span></Link>
          <Link href="/finals/conference-league-final-istanbul-2027"><span>Conference League Final →</span></Link>
          <Link href="/stadiums/chobani-stadium"><span>Chobani Stadium →</span></Link>
          <Link href="/stadiums/tupras-stadium"><span>Tüpraş Stadium →</span></Link>
          <Link href="/stadiums/rams-park"><span>RAMS Park →</span></Link>
        </div>
        <p className="source-note">
          Supporter routing, ticket sales and fan-zone details will be added only after official organizer publication.
        </p>
      </section>

      <footer>
        <div className="brand footer-brand"><img className="brand-mark" src="/icon.svg" alt="" aria-hidden="true" /><span className="brand-name"><span>FINALS</span><span>ATLAS</span></span></div>
        <p>Independent editorial guide. Competition and club marks identify the events covered.</p>
        <p>© 2026 Finals Atlas</p>
      </footer>
    </main>
  );
}
