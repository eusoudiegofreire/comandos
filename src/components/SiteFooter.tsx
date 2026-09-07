import { Container } from "./Container";
import { siteConfig } from "@/config/site";
import { totalMacros } from "@/data/macros";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/70 bg-graphite py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[13px] text-ink">
            Biblioteca de Anúncios · {siteConfig.brand}
          </p>
          <p className="mt-1 text-[12px] text-muted">
            {totalMacros} macros e atalhos de prompting · material gratuito
          </p>
        </div>
        <div className="flex items-center gap-4 text-[12px] text-muted">
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            {siteConfig.instagram.handle}
          </a>
          <span aria-hidden>·</span>
          <span>© {year}</span>
        </div>
      </Container>
    </footer>
  );
}
