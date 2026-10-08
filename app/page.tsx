import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { ContactBlock } from "@/components/ContactBlock";
import { DayScene } from "@/components/DayScene";
import { GardenCard } from "@/components/GardenCard";
import { HomeHero } from "@/components/HomeHero";
import { IconArrow, IconBook, IconHeart, IconMail, IconPalette, IconSpark, IconUsers } from "@/components/Icons";
import { Button, Container, Eyebrow, Reveal, SectionHead, Sticker, Title } from "@/components/ui";
import { equipe, gallery, grupo, home, oficinas } from "@/lib/content";

const pathIcons = [<IconPalette key="p" />, <IconBook key="b" />, <IconUsers key="u" />, <IconMail key="m" />];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Sobre a Ponte */}
      <section className="pt-20 sm:pt-28">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="relative">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[32px] bg-white">
              <Image src="/img/obra-gabriel-n.jpg" alt="Pintura abstrata com traços em azul, vermelho e amarelo sobre fundo branco" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
            </div>
            <Sticker className="-bottom-4 right-6">Obra de Gabriel N.</Sticker>
          </Reveal>
          <div className="flex flex-col gap-6">
            <Reveal className="flex flex-col items-start gap-4">
              <Eyebrow>Sobre a Ponte</Eyebrow>
              <Title accent="particular">Cada um, de um jeito muito</Title>
              <p className="text-[15px] leading-relaxed text-ink-soft">{home.intro}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <Accordion
                items={[
                  { title: "Para quem é o trabalho", icon: <IconHeart />, iconBg: "bg-mint", body: <p>{home.diagnoses}</p> },
                  { title: "O dispositivo grupal", icon: <IconUsers />, iconBg: "bg-tide", body: <p>{home.device}</p> },
                  {
                    title: "Uma trajetória com casos graves",
                    icon: <IconSpark />,
                    iconBg: "bg-sage",
                    body: (
                      <p>
                        O trabalho com o grupo realizado pela equipe tem uma história e trajetória embasada na experiência clínica com casos graves, através dos trabalhos de análise, acompanhamento terapêutico e o dispositivo grupal, que pode ser melhor compreendida ao acessar o link{" "}
                        <Link href="/o-grupo" className="font-medium text-leaf underline underline-offset-4">
                          o grupo
                        </Link>
                        .
                      </p>
                    ),
                  },
                ]}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Oficinas */}
      <section className="pt-24 sm:pt-32" id="oficinas">
        <Container>
          <SectionHead eyebrow="Oficinas" tone="tide" title="Cinco oficinas," accent="um só grupo" text={home.offer} textWidth="max-w-[1060px]" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {oficinas.map((o, i) => (
              <GardenCard key={o.id} id={o.id} index={i} name={o.name} lead={o.lead} href={`/oficinas#${o.id}`} />
            ))}
            <Reveal className="flex flex-col justify-center gap-7 rounded-3xl bg-ink p-8 text-paper sm:col-span-2 sm:p-10 lg:col-span-1">
              <p className="text-[15px] leading-relaxed text-paper/75">{home.notPedagogic}</p>
              <Button href="/oficinas" variant="light" className="self-start">
                Ver as oficinas
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* O grupo — cena interativa */}
      <section className="pt-24 sm:pt-32">
        <Container className="flex flex-col gap-10">
          <Reveal className="flex flex-col items-start gap-4">
            <Eyebrow tone="sage">O grupo</Eyebrow>
            <Title accent="três horas juntos" className="max-w-[1072px]">Quartas e sextas,</Title>
            <p className="max-w-[1072px] text-[15px] leading-relaxed text-ink-soft">{grupo.schedule}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <DayScene />
          </Reveal>
        </Container>
      </section>

      {/* A equipe */}
      <section className="pt-24 sm:pt-32">
        <Container>
          <SectionHead eyebrow="A Equipe" tone="mist" title="Quem faz" accent="a Ponte" text="A Ponte surgiu em 2012 e tem sua equipe formada por psicanalistas graduadas em Psicologia." textWidth="max-w-[750px]" />
          <Reveal className="relative mt-12">
            <div className="relative aspect-[1170/596] overflow-hidden rounded-[32px] bg-white">
              <Image src="/img/equipe.jpg" alt="Os sete integrantes da Equipe Ponte lado a lado, sorrindo, diante de uma parede com pinturas" fill sizes="(min-width: 1120px) 1088px, 100vw" className="object-cover" />
            </div>
            <Sticker rotate={-2} className="max-sm:relative max-sm:mx-3 max-sm:-mt-5 sm:-bottom-6 sm:right-6 sm:max-w-[640px]">{equipe.photoCredit}</Sticker>
          </Reveal>
          <Reveal className="mt-8 flex justify-center sm:mt-12 sm:justify-start">
            <Link href="/a-equipe" className="inline-flex items-center gap-2 text-[14px] font-medium text-ink hover:text-leaf">
              Conhecer a equipe <IconArrow width={16} height={16} />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Obras e encontros */}
      <section className="pt-24 sm:pt-32">
        <Container>
          <SectionHead eyebrow="Obras e encontros" tone="mint" title="A arte" accent="faz falar" text="Pinturas, bordados, palco e sarau: um pouco do que nasce nas oficinas." />
          <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[190px] lg:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal
                key={g.src}
                delay={(i % 4) * 0.06}
                className={`group relative overflow-hidden rounded-3xl bg-white ${["row-span-2 lg:col-span-2", "", "", "", ""][i] ?? ""}`}
              >
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 540px, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-medium">{g.label}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Caminhos */}
      <section className="pt-24 sm:pt-32">
        <Container>
          <SectionHead eyebrow="Por onde começar" tone="tide" title="Conheça" accent="a Ponte" />
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {home.paths.map((p, i) => (
              <Reveal key={p.href} delay={(i % 2) * 0.08}>
                <Link href={p.href} className="group flex h-full flex-col gap-3 rounded-3xl bg-white p-6 transition-transform hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <span className="text-[30px] leading-none text-ink/30">{String(i + 1).padStart(2, "0")}</span>
                    <span className="grid size-9 place-items-center rounded-full bg-mint text-leaf">{pathIcons[i]}</span>
                  </div>
                  <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.02em]">{p.title}</h3>
                  <p className="text-[14px] leading-relaxed text-ink-soft">{p.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center text-[15px] text-ink-soft">
            Atenciosamente,
            <br />
            <span className="font-semibold text-ink">A Equipe</span>
          </Reveal>
        </Container>
      </section>

      <ContactBlock />
    </>
  );
}
