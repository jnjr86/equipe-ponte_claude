"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

const tones = {
  mint: "bg-mint",
  sage: "bg-sage",
  mist: "bg-mist",
  tide: "bg-tide",
  green: "bg-verde-01",
} as const;

export type Tone = keyof typeof tones;

/** Etiqueta em pílula acima dos títulos de seção. */
export function Eyebrow({ children, tone = "mint", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1.5 text-[13px] font-medium tracking-[-0.02em] text-ink ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}

/** Título com as últimas palavras destacadas em verde, como no Lilo. */
export function Title({
  as: Tag = "h2",
  children,
  accent,
  className = "",
  dark = false,
}: {
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
  accent?: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const size =
    Tag === "h1"
      ? "text-[clamp(2.6rem,6.4vw,4.5rem)] leading-[1.04] tracking-[-0.035em]"
      : "text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.12] tracking-[-0.035em]";
  return (
    <Tag className={`font-display font-normal text-balance ${size} ${dark ? "text-paper" : "text-ink"} ${className}`}>
      {children}
      {children && accent ? " " : null}
      {accent ? <span className={`font-extrabold ${dark ? "text-verde-01" : "text-leaf"}`}>{accent}</span> : null}
    </Tag>
  );
}

/** Cabeçalho de seção centralizado: etiqueta, título e texto de apoio. */
export function SectionHead({
  eyebrow,
  tone,
  title,
  accent,
  text,
  align = "center",
}: {
  eyebrow: string;
  tone?: Tone;
  title: ReactNode;
  accent?: ReactNode;
  text?: ReactNode;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <Reveal className={`flex flex-col gap-4 ${center ? "mx-auto max-w-2xl items-center text-center" : "items-start"}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <Title accent={accent}>{title}</Title>
      {text ? <p className="max-w-xl text-[15px] leading-relaxed tracking-[-0.01em] text-ink-soft">{text}</p> : null}
    </Reveal>
  );
}

/** Botão em pílula com "degrau" embaixo, que afunda ao clicar. */
export function Button({
  href,
  children,
  variant = "green",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "green" | "dark" | "light";
  className?: string;
  external?: boolean;
}) {
  const styles = {
    green: "bg-leaf text-white shadow-[0_6px_0_0_var(--color-leaf-dark)] hover:shadow-[0_4px_0_0_var(--color-leaf-dark)] hover:translate-y-[2px] active:translate-y-[6px] active:shadow-none px-8 py-4",
    dark: "bg-ink text-paper hover:bg-verde-02 px-5 py-2.5",
    light: "bg-verde-01 text-ink shadow-[0_6px_0_0_#3f9a6c] hover:shadow-[0_4px_0_0_#3f9a6c] hover:translate-y-[2px] active:translate-y-[6px] active:shadow-none px-8 py-4",
  }[variant];
  const cls = `inline-flex items-center justify-center gap-2 rounded-full text-[15px] font-bold transition-all duration-150 ${styles} ${className}`;
  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Entrada suave ao rolar a página. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  ...rest
}: { children: ReactNode; delay?: number; y?: number; className?: string } & Omit<HTMLMotionProps<"div">, "children">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ type: "spring", stiffness: 90, damping: 20, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Adesivo inclinado sobre fotos ("muddy hands welcome" no Lilo). */
export function Sticker({ children, className = "", rotate = -6 }: { children: ReactNode; className?: string; rotate?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6, rotate: rotate - 12 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.3 }}
      className={`absolute inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[13px] font-medium text-ink shadow-[0_8px_24px_-8px_rgba(8,30,41,0.35)] ${className}`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-leaf" aria-hidden>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
      {children}
    </motion.span>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-4 sm:px-6 ${className}`}>{children}</div>;
}
