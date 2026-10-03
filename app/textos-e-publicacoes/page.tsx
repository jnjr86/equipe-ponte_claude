import type { Metadata } from "next";
import { ContactBlock } from "@/components/ContactBlock";
import { IconBook } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Container, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Textos e Publicações",
  description: "Textos e publicações da Equipe Ponte e de seus membros.",
};

export default function TextosPage() {
  return (
    <>
      <PageHero
        eyebrow="Textos e Publicações"
        tone="sage"
        title="Fundamentação"
        accent="teórica."
        text="A fundamentação teórica para a construção desse trabalho ao redor do público-alvo em questão, das oficinas, assim como outros textos e publicações da equipe e seus membros."
      />
      <section>
        <Container>
          <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-3 rounded-3xl bg-white px-6 py-12 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-mint text-leaf">
              <IconBook width={24} height={24} />
            </span>
            <h2 className="mt-2 text-[22px] tracking-[-0.03em]">Em breve</h2>
            <p className="text-[15px] leading-relaxed text-ink-soft">Os textos e publicações da equipe e de seus membros estarão disponíveis aqui para leitura.</p>
          </Reveal>
        </Container>
      </section>
      <ContactBlock />
    </>
  );
}
