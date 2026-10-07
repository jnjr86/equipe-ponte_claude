import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { IconMail, IconPin, IconTrain } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Container, Reveal, Sticker } from "@/components/ui";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contato",
  description: "A Equipe Ponte fica na rua Paris, 656 – Sumaré, São Paulo, bem próximo ao metrô Vila Madalena.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        tone="mint"
        title="Fale"
        accent="conosco"
        text={
          <>
            A Equipe Ponte fica na <strong className="font-semibold text-ink">Rua Paris, 656 – Sumaré (CEP 01257-040)</strong>,
            <br />
            bem próximo ao metrô Vila Madalena.
          </>
        }
      />

      <section>
        <Container>
          <Reveal className="relative">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] bg-ink">
              <Image src="/img/sarau-2025.jpg" alt="Sarau à noite em um quintal: três pessoas se apresentam diante de um pano vermelho com a palavra Sarau, enquanto o público assiste" fill priority sizes="(min-width: 1120px) 1088px, 100vw" className="object-cover" />
            </div>
            <Sticker className="-bottom-4 right-6">Sarau da Equipe Ponte em 2025</Sticker>
          </Reveal>
        </Container>
      </section>

      <section className="pt-16 sm:pt-24">
        <Container className="grid items-stretch gap-4 lg:grid-cols-2">
          <Reveal className="rounded-3xl bg-white p-6 sm:p-8">
            <h2 className="text-[22px] tracking-[-0.03em]">Escreva para nós</h2>
            <p className="mt-1 text-[14px] text-ink-muted">As mensagens chegam em {contact.email}.</p>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5 rounded-3xl bg-ink p-6 text-paper sm:p-8">
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-verde-01"><IconPin /></span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-paper/50">Endereço</span>
                  {contact.street} · {contact.cep}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-verde-01"><IconTrain /></span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-paper/50">Como chegar</span>
                  {contact.near}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-verde-01"><IconMail /></span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-paper/50">E-mail</span>
                  <a href={`mailto:${contact.email}`} className="underline decoration-paper/30 underline-offset-4 hover:decoration-verde-01">
                    {contact.email}
                  </a>
                </span>
              </li>
            </ul>
            <div className="min-h-[280px] flex-1 overflow-hidden rounded-2xl bg-white/10">
              <iframe title="Mapa: Rua Paris, 656 – Sumaré, São Paulo" src={contact.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[280px] w-full border-0" />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
