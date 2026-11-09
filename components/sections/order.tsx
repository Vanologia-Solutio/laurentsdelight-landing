import { RiArrowRightUpLine } from "@remixicon/react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { whatsappLink } from "@/lib/content";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import Link from "next/link";

export async function Order() {
  const t = await getDictionary();

  return (
    <Section
      id="order"
      className="relative overflow-hidden bg-primary text-primary-foreground"
      containerClassName="flex flex-col justify-between gap-8 sm:gap-10 md:flex-row md:items-end"
    >
      {/* Decorative ring — positioned against the section, not the container */}
      <Reveal
        aria-hidden
        variants="scaleIn"
        className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full border border-primary-foreground/20 sm:-right-16 sm:-top-16 sm:size-64 lg:size-96"
      />

      <Stagger gap={0.12} className="relative">
        <StaggerItem as="p" className="eyebrow mb-5 text-primary-foreground/70">
          {t.order.eyebrow}
        </StaggerItem>
        <h2 className="display-1 max-w-3xl text-[clamp(2.75rem,1.5rem+5vw,6.5rem)]">
          <span className="mb-[-0.1em] block overflow-hidden pb-[0.1em]">
            <StaggerItem as="span" variants="lineUp" className="block">
              {t.order.line1}
            </StaggerItem>
          </span>
          <span className="mb-[-0.1em] block overflow-hidden pb-[0.1em] pr-[0.1em]">
            <StaggerItem as="span" variants="lineUp" className="block">
              <em className="font-serif font-normal tracking-[-0.03em]">
                {t.order.line2}
              </em>
            </StaggerItem>
          </span>
        </h2>
      </Stagger>

      <Reveal delay={0.3} className="relative md:max-w-xs">
        <p className="mb-7 text-base leading-relaxed text-primary-foreground/85">
          {t.order.body}
        </p>
        <Link
          href={whatsappLink(t.order.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="label group inline-flex w-full items-center justify-center gap-3 rounded-full bg-surface py-4 pl-7 pr-6 text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift active:scale-[0.98] sm:w-auto"
        >
          {t.order.cta}
          <RiArrowRightUpLine className="size-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Reveal>
    </Section>
  );
}
