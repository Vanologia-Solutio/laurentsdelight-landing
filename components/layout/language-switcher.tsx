"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  startTransition,
  useId,
  useLayoutEffect,
  useOptimistic,
  type MouseEvent,
} from "react";

import { useI18n } from "@/components/providers/i18n-provider";
import {
  LOCALE_COOKIE,
  localeLabels,
  locales,
  type Locale,
} from "@/lib/i18n/config";
import { SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

const ONE_YEAR = 60 * 60 * 24 * 365;

/** Remembers the choice so the proxy sends `/` to this language next time. */
function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
}

// Scroll position to restore once the other locale's page is shown. Swapping
// the root `[lang]` segment re-lays out the whole document, which otherwise
// leaves the visitor near the bottom of the page.
let pendingScrollY: number | null = null;

function saveScroll() {
  pendingScrollY = window.scrollY;
}

function restoreScroll() {
  if (pendingScrollY === null) return;
  window.scrollTo({ top: pendingScrollY, behavior: "instant" });
  pendingScrollY = null;
}

type LanguageSwitcherProps = {
  className?: string;
  /** Called when a different language is picked (e.g. to close a menu). */
  onSwitch?: () => void;
};

export function LanguageSwitcher({
  className,
  onSwitch,
}: LanguageSwitcherProps) {
  const { locale, t } = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  // "/en/privacy-policy" → "/id/privacy-policy": stay on the same page.
  const pathFor = (code: Locale) => pathname.replace(/^\/[^/]+/, `/${code}`);
  // Always derived from the real locale. The optimistic value moves the
  // indicator instantly and falls back to `locale` once navigation settles —
  // so a page Next restores from its cache can never show a stale choice.
  const [selected, setSelected] = useOptimistic<Locale>(locale);
  // Unique per instance — the header renders a desktop and a mobile switcher.
  const indicatorId = useId();

  const switchTo = (event: MouseEvent, next: Locale) => {
    event.preventDefault();
    if (next === locale) return;
    rememberLocale(next);
    saveScroll();
    onSwitch?.();
    // Both locales share one layout, so keeping the scroll position keeps the
    // visitor on the same spot. (Don't reuse location.hash: it holds the last
    // anchor clicked, not where the visitor is now.)
    startTransition(() => {
      setSelected(next);
      router.push(pathFor(next), { scroll: false });
    });
  };

  // Runs when this locale's page is shown (fresh or restored from cache).
  useLayoutEffect(() => {
    restoreScroll();
  }, []);

  return (
    <div
      role="group"
      aria-label={t.header.language}
      className={cn(
        "relative flex items-center rounded-full border border-foreground/20 p-1",
        className,
      )}
    >
      {locales.map((code) => {
        const isActive = selected === code;
        return (
          <Link
            key={code}
            href={pathFor(code)}
            hrefLang={code}
            lang={code}
            onClick={(event) => switchTo(event, code)}
            aria-current={code === locale ? "true" : undefined}
            aria-label={localeLabels[code].name}
            className={cn(
              "label relative grid h-9 min-w-10 place-items-center rounded-full px-2.5 text-[11px] transition-all duration-300",
              isActive
                ? "text-background"
                : "text-foreground/60 hover:text-foreground",
            )}
          >
            {isActive && (
              <motion.span
                layoutId={`lang-indicator-${indicatorId}`}
                transition={SPRING}
                className="absolute inset-0 rounded-full bg-foreground"
              />
            )}
            <span className="relative">{localeLabels[code].short}</span>
          </Link>
        );
      })}
    </div>
  );
}
