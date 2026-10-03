import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactBlock } from "@/components/ContactBlock";
import { DayScene } from "@/components/DayScene";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, Reveal, Sticker, Title } from "@/components/ui";
import { oficinas, oficinasIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Oficinas",
  description: "Culinária, pintura, música, dança e teatro: as oficinas artísticas e terapêuticas da Equipe Ponte.",
};

const tints = ["bg-mint", "bg-tide", "bg-sage", "bg-mist", "bg-mint"];

export default function OficinasPage() {
  const [p1, p2, p3, p4] = oficinasIntro.paragraphs;
  return (
    <>
      <PageHero
        eyebrow="Oficinas"
        tone="tide"
        title="A arte faz falar,"
        accent="o grupo enlaça."
        text="Ela toca, a dança leva, o corpo mexe, a arte faz falar, o teatro põe em cena, o grupo enlaça e a Psicanálise escuta e articula."
      />

      <section>
        <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[32px] bg-white">
              <Image src="/img/obra-bianca-t.jpg" alt="Obra emoldurada com formas coloridas, círculos concêntricos e pequenas pinceladas em várias cores" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
            </div>
            <Sticker className="-bottom-4 right-6">Obra de Bianca T.</Sticker>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4 rounded-3xl bg-white p-6 text-[15px] leading-relaxed text-ink-soft sm:p-8">
            <h2 className="text-[22px] tracking-[-0.03em] text-ink">{oficinasIntro.title}</h2>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
            <p>
              Veja abaixo um pouco de cada oficina e acesse o link{" "}
              <Link href="/textos-e-publicacoes" className="font-medium text-leaf underline underline-offset-4">
                textos e publicações
              </Link>{" "}
              para um maior aprofundamento teórico acerca de cada uma delas e da arte como essa aliada na clínica da Psicanálise.
            </p>
            <div className="mt-2 space-y-2 border-t border-ink/10 pt-4 text-[13px] text-ink-muted">
              <p>{oficinasIntro.note}</p>
              <p>
                <span className="font-semibold text-ink-soft">Referências bibliográficas</span>
                <br />
                {oficinasIntro.reference}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Mini fotos que levam a cada oficina */}
      <section className="pt-24 sm:pt-32">
        <Container>
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Cada oficina</Eyebrow>
            <Title accent="um só grupo.">Cinco oficinas,</Title>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {oficinas.map((o, i) => (
              <Reveal key={o.id} delay={i * 0.05}>
                <a href={`#${o.id}`} className="group block rounded-3xl bg-white p-2.5 pb-4 text-center transition-transform hover:-translate-y-1.5 hover:rotate-[-1.5deg]">
                  <span className="relative block aspect-square overflow-hidden rounded-2xl">
                    <Image src={o.photo} alt="" fill sizes="220px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </span>
                  <span className="mt-3 block text-[15px] font-medium">{o.name}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-16">
        <Container className="flex flex-col gap-16 sm:gap-24">
          {oficinas.map((o, i) => (
            <article key={o.id} id={o.id} className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <Reveal className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-white">
                  <Image src={o.photo} alt={o.alt} fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
                </div>
                <Sticker className={`-bottom-4 ${i % 2 ? "left-6" : "right-6"}`} rotate={i % 2 ? 5 : -5}>
                  Oficina de {o.name.toLowerCase()}
                </Sticker>
              </Reveal>
              <Reveal delay={0.1} className="flex flex-col gap-4">
                <span className={`self-start rounded-full px-3 py-1.5 text-[13px] font-medium ${tints[i]}`}>{String(i + 1).padStart(2, "0")} · Oficina</span>
                <h2 className="text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.1] tracking-[-0.035em]">{o.name}</h2>
                <div className="space-y-4 text-[15px] leading-relaxed text-ink-soft">
                  {o.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </article>
          ))}
        </Container>
      </section>

      <section className="pt-24 sm:pt-32">
        <Container className="flex flex-col gap-10">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow tone="sage">No grupo</Eyebrow>
            <Title accent="escuta e articula.">A Psicanálise</Title>
          </Reveal>
          <Reveal delay={0.1}>
            <DayScene />
          </Reveal>
        </Container>
      </section>

      <ContactBlock />
    </>
  );
}
