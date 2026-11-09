import { RiArrowRightDownLine } from "@remixicon/react";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { HeroVisual } from "@/components/sections/hero-visual";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function Hero() {
  const t = await getDictionary();

  return (
    <Section
      id="top"
      // Top padding clears the fixed header.
      className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40"
      containerClassName="grid gap-8 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8"
    >
      <Stagger
        trigger="mount"
        gap={0.12}
        delay={0.15}
        className="relative z-10"
      >
        <StaggerItem className="eyebrow mb-5 flex items-center gap-3 text-primary sm:mb-7">
          <span className="h-px w-8 bg-primary sm:w-10" />
          {t.hero.eyebrow}
        </StaggerItem>

        <h1 className="display-1">
          {/* Each line slides up from behind a mask */}
          <span className="mb-[-0.1em] block overflow-hidden pb-[0.1em]">
            <StaggerItem as="span" variants="lineUp" className="block">
              {t.hero.titleLine1}
            </StaggerItem>
          </span>
          <span className="mb-[-0.1em] block overflow-hidden pb-[0.1em] pr-[0.1em]">
            <StaggerItem as="span" variants="lineUp" className="block">
              <em className="font-serif font-normal tracking-[-0.03em] text-primary">
                {t.hero.titleLine2}
              </em>
            </StaggerItem>
          </span>
        </h1>

        <StaggerItem
          as="p"
          className="mt-6 max-w-md text-base leading-relaxed text-foreground/75 sm:mt-8 sm:text-lg"
        >
          {t.hero.lead}
        </StaggerItem>

        <StaggerItem className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
          <Link
            href="#flavors"
            className="label group inline-flex items-center justify-center gap-3 rounded-full bg-primary py-4 pl-7 pr-6 text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover active:scale-[0.98]"
          >
            {t.hero.cta}
            <RiArrowRightDownLine className="size-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </Link>
          <Reveal
            as="span"
            trigger="mount"
            variants="fadeIn"
            delay={0.9}
            className="label text-center text-foreground/55 sm:text-left"
          >
            {t.hero.hours}
          </Reveal>
        </StaggerItem>
      </Stagger>

      <HeroVisual />
    </Section>
  );
}
