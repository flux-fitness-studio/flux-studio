// The root layout: the frame around every page under /en and /es.
// [locale] in the folder name is a URL variable: /en → locale "en", /es → locale "es".
//
// To build:
// - Read `locale` from params and set it on <html lang="...">.
// - Load the brand font and globals.css.
// - Put the Header above the page and the Footer below it.
// - Any other language in the URL (e.g. /fr) should show "page not found".
// - Set the page title and description for search engines, in the right language.
// - Get the list of languages from src/lib/i18n.ts instead of typing it below.
//
// Docs: node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md
//
// Below is the smallest layout Next.js accepts. Replace it as you build.

// Tells Next.js which values [locale] can have, so it can build /en and /es.
// Required because [locale] is the top folder of every page.
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

// Next.js requires the root layout to have <html> and <body>.

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
