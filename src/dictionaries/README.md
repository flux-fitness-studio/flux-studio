# dictionaries

Fixed site text (button labels, section titles) in both languages:
`en.json` and `es.json`. Studio content (classes, coaches, FAQ) will come from Sanity instead.

## Rules

- Add every key to **both** files, in the same place. TypeScript uses `en.json` as the shape.
- Group keys by the component that uses them (`hero`, `footer`, ...).
- The motto "Échale mami, dale papi" stays in Spanish in both files on purpose.
