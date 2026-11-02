// Every title on the site, in the brand heading font at fixed sizes.
// level 1 = the page's main title (only one per page), 2 = section titles, 3 = card titles.
// Usage: <Heading level={2}>Classes</Heading>

const styles = {
  1: "text-5xl md:text-7xl",
  2: "text-3xl md:text-5xl",
  3: "text-xl md:text-2xl",
};

type HeadingProps = {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
};

export function Heading({ level = 2, children }: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag className={`font-heading font-bold ${styles[level]}`}>{children}</Tag>
  );
}
