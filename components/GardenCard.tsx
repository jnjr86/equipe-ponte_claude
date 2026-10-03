"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Flower, type FlowerKind } from "./Flower";
import { IconArrow } from "./Icons";

const looks: Record<string, { kind: FlowerKind; petal: string; center: string; dot: string }> = {
  culinaria: { kind: "round", petal: "#6ec597", center: "#ffffff", dot: "bg-verde-01" },
  pintura: { kind: "daisy", petal: "#2c5d78", center: "#6ec597", dot: "bg-verde-02" },
  musica: { kind: "tulip", petal: "#a7b7c7", center: "#081e29", dot: "bg-cinza-02" },
  danca: { kind: "star", petal: "#3f9a6c", center: "#ffffff", dot: "bg-leaf" },
  teatro: { kind: "round", petal: "#081e29", center: "#6ec597", dot: "bg-ink" },
};

/** Cartão de oficina com um "canteiro" ilustrado, no formato dos programas do Lilo. */
export function GardenCard({ id, index, name, lead, href }: { id: string; index: number; name: string; lead: string; href: string }) {
  const look = looks[id];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ type: "spring", stiffness: 90, damping: 18, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <Link href={href} className="flex h-full flex-col rounded-3xl bg-white p-4 sm:p-5">
        <div className="relative h-44 overflow-hidden rounded-2xl bg-sky">
          <span className="absolute right-2.5 top-2.5 rounded-full bg-paper px-2.5 py-1 text-[12px] font-medium text-ink">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="absolute inset-x-0 bottom-0 h-14 bg-ground" />
          <div className="absolute bottom-9 left-1/2 -translate-x-1/2 transition-transform duration-500 group-hover:-translate-y-2">
            <Mount>
              <Flower kind={look.kind} petal={look.petal} center={look.center} height={84} headScale={1.45} delay={0.2 + index * 0.08} />
            </Mount>
          </div>
        </div>
        <h3 className="mt-5 text-[22px] tracking-[-0.03em]">{name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{lead}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium">
          <span className={`size-2 rounded-full ${look.dot}`} />
          Ler sobre a oficina
          <IconArrow className="transition-transform group-hover:translate-x-1" width={16} height={16} />
        </span>
      </Link>
    </motion.div>
  );
}

/** Só monta a flor quando o cartão entra na tela, para ela crescer à vista. */
function Mount({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="h-[150px] w-[80px]">
      {visible ? children : null}
    </div>
  );
}
