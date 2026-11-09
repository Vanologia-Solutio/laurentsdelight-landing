"use client";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { createContext, use, useMemo, type ReactNode } from "react";

type I18nContextValue = { locale: Locale; t: Dictionary };

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Hands the server-loaded dictionary to client components, which can't read
 * `next/root-params` themselves.
 */
export function I18nProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
}) {
  const value = useMemo(
    () => ({ locale, t: dictionary }),
    [locale, dictionary],
  );
  return <I18nContext value={value}>{children}</I18nContext>;
}

export function useI18n() {
  const context = use(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return context;
}
