import { RiArrowLeftLine, RiArrowRightUpLine } from "@remixicon/react";
import type { Metadata } from "next";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary, getLocale } from "@/lib/i18n/get-dictionary";
import {
  LEGAL_UPDATED,
  type LegalBlock,
  type LegalDoc,
} from "@/lib/legal/types";

/** Metadata for a legal page, with per-locale canonical + hreflang links. */
export function legalMetadata(
  doc: LegalDoc,
  locale: Locale,
  path: string,
): Metadata {
  return {
    title: `${doc.title} · Laurent's Delight`,
    description: doc.description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
        "x-default": `/${defaultLocale}${path}`,
      },
    },
  };
}

type LegalPageProps = {
  doc: LegalDoc;
  /** The other legal document, linked at the bottom. */
  related: { path: string; title: string };
};

export async function LegalPage({ doc, related }: LegalPageProps) {
  const locale = await getLocale();
  const t = await getDictionary();
  const updated = new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-GB", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(LEGAL_UPDATED));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Section
        id="top"
        // Top padding clears the fixed header.
        className="pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40"
      >
        {/* Title block */}
        <Stagger trigger="mount" gap={0.1} delay={0.1} className="max-w-3xl">
          <StaggerItem>
            <Link
              href={`/${locale}`}
              className="label group inline-flex items-center gap-2 text-foreground/60 transition-all hover:text-primary"
            >
              <RiArrowLeftLine className="size-4 transition-all duration-300 group-hover:-translate-x-0.5" />
              {t.legal.backHome}
            </Link>
          </StaggerItem>
          <StaggerItem as="p" className="eyebrow mb-4 mt-10 text-primary">
            {t.legal.eyebrow}
          </StaggerItem>
          <h1 className="display-2 mb-[-0.1em] overflow-hidden pb-[0.1em]">
            <StaggerItem as="span" variants="lineUp" className="block">
              {doc.title}
            </StaggerItem>
          </h1>
          <StaggerItem as="p" className="label mt-5 text-foreground/55">
            {t.legal.updated} · <time dateTime={LEGAL_UPDATED}>{updated}</time>
          </StaggerItem>
          <StaggerItem
            as="p"
            className="mt-8 text-base leading-7 text-foreground/75 lg:text-lg lg:leading-8"
          >
            {doc.intro}
          </StaggerItem>
        </Stagger>

        <div className="mt-14 grid gap-12 border-t border-foreground/15 pt-12 lg:mt-20 lg:grid-cols-[15rem_1fr] lg:gap-16 lg:pt-16">
          {/* Table of contents */}
          <nav
            aria-label={t.legal.onThisPage}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="eyebrow mb-4 text-foreground/60">
              {t.legal.onThisPage}
            </p>
            <ol className="grid gap-x-6 gap-y-2.5 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {doc.sections.map((section, i) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    className="group flex gap-3 text-foreground/70 transition-all hover:text-primary"
                  >
                    <span className="font-display font-bold text-primary/60 group-hover:text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          {/* Document */}
          <article className="max-w-2xl space-y-12">
            {doc.sections.map((section, i) => (
              <Reveal
                as="div"
                key={section.id}
                id={section.id}
                className="scroll-mt-6"
              >
                <h2 className="flex items-baseline gap-4 font-display text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                  <span className="text-base text-primary sm:text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-foreground/75">
                  {section.body.map((block, j) => (
                    <Block key={j} block={block} />
                  ))}
                </div>
              </Reveal>
            ))}

            <Reveal>
              <Link
                href={`/${locale}${related.path}`}
                className="group flex items-center justify-between gap-6 rounded-3xl bg-foreground p-6 text-background transition-all duration-300 hover:-translate-y-1 sm:p-8"
              >
                <span>
                  <span className="eyebrow block text-accent">
                    {t.legal.alsoRead}
                  </span>
                  <span className="mt-2 block font-display text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                    {related.title}
                  </span>
                </span>
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-foreground transition-all duration-300 group-hover:rotate-45">
                  <RiArrowRightUpLine className="size-5" />
                </span>
              </Link>
            </Reveal>
          </article>
        </div>
      </Section>
    </main>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") return <p>{block}</p>;
  return (
    <ul className="list-disc space-y-2.5 pl-5 marker:text-primary">
      {block.list.map((item) => (
        <li key={item.slice(0, 32)} className="pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}
