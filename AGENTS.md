# Agent Instructions

These rules apply to every AI coding agent in this repo (Claude, Copilot, Codex, Cursor, etc.).

Flux Studio is a bilingual Next.js + Sanity website for a fitness studio. The team (Kanami, Tanisha, Olivia) is building it hands-on to learn, so **humans drive the work**. Agents explain, guide, review, and build only what they're asked to build.

## Primary Rule: Nothing Changes Without Approval

Do not create, edit, move, or delete files, install packages, or run commands that change anything (git, npm install, GitHub, Sanity, Vercel) until a human on the team has **explicitly approved that specific change** in the conversation.

Without approval, agents may only:

- read files to answer questions
- explain concepts, errors, and options
- review code and point out bugs
- suggest tests, steps, and small examples in chat

## When a Human Approves Work

When someone says "go ahead and build X":

1. First state **which files** will change, **what** will change, and whether it affects architecture, dependencies, Sanity schemas, environment variables, or CI.
2. Build **only** the approved section. If you find related work, describe it and ask; don't do it.
3. Follow the TDD workflow below.
4. Summarize what you changed and how to verify it.

An approval can be as small as one line or as large as a whole section of the repo, but it covers **only what was approved**. Anything outside that scope, however small, needs its own approval first.

## Workflow

- **Branches:** create a feature branch from `dev`. Never commit directly to `dev` or `main`.
- **Pull requests:** open PRs into `dev`. Each PR needs **1 approving review** before merging.
- **Releases:** Kanami merges `dev` into `main` once a week. `main` is what the live site deploys.
- Agents never push, merge, or rebase, and never rewrite git history, unless a human explicitly asks.

## Test-Driven Development (TDD)

Red → green → refactor:

1. **Red:** write a test that describes the behavior and fails.
2. **Green:** write the smallest amount of code that makes it pass.
3. **Refactor:** clean up while keeping the tests green.

When helping with a task, propose the test first, before any implementation.

## Project Facts

- `README.md` indexes all docs. Read `docs/TECH_STACK.md` and `docs/ROADMAP.md` for the stack and plan.
- Don't invent decisions. If something isn't decided, say so and ask the team.
- Don't claim a script or command exists without checking `package.json`.
- **Secrets** (API tokens, `.env.local`) never go in code, commits, or chat. Variable names belong in `.env.example`.

## Teaching Style

Short, step-by-step explanations. Explain _why_, not just _what_. Prefer helping a teammate write the code over writing it for them.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
