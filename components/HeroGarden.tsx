"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Flower, type FlowerKind } from "./Flower";

const flowers: { kind: FlowerKind; petal: string; center: string; h: number; leaf: "left" | "right"; rise: number }[] = [
  { kind: "daisy", petal: "#6ec597", center: "#ffffff", h: 150, leaf: "right", rise: 40 },
  { kind: "round", petal: "#2c5d78", center: "#6ec597", h: 210, leaf: "right", rise: 70 },
  { kind: "tulip", petal: "#a7b7c7", center: "#081e29", h: 120, leaf: "left", rise: 30 },
  { kind: "round", petal: "#ffffff", center: "#6ec597", h: 250, leaf: "right", rise: 90 },
  { kind: "star", petal: "#3f9a6c", center: "#ffffff", h: 170, leaf: "left", rise: 55 },
  { kind: "tulip", petal: "#6ec597", center: "#1d5c3d", h: 190, leaf: "right", rise: 65 },
  { kind: "daisy", petal: "#a7b7c7", center: "#2c5d78", h: 135, leaf: "left", rise: 35 },
];

/** Canteiro do topo: flores crescem ao carregar e sobem um pouco ao rolar. */
export function HeroGarden() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <div ref={ref} className="relative mt-10 h-[300px] sm:h-[340px]">
      <div className="absolute inset-x-0 bottom-[14px] flex items-end justify-between px-[2%] sm:px-[6%]">
        {flowers.map((f, i) => (
          <RisingFlower key={i} progress={scrollYProgress} rise={f.rise} hideOnMobile={i === 2 || i === 4}>
            <Flower kind={f.kind} petal={f.petal} center={f.center} height={f.h} leaf={f.leaf} delay={0.15 + i * 0.12} sway={2 + (i % 3)} />
          </RisingFlower>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[16px] bg-stem" />
    </div>
  );
}

function RisingFlower({
  progress,
  rise,
  hideOnMobile,
  children,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  rise: number;
  hideOnMobile: boolean;
  children: React.ReactNode;
}) {
  const y = useTransform(progress, [0.4, 1], [0, -rise]);
  return (
    <motion.div style={{ y }} className={`origin-bottom scale-[0.72] sm:scale-100 ${hideOnMobile ? "hidden sm:block" : ""}`}>
      {children}
    </motion.div>
  );
}

/** Sol que gira devagar no canto do topo. */
export function Sun({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      className={className}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.4 }}
      aria-hidden
    >
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <path key={i} d="M60 4 L66 20 L54 20 Z" fill="#a8dcbf" transform={`rotate(${i * 36} 60 60)`} />
        ))}
      </motion.g>
      <circle cx="60" cy="60" r="27" fill="#6ec597" />
    </motion.svg>
  );
}
