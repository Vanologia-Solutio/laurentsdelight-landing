"use client";

import { RiAddLine, RiSubtractLine } from "@remixicon/react";

import { useI18n } from "@/components/providers/i18n-provider";
import { MAX_ITEM_QTY } from "@/lib/content";
import { cn } from "@/lib/utils";

type QuantityStepperProps = {
  quantity: number;
  onChange: (quantity: number) => void;
  /** Product name, for screen-reader labels. */
  label: string;
  className?: string;
};

/** − n + control. Going below 1 removes the item. */
export function QuantityStepper({
  quantity,
  onChange,
  label,
  className,
}: QuantityStepperProps) {
  const { t } = useI18n();
  const button =
    "grid size-9 place-items-center rounded-full transition-all hover:bg-current/10 active:scale-90 disabled:pointer-events-none disabled:opacity-35";

  return (
    <div
      role="group"
      aria-label={`${t.cart.quantity}: ${label}`}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-current/25 p-0.5",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => onChange(quantity - 1)}
        aria-label={`${t.cart.decrease} — ${label}`}
        className={button}
      >
        <RiSubtractLine className="size-4" />
      </button>
      <span
        aria-live="polite"
        className="min-w-6 text-center font-display text-base font-bold tabular-nums"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        disabled={quantity >= MAX_ITEM_QTY}
        aria-label={`${t.cart.increase} — ${label}`}
        className={button}
      >
        <RiAddLine className="size-4" />
      </button>
    </div>
  );
}
