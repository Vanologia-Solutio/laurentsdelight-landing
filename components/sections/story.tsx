import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function Story() {
  const t = await getDictionary();

  return (
    <Section
      id="story"
      containerClassName="grid gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16"
    >
      <Stagger gap={0.12} className="relative">
        <StaggerItem as="p" className="eyebrow mb-5 text-primary sm:mb-6">
          {t.story.eyebrow}
        </StaggerItem>
        <Reveal
          variants="scaleIn"
          delay={0.3}
          aria-hidden
          className="absolute -left-3 top-9 size-12 rounded-full border border-primary/40 sm:-left-4 sm:top-10 sm:size-16"
        />
        <p className="relative font-serif text-[clamp(2.25rem,1.5rem+3vw,4.25rem)] leading-[1.02] tracking-[-0.03em] text-primary">
          <span className="mb-[-0.1em] block overflow-hidden pb-[0.1em]">
            <StaggerItem as="span" variants="lineUp" className="block">
              {t.story.line1}
            </StaggerItem>
          </span>
          <span className="mb-[-0.1em] block overflow-hidden pb-[0.1em] pr-[0.1em]">
            <StaggerItem
              as="span"
              variants="lineUp"
              className="block italic text-foreground"
            >
              {t.story.line2}
            </StaggerItem>
          </span>
        </p>
      </Stagger>

      <div className="grid gap-8 sm:gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <Reveal delay={0.1}>
          <p className="text-base leading-7 text-foreground/75 lg:text-lg lg:leading-8">
            {t.story.body}
          </p>
          <Link
            href="#baker"
            className="label group mt-7 inline-flex items-center gap-2 border-b border-primary/40 pb-1 text-primary transition-all hover:border-primary sm:mt-8"
          >
            {t.story.cta}
            <RiArrowRightUpLine className="size-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
        <Stagger
          as="ul"
          gap={0.1}
          delay={0.25}
          className="label flex flex-wrap gap-x-5 gap-y-3 border-t border-foreground/20 pt-6 text-foreground/60 md:block md:space-y-3 md:border-l md:border-t-0 md:pl-6 md:pt-0"
        >
          {t.story.values.map((value) => (
            <StaggerItem as="li" key={value}>
              {value}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
