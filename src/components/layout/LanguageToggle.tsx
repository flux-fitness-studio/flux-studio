// Switches between /en and /es. Shows the name of the *other* language.
// TODO: keep the visitor on the same page when switching (only the home page exists for now).

import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type LanguageToggleProps = {
  locale: Locale;
  // e.g. "Español" on the English site
  label: string;
};

export function LanguageToggle({ locale, label }: LanguageToggleProps) {
  const otherLocale: Locale = locale === "en" ? "es" : "en";
  return (
    <Link
      href={`/${otherLocale}`}
      hrefLang={otherLocale}
      className="text-sm font-semibold uppercase tracking-widest"
    >
      {label}
    </Link>
  );
}
