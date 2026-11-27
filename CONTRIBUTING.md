# Contributing to Flux Studio

## Git workflow

We use two long-lived branches:

- **`main`** = the live site. It only gets code that has already been
  reviewed and tested together on `dev`.
- **`dev`** = our default branch, where everyone's finished work comes
  together.

This keeps `main` clean and ready for production at all times. Nobody
pushes to `main` or `dev` directly; everything goes through a pull
request (GitHub blocks direct pushes).

### Step by step

1. Start from the latest `dev`:
   ```bash
   git switch dev
   git pull
   ```
2. Create your feature branch from `dev`, named `type/short-description`:
   ```bash
   git switch -c feat/class-list
   ```
   Types: `feat` (new feature), `fix` (bug fix), `docs` (docs only),
   `test` (tests only), `refactor` (cleanup, same behavior), `chore`
   (setup, tools, dependencies).
3. Commit as you go (failing test first, see TDD below), then push:
   ```bash
   git push -u origin your-branch-name
   ```
4. Open a pull request into **`dev`**. It's the default, but check that
   the "base" dropdown says `dev`, not `main`.
5. **Check your preview.** About a minute after you open the PR, the
   **vercel** bot comments on it. Click **Preview** to see your branch
   running as a real website, and check `/en` and `/es`. See
   [Preview links](#preview-links-vercel) below.
6. Get **1 approving review**, then merge.
7. Once a week, Kanami merges `dev` into `main`. That's when your work
   goes live at https://flux-studio-chi-eight.vercel.app.

### Preview links (Vercel)

Every pull request gets its own copy of the site, built from your
branch. You don't need to run anything locally to share it.

- **Where:** in your PR, scroll down to the comment from the **vercel**
  bot and click **Preview** (in the "Actions" column). The checks list
  also has a **Vercel** row; its **Details** link opens the same build.
- **What to check:** that your change looks right on `/en` and `/es`,
  and on a phone-sized window too.
- **Every push updates it.** Push a new commit and the same comment
  updates with a new build (about a minute).
- **Anyone with the link can open it**, with no Vercel account. Paste it
  in the PR's "How to test" section so your reviewer can use it too.
- **Red Vercel check?** The site failed to build. Click **Details** to
  read the build log. Running `npm run build` locally usually shows the
  same error.

### Formatting (Prettier)

- **Every commit is formatted automatically.** A pre-commit hook
  (Husky + lint-staged) runs Prettier on the files you're committing,
  so the CI format check passes whatever editor you use.
- The hook installs itself when you run `npm install`. **After pulling
  changes to `package.json`, run `npm install` again**, or the hook
  won't run on your laptop.
- When VS Code suggests the recommended extensions (Prettier, ESLint,
  and Tailwind CSS IntelliSense), click **Install**. Files then also
  format on save, so you see the formatting while you work.
- A check still failed? Run `npm run format`, commit, and push. (Skipping
  the hook with `git commit --no-verify` also skips formatting.)

## TDD (required)

We write the test **before** the code. The test describes what the code
should do, so you always know when you're done.

### The loop

1. 🔴 **Red:** Write one small test for the next thing your code should do.
   Run the tests. It should **fail**. That proves the test works.
2. 🟢 **Green:** Write the simplest code that makes the test pass.
   Don't polish yet.
3. 🔵 **Refactor:** Clean up names and structure. Run the tests again;
   they must still pass.
4. Repeat with the next small behavior until the task is done.

### Example: "Show class times as 6:00 PM"

- 🔴 Test: `formatClassTime("18:00")` should return `"6:00 PM"` → fails
- 🟢 Write `formatClassTime` → passes
- 🔴 Next test: Spanish should return `"18:00"` → fails
- 🟢 Add Spanish support → passes
- 🔵 Tidy up → still passes → done

### Where tests go

Next to the file they test, with `.test` before the extension:
`ClassCard.tsx` → `ClassCard.test.tsx` in the same folder.

Every component already has a test file with an `it.todo` list of
behaviors to test. That's your starting point: turn one `it.todo` into
a real test, watch it fail, then write the code.

### Running tests

```bash
npm test
```

It reruns the tests every time you save. Press `q` to quit. CI runs
them on every PR.

### Make sure your test runs

A test that never runs can't fail, so it can't catch anything. Vitest
**skips** these without an error:

- `it.todo("renders an h2 by default", ...)`: anything with `.todo` is
  skipped, even if it has code inside. Delete `.todo` when you start the
  test.
- `it("renders an h2 by default")`: a test with no function after the
  name.

Skipped tests show up as "todo" in the `npm test` output, not as passed
or failed.

That's why the loop starts with 🔴: **always watch your new test fail
before you write the code.** If it passes straight away, or never shows
as failed, check for the two mistakes above.

### Finding things on the page (`getByRole`)

Tests find elements the way someone using a screen reader would: by
their **role** (what kind of thing it is) and their **name** (the text
it reads out).

```tsx
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders its text", () => {
    render(<Heading>Classes</Heading>);
    screen.getByRole("heading", { name: "Classes" });
  });
});
```

- `render` draws the component on a fake browser page.
- `screen.getByRole(...)` looks for it on that page. If it isn't there,
  the test **fails**, so you don't need an `expect`.
- Common roles: `heading` (add `{ level: 2 }` for a specific level),
  `button`, `link`, `img`.
- Use `getByRole` in every test. If what you're testing has no role,
  like plain paragraph text, use `screen.getByText("...")` instead.

### Tips

- **Keep tests small:** one behavior per test.
- **Test what the user sees** (text, links, buttons), not how it's built.
- **Stuck?** Your step is too big. Write a smaller test.

### In your PR

Commit the failing test first, then the code. Reviewers will check
the order in the commit list.

## Styling & components

### Where things live

| Folder                     | What goes there                                   |
| -------------------------- | ------------------------------------------------- |
| `src/app/[locale]/`        | Pages (`/en/...` and `/es/...`)                   |
| `src/components/sections/` | One file per landing page section, in page order  |
| `src/components/layout/`   | Header, Footer, LanguageToggle (on every page)    |
| `src/components/ui/`       | Reusable pieces: Section, Heading, Button         |
| `src/dictionaries/`        | Fixed text in English and Spanish                 |
| `src/lib/`                 | Helpers (`i18n.ts`) and site settings (`site.ts`) |

Each folder has a `README.md` with its rules. Read it before adding a file.

Every file starts as **comments describing what to build**. A few files
(pages, `layout.tsx`, `proxy.ts`) also have the smallest code Next.js
needs to run; replace it as you build.

### File names

- **Components** start with a capital, matching the component name:
  `Button.tsx` exports `Button`.
- **Everything else** is lowercase: Next.js files (`page.tsx`,
  `layout.tsx`), helpers (`i18n.ts`), and folders.
- Only files named `page.tsx` inside `src/app/` become URLs; the folders
  around them decide the URL. Nothing in `src/components/` becomes a URL.
- The Next.js Learn course uses lowercase for everything. That's the
  course's style, not a Next.js rule.

### Brand (Tailwind)

We style with **Tailwind classes only**: no separate CSS files, no
inline `style={{ }}`. The brand theme lives in `src/app/globals.css`
(`@theme`) and gives us these classes:

| Class                                                   | What                                       |
| ------------------------------------------------------- | ------------------------------------------ |
| `bg-brand-white`, `text-brand-white`                    | White                                      |
| `bg-brand-black`, `text-brand-black`                    | Black                                      |
| `bg-brand-sand`, `text-brand-sand`, `border-brand-sand` | Light warm gray `#C6BDB3`                  |
| `font-heading`                                          | Titles (DM Serif Display)                  |
| `font-body`                                             | Body text and buttons (Cormorant Garamond) |
| `text-heading-1`, `-2`, `-3`                            | Heading sizes on phones                    |
| `md:text-heading-1-lg`, `-2-lg`, `-3-lg`                | Heading sizes from 768px wide              |
| `py-section`, `md:py-section-lg`                        | Space above and below a section            |
| `px-gutter`, `md:px-gutter-lg`                          | Space between content and the screen edge  |
| `max-w-content`                                         | Max content width (1200px)                 |

`font-body` and the body text size are already the page default, so
paragraphs don't need a class. The `Heading` component adds the heading
font and sizes for you, and `Section` will add the spacing and width.

- Only these three colors. The brand sheet's accent colors are left out on purpose.
- Never raw hex codes: ✅ `bg-brand-sand` ❌ `bg-[#C6BDB3]`
- Brand reference: `docs/BRAND.md`

### Text

Never type text straight into a component. Fixed labels go in
`src/dictionaries/en.json` **and** `es.json`; studio content will come
from Sanity.

- **Components get their text as props.** The page loads the dictionary
  with `getDictionary` (`src/lib/i18n.ts`) and passes each component its
  part, like `<Hero text={dict.hero} />`. The component shows `text.cta`
  and never knows which language it is.
- **Lint enforces it.** Text typed into a component in `src/components/`
  (`<button>Book a class</button>`, or `{"Book a class"}`) fails
  `npm run lint` and CI. Symbols that are the same in both languages
  (`EN / ES`, `©`, `↗`) are allowed in `eslint.config.mjs`.
- **New label?** Add the same key to both dictionary files. If `es.json`
  is missing a key that `en.json` has, `npm run typecheck` fails.
- **In tests, pass fake text** so a hard-coded label can't sneak through:

  ```tsx
  // en = import en from "@/dictionaries/en.json"
  render(<Hero text={{ ...en.hero, cta: "TEST BUTTON" }} />);
  expect(screen.getByRole("link", { name: "TEST BUTTON" })).toBeInTheDocument();
  ```

### Reusable components

Before building any UI, check `src/components/ui/` first.

- **Every section** is wrapped in `Section`, every title is a `Heading`,
  every button is a `Button`.
- **Already exists?** Use it.
- **Need a variation?** Add a prop to the existing component (with a test).
  Don't copy it.
- **Need something new?** Ask in your PR or Linear task first, so we
  don't end up with two versions of the same thing.
