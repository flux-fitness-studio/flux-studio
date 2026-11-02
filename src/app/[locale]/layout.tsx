// The root layout for every page under /en and /es: <html lang>, fonts, Header, Footer.
// [locale] in the folder name is a URL variable: /en → locale "en", /es → locale "es".

import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import "../globals.css";

// Sets the --font-cormorant variable that globals.css uses for font-body and font-heading.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Pre-render /en and /es at build time (static site generation).
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const { meta } = getDictionary(locale);
  return { title: meta.title, description: meta.description };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  // Any other language in the URL (e.g. /fr) shows the 404 page.
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${cormorant.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <Header locale={locale} dict={dict.header} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict.footer} />
      </body>
    </html>
  );
}
