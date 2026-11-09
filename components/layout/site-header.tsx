"use client";

import {
  RiArrowRightUpLine,
  RiCloseLine,
  RiMenuLine,
  RiShoppingBagLine,
} from "@remixicon/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useI18n } from "@/components/providers/i18n-provider";
import { Logo } from "@/components/ui/logo";
import { navLinks } from "@/lib/content";
import { localizeHref } from "@/lib/i18n/config";
import { EASE_OUT, SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

const intro = (delay = 0) => ({
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: EASE_OUT, delay },
});

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const { locale, t } = useI18n();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);

    // The active section is the last one whose top has passed 45% of the viewport.
    const line = window.innerHeight * 0.45;
    let current: string | null = null;
    document
      .querySelectorAll<HTMLElement>("main section[id]")
      .forEach((section) => {
        // Skip pages Next keeps hidden (display: none) after navigating away.
        if (section.getClientRects().length === 0) return;
        if (section.getBoundingClientRect().top <= line) current = section.id;
      });
    setActiveId(current);
  });

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const isActive = (href: string) => activeId === href.slice(1);
  const isSolid = isScrolled || isOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b px-4 transition-all duration-300",
        isSolid
          ? "border-foreground/10 bg-background/85 py-3 shadow-header backdrop-blur-md"
          : "border-transparent bg-transparent py-5 lg:py-6",
      )}
    >
      <nav
        aria-label={t.header.navLabel}
        className="mx-auto flex max-w-6xl items-center justify-between"
      >
        <motion.div {...intro()}>
          <Logo
            ariaLabel={t.header.home}
            href={localizeHref(locale, "#top")}
            priority
            sizes="(min-width: 1024px) 128px, 118px"
            // Shrinks slightly with the header once the page is scrolled.
            className={cn(
              "h-10 transition-[height] duration-300 sm:h-11 lg:h-12",
              isSolid && "h-9 sm:h-9 lg:h-10",
            )}
          />
        </motion.div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-10">
          {navLinks.map(({ href, key }, i) => (
            <motion.li key={href} {...intro(0.1 + i * 0.06)}>
              <Link
                href={localizeHref(locale, href)}
                aria-current={isActive(href) ? "location" : undefined}
                className={cn(
                  "label group relative block py-1.5 transition-all hover:text-primary",
                  isActive(href) && "text-primary",
                )}
              >
                {t.links[key]}
                {/* hover hint */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary/40 transition-all duration-300 group-hover:w-full" />
                {/* active indicator glides between links */}
                {isActive(href) && (
                  <motion.span
                    layoutId="nav-underline"
                    transition={SPRING}
                    className="absolute inset-x-0 bottom-0 h-px bg-primary"
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Actions */}
        <motion.div
          {...intro(0.3)}
          className="flex items-center gap-2 sm:gap-2.5"
        >
          <LanguageSwitcher className="hidden md:flex" />
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="label hidden rounded-full bg-foreground px-5 py-3.5 text-background sm:block md:hidden lg:block"
          >
            {t.header.orderBox}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.92 }}
            className="grid size-11 place-items-center rounded-full border border-foreground/20 transition-all hover:border-foreground/50"
            aria-label={t.header.bag}
          >
            <RiShoppingBagLine className="size-5" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen((open) => !open)}
            className="grid size-11 place-items-center overflow-hidden rounded-full bg-foreground text-background md:hidden"
            aria-label={isOpen ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {isOpen ? (
                  <RiCloseLine className="size-5" />
                ) : (
                  <RiMenuLine className="size-5" />
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="overflow-hidden md:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.08 },
                },
              }}
              className="mx-auto flex max-w-6xl flex-col pb-2 pt-4"
            >
              {navLinks.map(({ href, key }) => (
                <motion.div
                  key={href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { ease: EASE_OUT },
                    },
                  }}
                >
                  <Link
                    href={localizeHref(locale, href)}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive(href) ? "location" : undefined}
                    className={cn(
                      "flex items-center justify-between border-b border-foreground/10 py-4 font-display text-2xl font-bold tracking-[-0.03em] transition-all hover:text-primary",
                      isActive(href) && "text-primary",
                    )}
                  >
                    {t.links[key]}
                    <RiArrowRightUpLine className="size-5 text-primary" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-5 flex items-center justify-between gap-4"
              >
                <span className="label text-foreground/60">
                  {t.header.language}
                </span>
                <LanguageSwitcher onSwitch={() => setIsOpen(false)} />
              </motion.div>
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(false)}
                className="label mt-4 rounded-full bg-foreground px-5 py-4 text-sm text-background sm:hidden"
              >
                {t.header.orderBox}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
