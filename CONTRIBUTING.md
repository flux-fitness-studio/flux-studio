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
5. Get **1 approving review**, then merge.
6. Once a week, Kanami merges `dev` into `main`. That's when your work
   goes live.

### Formatting (Prettier)

- When VS Code suggests the recommended extensions (Prettier and
  ESLint), click **Install**. Files then format automatically on save.
- Not using VS Code, or a check failed? Run `npm run format`, commit,
  and push.

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

### Tips

- **Keep tests small:** one behavior per test.
- **Test what the user sees** (text, links, buttons), not how it's built.
- **Stuck?** Your step is too big. Write a smaller test.

### In your PR

Commit the failing test first, then the code. Reviewers will check
the order in the commit list.

## Styling & components

### Brand

- Use the brand colors and fonts from our theme, never raw hex codes.
  ✅ `bg-brand-sand` ❌ `bg-[#C6BDB3]`
- Brand reference: `docs/BRAND.md`

### Reusable components

Before building any UI, check `src/components/ui/` first.

- **Button, Heading, Navbar, etc. already exist?** Use them.
- **Need a variation?** Add a prop to the existing component (with a test).
  Don't copy it.
- **Need something new?** Ask in your PR or Linear task first, so we
  don't end up with two versions of the same thing.
