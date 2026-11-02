// Bottom of every page. Planned contents (from the MVP outline):
// - Logo + motto
// - Contact: address, WhatsApp/phone, email, opening hours (same as the About section;
//   keeping them identical everywhere helps local search)
// - Book: "Book a class" and "Packages" (Fitco links)
// - Social: Instagram
// - Policies: Studio policies, Privacy policy
// - © year Flux Studio
// No newsletter for the MVP.

import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { BOOKING_URL, PACKAGES_URL } from "@/lib/site";

type FooterProps = {
  locale: Locale;
  dict: Dictionary["footer"];
};

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="bg-brand-black px-4 py-12 text-brand-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:justify-between">
        <p className="font-heading text-2xl font-bold">Flux.</p>
        <nav className="flex flex-col gap-2 text-sm">
          <a href={BOOKING_URL}>{dict.book}</a>
          <a href={PACKAGES_URL}>{dict.packages}</a>
          <Link href={`/${locale}/policies`}>{dict.policies}</Link>
          <Link href={`/${locale}/privacy`}>{dict.privacy}</Link>
        </nav>
        {/* TODO: contact details, opening hours, Instagram link */}
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs">© 2026 Flux Studio</p>
    </footer>
  );
}
