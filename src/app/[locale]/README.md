# app/[locale]

Every page of the site lives here. `[locale]` is a URL variable: the same files serve
`/en/...` and `/es/...`, and each page reads `locale` from `params`.

- `layout.tsx`: wraps every page (`<html lang>`, fonts, Header, Footer)
- `page.tsx`: the landing page (stacks the sections in order)
- `policies/page.tsx`, `privacy/page.tsx`: simple text pages

`/` redirects to `/en` (see `src/proxy.ts`).

## Adding a page

1. Create `src/app/[locale]/your-page/page.tsx`. It works at `/en/your-page` and `/es/your-page`.
2. Get the text with `getDictionary(locale)` (see `src/lib/i18n.ts`).
3. Keep pages thin: put the UI in `src/components` with tests next to it.

Next.js docs for this version are in `node_modules/next/dist/docs/` (it's newer than
most tutorials).
