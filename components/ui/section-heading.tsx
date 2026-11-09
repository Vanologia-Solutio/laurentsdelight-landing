import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** Italic serif word(s) appended to the title. */
  accent: string;
  description: string;
  tone?: "light" | "dark";
  className?: string;
};

const tones = {
  light: { accent: "text-primary", description: "text-foreground/70" },
  dark: { accent: "text-accent", description: "text-background/70" },
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  tone = "light",
  className,
}: SectionHeadingProps) {
  const colors = tones[tone];

  return (
    <Stagger
      gap={0.1}
      className={cn(
        "mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-6 lg:mb-16",
        className,
      )}
    >
      <div>
        <StaggerItem as="p" className={cn("eyebrow mb-4", colors.accent)}>
          {eyebrow}
        </StaggerItem>
        <h2 className="display-2 mb-[-0.1em] max-w-xl overflow-hidden pb-[0.1em] pr-[0.1em]">
          <StaggerItem as="span" variants="lineUp" className="block">
            {title}{" "}
            <em
              className={cn(
                "font-serif font-normal tracking-[-0.02em]",
                colors.accent,
              )}
            >
              {accent}
            </em>
          </StaggerItem>
        </h2>
      </div>
      <StaggerItem
        as="p"
        className={cn("max-w-xs text-base leading-relaxed", colors.description)}
      >
        {description}
      </StaggerItem>
    </Stagger>
  );
}
