// 2. Video: a wide, full-width video of a cycling class (autoplays muted).
// TODO: the video file and where it's hosted.

import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n";

type VideoProps = {
  dict: Dictionary["video"];
};

export function Video({ dict }: VideoProps) {
  return (
    <Section id="video" background="black">
      <Heading level={2}>{dict.title}</Heading>
      <p className="mt-4">[Video placeholder]</p>
    </Section>
  );
}
