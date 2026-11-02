// Wraps every landing page section so spacing, width, and backgrounds stay consistent.
// Usage: <Section id="classes" background="sand">...</Section>

const backgrounds = {
  white: "bg-brand-white text-brand-black",
  sand: "bg-brand-sand text-brand-black",
  black: "bg-brand-black text-brand-white",
};

type SectionProps = {
  // Used for in-page links, e.g. /en#classes
  id?: string;
  background?: keyof typeof backgrounds;
  children: React.ReactNode;
};

export function Section({ id, background = "white", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`${backgrounds[background]} px-4 py-16 md:py-24`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
