# Tech Stack

Summary of the team kickoff deck (`Flux Studio Tech Kickoff.pdf`).

## Next.js: rendering for search

- A plain React app (like the Venusaur chatroom) sends an empty `<div id="root">`, and JavaScript draws the page later in the browser. Crawlers and AI tools may see nothing.
- Next.js pre-renders: at `npm run build` (Vercel runs it on every deploy), Node runs the React components and saves finished HTML files. Visitors get real text right away, then React "hydrates" the page so buttons work.
- You could do this by hand with React's `renderToString()`, but then you'd also have to build: two builds (server and browser), URL-to-page routing, fetching Sanity content before render, rebuilding when content changes, and running your own Node server. Next.js includes all of that.
- Other reasons: it's still React + TypeScript, has the biggest community, is made by Vercel, and has an official Sanity integration.
- Quick check: right-click → View Page Source and confirm the real text is in the HTML.

## Vercel: hosting

- Push to `main` → Vercel builds → the live site updates.
- Open a PR → Vercel builds that branch → you get a preview link to review.
- Built by the same company as Next.js, so setup is close to zero.
- API keys go in Vercel environment variables, never in GitHub.

## Sanity: headless CMS

- **Headless** means Sanity stores the content and runs the editor, but has no website of its own. Next.js is the "head" and fetches the content as JSON. It's the same shape as Express sending JSON for React to display.
- Flow: the owner edits in Sanity Studio → Sanity stores it in its cloud → Next.js queries it with **GROQ** → the pre-rendered HTML is rebuilt.
- Why not hard-code the text: every typo fix or new class would need a developer and a deploy.
- **In our repo (TypeScript):** schemas (one per content type, e.g. class, coach, FAQ), the Sanity Studio setup (it's a React app), GROQ queries, and the Next.js pages.
- **In Sanity's cloud:** the content itself (text, photos, class info).

| CMS        | Hosted by        | Verdict                                             |
| ---------- | ---------------- | --------------------------------------------------- |
| **Sanity** | Sanity's cloud   | **Our pick**: nothing to host, best Next.js support |
| Payload    | Us               | All TypeScript, but we run the server and storage   |
| Strapi     | Us or paid cloud | A separate server to keep running                   |
| Contentful | Contentful       | Paid platform, less hands-on to learn               |

## Supabase + OpenAI: the AI layer (after the MVP)

- **Postgres:** saves every visitor question and answer.
- **pgvector:** finds Flux Studio info by meaning (RAG), so answers stay accurate.
- **pg_cron:** runs a weekly job that starts the summary.
- **OpenAI:** writes the answers and the weekly summary.
- Why it matters: the owner sees what people really ask and can turn those questions into content that gets found.

## Tooling (not in the deck)

- **ESLint:** the linter. Finds likely mistakes (unused variables, React hook errors, Next.js pitfalls). Came with `create-next-app`. Run it with `npm run lint`.
- **Prettier:** the formatter. Rewrites code so everyone's looks the same (spacing, quotes, line breaks). Run it with `npm run format`, or let VS Code format on save.
- Both are in `package.json`, so `npm install` installs them for everyone. The repo's `.vscode/` folder recommends their VS Code extensions and turns on format on save.
- **GitHub Actions:** CI. Runs lint, format check, type-check, and tests on every PR; Vercel handles builds and previews. Chosen over Vercel CI (beta, needs Turborepo, tied to the Vercel account).
- **Linear:** roadmap and issue tracking
