import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Equipe Ponte — psicanálise e trabalho em grupo",
    template: "%s — Equipe Ponte",
  },
  description:
    "Desde 2012, a Equipe Ponte realiza uma proposta clínica de tratamento através da psicanálise e do trabalho em grupo com crianças, adolescentes e jovens adultos.",
  icons: { icon: "/img/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
          Pular para o conteúdo
        </a>
        <Nav />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
