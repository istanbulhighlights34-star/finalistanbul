"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./arena.module.css";

const picks = ["Istanbul", "Madrid", "Frankfurt"];

export default function ArenaPage() {
  const [pick, setPick] = useState<string | null>(null);

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
        <Link className={styles.headerButton} href="/finals">Explore finals ↗</Link>
      </header>

      <div className={styles.shell}>
        <div className={styles.topline}><span>FINALS ATLAS / ARENA</span><span>SEASON 01 · LIVE</span></div>

        <section className={styles.intro}>
          <div>
            <p className={styles.kicker}>THE YEAR-ROUND SPORTS WORLD</p>
            <h1>Make every<br /><em>final</em> count.</h1>
          </div>
          <p className={styles.introText}>A shared season for the people who follow the final together. Make a pick, climb your friend league and unlock the next city.</p>
        </section>

        <section className={styles.heroGrid}>
          <article className={styles.challenge}>
            <div className={styles.cardTop}><span>TODAY&apos;S CHALLENGE</span><span>+25 ATLAS POINTS</span></div>
            <div className={styles.challengeBody}>
              <p className={styles.eyebrow}>COMMUNITY PICK · WEEK 04</p>
              <h2>Where would you build your next final weekend?</h2>
              <p className={styles.muted}>Choose a city. The group pulse closes when the next fixture starts.</p>
              <div className={styles.pickGrid}>
                {picks.map((option) => (
                  <button key={option} className={pick === option ? styles.pickSelected : styles.pick} onClick={() => setPick(option)}>
                    <span>{option}</span><span>↗</span>
                  </button>
                ))}
              </div>
              <p className={styles.status}>{pick ? `Your pick: ${pick}. Locked for this season prototype.` : "Make your first pick to enter the season."}</p>
            </div>
          </article>

          <aside className={styles.seasonCard}>
            <div className={styles.cardTop}><span>YOUR SEASON</span><span>01 / 04</span></div>
            <div className={styles.score}><strong>184</strong><span>ATLAS POINTS</span></div>
            <div className={styles.statRow}><span>Current rank</span><strong>#03</strong></div>
            <div className={styles.statRow}><span>Pick streak</span><strong>4 days</strong></div>
            <div className={styles.progress}><span style={{ width: "68%" }} /></div>
            <p className={styles.muted}>68% to your next city unlock</p>
            <Link className={styles.textLink} href="/cities/istanbul">View your Atlas →</Link>
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
