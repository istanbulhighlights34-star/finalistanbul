import { database, hash, jsonError, member, sameOrigin, token } from "../../../../lib/arena";

export const runtime = "nodejs";
export async function GET(request: Request) {
  const user = await member(request);
  if (!user) return jsonError("Sign in first", 401);
  const groups = await database()`SELECT g.id, g.name, g.created_at FROM arena_groups g JOIN arena_members m ON m.group_id = g.id WHERE m.user_id = ${user.id} ORDER BY g.created_at DESC`;
  return Response.json({ groups }, { headers: { "Cache-Control": "no-store" } });
}
export async function POST(request: Request) {
  if (!sameOrigin(request)) return jsonError("Invalid origin", 403);
  const user = await member(request);
  if (!user) return jsonError("Sign in first", 401);
  const { name } = await request.json() as { name?: string };
  const clean = name?.trim();
  if (!clean || clean.length > 60) return jsonError("Group name must be 1–60 characters");
  const sql = database();
  const count = await sql`SELECT count(*)::integer AS count FROM arena_groups WHERE owner_id = ${user.id}`;
  if (Number(count[0].count) >= 20) return jsonError("Group limit reached", 429);
  const invitation = token();
  const created = await sql`INSERT INTO arena_groups (name, owner_id, invite_hash) VALUES (${clean}, ${user.id}, ${hash(invitation)}) RETURNING id, name`;
  await sql`INSERT INTO arena_members (group_id, user_id) VALUES (${created[0].id}, ${user.id})`;
  return Response.json({ group: created[0], inviteUrl: `${new URL(request.url).origin}/arena?invite=${invitation}` });
}
export async function PUT(request: Request) {
  if (!sameOrigin(request)) return jsonError("Invalid origin", 403);
  const user = await member(request);
  if (!user) return jsonError("Sign in first", 401);
  const { invite } = await request.json() as { invite?: string };
  if (!invite || invite.length > 100) return jsonError("Invalid invitation");
  const sql = database();
  const group = await sql`SELECT id, name FROM arena_groups WHERE invite_hash = ${hash(invite)} LIMIT 1`;
  if (!group.length) return jsonError("Invitation is invalid or expired", 404);
  await sql`INSERT INTO arena_members (group_id, user_id) VALUES (${group[0].id}, ${user.id}) ON CONFLICT DO NOTHING`;
  return Response.json({ group: group[0] });
}
