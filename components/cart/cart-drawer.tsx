"use client";

import {
  RiArrowRightUpLine,
  RiCloseLine,
  RiDeleteBinLine,
  RiShoppingBagLine,
  RiWhatsappLine,
} from "@remixicon/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { QuantityStepper } from "@/components/cart/quantity-stepper";
import { useCart, type CartLine } from "@/components/providers/cart-provider";
import { useI18n } from "@/components/providers/i18n-provider";
import { MIN_ORDER_QTY } from "@/lib/content";
import { localizeHref } from "@/lib/i18n/config";
import { EASE_OUT } from "@/lib/motion";

export function CartDrawer() {
  const { lines, count, canCheckout, checkoutHref, clear, isOpen, close } =
    useCart();
  const { locale, t } = useI18n();
  const panelRef = useRef<HTMLDivElement>(null);

  // Escape closes; the page behind doesn't scroll while the drawer is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    panelRef.current?.focus();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-60">
          <motion.div
            aria-hidden
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-foreground/45 backdrop-blur-[2px]"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            tabIndex={-1}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-background shadow-popover outline-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-4 sm:px-6">
              <h2
                id="cart-title"
                className="flex items-baseline gap-2 font-display text-2xl font-bold tracking-[-0.03em]"
              >
                {t.cart.title}
                {count > 0 && (
                  <span className="label text-primary">({count})</span>
                )}
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label={t.cart.close}
                className="grid size-10 place-items-center rounded-full border border-foreground/20 transition-all hover:border-foreground/50"
              >
                <RiCloseLine className="size-5" />
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <span className="mb-2 grid size-16 place-items-center rounded-full bg-secondary text-primary">
                  <RiShoppingBagLine className="size-7" />
                </span>
                <p className="font-display text-xl font-bold">{t.cart.empty}</p>
                <p className="max-w-xs text-sm text-foreground/65">
                  {t.cart.emptyHint}
                </p>
                <Link
                  href={localizeHref(locale, "#flavors")}
                  onClick={close}
                  className="label group mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-background transition-all hover:-translate-y-0.5"
                >
                  {t.cart.browse}
                  <RiArrowRightUpLine className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-foreground/10 overflow-y-auto px-5 sm:px-6">
                  <AnimatePresence initial={false}>
                    {lines.map((line) => (
                      <CartLineItem key={line.flavor.id} line={line} />
                    ))}
                  </AnimatePresence>
                </ul>

                {/* Footer */}
                <div className="border-t border-foreground/10 bg-surface px-5 py-5 sm:px-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="label text-foreground/60">
                      {t.cart.total}
                    </span>
                    <span className="font-display text-2xl font-bold tabular-nums">
                      {count}
                    </span>
                  </div>
                  {!canCheckout && (
                    <p className="mb-3 text-sm text-primary">
                      {t.cart.minOrder.replace(
                        "{count}",
                        String(MIN_ORDER_QTY),
                      )}
                    </p>
                  )}
                  {canCheckout ? (
                    <a
                      href={checkoutHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label flex w-full items-center justify-center gap-2.5 rounded-full bg-linear-to-br from-whatsapp to-whatsapp-dark py-4 text-white shadow-whatsapp transition-all hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <RiWhatsappLine className="size-5" />
                      {t.cart.checkout}
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="label flex w-full items-center justify-center gap-2.5 rounded-full bg-foreground/15 py-4 text-foreground/50"
                    >
                      <RiWhatsappLine className="size-5" />
                      {t.cart.checkout}
                    </button>
                  )}
                  <p className="mt-3 text-center text-xs leading-relaxed text-foreground/55">
                    {t.cart.checkoutHint}
                  </p>
                  <button
                    type="button"
                    onClick={clear}
                    className="label mx-auto mt-3 block text-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {t.cart.clear}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function CartLineItem({ line: { flavor, quantity } }: { line: CartLine }) {
  const { setQuantity } = useCart();
  const { t } = useI18n();

  return (
    <motion.li
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25, ease: EASE_OUT }}
      className="overflow-hidden"
    >
      <div className="flex items-center gap-4 py-4">
        <div className="relative size-18 shrink-0 overflow-hidden rounded-xl bg-secondary">
          {flavor.image ? (
            <Image
              src={flavor.image}
              alt=""
              fill
              sizes="72px"
              className="object-cover"
            />
          ) : (
            <span className="grid size-full place-items-center font-display text-lg font-bold text-primary">
              {flavor.number}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-base font-bold leading-tight tracking-[-0.02em] sm:text-lg">
            {flavor.name}
          </p>
          <div className="mt-2 flex items-center justify-between gap-2">
            <QuantityStepper
              quantity={quantity}
              onChange={(next) => setQuantity(flavor.id, next)}
              label={flavor.name}
              className="text-foreground"
            />
            <button
              type="button"
              onClick={() => setQuantity(flavor.id, 0)}
              aria-label={`${t.cart.remove} — ${flavor.name}`}
              className="grid size-9 place-items-center rounded-full text-foreground/50 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <RiDeleteBinLine className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
