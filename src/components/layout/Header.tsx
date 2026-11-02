// Top bar on every page: logo + language toggle. No sign-in (Fitco handles accounts).
// TODO: transparent over the hero, solid once the visitor scrolls (needs a small
// client component that listens to scrolling). Nav links get added here later.

import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary["header"];
};

export function Header({ locale, dict }: HeaderProps) {
  return (
    // mix-blend-difference keeps the white text readable on both photos and white sections
    // until the scroll behavior is built.
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-4 text-brand-white mix-blend-difference md:px-8">
      {/* TODO: replace with the logo file once we have the SVG */}
      <Link href={`/${locale}`} className="font-heading text-2xl font-bold">
        Flux.
      </Link>
      <LanguageToggle locale={locale} label={dict.switchLanguage} />
    </header>
  );
}
