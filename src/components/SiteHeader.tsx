import Image from "next/image";
import { Container } from "./Container";

const NAV = [
  { href: "#video", label: "Vídeo com IA" },
  { href: "#biblioteca", label: "Biblioteca" },
  { href: "#stacks", label: "Stacks" },
  { href: "#briefing", label: "Briefing" },
  { href: "#dlx", label: "DLX Digital" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#topo"
          className="flex items-center gap-2.5"
          aria-label="Biblioteca de Anúncios · DLX Digital — início"
        >
          <Image
            src="/logo.png"
            alt="DLX Digital"
            width={36}
            height={36}
            priority
            className="rounded-md"
          />
          <span className="flex flex-col leading-none">
            <span className="text-[13px] font-semibold tracking-wide text-ink">
              Biblioteca de Anúncios
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
              DLX Digital
            </span>
          </span>
        </a>

        <nav
          aria-label="Seções da página"
          className="hidden items-center gap-6 md:flex"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
