import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentProps<"section"> & {
  /** Classes for the inner max-w-6xl container (grid/flex layout lives here). */
  containerClassName?: string;
};

/**
 * The one layout primitive every page section uses: a full-bleed shell with
 * px-4 gutters (put backgrounds here) and a centered max-w-6xl container.
 */
export function Section({
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("px-4 py-16 sm:py-20 lg:py-28", className)}
      {...props}
    >
      <div className={cn("mx-auto max-w-6xl", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
