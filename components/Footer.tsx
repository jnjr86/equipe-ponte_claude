import Image from "next/image";
import Link from "next/link";
import { contact, nav } from "@/lib/content";
import { SocialEmail, SocialFacebook, SocialInstagram } from "./Icons";

const social = [
  { href: `mailto:${contact.email}`, label: `E-mail: ${contact.email}`, Icon: SocialEmail },
  { href: contact.facebook, label: "Facebook da Equipe Ponte", Icon: SocialFacebook },
  { href: contact.instagram, label: "Instagram da Equipe Ponte", Icon: SocialInstagram },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-[1120px] px-4 pb-8 pt-10 sm:px-6 sm:pt-12">
        <div className="flex items-start justify-between gap-6">
          <Link href="/" aria-label="Equipe Ponte — início">
            <Image src="/img/logo-horizontal.png" alt="Equipe Ponte" width={1436} height={597} className="h-16 w-auto sm:h-20" />
          </Link>
          <a href="#" className="mt-5 shrink-0 text-[14px] text-paper/85 transition-colors hover:text-verde-01">
            Voltar ao início ↑
          </a>
        </div>

        <nav aria-label="Rodapé" className="mt-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14px]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper/85 transition-colors hover:text-verde-01">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-paper/20 pt-6">
          <p className="text-[13px] text-paper/70">© {new Date().getFullYear()} Equipe Ponte</p>
          <ul className="flex items-center gap-4">
            {social.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="block text-paper/85 transition-colors hover:text-verde-01"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
