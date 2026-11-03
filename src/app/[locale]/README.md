# app/[locale]

Every page of the site lives here. `[locale]` is a URL variable: the same files serve
`/en/...` and `/es/...`, and each page reads `locale` from `params`.

Only files named `page.tsx` become URLs; the folders around them decide the URL.

- `layout.tsx`: the frame around every page (`<html lang>`, fonts, Header, Footer)
- `page.tsx`: the landing page (stacks the sections in order)
- `policies/page.tsx`, `privacy/page.tsx`: simple text pages

Each file is a starting point: comments describing what to build, plus the smallest
code Next.js needs so the site still runs. `/` will redirect to `/en` once
`src/proxy.ts` is built; until then, open `/en` directly.

## Adding a page

1. Create `src/app/[locale]/your-page/page.tsx`. It works at `/en/your-page` and `/es/your-page`.
2. Get the text from the dictionary (see `src/dictionaries`).
3. Keep pages thin: put the UI in `src/components` with tests next to it.

Next.js docs for this version are in `node_modules/next/dist/docs/` (it's newer than
most tutorials).
