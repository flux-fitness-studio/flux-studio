// 7. Final call to action: a full-width band at the end of the page with a short
// line and the same "Book a class" button as the hero.

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n";
import { BOOKING_URL } from "@/lib/site";

type CallToActionProps = {
  dict: Dictionary["callToAction"];
};

export function CallToAction({ dict }: CallToActionProps) {
  return (
    <Section id="book">
      <div className="flex flex-col items-center gap-6 text-center">
        <Heading level={2}>{dict.title}</Heading>
        <Button href={BOOKING_URL}>{dict.cta}</Button>
      </div>
    </Section>
  );
}
