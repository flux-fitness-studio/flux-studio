// The landing page. It only stacks the sections, in order; each section lives in
// src/components/sections/. To change the page order, move a line here.

import { notFound } from "next/navigation";
import { About } from "@/components/sections/About";
import { CallToAction } from "@/components/sections/CallToAction";
import { Classes } from "@/components/sections/Classes";
import { Coaches } from "@/components/sections/Coaches";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Video } from "@/components/sections/Video";
import { getDictionary, hasLocale } from "@/lib/i18n";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict.hero} />
      <Video dict={dict.video} />
      <About dict={dict.about} />
      <Classes dict={dict.classes} />
      <Coaches dict={dict.coaches} />
      <Faq dict={dict.faq} />
      <CallToAction dict={dict.callToAction} />
    </>
  );
}
