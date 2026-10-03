"use client";

import { useState } from "react";
import { contact } from "@/lib/content";

const field =
  "w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-leaf focus:bg-white";

/**
 * Por enquanto o envio abre o programa de e-mail de quem escreve, já com a mensagem preenchida.
 * Para receber direto na caixa de entrada sem isso, é preciso ligar um serviço de formulários.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("nome") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("mensagem") ?? "");
    const subject = encodeURIComponent(`Contato pelo site — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3">
      <label className="flex flex-col gap-1.5 text-[13px] font-medium">
        Nome
        <input name="nome" required autoComplete="name" className={field} />
      </label>
      <label className="flex flex-col gap-1.5 text-[13px] font-medium">
        E-mail
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="flex flex-col gap-1.5 text-[13px] font-medium">
        Mensagem
        <textarea name="mensagem" required rows={5} className={`${field} resize-y`} />
      </label>
      <button
        type="submit"
        className="mt-2 self-start rounded-full bg-leaf px-8 py-4 text-[15px] font-bold text-white shadow-[0_6px_0_0_var(--color-leaf-dark)] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--color-leaf-dark)] active:translate-y-[6px] active:shadow-none"
      >
        Enviar mensagem
      </button>
      {sent && <p className="text-[14px] text-ink-soft">Abrimos seu programa de e-mail com a mensagem pronta para enviar.</p>}
    </form>
  );
}
