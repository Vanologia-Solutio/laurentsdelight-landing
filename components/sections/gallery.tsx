import Image, { type StaticImageData } from "next/image";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary, type Dictionary } from "@/lib/i18n/get-dictionary";
import { cn } from "@/lib/utils";
import apron from "@/public/images/apron.webp";
import arranged from "@/public/images/arranged.webp";
import boxes from "@/public/images/boxes.webp";
import packagings from "@/public/images/packagings.webp";

type PhotoKey = keyof Dictionary["gallery"]["photos"];

/** Collage order — every other photo sits lower for a scrapbook rhythm. */
const photos: { key: PhotoKey; src: StaticImageData }[] = [
  { key: "apron", src: apron },
  { key: "boxes", src: boxes },
  { key: "arranged", src: arranged },
  { key: "packagings", src: packagings },
];

export async function Gallery() {
  const t = await getDictionary();

  return (
    <Section id="gallery" className="bg-secondary">
      <SectionHeading
        eyebrow={t.gallery.eyebrow}
        title={t.gallery.title}
        accent={t.gallery.accent}
        description={t.gallery.description}
      />
      <Stagger
        gap={0.1}
        // Bottom padding matches the offset below, so the last shifted photo
        // isn't clipped by the next section.
        className="grid grid-cols-2 gap-3 pb-10 sm:gap-4 sm:pb-14 lg:grid-cols-4 lg:pb-16"
      >
        {photos.map(({ key, src }, i) => (
          <StaggerItem
            key={key}
            variants="scaleIn"
            // Shift visually with `translate` (not margin): it doesn't affect
            // layout, so rows keep even gaps. Tailwind's `translate` is a
            // separate CSS property from the `transform` framer animates.
            className={cn(
              i % 2 === 1 &&
                "translate-y-10 sm:translate-y-14 lg:translate-y-16",
            )}
          >
            <figure className="group relative aspect-3/4 overflow-hidden rounded-2xl bg-background sm:rounded-3xl">
              <Image
                src={src}
                alt={t.gallery.photos[key].alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 270px, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <figcaption className="label absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1.5 text-[10px] text-foreground backdrop-blur-sm sm:bottom-4 sm:left-4 sm:px-3.5 sm:py-2 sm:text-[11px]">
                {t.gallery.photos[key].caption}
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
