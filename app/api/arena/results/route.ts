import { database, fixtures, jsonError, sameOrigin, teams } from "../../../../lib/arena";
import { timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";
export async function POST(request: Request) {
  if (!sameOrigin(request)) return jsonError("Invalid origin", 403);
  const expected = process.env.ARENA_RESULTS_SECRET;
  const supplied = request.headers.get("x-arena-results-secret") || "";
  if (!expected || supplied.length !== expected.length || !timingSafeEqual(Buffer.from(supplied), Buffer.from(expected))) return jsonError("Unauthorized", 401);
  const input = await request.json() as { gameId?: string; homeScore?: number; awayScore?: number; champion?: string; finalFour?: string[] };
  const sql = database();
  if (input.gameId) {
    const game = fixtures.find(item => item[0] === input.gameId);
    if (!game || Date.now() < Date.parse(game[3]) || !Number.isInteger(input.homeScore) || !Number.isInteger(input.awayScore) || input.homeScore! < 0 || input.awayScore! < 0 || input.homeScore === input.awayScore) return jsonError("Invalid or premature final score");
    await sql`INSERT INTO arena_results (game_id, home_score, away_score) VALUES (${game[0]}, ${input.homeScore!}, ${input.awayScore!}) ON CONFLICT (game_id) DO UPDATE SET home_score = EXCLUDED.home_score, away_score = EXCLUDED.away_score, updated_at = now()`;
  } else {
    if (!input.champion || !teams.includes(input.champion) || !Array.isArray(input.finalFour) || input.finalFour.length !== 4 || new Set(input.finalFour).size !== 4 || input.finalFour.some(team => !teams.includes(team)) || !input.finalFour.includes(input.champion)) return jsonError("Invalid season results");
    await sql`INSERT INTO arena_season_results (id, champion, final_four) VALUES (1, ${input.champion}, ${JSON.stringify(input.finalFour)}::jsonb) ON CONFLICT (id) DO UPDATE SET champion = EXCLUDED.champion, final_four = EXCLUDED.final_four`;
  }
  return Response.json({ ok: true });
}
