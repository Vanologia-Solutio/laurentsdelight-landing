// Locale config shared by the proxy, server components and client components.
// Keep this file free of server-only imports.

export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Cookie set by the language switcher so `/` remembers the visitor's choice. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  en: { short: "EN", name: "English" },
  id: { short: "ID", name: "Bahasa Indonesia" },
};

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/**
 * Picks the best supported locale from an `Accept-Language` header,
 * e.g. "id-ID,id;q=0.9,en;q=0.8" → "id". Falls back to the default.
 */
export function pickLocale(header: string | null): Locale {
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return {
        base: tag.toLowerCase().split("-")[0],
        weight: q ? Number(q.slice(2)) : 1,
      };
    })
    .filter((entry) => entry.weight > 0)
    .sort((a, b) => b.weight - a.weight);

  const match = ranked.find((entry) => hasLocale(entry.base));
  return match ? (match.base as Locale) : defaultLocale;
}

/**
 * Makes a site link work from any page: "#flavors" → "/en#flavors",
 * "/privacy-policy" → "/en/privacy-policy". External links are left alone.
 */
export function localizeHref(locale: Locale, href: string) {
  if (href.startsWith("#")) return `/${locale}${href}`;
  if (href.startsWith("/")) return `/${locale}${href}`;
  return href;
}
