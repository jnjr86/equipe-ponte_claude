"use client";

import { motion } from "motion/react";

export type FlowerKind = "daisy" | "round" | "tulip" | "star";

type Props = {
  kind: FlowerKind;
  petal: string;
  center?: string;
  height: number;
  leaf?: "left" | "right";
  delay?: number;
  sway?: number;
  headScale?: number;
  className?: string;
};

const STEM = "var(--color-stem)";

function Head({ kind, petal, center }: { kind: FlowerKind; petal: string; center: string }) {
  switch (kind) {
    case "daisy":
      return (
        <g>
          {Array.from({ length: 6 }, (_, i) => (
            <ellipse key={i} cx="0" cy="-13" rx="7.5" ry="12" fill={petal} transform={`rotate(${i * 60})`} />
          ))}
          <circle r="8" fill={center} />
        </g>
      );
    case "round":
      return (
        <g>
          {Array.from({ length: 5 }, (_, i) => (
            <circle key={i} cx="0" cy="-12" r="10" fill={petal} transform={`rotate(${i * 72})`} />
          ))}
          <circle r="8.5" fill={center} />
          <circle r="3.5" fill={petal} />
        </g>
      );
    case "tulip":
      return (
        <g transform="translate(0 4)">
          <path d="M-13 -14 L-7 -6 L0 -16 L7 -6 L13 -14 L12 2 Q0 14 -12 2 Z" fill={petal} />
          <path d="M-7 -6 L0 -16 L7 -6" fill="none" stroke={center} strokeWidth="2" strokeLinejoin="round" opacity="0.6" />
        </g>
      );
    case "star":
      return (
        <g>
          {Array.from({ length: 5 }, (_, i) => (
            <path key={i} d="M0 0 Q-7 -12 0 -24 Q7 -12 0 0Z" fill={petal} transform={`rotate(${i * 72})`} />
          ))}
          <circle r="7" fill={center} />
        </g>
      );
  }
}

/** Flor ilustrada: o caule cresce, a flor abre e depois balança devagar. */
export function Flower({ kind, petal, center = "#ffffff", height, leaf = "right", delay = 0, sway = 3, headScale = 1.6, className = "" }: Props) {
  const w = 80;
  const h = height + 40;
  const top = 14 + 22 * headScale;
  const stem = `M${w / 2} ${h} C ${w / 2 - 4} ${h - height * 0.4}, ${w / 2 + 5} ${h - height * 0.7}, ${w / 2} ${top}`;
  const ly = h - height * 0.42;
  const leafPath =
    leaf === "right"
      ? `M${w / 2 + 1} ${ly} q 12 -12 24 -6 q -10 12 -24 6Z`
      : `M${w / 2 - 1} ${ly} q -12 -12 -24 -6 q 10 12 24 6Z`;

  return (
    <motion.svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      className={`overflow-visible ${className}`}
      style={{ transformOrigin: "50% 100%" }}
      animate={{ rotate: [-sway, sway, -sway] }}
      transition={{ duration: 5 + sway, repeat: Infinity, ease: "easeInOut", delay: delay + 1.2 }}
      aria-hidden
    >
      <motion.path
        d={stem}
        fill="none"
        stroke={STEM}
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
      />
      <motion.path
        d={leafPath}
        fill={STEM}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ transformOrigin: `${w / 2}px ${ly}px` }}
        transition={{ type: "spring", stiffness: 200, damping: 12, delay: delay + 0.55 }}
      />
      <g transform={`translate(${w / 2} ${top}) scale(${headScale})`}>
        <motion.g
          initial={{ scale: 0, rotate: -40 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 11, delay: delay + 0.85 }}
        >
          <Head kind={kind} petal={petal} center={center} />
        </motion.g>
      </g>
    </motion.svg>
  );
}
