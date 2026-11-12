import { RiInstagramLine, RiMailLine, RiPhoneLine } from "@remixicon/react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Logo } from "@/components/ui/logo";
import { contactInfo, footerLinks } from "@/lib/content";
import { localizeHref } from "@/lib/i18n/config";
import { getDictionary, getLocale } from "@/lib/i18n/get-dictionary";

export async function SiteFooter() {
  const locale = await getLocale();
  const t = await getDictionary();

  return (
    <footer className="bg-foreground px-4 py-12 text-background sm:py-14 lg:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-background/15 pb-10 sm:pb-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Logo
              ariaLabel={t.header.home}
              href={localizeHref(locale, "#top")}
              sizes="(min-width: 640px) 192px, 160px"
              className="h-14 sm:h-18"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/65">
              {t.footer.tagline}
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.titleKey}>
              <p className="eyebrow mb-5 text-accent">
                {t.footer[group.titleKey]}
              </p>
              <ul className="flex flex-col gap-3 text-sm text-background/80">
                {group.links.map((link) => (
                  <li key={link.key}>
                    <Link
                      className="hover:text-accent"
                      href={localizeHref(locale, link.href)}
                    >
                      {t.links[link.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1">
            <p className="eyebrow mb-5 text-accent">{t.footer.sayHello}</p>
            <div className="flex flex-col gap-3 text-sm text-background/80">
              <Link
                className="inline-flex w-fit items-center gap-1.5 hover:text-accent"
                href={`tel:${contactInfo.phone.tel}`}
              >
                <RiPhoneLine className="size-4 shrink-0" />{" "}
                {contactInfo.phone.display}
              </Link>
              <Link
                className="inline-flex w-fit items-center gap-1.5 break-all hover:text-accent"
                href={`mailto:${contactInfo.email}`}
              >
                <RiMailLine className="size-4 shrink-0" /> {contactInfo.email}
              </Link>
              <Link
                className="inline-flex w-fit items-center gap-1.5 hover:text-accent"
                href={contactInfo.instagram.href}
                target="_blank"
                rel="noreferrer"
              >
                <RiInstagramLine className="size-4 shrink-0" />{" "}
                {contactInfo.instagram.handle}
              </Link>
            </div>
          </div>
        </div>

        <div className="label flex flex-col gap-3 pt-7 text-[11px] text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 {t.footer.copyright}</span>
          <span>{t.footer.madeWith}</span>
          <Link
            href="#top"
            className="text-accent transition-all hover:text-background"
          >
            {t.footer.backToTop}
          </Link>
        </div>
      </Reveal>
    </footer>
  );
}
