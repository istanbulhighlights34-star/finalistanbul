# EuroLeague Arena setup

The account service needs a Neon Postgres database and a verified Resend sender.

1. Create a Neon Postgres database and run `arena.sql` in its SQL editor.
2. Configure these Vercel environment variables for Production and Preview:
   - `DATABASE_URL`: Neon pooled connection string.
   - `RESEND_API_KEY`: Resend API key.
   - `ARENA_EMAIL_FROM`: verified sender, e.g. `Finals Atlas <arena@finalsatlas.com>`.
   - `ARENA_RESULTS_SECRET`: randomly generated secret with at least 32 bytes of entropy.
3. Redeploy and test email login, a group invitation, and a pick on an open game.

The API intentionally exposes no accounts when these settings are absent. Existing local picks stay on the device; they are not automatically imported because that would permit backdating already closed predictions.

Final game scores are entered through `POST /api/arena/results` with `Origin: https://finalsatlas.com`, `X-Arena-Results-Secret: <secret>`, `Content-Type: application/json` and a JSON body such as `{ "gameId": "hta-bay", "homeScore": 85, "awayScore": 78 }`. Verify results against the official game report before entering them. The standings award five points per correct winner and five for the highest-scoring team once all ten results are recorded; tied highest scores all qualify. After the season, submit `{ "champion": "Fenerbahçe", "finalFour": ["Fenerbahçe", "Real Madrid", "Olympiacos", "Panathinaikos"] }` with the *actual* season results for the champion and Final Four points (examples above are placeholders, not outcomes).
