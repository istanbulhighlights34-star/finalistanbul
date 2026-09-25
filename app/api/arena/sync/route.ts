import { timingSafeEqual } from "node:crypto";
import { database, fixtures } from "../../../../lib/arena";

export const runtime = "nodejs";

type ProviderGame = {
  id: number;
  date: string;
  league?: { id?: number };
  status?: { short?: string };
  scores?: { home?: { total?: number | null }; away?: { total?: number | null } };
};

// Provider game IDs must be checked against the actual schedule before enabling sync.
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const supplied = request.headers.get("authorization")?.replace(/^Bearer /, "") || "";
  if (!secret || supplied.length !== secret.length || !timingSafeEqual(Buffer.from(supplied), Buffer.from(secret))) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const key = process.env.API_BASKETBALL_KEY;
  const leagueId = Number(process.env.API_BASKETBALL_EUROLEAGUE_LEAGUE_ID);
  let mapping: Record<string, number>;
  try { mapping = JSON.parse(process.env.ARENA_BASKETBALL_GAME_IDS || "{}"); }
  catch { return Response.json({ error: "Invalid game mapping" }, { status: 503 }); }
  const known = fixtures.filter(game => Number.isSafeInteger(mapping[game[0]]) && mapping[game[0]] > 0);
  if (!key || !process.env.DATABASE_URL || !Number.isSafeInteger(leagueId) || leagueId <= 0 || !known.length || new Set(known.map(game => mapping[game[0]])).size !== known.length) {
    return Response.json({ error: "Score source is not configured" }, { status: 503 });
  }

  const now = Date.now();
  const active = known.filter(game => now >= Date.parse(game[3]) - 15 * 60_000 && now <= Date.parse(game[3]) + 8 * 3_600_000);
  if (!active.length) return Response.json({ checked: 0, updated: 0 });
  const dates = [...new Set(active.map(game => game[3].slice(0, 10)))];
  const providerGames: ProviderGame[] = [];
  try {
    for (const date of dates) {
      const url = `https://v1.basketball.api-sports.io/games?date=${date}&timezone=UTC`;
      const response = await fetch(url, { headers: { "x-apisports-key": key }, cache: "no-store", signal: AbortSignal.timeout(12_000) });
      if (!response.ok) throw new Error(`Provider returned ${response.status}`);
      const data = await response.json() as { response?: ProviderGame[]; errors?: unknown };
      if (!Array.isArray(data.response) || (data.errors && Object.keys(data.errors).length)) throw new Error("Invalid provider response");
      providerGames.push(...data.response);
    }
    const sql = database();
    await sql`CREATE TABLE IF NOT EXISTS arena_live_scores (game_id text PRIMARY KEY, home_score integer NOT NULL CHECK (home_score >= 0), away_score integer NOT NULL CHECK (away_score >= 0), status text NOT NULL CHECK (status IN ('live', 'final')), updated_at timestamptz NOT NULL DEFAULT now())`;
    let updated = 0;
    for (const fixture of active) {
      const game = providerGames.find(item => item.id === mapping[fixture[0]] && item.league?.id === leagueId);
      if (!game || Math.abs(Date.parse(game.date) - Date.parse(fixture[3])) > 6 * 3_600_000) continue;
      const home = game.scores?.home?.total;
      const away = game.scores?.away?.total;
      if (!Number.isSafeInteger(home) || !Number.isSafeInteger(away) || home! < 0 || away! < 0) continue;
      const finished = ["FT", "AOT"].includes(game.status?.short || "");
      const live = ["Q1", "Q2", "Q3", "Q4", "HT", "OT", "BT"].includes(game.status?.short || "");
      if (!finished && !live) continue;
      const state = finished ? "final" : "live";
      await sql`INSERT INTO arena_live_scores (game_id, home_score, away_score, status) VALUES (${fixture[0]}, ${home!}, ${away!}, ${state}) ON CONFLICT (game_id) DO UPDATE SET home_score = EXCLUDED.home_score, away_score = EXCLUDED.away_score, status = EXCLUDED.status, updated_at = now() WHERE arena_live_scores.status <> 'final'`;
      if (finished && home !== away) {
        await sql`INSERT INTO arena_results (game_id, home_score, away_score) VALUES (${fixture[0]}, ${home!}, ${away!}) ON CONFLICT (game_id) DO UPDATE SET home_score = EXCLUDED.home_score, away_score = EXCLUDED.away_score, updated_at = now()`;
      }
      updated++;
    }
    return Response.json({ checked: active.length, updated }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: "Score refresh failed; existing results were preserved" }, { status: 502 });
  }
}
