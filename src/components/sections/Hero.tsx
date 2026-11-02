// 1. Hero: the first screen. Full-screen photo with a dark overlay, the studio motto
// (stays in Spanish on both languages), a translated tagline, and the main button.
// TODO: the studio photo (next/image) as the background.

import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import type { Dictionary } from "@/lib/i18n";
import { BOOKING_URL } from "@/lib/site";

type HeroProps = {
  dict: Dictionary["hero"];
};

export function Hero({ dict }: HeroProps) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-brand-black px-4 text-center text-brand-white">
      <Heading level={1}>{dict.motto}</Heading>
      <p className="text-lg md:text-xl">{dict.tagline}</p>
      <Button href={BOOKING_URL} variant="secondary">
        {dict.cta}
      </Button>
    </section>
  );
}
