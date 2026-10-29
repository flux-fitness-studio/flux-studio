# Roadmap

## Phase 0: Learn (week of 2026-10-29)

Kanami sets up the project scaffolding. Before Monday, the team should:
- [ ] Do the first chapters of the Next.js Learn course
- [ ] Create free accounts on Vercel, Sanity, and Supabase
- [ ] Read the Tech Stack Primer doc

## Phase 1: MVP landing page (starts Monday)

- Next.js + Sanity, deployed on Vercel
- First Sanity schemas (e.g. class, coach, FAQ)
- Preview deploys on every PR

## Phase 2: AI layer

- Chat companion that answers visitor questions using RAG over the studio's own content (Supabase pgvector + OpenAI)
- Every question and answer saved in Postgres (visitors stay anonymous)
- Weekly scheduled job (pg_cron) that summarizes the top questions for the owner

## Phase 3: Full feature set

Not in the kickoff deck:
- English + Spanish pages, with hreflang tags so each language is indexed separately
  - **URL structure (decided):** both languages prefixed (`/en/…`, `/es/…`); all pages live in `src/app/[locale]/`. `/` redirects based on browser language.
- JSON-LD structured data (e.g. a LocalBusiness / ExerciseGym schema)
- On-demand ISR: a Sanity webhook triggers revalidation so the owner's edits go live instantly
- The weekly report becomes ranked blog-topic suggestions for the SEO content strategy
- GitHub Actions CI (lint, type-check, test, build)
- Roadmap tracked in Linear

## Performance (less JavaScript = faster pages = better SEO)

From the Next.js 16.4 bundle analyzer article (nextjs.org/blog/ship-less-javascript-with-ai, 2026-10-28):
- **From the start:** latest Next.js (16.4+, Turbopack). Server Components by default; `'use client'` only on small interactive pieces.
- **Sanity Studio:** keep it on its own route or in its own folder so it never ends up in the public page bundles.
- **Phase 2 chat:** lazy-load the chat widget so its code loads only when a visitor opens it, and make sure nothing else statically imports it (a static import cancels the lazy load).
- **Before launch:** run `next analyze`, check the largest routes, and save a snapshot to compare against after each feature. The `/next-bundle-optimizer` agent skill can help, in **report mode only**; make the fixes by hand.
