// Heading: every title on the site, in the brand heading font at fixed sizes.
// Levels:
// - 1: the page's main title (only one per page)
// - 2: section titles (the default)
// - 3: card titles
// Tests to write first: Heading.test.tsx

type HeadingProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
};

// Full class names on purpose: Tailwind only finds classes written out in full.
const sizes = {
  1: "font-heading text-heading-1 md:text-heading-1-lg",
  2: "font-heading text-heading-2 md:text-heading-2-lg",
  3: "font-heading text-heading-3 md:text-heading-3-lg",
};

export function Heading({ children, level = 2 }: HeadingProps) {
  const Tag = `h${level}` as const;
  return <Tag className={sizes[level]}>{children}</Tag>;
}
