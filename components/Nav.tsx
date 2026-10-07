"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <motion.nav
        aria-label="Principal"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 20 }}
        className="relative mx-auto flex max-w-[1180px] items-center gap-4 rounded-full bg-white/90 py-2 pl-3 pr-2 shadow-[0_10px_30px_-12px_rgba(8,30,41,0.25)] backdrop-blur-md"
      >
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Equipe Ponte — início">
          <Image src="/img/logo.png" alt="" width={34} height={34} className="rounded-full" priority />
          <span className="text-[17px] font-semibold tracking-[-0.03em]">Equipe Ponte</span>
        </Link>

        <ul className="mx-auto hidden items-center gap-0.5 xl:flex">
          {nav.slice(1).map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative whitespace-nowrap rounded-full px-3 py-2 text-[15px] transition-colors ${active ? "text-ink" : "text-ink/70 hover:text-ink"}`}
                >
                  {active && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-mint" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                  )}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contato"
          className="ml-auto hidden whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-[15px] font-bold text-paper transition-colors hover:bg-verde-02 sm:inline-flex xl:ml-0"
        >
          Fale conosco
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="ml-auto grid size-10 place-items-center rounded-full bg-mint sm:ml-0 xl:hidden"
        >
          <span className="relative block h-3 w-4">
            <motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="absolute left-0 top-0 h-0.5 w-4 rounded bg-ink" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="absolute left-0 top-[5px] h-0.5 w-4 rounded bg-ink" />
            <motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="absolute left-0 top-[10px] h-0.5 w-4 rounded bg-ink" />
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              id="menu-mobile"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-x-0 top-[calc(100%+8px)] flex flex-col gap-1 rounded-3xl bg-white p-3 shadow-[0_20px_40px_-16px_rgba(8,30,41,0.3)] xl:hidden"
            >
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`block rounded-2xl px-4 py-3 text-[17px] ${pathname === item.href ? "bg-mint" : "hover:bg-paper"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
