// Tests for the i18n helper (src/lib/i18n.ts): which languages the site
// supports, and loading the right dictionary for each one.
import { describe, expect, it } from "vitest";
import { getDictionary, hasLocale } from "./i18n";

describe("i18n", () => {
  it("hasLocale returns true for en and es", () => {
    expect(hasLocale("en")).toBe(true);
    expect(hasLocale("es")).toBe(true);
  });

  it("hasLocale returns false for other languages (e.g. fr)", () => {
    expect(hasLocale("fr")).toBe(false);
  });

  it("getDictionary returns the Spanish text for es", async () => {
    const dict = await getDictionary("es");
    expect(dict?.hero.cta).toBe("Reserva");
  });

  it("getDictionary returns null for other languages (e.g. fr)", async () => {
    expect(await getDictionary("fr")).toBeNull();
  });
});
