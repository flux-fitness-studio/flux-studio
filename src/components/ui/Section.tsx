// Section: wraps every landing page section so spacing, width, and backgrounds
// stay the same everywhere.
// - Background: white (the default), sand, or black
// - An optional id, so in-page links work (e.g. /en#classes)
// Tests to write first: Section.test.tsx

import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export function Section({ children }: SectionProps) {
  return (
    <section className="bg-brand-white py-section md:py-section-lg px-gutter md:px-gutter-lg">
      <div className="max-w-content mx-auto">{children}</div>
    </section>
  );
}
