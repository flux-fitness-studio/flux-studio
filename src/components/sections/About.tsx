// 3. About the studio + location: a short paragraph and a photo of the space, then
// the address, a map, opening hours, and WhatsApp/phone.
// The about text will come from Sanity; the headings below come from the dictionary.

import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n";

type AboutProps = {
  dict: Dictionary["about"];
};

export function About({ dict }: AboutProps) {
  return (
    <Section id="about">
      <Heading level={2}>{dict.title}</Heading>
      <p className="mt-4">[About text placeholder]</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <Heading level={3}>{dict.addressTitle}</Heading>
          <p>[Address and map placeholder]</p>
        </div>
        <div>
          <Heading level={3}>{dict.hoursTitle}</Heading>
          <p>[Opening hours placeholder]</p>
        </div>
      </div>
    </Section>
  );
}
