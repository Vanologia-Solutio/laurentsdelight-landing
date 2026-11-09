"use client";

import { RiCloseLine, RiWhatsappLine } from "@remixicon/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import { useI18n } from "@/components/providers/i18n-provider";
import { whatsappLink } from "@/lib/content";
import { EASE_OUT } from "@/lib/motion";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const { t } = useI18n();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const visible = latest > 240;
    setIsVisible(visible);
    if (!visible) setShowMenu(false);
  });

  // Close the quick-message menu on Escape or a click outside.
  useEffect(() => {
    if (!showMenu) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowMenu(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setShowMenu(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [showMenu]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={rootRef}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-4 z-50 sm:bottom-8 sm:right-8"
        >
          {/* Quick message menu */}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                id="whatsapp-menu"
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.9 }}
                transition={{ duration: 0.22, ease: EASE_OUT }}
                style={{ transformOrigin: "bottom right" }}
                className="absolute bottom-18 right-0 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-foreground/10 bg-surface shadow-popover"
              >
                <div className="flex items-center gap-3 bg-foreground px-4 py-3.5 text-background">
                  <span className="grid size-9 place-items-center rounded-full bg-whatsapp text-white">
                    <RiWhatsappLine className="size-5" />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold leading-tight">
                      {t.whatsapp.title}
                    </p>
                    <p className="text-xs text-background/60">
                      {t.whatsapp.subtitle}
                    </p>
                  </div>
                </div>
                <ul className="p-1.5">
                  {t.whatsapp.quickMessages.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, ease: EASE_OUT }}
                    >
                      <Link
                        href={whatsappLink(item.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setShowMenu(false)}
                        className="block rounded-xl px-3.5 py-3 text-sm text-foreground transition-all hover:bg-whatsapp/12 hover:text-whatsapp-dark"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.button
            onClick={() => setShowMenu((open) => !open)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            aria-label={showMenu ? t.whatsapp.close : t.whatsapp.open}
            aria-expanded={showMenu}
            aria-controls="whatsapp-menu"
            className="relative grid size-14 place-items-center rounded-full bg-linear-to-br from-whatsapp to-whatsapp-dark text-white shadow-whatsapp"
          >
            {/* Pulse ring — paused while the menu is open */}
            {!showMenu && (
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full bg-whatsapp"
                initial={{ scale: 1, opacity: 0.45 }}
                animate={{ scale: 1.55, opacity: 0 }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            )}
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={showMenu ? "close" : "chat"}
                initial={{ rotate: showMenu ? -180 : 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: showMenu ? 180 : -180, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {showMenu ? (
                  <RiCloseLine className="size-6" />
                ) : (
                  <RiWhatsappLine className="size-7" />
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
