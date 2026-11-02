// 4. Classes: a row of class cards that scrolls sideways (about 1 card visible on
// phones, 3–4 on desktop). Each card: photo, class name, one-line description.
// Classes will come from Sanity. A full classes page may come later.
// TODO: a ClassCard component in components/ui (with its test).

import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n";

type ClassesProps = {
  dict: Dictionary["classes"];
};

export function Classes({ dict }: ClassesProps) {
  return (
    <Section id="classes" background="sand">
      <Heading level={2}>{dict.title}</Heading>
      <p className="mt-4">[Class cards placeholder]</p>
    </Section>
  );
}
