// i18n ("internationalization"): which languages the site supports, and the
// helper that gives each page the right dictionary (src/dictionaries) for its
// language. Pages call this; components never do (they get text as props).
// Docs: node_modules/next/dist/docs/01-app/02-guides/internationalization.md
import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";

// The languages in the URL: /en and /es.
export const locales = ["en", "es"];

// The shape of a dictionary (its keys), taken from en.json. TypeScript uses it
// to catch typos like dict.hero.ctaa.
export type Dictionary = typeof en;

// True for "en" and "es", false for anything else (like "fr").
export function hasLocale(locale: string): boolean {
  return locale === "en" || locale === "es";
}

// Returns all the fixed text for "en" or "es".
// Returns null for any other language, so the page can show "page not found":
//   const dict = await getDictionary(locale);
//   if (!dict) notFound();
// The return type (Dictionary) also makes type-check fail if es.json is
// missing a key that en.json has.
export async function getDictionary(
  locale: string,
): Promise<Dictionary | null> {
  if (locale === "en") return en;
  if (locale === "es") return es;
  return null;
}
