# Contributing to Flux Studio

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
  ✅ `bg-brand-sand`  ❌ `bg-[#C6BDB3]`
- Brand reference: `docs/BRAND.md`

### Reusable components
Before building any UI, check `src/components/ui/` first.
- **Button, Heading, Navbar, etc. already exist?** Use them.
- **Need a variation?** Add a prop to the existing component (with a test).
  Don't copy it.
- **Need something new?** Ask in your PR or Linear task first, so we
  don't end up with two versions of the same thing.
