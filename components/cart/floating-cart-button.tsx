"use client";

import { RiArrowRightSLine, RiShoppingBagLine } from "@remixicon/react";
import { AnimatePresence, motion } from "framer-motion";

import { useCart } from "@/components/providers/cart-provider";
import { useI18n } from "@/components/providers/i18n-provider";

/**
 * Bottom "view cart" pill, shown while the cart has items — easier to spot
 * than the bag icon in the header, especially on mobile.
 */
export function FloatingCartButton() {
  const { count, isOpen, open } = useCart();
  const { t } = useI18n();
  const visible = count > 0 && !isOpen;

  return (
    // Side padding keeps the pill clear of the floating WhatsApp button.
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-20 sm:bottom-8 sm:px-28">
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            onClick={open}
            aria-haspopup="dialog"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="label group pointer-events-auto flex h-14 max-w-full items-center gap-3 rounded-full bg-foreground pl-2 pr-4 text-background shadow-popover"
          >
            <span className="relative grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
              <RiShoppingBagLine className="size-5" />
              <motion.span
                key={count}
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[11px] font-bold leading-none text-foreground tabular-nums"
              >
                {count > 99 ? "99+" : count}
              </motion.span>
            </span>
            <span className="truncate">{t.cart.view}</span>
            <RiArrowRightSLine className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
