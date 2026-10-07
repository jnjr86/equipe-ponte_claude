import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactBlock } from "@/components/ContactBlock";
import { PageHero } from "@/components/PageHero";
import { Container, Reveal, Title } from "@/components/ui";
import { equipe } from "@/lib/content";

export const metadata: Metadata = {
  title: "A Equipe",
  description: "A Ponte surgiu em 2012 e tem sua equipe formada por psicanalistas graduadas em Psicologia.",
};

const avatars = ["bg-verde-01 text-ink", "bg-cinza-02 text-ink", "bg-verde-02 text-paper", "bg-mint text-ink", "bg-ink text-paper", "bg-tide text-ink", "bg-leaf text-paper"];

const initials = (name: string) =>
  name
    .split(" ")
    .filter((w) => /^[A-ZÀ-Ú]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function EquipePage() {
  return (
    <>
      <PageHero eyebrow="A Equipe" tone="mist" title="Quem faz" accent="a Ponte" />

      <section>
        <Container>
          <Reveal>
            <figure className="overflow-hidden rounded-[32px] bg-white">
              <div className="relative aspect-[1170/596]">
                <Image src="/img/equipe.jpg" alt="Os sete integrantes da Equipe Ponte lado a lado, sorrindo, diante de uma parede com pinturas" fill priority sizes="(min-width: 1120px) 1088px, 100vw" className="object-cover" />
              </div>
              <figcaption className="px-5 py-4 text-[14px] text-ink-soft sm:px-6">{equipe.photoCaption}</figcaption>
            </figure>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-6 text-[15px] leading-relaxed text-ink-soft sm:p-8">
            <p>
              A Ponte surgiu em 2012 e tem sua equipe formada por psicanalistas graduadas em Psicologia e que trabalham por meio de diferentes dispositivos: análise (terapia) em consultório, acompanhamento terapêutico e atendimento em grupo, sendo este último o trabalho específico da Equipe Ponte, conforme melhor explicitado nos outros links do site{" "}
              <Link href="/o-grupo" className="font-medium text-leaf underline underline-offset-4">
                o grupo
              </Link>{" "}
              e{" "}
              <Link href="/oficinas" className="font-medium text-leaf underline underline-offset-4">
                oficinas
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pt-16 sm:pt-24">
        <Container>
          <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <Title accent="sete coordenadores:">Atualmente, a equipe conta com</Title>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {equipe.members.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 0.07}>
                <article className="flex h-full items-start gap-4 rounded-3xl bg-white p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                  <span className={`grid size-14 shrink-0 place-items-center rounded-full text-[17px] font-semibold ${avatars[i]}`} aria-hidden>
                    {initials(m.name)}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold tracking-[-0.02em]">{m.name}</h3>
                    <p className="mt-0.5 text-[14px] font-medium text-leaf">Psicanalista</p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{m.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactBlock text={equipe.toContact} />
    </>
  );
}
