// Heading: every title on the site, in the brand heading font at fixed sizes.
// Levels:
// - 1: the page's main title (only one per page)
// - 2: section titles (the default)
// - 3: card titles
// Tests to write first: Heading.test.tsx

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return <h2>{children}</h2>;
}
