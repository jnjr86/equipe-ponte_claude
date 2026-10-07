"use client";

import { Button, Container, Reveal } from "./ui";

/** Bloco escuro de fechamento: título, texto de apoio e botão, centralizados. */
export function ContactBlock({
  title = "Fale",
  accent = "conosco",
  text = "Se você tem interesse em falar conosco, acesse o link contato para nos enviar um e-mail ou entre em contato por meio dos telefones e redes sociais.",
  showButton = true,
}: {
  title?: string;
  accent?: string;
  text?: string;
  showButton?: boolean;
}) {
  return (
    <section className="mt-24 sm:mt-32">
      <Container>
        <Reveal className="flex flex-col items-center gap-5 rounded-[32px] bg-ink px-6 py-14 text-center sm:px-10 sm:py-20">
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.035em] text-paper">
            {title} <span className="font-extrabold text-verde-01">{accent}</span>
          </h2>
          <p className="max-w-[650px] text-[15px] leading-relaxed text-paper/70">{text}</p>
          {showButton && (
            <Button href="/contato" variant="light" className="mt-2">
              Escreva para nós
            </Button>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
