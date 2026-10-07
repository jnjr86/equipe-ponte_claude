import type { Metadata } from "next";
import { ContactBlock } from "@/components/ContactBlock";
import { IconCalendar } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Container, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Eventos e Exposições",
  description: "Eventos e exposições da Equipe Ponte.",
};

export default function EventosPage() {
  return (
    <>
      <PageHero
        eyebrow="Eventos e Exposições"
        tone="sage"
        title="Eventos e"
        accent="exposições"
      />
      <section>
        <Container>
          <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-3 rounded-3xl bg-white px-6 py-12 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-mint text-leaf">
              <IconCalendar width={24} height={24} />
            </span>
            <h2 className="mt-2 text-[22px] tracking-[-0.03em]">Em breve</h2>
            <p className="text-[15px] leading-relaxed text-ink-soft">Os eventos e exposições da Equipe Ponte serão divulgados aqui.</p>
          </Reveal>
        </Container>
      </section>
      <ContactBlock />
    </>
  );
}
