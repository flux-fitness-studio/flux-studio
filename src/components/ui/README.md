# components/ui

Small, reusable building blocks. **Check here before building any UI.**

| Component | Use it for                                                                        |
| --------- | --------------------------------------------------------------------------------- |
| `Section` | Wrapping every landing page section (spacing, width, white/sand/black background) |
| `Heading` | Every title (`level={1}` once per page, `2` for sections, `3` for cards)          |
| `Button`  | Every button (`primary` = filled main action, `secondary` = outlined)             |

## Rules

- Need a variation? Add a prop to the existing component (with a test). Don't copy it.
- Need something new (e.g. `ClassCard`)? Ask in your PR or Linear task first.
- Every component has a test file next to it: `Button.tsx` → `Button.test.tsx`.
- Styling: Tailwind classes with brand colors only (`bg-brand-sand`, never `bg-[#C6BDB3]`).
