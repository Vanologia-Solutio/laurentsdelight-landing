import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { FlavorCard } from "@/components/sections/flavor-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { flavors } from "@/lib/content";
import { getDictionary, getLocale } from "@/lib/i18n/get-dictionary";

export async function Flavors() {
  const locale = await getLocale();
  const t = await getDictionary();

  return (
    <Section id="flavors" className="bg-foreground text-background">
      <SectionHeading
        tone="dark"
        eyebrow={t.flavors.eyebrow}
        title={t.flavors.title}
        accent={t.flavors.accent}
        description={t.flavors.description}
      />
      <Stagger
        gap={0.1}
        className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-4"
      >
        {flavors.map((flavor) => (
          <StaggerItem key={flavor.id}>
            <FlavorCard flavor={flavor} locale={locale} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
