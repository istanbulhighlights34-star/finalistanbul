import { database, firstLock, fixtures, jsonError, member, sameOrigin, teams } from "../../../../lib/arena";

export const runtime = "nodejs";
export async function GET(request: Request) {
  const user = await member(request);
  if (!user) return jsonError("Sign in first", 401);
  const rows = await database()`SELECT key, selection FROM arena_picks WHERE user_id = ${user.id}`;
  return Response.json({ picks: Object.fromEntries(rows.map(row => [row.key, row.selection])) }, { headers: { "Cache-Control": "no-store" } });
}
export async function PUT(request: Request) {
  if (!sameOrigin(request)) return jsonError("Invalid origin", 403);
  const user = await member(request);
  if (!user) return jsonError("Sign in first", 401);
  const { key, selection } = await request.json() as { key?: string; selection?: string };
  const game = fixtures.find(item => key === `game:${item[0]}`);
  const lock = game ? Date.parse(game[3]) - 120_000 : firstLock;
  if (!game && !["topScorer", "champion", "finalFour"].includes(key || "")) return jsonError("Unknown pick");
  if (Date.now() >= lock) return jsonError("This pick has closed", 409);
  if (game && selection !== "1" && selection !== "2") return jsonError("Invalid winner");
  if ((key === "topScorer" || key === "champion") && selection && !teams.includes(selection as typeof teams[number])) return jsonError("Invalid team");
  if (key === "finalFour") {
    let chosen: unknown;
    try { chosen = JSON.parse(selection || ""); } catch { return jsonError("Invalid teams"); }
    if (!Array.isArray(chosen) || chosen.length > 4 || new Set(chosen).size !== chosen.length || chosen.some(t => !teams.includes(t))) return jsonError("Invalid teams");
  }
  if (typeof selection !== "string" || selection.length > 300) return jsonError("Invalid selection");
  const sql = database();
  if (selection) {
    const saved = await sql`INSERT INTO arena_picks (user_id, key, selection) SELECT ${user.id}, ${key}, ${selection} WHERE clock_timestamp() < to_timestamp(${lock} / 1000.0) ON CONFLICT (user_id, key) DO UPDATE SET selection = EXCLUDED.selection, updated_at = now() WHERE clock_timestamp() < to_timestamp(${lock} / 1000.0) RETURNING key`;
    if (!saved.length) return jsonError("This pick has closed", 409);
  } else await sql`DELETE FROM arena_picks WHERE user_id = ${user.id} AND key = ${key} AND clock_timestamp() < to_timestamp(${lock} / 1000.0)`;
  return Response.json({ ok: true });
}
