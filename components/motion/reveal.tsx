"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

import {
  fadeIn,
  fadeUp,
  lineUp,
  scaleIn,
  stagger,
  VIEWPORT,
} from "@/lib/motion";

/**
 * Presets are referenced by name so server components can pass them as props
 * (variant objects with functions can't cross the server → client boundary).
 */
const presets = { fadeUp, fadeIn, scaleIn, lineUp } satisfies Record<
  string,
  Variants
>;

export type Preset = keyof typeof presets;

const resolve = (variants: Preset | Variants) =>
  typeof variants === "string" ? presets[variants] : variants;

/**
 * Client-side motion wrappers so server components can opt into animation
 * without becoming client components themselves.
 */

const tags = {
  div: motion.div,
  ul: motion.ul,
  li: motion.li,
  span: motion.span,
  p: motion.p,
} as const;

type Tag = keyof typeof tags;

type MotionBaseProps = Omit<HTMLMotionProps<"div">, "ref" | "variants"> & {
  as?: Tag;
};

type RevealProps = MotionBaseProps & {
  /** A preset name, or a plain (serializable) variants object. */
  variants?: Preset | Variants;
  /** Delay in seconds. */
  delay?: number;
  /** `view` animates when scrolled into view; `mount` animates immediately. */
  trigger?: "view" | "mount";
};

/** Animates a single element in. */
export function Reveal({
  as = "div",
  variants = "fadeUp",
  delay = 0,
  trigger = "view",
  ...props
}: RevealProps) {
  const Component = tags[as] as typeof motion.div;
  return (
    <Component
      variants={resolve(variants)}
      custom={delay}
      initial="hidden"
      {...(trigger === "mount"
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: VIEWPORT })}
      {...props}
    />
  );
}

type StaggerProps = MotionBaseProps & {
  /** Seconds between children. */
  gap?: number;
  /** Seconds before the first child. */
  delay?: number;
  trigger?: "view" | "mount";
};

/** Orchestrates `<StaggerItem>` children one after another. */
export function Stagger({
  as = "div",
  gap = 0.08,
  delay = 0,
  trigger = "view",
  ...props
}: StaggerProps) {
  const Component = tags[as] as typeof motion.div;
  return (
    <Component
      variants={stagger(gap, delay)}
      initial="hidden"
      {...(trigger === "mount"
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: VIEWPORT })}
      {...props}
    />
  );
}

type StaggerItemProps = MotionBaseProps & { variants?: Preset | Variants };

/** A child of `<Stagger>` — inherits its timing. */
export function StaggerItem({
  as = "div",
  variants = "fadeUp",
  ...props
}: StaggerItemProps) {
  const Component = tags[as] as typeof motion.div;
  return <Component variants={resolve(variants)} {...props} />;
}
