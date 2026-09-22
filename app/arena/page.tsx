"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./arena.module.css";

const sports = ["Football", "Basketball"];
const footballModes = ["Domestic Leagues", "European Cups"];
const matches = [
  ["CUM", "Galatasaray", "Fenerbahçe"],
  ["CMT", "Manchester City", "Liverpool"],
  ["PAZ", "Bayern", "Dortmund"],
];
const basketballMatches = [
  ["SAL", "Fenerbahçe Beko", "Panathinaikos"],
  ["ÇAR", "Real Madrid", "Anadolu Efes"],
  ["PER", "Olympiacos", "Barcelona"],
];

export default function ArenaPage() {
  const [sport, setSport] = useState(sports[0]);
  const [competition, setCompetition] = useState(footballModes[0]);
  const [predictions, setPredictions] = useState<Record<string, string>>({});
  const activeMatches = sport === "Basketball" ? basketballMatches : matches;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Finals Atlas home">
          <img src="/icon.svg" alt="" aria-hidden="true" />
          <span>FINALS<br />ATLAS</span>
        </Link>
        <nav aria-label="Arena navigation">
          <Link className={styles.active} href="/arena">Arena</Link>
          <Link href="/finals">Leagues</Link>
          <Link href="/blog">Journal</Link>
        </nav>
        <Link className={styles.headerButton} href="/arena/create">Yeni lig oluştur ↗</Link>
      </header>

      <div className={styles.shell}>
        <div className={styles.topline}><span>FINALS ATLAS / ARENA</span><span>SEASON 01 · LIVE</span></div>

        <section className={styles.intro}>
          <div>
            <p className={styles.kicker}>THE YEAR-ROUND SPORTS WORLD</p>
            <h1>Make every<br /><em>final</em> count.</h1>
          </div>
          <p className={styles.introText}>Spor dalını seç, kendi yarışmana katıl. Futbol ve basketbol puanları birbirinden tamamen ayrı tutulur.</p>
        </section>

        <section className={styles.heroGrid}>
          <article className={styles.challenge}>
            <div className={styles.cardTop}><span>WEEK 04 / MATCH PREDICTIONS</span><span>DEADLINE: CUM 19:00</span></div>
            <div className={styles.challengeBody}>
              <p className={styles.eyebrow}>CHOOSE YOUR SPORT</p>
              <div className={styles.sportTabs}>
                {sports.map((item) => <button key={item} className={sport === item ? styles.sportTabActive : styles.sportTab} onClick={() => setSport(item)}>{item}</button>)}
              </div>
              {sport === "Football" && <div className={styles.leagueTabs}>
                {footballModes.map((item) => <button key={item} className={competition === item ? styles.leagueTabActive : styles.leagueTab} onClick={() => setCompetition(item)}>{item}</button>)}
              </div>}
              <h2>{sport === "Football" ? `${competition} / This week&apos;s matches` : "EuroLeague / This week&apos;s matches"}</h2>
              <p className={styles.muted}>Choose 1, X or 2 for each match. Picks lock when the match starts.</p>
              <div className={styles.matchList}>
                {activeMatches.map(([day, home, away]) => (
                  <div className={styles.matchRow} key={home}>
                    <span className={styles.matchDay}>{day}</span><strong>{home}</strong><span className={styles.vs}>—</span><strong>{away}</strong>
                    <div className={styles.resultButtons}>{["1", "X", "2"].map((result) => <button key={result} className={predictions[home] === result ? styles.resultActive : styles.result} onClick={() => setPredictions({ ...predictions, [home]: result })}>{result}</button>)}</div>
                  </div>
                ))}
              </div>
              <p className={styles.status}>{Object.keys(predictions).length} / {activeMatches.length} picks complete · Points are posted after the matches.</p>
            </div>
          </article>

          <aside className={styles.seasonCard}>
            <div className={styles.cardTop}><span>YOUR SEASON</span><span>01 / 04</span></div>
            <div className={styles.score}><strong>184</strong><span>SEASON POINTS</span></div>
            <div className={styles.statRow}><span>Current rank</span><strong>#03</strong></div>
            <div className={styles.statRow}><span>This week</span><strong>+18 pts</strong></div>
            <div className={styles.progress}><span style={{ width: "68%" }} /></div>
            <p className={styles.muted}>68% to the next season level</p>
            <Link className={styles.textLink} href="/finals">View the leaderboard →</Link>
          </aside>
        </section>

        <section className={styles.dashboardGrid}>
          <article className={styles.panel}>
            <div className={styles.panelHeading}><span>FRIEND LEAGUE</span><Link href="/finals">View all →</Link></div>
            <div className={styles.leagueRow}><span className={styles.rank}>01</span><strong>Ada&apos;s Final Four</strong><span>231</span></div>
            <div className={styles.leagueRow}><span className={styles.rank}>02</span><strong>Mert / Away Days</strong><span>205</span></div>
            <div className={`${styles.leagueRow} ${styles.you}`}><span className={styles.rank}>03</span><strong>You</strong><span>184</span></div>
            <div className={styles.leagueRow}><span className={styles.rank}>04</span><strong>Selin&apos;s Press Box</strong><span>161</span></div>
          </article>

          <article className={styles.panel}>
            <div className={styles.panelHeading}><span>ATLAS UNLOCKS</span><span>02 / 06</span></div>
            <div className={styles.unlock}><span className={styles.unlockIcon}>01</span><div><strong>Stadium hopper</strong><p>Visit 3 final cities</p></div><span className={styles.done}>DONE</span></div>
            <div className={styles.unlock}><span className={styles.unlockIcon}>02</span><div><strong>Derby decoder</strong><p>Make 5 matchday picks</p></div><span className={styles.next}>3 / 5</span></div>
            <div className={styles.unlock}><span className={styles.unlockIcon}>03</span><div><strong>Night train</strong><p>Invite a friend to play</p></div><span className={styles.next}>LOCKED</span></div>
          </article>
        </section>

        <section className={styles.bottomStrip}>
          <span>ARENA IS THE LIVING LAYER OF FINALS ATLAS</span>
          <span>PLAY · DISCOVER · RETURN</span>
        </section>
      </div>
    </main>
  );
}
