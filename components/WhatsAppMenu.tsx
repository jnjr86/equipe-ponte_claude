"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { contact } from "@/lib/content";
import { SocialWhatsApp } from "./Icons";

/** Ícone do WhatsApp no rodapé, com menu para escolher um dos telefones. */
export function WhatsAppMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="WhatsApp da Equipe Ponte"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 transition-colors hover:text-verde-01 ${open ? "text-verde-01" : "text-paper/85"}`}
      >
        <SocialWhatsApp />
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="m6 15 6-6 6 6" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            id={id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-[calc(100%+12px)] right-0 z-20 w-max min-w-[200px] rounded-2xl bg-white p-2 text-ink shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)]"
          >
            {contact.phones.map((ph) => (
              <li key={ph.whatsapp}>
                <a
                  href={ph.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[14px] font-medium hover:bg-mint"
                >
                  <SocialWhatsApp width={18} height={18} className="text-leaf" />
                  {ph.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
