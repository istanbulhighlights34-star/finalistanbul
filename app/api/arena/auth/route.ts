import { database, hash, jsonError, member, sameOrigin, token } from "../../../../lib/arena";

export const runtime = "nodejs";
export async function GET(request: Request) {
  if (!process.env.DATABASE_URL || !process.env.RESEND_API_KEY || !process.env.ARENA_EMAIL_FROM) return Response.json({ available: false, user: null });
  try { return Response.json({ available: true, user: await member(request) }); }
  catch { return jsonError("Account service is temporarily unavailable", 503); }
}
export async function POST(request: Request) {
  if (!sameOrigin(request)) return jsonError("Invalid origin", 403);
  if (!process.env.DATABASE_URL || !process.env.RESEND_API_KEY || !process.env.ARENA_EMAIL_FROM) return jsonError("Account service is not configured", 503);
  const { email } = await request.json() as { email?: string };
  const normalized = email?.trim().toLowerCase();
  if (!normalized || normalized.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) return jsonError("Enter a valid email address");
  const sql = database();
  const recent = await sql`SELECT count(*)::integer AS count FROM arena_login_tokens WHERE email = ${normalized} AND expires_at > now() - interval '10 minutes'`;
  if (Number(recent[0].count) >= 3) return jsonError("Please wait before requesting another link", 429);
  const secret = token();
  await sql`INSERT INTO arena_login_tokens (token_hash, email, expires_at) VALUES (${hash(secret)}, ${normalized}, now() + interval '15 minutes')`;
  const url = `${new URL(request.url).origin}/api/arena/auth/verify?token=${encodeURIComponent(secret)}`;
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: process.env.ARENA_EMAIL_FROM, to: [normalized], subject: "Sign in to Finals Atlas Arena", text: `Sign in to Arena with this one-time link (valid for 15 minutes):\n${url}\n\nIf you did not request this, ignore this message.` }) });
  if (!response.ok) { await sql`DELETE FROM arena_login_tokens WHERE token_hash = ${hash(secret)}`; return jsonError("Could not send sign-in email", 502); }
  return Response.json({ ok: true });
}
export async function DELETE(request: Request) {
  if (!sameOrigin(request)) return jsonError("Invalid origin", 403);
  const secret = request.headers.get("cookie")?.match(/(?:^|;\s*)arena_session=([^;]+)/)?.[1];
  if (secret && process.env.DATABASE_URL) await database()`DELETE FROM arena_sessions WHERE token_hash = ${hash(secret)}`;
  return new Response(null, { status: 204, headers: { "Set-Cookie": "arena_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0" } });
}
export async function PATCH(request: Request) {
  if (!sameOrigin(request)) return jsonError("Invalid origin", 403);
  const user = await member(request);
  if (!user) return jsonError("Sign in first", 401);
  const { nickname } = await request.json() as { nickname?: string };
  const clean = nickname?.trim();
  if (!clean || clean.length > 32 || /[<>\r\n]/.test(clean)) return jsonError("Nickname must be 1–32 characters");
  await database()`UPDATE arena_users SET nickname = ${clean} WHERE id = ${user.id}`;
  return Response.json({ ok: true, nickname: clean });
}
