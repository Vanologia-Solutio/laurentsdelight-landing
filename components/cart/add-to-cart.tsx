"use client";

import { RiAddLine } from "@remixicon/react";
import { AnimatePresence, motion } from "framer-motion";

import { QuantityStepper } from "@/components/cart/quantity-stepper";
import { useCart } from "@/components/providers/cart-provider";
import { useI18n } from "@/components/providers/i18n-provider";
import type { Flavor } from "@/lib/content";
import { EASE_OUT } from "@/lib/motion";

/** "Add to cart" button that turns into a quantity stepper once added. */
export function AddToCart({ flavor }: { flavor: Pick<Flavor, "id" | "name"> }) {
  const { quantityOf, add, setQuantity } = useCart();
  const { t } = useI18n();
  const quantity = quantityOf(flavor.id);

  return (
    // mt-auto pins the button to the card bottom so buttons line up across a row.
    <div className="mt-auto h-10 shrink-0">
      <AnimatePresence mode="wait" initial={false}>
        {quantity === 0 ? (
          <motion.button
            key="add"
            type="button"
            onClick={() => add(flavor.id)}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: EASE_OUT }}
            whileTap={{ scale: 0.96 }}
            aria-label={`${t.cart.add} — ${flavor.name}`}
            className="label inline-flex h-10 items-center gap-2 rounded-full border border-background/25 px-4 transition-colors hover:border-accent hover:bg-accent hover:text-foreground"
          >
            <RiAddLine className="size-4" />
            {t.cart.add}
          </motion.button>
        ) : (
          <motion.div
            key="stepper"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: EASE_OUT }}
          >
            <QuantityStepper
              quantity={quantity}
              onChange={(next) => setQuantity(flavor.id, next)}
              label={flavor.name}
              className="text-accent"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
