import { RiArrowRightUpLine, RiSparklingLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { baker, whatsappLink, type Contact } from "@/lib/content";
import { getDictionary, type Dictionary } from "@/lib/i18n/get-dictionary";

type BakerCopy = Dictionary["baker"];

export async function Baker() {
  const { baker: t } = await getDictionary();

  return (
    <Section
      id="baker"
      className="bg-secondary"
      containerClassName="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20"
    >
      <BakerPortrait t={t} />

      <div>
        <Stagger gap={0.12}>
          <StaggerItem as="p" className="eyebrow mb-4 text-primary">
            {t.eyebrow}
          </StaggerItem>
          <h2 className="display-2 mb-[-0.1em] overflow-hidden pb-[0.1em] pr-[0.1em]">
            <StaggerItem as="span" variants="lineUp" className="block">
              {baker.firstName}{" "}
              <em className="font-serif font-normal tracking-[-0.02em] text-primary">
                {baker.lastName}.
              </em>
            </StaggerItem>
          </h2>

          <StaggerItem className="mt-7 border-l-2 border-primary pl-5 sm:mt-8">
            <blockquote className="font-serif text-xl italic leading-snug text-foreground sm:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
          </StaggerItem>

          <div className="mt-7 space-y-4 text-base leading-7 text-foreground/75 sm:mt-8 lg:text-lg lg:leading-8">
            {t.bio.map((paragraph) => (
              <StaggerItem as="p" key={paragraph.slice(0, 24)}>
                {paragraph}
              </StaggerItem>
            ))}
          </div>
        </Stagger>

        <div className="mt-10">
          <Reveal as="p" className="eyebrow mb-4 text-foreground/60">
            {t.sayHi} {baker.firstName.split(" ")[0]}
          </Reveal>
          <Stagger as="ul" gap={0.1} className="grid gap-3 sm:grid-cols-3">
            {baker.contacts.map((contact) => (
              <StaggerItem as="li" key={contact.id}>
                <ContactCard contact={contact} t={t} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}

function BakerPortrait({ t }: { t: BakerCopy }) {
  return (
    <div className="relative mx-auto w-full max-w-sm pb-4 pr-4 sm:max-w-md lg:max-w-none">
      <Reveal
        variants="scaleIn"
        className="relative aspect-4/5 overflow-hidden rounded-4xl bg-primary shadow-stamp sm:rounded-[2.5rem] lg:shadow-stamp-lg"
      >
        {baker.photo ? (
          <Image
            src={baker.photo}
            alt={`${t.portraitAlt} ${baker.firstName} ${baker.lastName}`}
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 448px, 90vw"
            className="object-cover"
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-3 text-primary-foreground">
            <span className="font-display text-[clamp(4.5rem,3rem+6vw,8rem)] font-bold leading-none tracking-[-0.06em]">
              {baker.initials}
            </span>
            <span className="eyebrow text-primary-foreground/60">
              {t.portraitSoon}
            </span>
          </div>
        )}
      </Reveal>
      <Reveal
        variants={{
          hidden: { opacity: 0, x: -24, rotate: 0 },
          visible: {
            opacity: 1,
            x: 0,
            rotate: -6,
            transition: {
              type: "spring",
              stiffness: 220,
              damping: 16,
              delay: 0.5,
            },
          },
        }}
        className="absolute -left-2 bottom-10 z-10 rounded-full bg-surface px-4 py-2.5 shadow-lg sm:-left-4 sm:px-5 sm:py-3"
      >
        <span className="label flex items-center gap-2 text-primary">
          <RiSparklingLine className="size-3.5" />
          {t.role}
        </span>
      </Reveal>
    </div>
  );
}

function ContactCard({ contact, t }: { contact: Contact; t: BakerCopy }) {
  const { id, label, handle, Icon } = contact;
  const cta = t.contacts[id].cta;
  // WhatsApp links carry a pre-filled message in the visitor's language.
  const href = contact.href ?? whatsappLink(t.contacts.whatsapp.message);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: ${handle} (${t.opensNewTab})`}
      className="group flex h-full items-center gap-4 rounded-2xl bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-background hover:shadow-lift sm:flex-col sm:items-start sm:gap-5 sm:p-5"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-foreground">
        <Icon className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="label block text-[11px] text-primary transition-all group-hover:text-accent">
          {label}
        </span>
        <span className="mt-1 block truncate text-sm font-medium">
          {handle}
        </span>
      </span>
      <span className="label hidden items-center gap-1 text-[11px] text-foreground/50 transition-all group-hover:text-background/70 sm:flex">
        {cta}
        <RiArrowRightUpLine className="size-3.5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
      <RiArrowRightUpLine className="size-4 shrink-0 text-foreground/40 group-hover:text-accent sm:hidden" />
    </Link>
  );
}
