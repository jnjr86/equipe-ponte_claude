"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState, type ReactNode } from "react";
import { IconPlus } from "./Icons";

export type AccordionItem = {
  title: string;
  icon?: ReactNode;
  iconBg?: string;
  body: ReactNode;
};

/** Lista de itens que abrem e fecham, um de cada vez. */
export function Accordion({ items, defaultOpen = null }: { items: AccordionItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const id = useId();

  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className="rounded-2xl bg-white">
            <h3>
              <button
                type="button"
                id={`${id}-b${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-p${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-3 px-4 py-4 text-left text-[15px] font-medium tracking-[-0.01em] sm:px-5"
              >
                {item.icon ? (
                  <span className={`grid size-9 shrink-0 place-items-center rounded-full text-ink ${item.iconBg ?? "bg-mint"}`}>{item.icon}</span>
                ) : null}
                <span className="flex-1">{item.title}</span>
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="text-ink-muted">
                  <IconPlus />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-p${i}`}
                  role="region"
                  aria-labelledby={`${id}-b${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 px-4 pb-5 text-[15px] leading-relaxed text-ink-soft sm:px-5">{item.body}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
