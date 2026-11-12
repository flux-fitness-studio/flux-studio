# Brand

Sent by the owner on 2026-10-29.

## Colors

| Role         | Hex       |
| ------------ | --------- |
| Main color 1 | `#000000` |
| Main color 2 | `#C6BDB3` |
| Accent       | `#E0B697` |
| Accent       | `#D8BFAD` |
| Accent       | `#8D838C` |
| Accent       | `#53444F` |
| Accent       | `#999F94` |
| Accent       | `#58676A` |

The site uses only black, white, and sand (`#C6BDB3`), decided 2026-11-02.
The accent colors are left out on purpose. The Tailwind classes for the three
site colors are in `CONTRIBUTING.md` (Brand section).

## Fonts

Decided 2026-11-11, from the mock-up. Both are free on Google Fonts and loaded
with `next/font/google` in `src/app/[locale]/layout.tsx`.

| Font                   | Use                   | Tailwind class |
| ---------------------- | --------------------- | -------------- |
| **DM Serif Display**   | Headings              | `font-heading` |
| **Cormorant Garamond** | Body text and buttons | `font-body`    |

The fonts in the brand sheet (Momcake and others) are not used: their web
licenses are unclear, and this repo is public.

## Heading sizes

Phone → desktop (desktop starts at 768px wide, Tailwind's `md:`).

| Level | Phone | Desktop | Classes                               |
| ----- | ----- | ------- | ------------------------------------- |
| h1    | 48px  | 72px    | `text-heading-1 md:text-heading-1-lg` |
| h2    | 40px  | 64px    | `text-heading-2 md:text-heading-2-lg` |
| h3    | 24px  | 32px    | `text-heading-3 md:text-heading-3-lg` |

Line spacing is 1.05 for all levels (decided 2026-11-12); the same classes set it.

Use the `Heading` component instead of adding these classes by hand.

## Body text

From the mock-up (decided 2026-11-12): 20px on phones, 22px on desktop, line
spacing 1.45. It's already the default on every page (`text-body md:text-body-lg`
on `<body>`), so paragraphs don't need a size class.

## Layout

From the mock-up (decided 2026-11-12). The `Section` component uses these.

| What                          | Phone  | Desktop | Classes                       |
| ----------------------------- | ------ | ------- | ----------------------------- |
| Section spacing (top, bottom) | 72px   | 144px   | `py-section md:py-section-lg` |
| Side padding                  | 20px   | 40px    | `px-gutter md:px-gutter-lg`   |
| Content width (max)           | 1200px | 1200px  | `max-w-content mx-auto`       |

## Buttons

From the mock-up (decided 2026-11-11):

- Pill shape, about 48px tall
- **Primary:** black fill
- **Secondary:** black outline
- Cormorant Garamond bold, 15px, all caps, letter-spaced

## Open questions

- Is there a logo file (SVG preferred)?
- The mock-up's paragraphs use Cormorant Garamond weight 500 (medium), but only
  400 and 700 are loaded. Add 500, or keep 400?
- The mock-up's hero title is bigger than our h1 (58px phone, 136px desktop).
  Give the hero its own size when it's built?
