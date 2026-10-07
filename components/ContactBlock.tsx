"use client";

import { motion } from "motion/react";
import { contact } from "@/lib/content";
import { Button, Container, Reveal } from "./ui";
import { IconMail, IconPin, IconTrain } from "./Icons";

/** Bloco escuro de fechamento com endereço e mapa ilustrado. */
export function ContactBlock({
  title = "Fale",
  accent = "conosco.",
  text = "Se você tem interesse em falar conosco, acesse o link contato para nos enviar um e-mail ou entre em contato por meio dos telefones e redes sociais.",
  showButton = true,
}: {
  title?: string;
  accent?: string;
  text?: string;
  showButton?: boolean;
}) {
  const rows = [
    { icon: <IconPin />, label: "Endereço", value: `${contact.street} · ${contact.cep}` },
    { icon: <IconTrain />, label: "Como chegar", value: contact.near },
    { icon: <IconMail />, label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
  ];

  return (
    <section className="mt-24 sm:mt-32">
      <Container>
        <Reveal className="grid items-center gap-10 rounded-[32px] bg-ink px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:px-14">
          <div className="flex flex-col items-start gap-5">
            <span className="rounded-full bg-verde-01 px-3 py-1.5 text-[13px] font-medium text-ink">Rua Paris, 656 · Sumaré</span>
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.035em] text-paper">
              {title} <span className="font-extrabold text-verde-01">{accent}</span>
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-paper/70">{text}</p>
            {showButton && (
              <Button href="/contato" variant="light" className="mt-2">
                Escreva para nós
              </Button>
            )}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:p-6">
            <ul className="flex flex-col gap-4">
              {rows.map((r) => (
                <li key={r.label} className="flex items-start gap-3">
                  <span className="mt-0.5 text-verde-01">{r.icon}</span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-paper/50">{r.label}</span>
                    {r.href ? (
                      <a href={r.href} className="text-[15px] text-paper underline decoration-paper/30 underline-offset-4 hover:decoration-verde-01">
                        {r.value}
                      </a>
                    ) : (
                      <span className="text-[15px] text-paper">{r.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="mt-5 block overflow-hidden rounded-2xl" aria-label="Abrir o endereço no Google Maps">
              <MiniMap />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function MiniMap() {
  return (
    <svg viewBox="0 0 360 140" className="block w-full bg-[#e7f0e9]" aria-hidden>
      <path d="M0 52h360M0 104h360M96 0v140M232 0v140M300 0l-60 140" stroke="#fff" strokeWidth="9" />
      <path d="M0 52h360M0 104h360M96 0v140M232 0v140" stroke="#cfdccf" strokeWidth="1" strokeDasharray="6 8" />
      <circle cx="40" cy="80" r="12" fill="#bfe3cd" />
      <circle cx="318" cy="24" r="16" fill="#bfe3cd" />
      <circle cx="280" cy="124" r="10" fill="#bfe3cd" />
      <motion.g initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.4 }}>
        <ellipse cx="166" cy="84" rx="10" ry="3" fill="#081e29" opacity="0.15" />
        <path d="M166 82s-18-15-18-29a18 18 0 0 1 36 0c0 14-18 29-18 29Z" fill="#2a7d55" />
        <circle cx="166" cy="53" r="6.5" fill="#fff" />
      </motion.g>
    </svg>
  );
}
