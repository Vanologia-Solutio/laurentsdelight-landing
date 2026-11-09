import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import logo from "@/public/images/logo.webp";

type LogoProps = {
  ariaLabel: string;
  href?: string;
  /** Size the logo by height, e.g. "h-10" — width follows the aspect ratio. */
  className?: string;
  /** Rendered width hint for next/image. */
  sizes?: string;
  /** Load immediately (use for the above-the-fold header logo). */
  priority?: boolean;
};

export function Logo({
  ariaLabel,
  href = "#top",
  className,
  sizes = "160px",
  priority = false,
}: LogoProps) {
  return (
    <Link href={href} aria-label={ariaLabel} className="block w-fit shrink-0">
      <Image
        src={logo}
        alt="Laurent's Delight"
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        className={cn("h-10 w-auto", className)}
      />
    </Link>
  );
}
