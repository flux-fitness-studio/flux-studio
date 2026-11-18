// 1. Hero: the first screen.
// - Full-screen photo of the studio with a dark overlay
// - The motto "Échale mami, dale papi" as the page's main heading (stays in
//   Spanish on both languages)
// - A short tagline in the current language
// - The main button: "Book a class", linking to the Fitco schedule
//   (the link lives in src/lib/site.ts)
// Fitco links (booking and payment) must open in a NEW browser tab, never on
// this page, so visitors still have the Flux site open when they're done:
// target="_blank" rel="noopener noreferrer". Button doesn't support this yet:
// add a prop for it (with a test), don't copy the Button.
// Tests to write first: Hero.test.tsx
