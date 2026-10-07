"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Eyebrow, Title, type Tone } from "./ui";
import { Sun } from "./HeroGarden";

/** Abertura das páginas internas: etiqueta, título grande e texto de apoio. */
export function PageHero({
  eyebrow,
  tone,
  title,
  accent,
  text,
  wideText = false,
}: {
  eyebrow: string;
  tone?: Tone;
  title: string;
  accent?: string;
  text?: ReactNode;
  /** Texto de apoio com até 1080px de largura, em vez de 576px. */
  wideText?: boolean;
}) {
  return (
    <section className="relative overflow-hidden pb-10 pt-32 sm:pb-16 sm:pt-40">
      <Sun className="pointer-events-none absolute -right-8 top-[76px] w-20 sm:right-[8%] sm:w-32" />
      <div className={`mx-auto flex flex-col items-center gap-5 px-4 text-center ${wideText ? "max-w-[1112px]" : "max-w-3xl"}`}>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.08 }} className="max-w-[736px]">
          <Title as="h1" accent={accent}>
            {title}
          </Title>
        </motion.div>
        {text ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.16 }}
            className={`${wideText ? "max-w-[1080px]" : "max-w-xl"} text-[16px] leading-relaxed tracking-[-0.01em] text-ink-soft`}
          >
            {text}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
