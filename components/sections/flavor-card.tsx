import Image from "next/image";

import { AddToCart } from "@/components/cart/add-to-cart";
import type { Flavor, FlavorCategory } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type FlavorCardProps = {
  flavor: Flavor;
  locale: Locale;
  photoSoon: string;
  categoryLabel: string;
};

/** Ribbon face and the darker "back" seen in the fold behind the card. */
const ribbonStyles: Record<FlavorCategory, { face: string; fold: string }> = {
  cookies: {
    face: "bg-primary text-primary-foreground",
    fold: "bg-primary-hover",
  },
  cakesBrownies: {
    face: "bg-accent text-foreground",
    fold: "bg-[color-mix(in_oklab,var(--color-accent)_60%,black)]",
  },
};

export function FlavorCard({
  flavor,
  locale,
  photoSoon,
  categoryLabel,
}: FlavorCardProps) {
  return (
    <article className="group flex h-full flex-col">
      {/* Outer frame lifts on hover and holds the ribbon, which overhangs
          the clipped image frame inside it. */}
      <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-2">
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-secondary sm:rounded-3xl">
          {flavor.image ? (
            <Image
              src={flavor.image}
              alt={flavor.name}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex size-full flex-col items-center justify-center gap-2 bg-primary px-4 text-center text-primary-foreground">
              <span className="font-display text-[clamp(1.25rem,0.9rem+1.5vw,2rem)] font-bold leading-tight tracking-[-0.03em]">
                {flavor.name}
              </span>
              <span className="eyebrow text-[10px] text-primary-foreground/60 sm:text-xs">
                {photoSoon}
              </span>
            </div>
          )}
          {/* Soft top shade keeps the number legible on light photos */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-foreground/40 to-transparent" />
          <span className="absolute left-3.5 top-3 font-display text-base font-bold text-background sm:left-5 sm:top-4 sm:text-lg">
            {flavor.number}
          </span>
        </div>
        {/* Wrapped ribbon: notched tail on the photo, overhanging the right
            edge, with a small dark fold as if it wraps around the card. */}
        <div className="pointer-events-none absolute -right-1.5 top-3 sm:-right-2 sm:top-4">
          <span
            className={cn(
              "block whitespace-nowrap py-1.5 pl-4 pr-3 text-[9px] font-semibold uppercase leading-none tracking-[0.16em] [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,8px_50%)] sm:py-2 sm:pl-5 sm:pr-4 sm:text-[11px]",
              ribbonStyles[flavor.category].face,
            )}
          >
            {categoryLabel}
          </span>
          <span
            aria-hidden
            className={cn(
              "absolute right-0 top-full size-1.5 [clip-path:polygon(0_0,100%_0,0_100%)] sm:size-2",
              ribbonStyles[flavor.category].fold,
            )}
          />
        </div>
      </div>
      <h3 className="mt-3.5 font-display text-lg font-bold leading-tight tracking-[-0.03em] sm:mt-5 sm:text-2xl">
        {flavor.name}
      </h3>
      <p className="mb-3.5 mt-1 text-[13px] leading-snug text-background/65 sm:mb-4 sm:mt-1.5 sm:text-sm">
        {flavor.short[locale]}
      </p>
      <AddToCart flavor={{ id: flavor.id, name: flavor.name }} />
    </article>
  );
}
