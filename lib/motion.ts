import type { Transition, Variants } from "framer-motion";

/** Shared easing — a soft "expo out" used across the site. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const SPRING: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 32,
};

/** Reveal once, a little before the element is fully on screen. */
export const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;

/** Each preset accepts an optional `custom` delay (seconds). */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_OUT, delay },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASE_OUT, delay },
  }),
};

/** Text line sliding up from behind a mask (wrap in `overflow-hidden`). */
export const lineUp: Variants = {
  hidden: { y: "110%" },
  visible: (delay: number = 0) => ({
    y: "0%",
    transition: { duration: 0.9, ease: EASE_OUT, delay },
  }),
};

export const stagger = (
  staggerChildren = 0.08,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});
