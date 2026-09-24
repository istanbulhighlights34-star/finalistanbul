"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./arena.module.css";

type Game = { id: string; home: string; away: string; tipoff: string };
type Picks = { games: Record<string, "1" | "2">; topScorer: string; champion: string; finalFour: string[] };
// EuroLeague Media Centre lists these times in CEST (UTC+2).
const games: Game[] = [
  { id: "hta-bay", home: "Hapoel Tel Aviv", away: "Bayern Munich", tipoff: "2026-09-24T16:00:00Z" },
  { id: "dub-rmb", home: "Dubai Basketball", away: "Real Madrid", tipoff: "2026-09-24T16:00:00Z" },
  { id: "czv-zal", home: "Crvena Zvezda", away: "Žalgiris Kaunas", tipoff: "2026-09-24T18:00:00Z" },
  { id: "pao-pbb", home: "Panathinaikos", away: "Paris Basketball", tipoff: "2026-09-24T18:15:00Z" },
  { id: "kba-oly", home: "Baskonia", away: "Olympiacos", tipoff: "2026-09-24T18:30:00Z" },
  { id: "bar-efs", home: "FC Barcelona", away: "Anadolu Efes", tipoff: "2026-09-24T18:30:00Z" },
  { id: "asv-mta", home: "ASVEL", away: "Maccabi Tel Aviv", tipoff: "2026-09-24T18:45:00Z" },
  { id: "bjk-vbc", home: "Beşiktaş", away: "Valencia Basket", tipoff: "2026-09-25T17:00:00Z" },
  { id: "fbt-vir", home: "Fenerbahçe", away: "Virtus Bologna", tipoff: "2026-09-25T17:45:00Z" },
  { id: "par-mil", home: "Partizan", away: "Olimpia Milano", tipoff: "2026-09-25T18:45:00Z" },
];
const teams = games.flatMap((game) => [game.home, game.away]);
const firstLock = Date.parse(games[0].tipoff) - 120_000;
const storageKey = "finalsatlas-euroleague-2026-27-round-1";
const emptyPicks: Picks = { games: {}, topScorer: "", champion: "", finalFour: [] };
const formatTime = (iso: string) => new Intl.DateTimeFormat(undefined, {
  weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZoneName: "short",
}).format(new Date(iso));

export default function ArenaPage() {
  const [now, setNow] = useState<number | null>(null);
  const [picks, setPicks] = useState<Picks>(emptyPicks);
  const [saved, setSaved] = useState(true);
  const [clockSource, setClockSource] = useState<"checking" | "server" | "device">("checking");
  const offset = useRef(0);

  useEffect(() => {
    async function syncClock() {
      const started = Date.now();
      try {
        const response = await fetch("/api/arena/time", { cache: "no-store" });
        if (!response.ok) throw new Error("Clock unavailable");
        const data = await response.json() as { now: number };
        if (!Number.isFinite(data.now)) throw new Error("Invalid clock");
        offset.current = data.now - Math.round((started + Date.now()) / 2);
        setClockSource("server");
      } catch {
        offset.current = 0;
        setClockSource("device");
      }
      setNow(Date.now() + offset.current);
    }
    void syncClock();
    try {
      const value = localStorage.getItem(storageKey);
      if (value) {
        const stored = JSON.parse(value) as Partial<Picks>;
        setPicks({ games: stored.games || {}, topScorer: stored.topScorer || "", champion: stored.champion || "", finalFour: Array.isArray(stored.finalFour) ? stored.finalFour : [] });
      }
    } catch { setSaved(false); }
    const interval = setInterval(() => setNow(Date.now() + offset.current), 10_000);
    const resync = setInterval(() => { void syncClock(); }, 60_000);
    return () => { clearInterval(interval); clearInterval(resync); };
  }, []);

  function update(next: Picks) {
    setPicks(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); setSaved(true); }
    catch { setSaved(false); }
  }

  const bonusOpen = now !== null && now < firstLock;
  const complete = games.filter((game) => picks.games[game.id]).length;
  const openCount = now === null ? 0 : games.filter((game) => now < Date.parse(game.tipoff) - 120_000).length;
  const timeZone = now === null ? "Your local time" : new Intl.DateTimeFormat(undefined, { timeZoneName: "short" }).formatToParts(new Date(now)).find((part) => part.type === "timeZoneName")?.value || "Local time";

  return <main className={styles.page}>
    <header className={styles.header}>
      <Link className="brand" href="/" aria-label="Finals Atlas home"><img className="brand-mark" src="/icon.svg" alt="" aria-hidden="true" /><span className="brand-name"><span>FINALS</span><span>ATLAS</span></span></Link>
      <nav aria-label="Arena navigation"><Link className={styles.active} href="/arena">Arena</Link><Link href="/blog">Journal</Link></nav>
      <Link className={styles.headerButton} href="/">Explore Finals ↗</Link>
    </header>
    <div className={styles.shell}>
      <div className={styles.topline}><span>FINALS ATLAS / ARENA</span><span>EUROLEAGUE · 2026/27</span></div>
      <section className={styles.intro}><div><p className={styles.kicker}>ROUND 01 · 24–25 SEPTEMBER</p><h1>EuroLeague<br /><em>picks.</em></h1></div><p className={styles.introText}>Choose the winners, a top-scoring team and your season picks. Match times adjust to your device.</p></section>
      <div className={styles.notice} role="status"><strong>Personal preview</strong><span>Your picks are saved in this browser only. Accounts, friend groups, leaderboards and official scoring are not active yet. Clearing browser data removes your picks. {clockSource === "device" && "Server time is unavailable; deadlines currently use your device clock."}</span></div>
      <section className={styles.heroGrid} aria-label="EuroLeague Round 1 predictions">
        <article className={styles.challenge}>
          <div className={styles.cardTop}><span>ROUND 01 / 10 GAMES</span><span>{timeZone}</span></div>
          <div className={styles.challengeBody}>
            <p className={styles.eyebrow}>MATCH WINNERS · 5 POINTS EACH</p><h2>Who wins?</h2>
            <p className={styles.muted}>1 = home win · 2 = away win. Each game closes two minutes before tip-off. Times below are local to you.</p>
            <div className={styles.matchList}>{games.map((game) => {
              const locked = now === null || now >= Date.parse(game.tipoff) - 120_000;
              return <div className={styles.matchRow} key={game.id}>
                <div className={styles.matchInfo}><time dateTime={game.tipoff}>{now === null ? "Checking local time…" : formatTime(game.tipoff)}</time><span>{now === null ? "Checking" : locked ? "Locked" : "Open"}</span></div>
                <div className={styles.matchTeams}><strong>{game.home}</strong><span>vs</span><strong>{game.away}</strong></div>
                <div className={styles.resultButtons} aria-label={`${game.home} vs ${game.away} winner`}>
                  {(["1", "2"] as const).map((choice) => <button key={choice} type="button" disabled={locked} aria-label={choice === "1" ? `${game.home} wins` : `${game.away} wins`} aria-pressed={picks.games[game.id] === choice} className={picks.games[game.id] === choice ? styles.resultActive : styles.result} onClick={() => {
                    if (Date.now() + offset.current >= Date.parse(game.tipoff) - 120_000) { setNow(Date.now() + offset.current); return; }
                    update({ ...picks, games: { ...picks.games, [game.id]: choice } });
                  }}>{choice}</button>)}
                </div>
              </div>;
            })}</div>
            <p className={styles.status}>{complete} / 10 selected · {openCount} games open · {saved ? "Saved on this device" : "Could not save on this device"}</p>
          </div>
        </article>
        <aside className={styles.seasonCard}>
          <div className={styles.cardTop}><span>ROUND BONUS</span><span>+5 POINTS</span></div>
          <div className={styles.sideBody}><h2>Top-scoring team</h2><p className={styles.muted}>Which team scores the most points in Round 1? A tie at the top counts for each tied team. This pick closes before the first game.</p>
            <label className={styles.selectLabel} htmlFor="top-scorer">Choose a team</label>
            <select id="top-scorer" value={picks.topScorer} disabled={!bonusOpen} onChange={(event) => { if (Date.now() + offset.current < firstLock) update({ ...picks, topScorer: event.target.value }); else setNow(Date.now() + offset.current); }}><option value="">Select a team</option>{teams.map((team) => <option key={team}>{team}</option>)}</select>
            <p className={styles.status}>{bonusOpen ? `Locks ${formatTime(new Date(firstLock).toISOString())}` : now === null ? "Checking deadline…" : "Round bonus locked"}</p>
          </div>
        </aside>
      </section>
      <section className={styles.dashboardGrid} aria-label="Season bonus predictions">
        <article className={styles.panel}><div className={styles.panelHeading}><span>SEASON BONUS</span><span>+10 POINTS</span></div><div className={styles.sideBody}><h2>Champion</h2><p className={styles.muted}>Pick the 2026/27 champion before the first game.</p><label className={styles.selectLabel} htmlFor="champion">Choose a team</label><select id="champion" value={picks.champion} disabled={!bonusOpen} onChange={(event) => { if (Date.now() + offset.current < firstLock) update({ ...picks, champion: event.target.value }); else setNow(Date.now() + offset.current); }}><option value="">Select a team</option>{teams.map((team) => <option key={team}>{team}</option>)}</select></div></article>
        <article className={styles.panel}><div className={styles.panelHeading}><span>FINAL FOUR BONUS</span><span>+3 PER TEAM</span></div><div className={styles.sideBody}><h2>Final Four</h2><p className={styles.muted}>Choose up to four teams before the first game. Each correct team earns three points.</p><div className={styles.teamPicker}>{teams.map((team) => {
          const selected = picks.finalFour.includes(team);
          return <button key={team} type="button" disabled={!bonusOpen || (!selected && picks.finalFour.length >= 4)} aria-pressed={selected} className={selected ? styles.pickSelected : styles.pick} onClick={() => {
            if (Date.now() + offset.current >= firstLock) { setNow(Date.now() + offset.current); return; }
            update({ ...picks, finalFour: selected ? picks.finalFour.filter((value) => value !== team) : [...picks.finalFour, team] });
          }}>{team}<span aria-hidden="true">{selected ? "✓" : "+"}</span></button>;
        })}</div><p className={styles.status}>{picks.finalFour.length} / 4 selected · {bonusOpen ? "Open" : "Locked"}</p></div></article>
      </section>
      <div className={styles.bottomStrip}><span>Fixture source: <a href="https://mediacentre.euroleague.net/" target="_blank" rel="noreferrer">EuroLeague Media Centre ↗</a></span><span>Independent fan preview · No prize or entry fee</span></div>
    </div>
  </main>;
}
