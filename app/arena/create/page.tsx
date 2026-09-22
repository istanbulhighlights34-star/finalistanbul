"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../arena.module.css";

const footballTeams = ["Beşiktaş", "Galatasaray", "Fenerbahçe", "Trabzonspor", "Real Madrid", "Barcelona", "Liverpool", "Manchester City"];
const basketballTeams = ["Fenerbahçe Beko", "Anadolu Efes", "Real Madrid", "Panathinaikos", "Olympiacos", "Barcelona"];

export default function CreateLeaguePage() {
  const [sport, setSport] = useState("Football");
  const [competition, setCompetition] = useState("Ligler");
  const [teams, setTeams] = useState<string[]>([]);
  const options = sport === "Football" ? footballTeams : basketballTeams;
  const toggle = (team: string) => setTeams(teams.includes(team) ? teams.filter((item) => item !== team) : [...teams, team]);

  return <main className={styles.page}><header className={styles.header}><Link className={styles.brand} href="/arena"><img src="/icon.svg" alt="" /><span>FINALS<br />ATLAS</span></Link><Link className={styles.headerButton} href="/arena">Arena’ya dön ↗</Link></header><div className={styles.shell}><div className={styles.topline}><span>ARENA / NEW LEAGUE</span><span>STEP 01 / 03</span></div><section className={styles.intro}><div><p className={styles.kicker}>BUILD YOUR SEASON</p><h1>Start a<br /><em>league.</em></h1></div><p className={styles.introText}>Arkadaş grubunu kur. Önce spor dalını seç, sonra herkesin takip edeceği takımları ekle.</p></section><section className={styles.challenge}><div className={styles.cardTop}><span>1. SPOR DALINI SEÇ</span><span>ADMIN SETUP</span></div><div className={styles.challengeBody}><div className={styles.sportTabs}>{["Football", "Basketball"].map((item) => <button key={item} className={sport === item ? styles.sportTabActive : styles.sportTab} onClick={() => { setSport(item); setTeams([]); }}>{item}</button>)}</div><div className={styles.leagueTabs}>{(sport === "Football" ? ["Ligler", "Avrupa Kupaları"] : ["EuroLeague"]).map((item) => <button key={item} className={competition === item ? styles.leagueTabActive : styles.leagueTab} onClick={() => setCompetition(item)}>{item}</button>)}</div><p className={styles.eyebrow}>2. TAKIMLARINI EKLE</p><p className={styles.muted}>Üyeler lige katıldıktan sonra kendi favori takımlarını seçebilir. Şimdilik adminin başlangıç takımları:</p><div className={styles.teamPicker}>{options.map((team) => <button key={team} className={teams.includes(team) ? styles.pickSelected : styles.pick} onClick={() => toggle(team)}>{team}<span>{teams.includes(team) ? "✓" : "+"}</span></button>)}</div><p className={styles.status}>{teams.length} takım seçildi · Seçilen takımlar haftalık maçlarda öncelik kazanır.</p><button className={styles.headerButton} style={{ marginTop: 18, border: 0 }} onClick={() => alert("Lig taslağı hazır. Sonraki adım davet bağlantısı.")}>Lig taslağını oluştur ↗</button></div></section></div></main>;
}
