import Image from "next/image";

import { AddToCart } from "@/components/cart/add-to-cart";
import type { Flavor } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";

type FlavorCardProps = {
  flavor: Flavor;
  locale: Locale;
  photoSoon: string;
};

export function FlavorCard({ flavor, locale, photoSoon }: FlavorCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-secondary transition-transform duration-500 ease-out group-hover:-translate-y-2 sm:rounded-3xl">
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
