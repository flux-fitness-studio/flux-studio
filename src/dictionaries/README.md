# dictionaries

Fixed site text (button labels, section titles) in both languages:
`en.json` and `es.json`. Studio content (classes, coaches, FAQ) will come from Sanity instead.

Both files start empty (`{}`). JSON can't hold comments, so the plan lives here.

## How it works

Each file uses the **same names** (keys) with different text:

- `en.json`: `"hero": { "cta": "Book a class" }`
- `es.json`: `"hero": { "cta": "Reserva tu clase" }`

A page loads the file for its language (with the helper in `src/lib/i18n.ts`) and
passes the text to its components. Components never contain text themselves.

## Text we'll need

Group keys by the component that uses them:

- `meta`: page title and description for search engines
- `header`: no keys needed. The toggle shows "EN / ES", which is the same in
  both languages, so `LanguageToggle` can hold it.
- `hero`: tagline, main button ("Book a class" / "Reserva tu clase")
- `video`, `about`, `classes`, `coaches`, `faq`: section titles (`about` also needs
  "Address" and "Opening hours")
- `callToAction`: closing line, main button
- `footer`: "Book a class", "Packages", "Studio policies", "Privacy policy"
- `policies`, `privacy`: page titles

## Rules

- Add every key to **both** files, in the same place.
- The motto "Échale mami, dale papi" stays in Spanish in both files on purpose.
