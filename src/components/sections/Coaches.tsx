// 5. Coaches: same sideways-scrolling row as Classes. Each card: portrait, name, role.
// Coaches will come from Sanity.
// TODO: a CoachCard component in components/ui (with its test).

import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n";

type CoachesProps = {
  dict: Dictionary["coaches"];
};

export function Coaches({ dict }: CoachesProps) {
  return (
    <Section id="coaches">
      <Heading level={2}>{dict.title}</Heading>
      <p className="mt-4">[Coach cards placeholder]</p>
    </Section>
  );
}
