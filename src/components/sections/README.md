# components/sections

One file per landing page section, in page order:

1. `Hero`: full-screen photo, motto, tagline, main button
2. `Video`: cycling class video
3. `About`: the studio, address, map, opening hours
4. `Classes`: sideways-scrolling class cards
5. `Coaches`: sideways-scrolling coach cards
6. `Faq`: questions that open when tapped
7. `CallToAction`: closing band with the main button

The page that stacks them is `src/app/[locale]/page.tsx`.

## Rules

- Build sections from `components/ui` (`Section`, `Heading`, `Button`). Don't restyle them by hand.
- Text never goes straight into the component. Fixed labels come from the dictionary
  (`dict` prop, see `src/dictionaries`); studio content will come from Sanity.
- Each file's top comment says what the section is for. Read it before you start.
- Tests live next to the file (`Hero.test.tsx`). Start from its `it.todo` list (TDD).
