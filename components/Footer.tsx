import Image from "next/image";
import Link from "next/link";
import { contact, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-5 px-4 py-10 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 self-start">
          <Image src="/img/logo.png" alt="" width={30} height={30} className="rounded-full" />
          <span className="text-[17px] font-semibold tracking-[-0.03em]">Equipe Ponte</span>
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-ink-soft">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-ink-soft">
          <li>
            <a href={`mailto:${contact.email}`} className="hover:text-ink">
              {contact.email}
            </a>
          </li>
          <li>{contact.street}</li>
          <li>{contact.cep}</li>
        </ul>
        <p className="text-[13px] text-ink-muted">© Equipe Ponte</p>
      </div>
    </footer>
  );
}
