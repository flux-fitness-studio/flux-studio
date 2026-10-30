# Flux Studio Website

Website for Flux Studio, a fitness studio in Puerto Escondido, Mexico.

**Goal:** when someone in or visiting Puerto Escondido, Mexico searches
Google or asks an AI for a fitness studio, Flux Studio shows up first,
in Spanish and English.

- **Local SEO:** ranking in Google and Google Maps for Puerto Escondido searches
- **GEO** (generative engine optimization): showing up in AI answers like ChatGPT

Every tool in the stack was picked to serve that goal.

## Getting started (first day)

1. Clone the repo and install everything (this also installs Prettier
   and ESLint):
   ```bash
   git clone https://github.com/flux-fitness-studio/flux-studio.git
   cd flux-studio
   npm install
   ```
2. Open the folder in VS Code. When it asks to install the
   **recommended extensions** (Prettier and ESLint), click **Install**.
   Your files now format automatically every time you save.
3. Start the site and open http://localhost:3000:
   ```bash
   npm run dev
   ```
4. Read [CONTRIBUTING.md](CONTRIBUTING.md) before your first branch. It
   covers our Git workflow, formatting, and TDD.

## Docs

| File                                                           | What it covers                                                                  |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [AGENTS.md](AGENTS.md)                                         | Rules for AI coding agents (approval first, workflow, TDD)                      |
| [CONTRIBUTING.md](CONTRIBUTING.md)                             | How we work: Git workflow, formatting, TDD, styling, and components             |
| [docs/NEXTJS_FOR_REACT_DEVS.md](docs/NEXTJS_FOR_REACT_DEVS.md) | **New to Next.js? Start here.** How it differs from React + Express (SkillSync) |
| [docs/TECH_STACK.md](docs/TECH_STACK.md)                       | Each tool and why it was picked                                                 |
| [docs/ROADMAP.md](docs/ROADMAP.md)                             | Phases: learn → MVP landing page → AI layer → full feature set                  |
| [docs/BRAND.md](docs/BRAND.md)                                 | Colors and fonts                                                                |

## Stack at a glance

Next.js (TypeScript) · Vercel · Sanity (headless CMS) · Supabase (Postgres, pgvector, scheduled jobs) · OpenAI · GitHub Actions · Linear
