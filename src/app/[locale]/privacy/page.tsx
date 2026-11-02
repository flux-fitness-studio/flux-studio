// Privacy policy (/en/privacy, /es/privacy): what data the site collects and why.
// Needed once the chatbot saves questions or analytics is added. Mexico requires an
// "aviso de privacidad"; the owner should have the text checked, not copied.

import { notFound } from "next/navigation";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { getDictionary, hasLocale } from "@/lib/i18n";

export default async function PrivacyPage({
  params,
}: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <Section>
      <div className="pt-16">
        <Heading level={1}>{dict.privacy.title}</Heading>
        <p className="mt-4">[Privacy policy placeholder]</p>
      </div>
    </Section>
  );
}
