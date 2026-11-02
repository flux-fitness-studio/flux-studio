# components/layout

Pieces that appear on **every page**. They're used in `src/app/[locale]/layout.tsx`.

- `Header`: logo + `LanguageToggle`. No sign-in (Fitco handles accounts).
- `LanguageToggle`: switches between `/en` and `/es`.
- `Footer`: contact, booking links, policies, social.

Same rules as the other component folders: build from `components/ui`, text from the
dictionary, a test file next to each component.
