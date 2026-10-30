# Next.js for React + Express Devs

You already know React. Next.js is still React, but it changes **where your code runs** and **how the project is organized**. This page compares it with SkillSync, our React + Express project.

## 1. One app, not two

| SkillSync                                                                                 | Flux Studio (Next.js)                                          |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `frontend/` (Vite + React) **and** `backend/` (Express), each with its own `package.json` | **One** project, one `package.json`                            |
| `npm run dev` uses `concurrently` to start both                                           | `npm run dev` starts one server → http://localhost:3000        |
| Frontend calls the backend over HTTP (`matchApi.ts`)                                      | Components can fetch data **directly**, with no API in between |

## 2. Folders are your routes

SkillSync is a single page (`App.tsx`). Flux has many pages, and there's no router to set up: **a folder inside `src/app/` with a `page.tsx` file _is_ a page.**

```
src/app/
├── layout.tsx          → wraps every page (nav, footer)
├── page.tsx            → /
├── classes/
│   └── page.tsx        → /classes
└── coaches/
    └── [slug]/
        └── page.tsx    → /coaches/maria, /coaches/alex …
```

- `[slug]` in brackets = a dynamic part of the URL (like `:id` in an Express route).
- Special file names Next.js looks for: `page.tsx`, `layout.tsx`, `loading.tsx`, `not-found.tsx`, `route.ts`.
- Everything else (components, helpers) lives **outside** `app/`, e.g. `src/components/`.

## 3. Components run on the server by default

This is the biggest change.

| Server Component (**default**)                    | Client Component                                                |
| ------------------------------------------------- | --------------------------------------------------------------- |
| Runs on the server; HTML gets sent to the browser | Runs in the browser, like everything in SkillSync's `frontend/` |
| ✅ Can `await` data (e.g. from Sanity)            | ✅ Can use `useState`, `useEffect`, `onClick`                   |
| ❌ No state, no click handlers                    | ❌ Adds JavaScript the browser must download                    |
| No special marker                                 | Starts with `'use client'` at the top of the file               |

**Rule of thumb:** keep everything a Server Component. Add `'use client'` only to the **small** piece that needs clicks or state (a menu toggle, a form), not the whole page.

## 4. Data fetching: no `useEffect` + `fetch`

**SkillSync** (`App.tsx`):

```tsx
const [jobHistory, setJobHistory] = useState([]);
useEffect(() => {
  // ...
  setJobHistory(await fetchJobHistory(user.id));
}, []);
```

**Next.js (Server Component):**

```tsx
export default async function ClassesPage() {
  const classes = await getClasses(); // talks to Sanity directly
  return <ClassList classes={classes} />;
}
```

No loading state, no `backend/routes` + `controllers`. The page arrives with the data already in the HTML, which is great for Google (see `TECH_STACK.md`).

## 5. Need a backend endpoint? Use `route.ts`

You'll rarely need one, but for webhooks (like Sanity telling us content changed) or the AI chat later. It replaces SkillSync's `routes/` + `controllers/` pair:

```
src/app/api/revalidate/route.ts   → POST /api/revalidate
```

```ts
export async function POST(request: Request) {
  // like an Express controller
  return Response.json({ ok: true });
}
```

## 6. Environment variables

| SkillSync                                                  | Next.js                                         |
| ---------------------------------------------------------- | ----------------------------------------------- |
| `VITE_SUPABASE_URL` in `frontend/`: visible in the browser | `NEXT_PUBLIC_…` prefix = visible in the browser |
| `OPENAI_API_KEY` in `backend/`: server only                | No prefix = **server only** (safe for secrets)  |
| Two `.env` files (one per folder)                          | One `.env.local` at the root                    |

⚠️ Never put a secret in a `NEXT_PUBLIC_` variable. Anyone can read it in the browser.

## 7. Built-in helpers you'll use

- `next/link`: `<Link href="/classes">` instead of `<a>` (faster page changes)
- `next/image`: `<Image>` instead of `<img>` (auto-resizes and lazy-loads)
- `next/font`: loads fonts without layout jumps

## Quick translation table

| In SkillSync you…                              | In Flux you…                                                         |
| ---------------------------------------------- | -------------------------------------------------------------------- |
| Built one page in `App.tsx`                    | Create a folder + `page.tsx` per page                                |
| Wrote `routes/` + `controllers/` in Express    | Fetch directly in a Server Component (or `route.ts` if truly needed) |
| Used `useEffect` to load data                  | `await` it in an `async` component                                   |
| Ran `frontend` + `backend` with `concurrently` | Run `npm run dev`                                                    |
| Used `VITE_API_URL`                            | Use `NEXT_PUBLIC_…` (or no prefix for secrets)                       |

**Want more?** The official tutorial: https://nextjs.org/learn
