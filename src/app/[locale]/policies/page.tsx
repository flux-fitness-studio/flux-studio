// Studio policies (/en/policies, /es/policies): cancellations, late arrivals, refunds,
// what to bring. The owner provides the text in both languages.

import { notFound } from "next/navigation";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { getDictionary, hasLocale } from "@/lib/i18n";

export default async function PoliciesPage({
  params,
}: PageProps<"/[locale]/policies">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <Section>
      <div className="pt-16">
        <Heading level={1}>{dict.policies.title}</Heading>
        <p className="mt-4">[Studio policies placeholder]</p>
      </div>
    </Section>
  );
}
