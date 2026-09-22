"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../arena.module.css";

const footballTeams = ["Beşiktaş", "Galatasaray", "Fenerbahçe", "Trabzonspor", "Real Madrid", "Barcelona", "Liverpool", "Manchester City"];
const basketballTeams = ["Fenerbahçe Beko", "Anadolu Efes", "Real Madrid", "Panathinaikos", "Olympiacos", "Barcelona"];

export default function CreateLeaguePage() {
  const [sport, setSport] = useState("Football");
  const [competition, setCompetition] = useState("Domestic Leagues");
  const [teams, setTeams] = useState<string[]>([]);
  const options = sport === "Football" ? footballTeams : basketballTeams;
  const toggle = (team: string) => setTeams(teams.includes(team) ? teams.filter((item) => item !== team) : [...teams, team]);

  return <main className={styles.page}><header className={styles.header}><Link className="brand" href="/arena"><img className="brand-mark" src="/icon.svg" alt="" /><span className="brand-name"><span>FINALS</span><span>ATLAS</span></span></Link><Link className={styles.headerButton} href="/arena">Back to Arena ↗</Link></header><div className={styles.shell}><div className={styles.topline}><span>ARENA / NEW LEAGUE</span><span>STEP 01 / 03</span></div><section className={styles.intro}><div><p className={styles.kicker}>BUILD YOUR SEASON</p><h1>Start a<br /><em>league.</em></h1></div><p className={styles.introText}>Build your group. Choose a sport first, then add the teams everyone wants to follow.</p></section><section className={styles.challenge}><div className={styles.cardTop}><span>1. CHOOSE A SPORT</span><span>ADMIN SETUP</span></div><div className={styles.challengeBody}><div className={styles.sportTabs}>{["Football", "Basketball"].map((item) => <button key={item} className={sport === item ? styles.sportTabActive : styles.sportTab} onClick={() => { setSport(item); setTeams([]); }}>{item}</button>)}</div><div className={styles.leagueTabs}>{(sport === "Football" ? ["Domestic Leagues", "European Cups"] : ["EuroLeague"]).map((item) => <button key={item} className={competition === item ? styles.leagueTabActive : styles.leagueTab} onClick={() => setCompetition(item)}>{item}</button>)}</div><p className={styles.eyebrow}>2. ADD YOUR TEAMS</p><p className={styles.muted}>Members can choose their own favourite teams after joining. These are the admin&apos;s starting teams:</p><div className={styles.teamPicker}>{options.map((team) => <button key={team} className={teams.includes(team) ? styles.pickSelected : styles.pick} onClick={() => toggle(team)}>{team}<span>{teams.includes(team) ? "✓" : "+"}</span></button>)}</div><p className={styles.status}>{teams.length} teams selected · Selected teams receive priority in weekly fixtures.</p><button className={styles.headerButton} style={{ marginTop: 18, border: 0 }} onClick={() => alert("League draft ready. Next step: invite your friends.")}>Create league draft ↗</button></div></section></div></main>;
}
