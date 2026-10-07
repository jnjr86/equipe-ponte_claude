"use client";

import { motion } from "motion/react";
import { Button } from "./ui";
import { HeroGarden, Sun } from "./HeroGarden";

const spring = { type: "spring", stiffness: 90, damping: 18 } as const;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-36 sm:pt-44">
      <Sun className="pointer-events-none absolute right-[-30px] top-[76px] w-20 sm:right-[10%] sm:top-28 sm:w-32" />
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring}
          className="font-display text-balance text-[clamp(2.6rem,7vw,4.5rem)] font-normal leading-[1.04] tracking-[-0.035em]"
        >
          Psicanálise e trabalho <span className="font-extrabold text-leaf">em grupo.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          className="mt-5 max-w-lg text-[16px] leading-relaxed tracking-[-0.01em] text-ink-soft"
        >
          Desde 2012, a Equipe Ponte pesquisa e realiza uma proposta clínica de tratamento direcionada a crianças, adolescentes e jovens adultos.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.2 }} className="mt-8">
          <Button href="/o-grupo">Conheça o grupo</Button>
        </motion.div>
      </div>
      <HeroGarden />
    </section>
  );
}
