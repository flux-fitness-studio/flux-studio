# components/layout

Pieces that appear on **every page**. They'll be used in `src/app/[locale]/layout.tsx`.

- `Header`: logo + `LanguageToggle`. No sign-in (Fitco handles accounts).
- `LanguageToggle`: switches between `/en` and `/es`.
- `Footer`: contact, booking links, policies, social.

Each file has a comment describing what to build. Start from its test file's
`it.todo` list (TDD).

Same rules as the other component folders: build from `components/ui`, text from the
dictionary, a test file next to each component.
