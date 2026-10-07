"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { scenes } from "@/lib/content";

const INK = "#081e29";
const skies = ["#e3f3ea", "#dcebf2", "#e9f0e5", "#e4ebf2", "#dfeae4", "#d8e8ee", "#e8f1eb"];

function Person({ cx, base, w, h, fill, arms }: { cx: number; base: number; w: number; h: number; fill: string; arms?: "up" | "side" }) {
  const r = w * 0.34;
  const hy = base - h - r * 0.55;
  const face = fill === INK || fill === "#2c5d78" ? "#fff" : INK;
  return (
    <g>
      {arms === "up" && (
        <path d={`M${cx - w * 0.35} ${base - h * 0.6} L${cx - w * 0.75} ${base - h - 10} M${cx + w * 0.35} ${base - h * 0.6} L${cx + w * 0.75} ${base - h - 10}`} stroke={INK} strokeWidth="6" strokeLinecap="round" />
      )}
      {arms === "side" && (
        <path d={`M${cx - w * 0.4} ${base - h * 0.55} L${cx - w * 0.95} ${base - h * 0.75} M${cx + w * 0.4} ${base - h * 0.55} L${cx + w * 0.95} ${base - h * 0.35}`} stroke={INK} strokeWidth="6" strokeLinecap="round" />
      )}
      <path d={`M${cx - w / 2} ${base} Q${cx - w / 2} ${base - h} ${cx} ${base - h} Q${cx + w / 2} ${base - h} ${cx + w / 2} ${base} Z`} fill={fill} stroke={INK} strokeWidth="3" />
      <circle cx={cx} cy={hy} r={r} fill={fill} stroke={INK} strokeWidth="3" />
      <circle cx={cx - r * 0.35} cy={hy - 2} r={r * 0.1} fill={face} />
      <circle cx={cx + r * 0.35} cy={hy - 2} r={r * 0.1} fill={face} />
      <path d={`M${cx - r * 0.35} ${hy + r * 0.3} Q${cx} ${hy + r * 0.65} ${cx + r * 0.35} ${hy + r * 0.3}`} fill="none" stroke={face} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

const art: Record<string, React.ReactNode> = {
  musica: (
    <g>
      <path d="M170 196V96l80-20v96" fill="none" stroke={INK} strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" />
      <ellipse cx="150" cy="196" rx="24" ry="18" fill="#2c5d78" stroke={INK} strokeWidth="3" />
      <ellipse cx="230" cy="174" rx="24" ry="18" fill="#fff" stroke={INK} strokeWidth="3" />
      <path d="M272 100q14 12 0 28M288 86q26 26 0 56" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
    </g>
  ),
  danca: (
    <g>
      <path d="M110 150q40-60 90-20t90-20" fill="none" stroke="#fff" strokeWidth="16" strokeLinecap="round" />
      <g transform="rotate(-8 200 200)">
        <Person cx={200} base={200} w={70} h={78} fill="#6ec597" arms="side" />
      </g>
    </g>
  ),
  corpo: <Person cx={200} base={200} w={76} h={86} fill="#a7b7c7" arms="up" />,
  arte: (
    <g>
      <path d="M160 200l24-110M240 200l-24-110M200 90v110" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <rect x="146" y="62" width="108" height="86" rx="10" fill="#fff" stroke={INK} strokeWidth="3" />
      <circle cx="178" cy="96" r="14" fill="#6ec597" />
      <circle cx="214" cy="116" r="16" fill="#2c5d78" />
      <path d="M160 132q20-14 40 0t40-6" fill="none" stroke="#a7b7c7" strokeWidth="7" strokeLinecap="round" />
    </g>
  ),
  teatro: (
    <g>
      <g transform="rotate(10 236 120)">
        <path d="M200 80h72v50a36 36 0 0 1-72 0z" fill="#a7b7c7" stroke={INK} strokeWidth="3" />
        <circle cx="222" cy="112" r="5" fill={INK} />
        <circle cx="250" cy="112" r="5" fill={INK} />
        <path d="M220 146q16-14 32 0" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </g>
      <g transform="rotate(-10 166 130)">
        <path d="M124 92h84v56a42 42 0 0 1-84 0z" fill="#6ec597" stroke={INK} strokeWidth="3" />
        <circle cx="150" cy="128" r="6" fill={INK} />
        <circle cx="182" cy="128" r="6" fill={INK} />
        <path d="M146 152q20 22 40 0" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      </g>
    </g>
  ),
  grupo: (
    <g>
      <path d="M150 158q25 22 50 0M200 158q25 22 50 0" fill="none" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <Person cx={135} base={200} w={56} h={62} fill="#6ec597" />
      <Person cx={200} base={200} w={62} h={82} fill="#fff" />
      <Person cx={265} base={200} w={56} h={66} fill="#2c5d78" />
    </g>
  ),
  psicanalise: (
    <g>
      <path d="M118 80h120a18 18 0 0 1 18 18v40a18 18 0 0 1-18 18h-70l-30 24v-24h-20a18 18 0 0 1-18-18V98a18 18 0 0 1 18-18z" fill="#fff" stroke={INK} strokeWidth="3" />
      <path d="M216 120h66a16 16 0 0 1 16 16v34a16 16 0 0 1-16 16h-8v20l-24-20h-34a16 16 0 0 1-16-16v-34a16 16 0 0 1 16-16z" fill="#6ec597" stroke={INK} strokeWidth="3" />
      <circle cx="152" cy="118" r="5" fill={INK} />
      <circle cx="176" cy="118" r="5" fill={INK} />
      <circle cx="200" cy="118" r="5" fill={INK} />
    </g>
  ),
};

const sceneImages: Record<string, { src: string; alt: string }> = {
  musica: { src: "/img/cena-musica.jpg", alt: "Ilustração: pessoa sorridente de fones de ouvido abraçando um disco, diante de uma playlist de músicas" },
};

/** Cena interativa: escolha uma frase e o "dia" da ilustração muda junto. */
export function DayScene() {
  const [active, setActive] = useState(0);
  const scene = scenes[active];
  const t = active / (scenes.length - 1);
  const sunX = 60 + t * 280;
  const sunY = 70 - Math.sin(t * Math.PI) * 30;

  return (
    <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div role="tablist" aria-label="O que acontece no grupo" className="order-2 grid grid-cols-2 gap-2 rounded-3xl bg-white p-2 lg:order-1">
        {scenes.map((s, i) => {
          const on = i === active;
          return (
            <button
              key={s.key}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i)}
              className={`relative rounded-2xl px-4 py-3.5 text-left transition-colors ${i === scenes.length - 1 ? "col-span-2" : ""} ${on ? "text-paper" : "text-ink hover:bg-paper"}`}
            >
              {on && <motion.span layoutId="scene-pill" className="absolute inset-0 rounded-2xl bg-ink" transition={{ type: "spring", stiffness: 320, damping: 30 }} />}
              <span className="relative block text-[17px] font-semibold tracking-[-0.02em]">{s.label}</span>
              <span className={`relative block text-[13px] ${on ? "text-paper/70" : "text-ink-muted"}`}>{s.verb}</span>
            </button>
          );
        })}
      </div>

      <div className="relative order-1 overflow-hidden rounded-3xl lg:order-2">
        <motion.svg viewBox="0 0 400 260" className="block w-full" animate={{ backgroundColor: skies[active] }} transition={{ duration: 0.6 }} role="img" aria-label={`Ilustração: ${scene.line}`}>
          <motion.circle r="26" fill="#6ec597" initial={false} animate={{ cx: sunX, cy: sunY }} transition={{ type: "spring", stiffness: 60, damping: 14 }} />
          <motion.circle r="38" fill="#6ec597" opacity="0.25" initial={false} animate={{ cx: sunX, cy: sunY }} transition={{ type: "spring", stiffness: 60, damping: 14 }} />
          <path d="M0 210 Q100 186 200 200 T400 196 V260 H0Z" fill="#9fd4b7" />
          <path d="M0 226 Q120 208 220 220 T400 214 V260 H0Z" fill="#6ec597" />
          <AnimatePresence mode="wait">
            <motion.g
              key={scene.key}
              initial={{ opacity: 0, y: 30, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              style={{ originX: "50%", originY: "100%" }}
            >
              {art[scene.key]}
            </motion.g>
          </AnimatePresence>
        </motion.svg>
        {/* Cenas com imagem própria substituem a ilustração */}
        <AnimatePresence>
          {sceneImages[scene.key] && (
            <motion.img
              key={scene.key}
              src={sceneImages[scene.key].src}
              alt={sceneImages[scene.key].alt}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
