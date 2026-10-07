import type { Metadata } from "next";
import Image from "next/image";
import { ContactBlock } from "@/components/ContactBlock";
import { PageHero } from "@/components/PageHero";
import { Button, Container, Eyebrow, Reveal, Sticker, Title } from "@/components/ui";
import { grupo } from "@/lib/content";

export const metadata: Metadata = {
  title: "O Grupo",
  description: "O grupo funciona em dois dias semanais, com uma sequência de oficinas que conversam entre si.",
};

export default function GrupoPage() {
  return (
    <>
      <PageHero eyebrow="O Grupo" tone="sage" title="Quartas e sextas," accent="três horas juntos" text={grupo.schedule} wideText />

      <section>
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[32px] bg-white">
              <Image src="/img/obra-pedro-m.jpg" alt="Desenho colorido de um grupo de pessoas lado a lado, cada uma de uma cor" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
            </div>
            <Sticker className="-bottom-4 left-6" rotate={5}>
              Obra de Pedro M.
            </Sticker>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4 rounded-3xl bg-white p-6 text-[15px] leading-relaxed text-ink-soft sm:p-8">
            <p>{grupo.history}</p>
          </Reveal>
        </Container>
      </section>

      <section className="pt-16 sm:pt-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl rounded-3xl bg-white p-6 text-[15px] leading-relaxed text-ink-soft sm:p-8">
            <p>{grupo.reference}</p>
          </Reveal>
        </Container>
      </section>

      <section className="pt-24 sm:pt-32">
        <Container>
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow tone="tide">Por que em grupo?</Eyebrow>
            <Title accent="com o outro.">Não nos constituímos sozinhos, mas a partir do outro e</Title>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {grupo.why.map((p, i) => (
              <Reveal key={i} delay={(i % 2) * 0.08} className={`rounded-3xl p-6 text-[15px] leading-relaxed sm:p-8 ${i === 3 ? "bg-ink text-paper/85" : "bg-white text-ink-soft"}`}>
                <span className={`mb-4 block text-[30px] leading-none ${i === 3 ? "text-verde-01" : "text-ink/30"}`}>{String(i + 1).padStart(2, "0")}</span>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-6 text-center">
            <p className="text-[15px] leading-relaxed text-ink-soft">{grupo.toOficinas}</p>
            <Button href="/oficinas">Ver as oficinas</Button>
          </Reveal>
        </Container>
      </section>

      <ContactBlock />
    </>
  );
}
