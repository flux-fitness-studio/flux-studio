// 6. FAQ: common questions that open and close when tapped (an accordion).
// Questions and answers will come from Sanity. Later this can also feed JSON-LD
// structured data for search.

import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n";

type FaqProps = {
  dict: Dictionary["faq"];
};

export function Faq({ dict }: FaqProps) {
  return (
    <Section id="faq" background="sand">
      <Heading level={2}>{dict.title}</Heading>
      <p className="mt-4">[FAQ placeholder]</p>
    </Section>
  );
}
