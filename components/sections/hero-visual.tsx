"use client";

import { RiSparklingLine } from "@remixicon/react";
import { motion } from "framer-motion";
import Image from "next/image";

import { useI18n } from "@/components/providers/i18n-provider";
import { EASE_OUT } from "@/lib/motion";
import plate from "@/public/images/plate.webp";

export function HeroVisual() {
  const { t } = useI18n();

  return (
    <div className="relative flex min-h-80 items-center justify-center sm:min-h-112 lg:min-h-144">
      {/* Breathing backdrop */}
      <motion.div
        aria-hidden
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: [1, 1.04, 1], opacity: 1 }}
        transition={{
          opacity: { duration: 0.8, ease: EASE_OUT },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute size-[88%] rounded-full bg-highlight/40 sm:size-3/4"
      />

      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 12 }}
        transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.7 }}
        className="eyebrow absolute right-0 top-0 text-[10px] text-primary sm:right-8 sm:top-2 sm:text-xs"
      >
        {t.hero.established} <span className="mx-1.5">✳</span> {t.hero.place}
      </motion.div>

      {/* Hero photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: EASE_OUT, delay: 0.25 }}
        className="relative z-10 aspect-square w-[78%] max-w-136 overflow-hidden rounded-[48%_52%_44%_56%] bg-secondary shadow-stamp-sm sm:w-[82%] sm:shadow-stamp lg:shadow-stamp-lg"
      >
        <Image
          src={plate}
          alt={t.hero.imageAlt}
          fill
          sizes="(min-width: 1024px) 544px, 80vw"
          placeholder="blur"
          loading="eager"
          fetchPriority="high"
          className="object-cover"
        />
      </motion.div>

      {/* Mood card */}
      <motion.div
        initial={{ opacity: 0, x: -24, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.6 }}
        className="absolute bottom-0 left-0 z-20 w-40 rounded-2xl bg-surface p-3.5 shadow-lg sm:bottom-8 sm:w-48 sm:p-4 lg:left-2"
      >
        <div className="eyebrow mb-1.5 flex items-center justify-between text-[10px] text-primary sm:mb-2 sm:text-[11px]">
          <span>{t.hero.mood}</span>
          <motion.span
            animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2 }}
          >
            <RiSparklingLine className="size-3.5" />
          </motion.span>
        </div>
        <p className="font-display text-lg font-bold leading-tight tracking-[-0.02em] sm:text-xl">
          {t.hero.moodText}
        </p>
      </motion.div>
    </div>
  );
}
