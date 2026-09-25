# EuroLeague Arena setup

The account service needs a Neon Postgres database and a verified Resend sender.

1. Create a Neon Postgres database and run `arena.sql` in its SQL editor.
2. Configure these Vercel environment variables for Production and Preview:
   - `DATABASE_URL`: Neon pooled connection string.
   - `RESEND_API_KEY`: Resend API key.
   - `ARENA_EMAIL_FROM`: verified sender, e.g. `Finals Atlas <arena@finalsatlas.com>`.
   - `ARENA_RESULTS_SECRET`: randomly generated secret with at least 32 bytes of entropy.
3. Redeploy and test email login, a group invitation, and a pick on an open game.

## Live scores

The server can fetch EuroLeague scores from API-Basketball every 20 minutes during mapped game windows. Visitors read the cached database results, so their page refreshes do not consume provider requests. A date request can contain several games. The scheduled job does nothing outside the mapped games' 15-minute-before to 8-hour-after kickoff windows.

To activate it, verify the fixture list in `lib/arena.ts` against the actual EuroLeague schedule first. Then configure these Production environment variables:

- `API_BASKETBALL_KEY`: API-Sports basketball key, stored on the server only.
- `API_BASKETBALL_EUROLEAGUE_LEAGUE_ID`: numeric EuroLeague league ID returned by the provider's `/leagues` endpoint.
- `ARENA_BASKETBALL_GAME_IDS`: JSON object mapping our fixture IDs to verified provider game IDs, for example `{ "hta-bay": 12345 }`. The example ID is illustrative and must be replaced. Confirm teams, tip-off time and competition before mapping; unmatched games remain unchanged.
- `CRON_SECRET`: a random bearer secret used by Vercel Cron. This is separate from `ARENA_RESULTS_SECRET`.

Run the new `arena_live_scores` statement in `arena.sql` on an existing database, or let the first successful sync create it. The sync accepts only matching provider game ID, league ID and kickoff within six hours of the configured fixture. Live scores appear in the match list; standings update only after `FT` or `AOT`. Keep the manual results endpoint available for corrections.

The free API-Sports basketball tier currently has 100 requests per day. The 20-minute cron can make up to 72 date requests in a full day, plus some overlap if games cross midnight; confirm current plan limits before enabling other competitions or additional polling.

The API intentionally exposes no accounts when these settings are absent. Existing local picks stay on the device; they are not automatically imported because that would permit backdating already closed predictions.

Final game scores are entered through `POST /api/arena/results` with `Origin: https://finalsatlas.com`, `X-Arena-Results-Secret: <secret>`, `Content-Type: application/json` and a JSON body such as `{ "gameId": "hta-bay", "homeScore": 85, "awayScore": 78 }`. Verify results against the official game report before entering them. The standings award five points per correct winner and five for the highest-scoring team once all ten results are recorded; tied highest scores all qualify. After the season, submit `{ "champion": "Fenerbahçe", "finalFour": ["Fenerbahçe", "Real Madrid", "Olympiacos", "Panathinaikos"] }` with the *actual* season results for the champion and Final Four points (examples above are placeholders, not outcomes).
