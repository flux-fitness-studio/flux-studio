// Languages the site supports, and a helper to load each one's fixed text.
// Studio content (classes, coaches, FAQ) will come from Sanity instead.

import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

// The shape of a dictionary, taken from en.json. es.json must match it.
export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, es };

// True if the URL's [locale] is one we support (e.g. "en"), false otherwise (e.g. "fr").
export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
