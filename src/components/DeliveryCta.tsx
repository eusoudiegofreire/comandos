import Image from "next/image";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";

/**
 * Chamada para a página de tráfego pago para delivery.
 * `compact` = faixa fina (usada no topo); padrão = bloco grande entre seções.
 */
export function DeliveryCta({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <a
        href={siteConfig.deliveryUrl}
        className="group block border-b border-orange/30 bg-orange text-bg"
      >
        <Container className="flex items-center justify-center gap-2 py-2 text-center text-[13px] font-semibold">
          <span aria-hidden>🍕</span>
          <span>Tem delivery? Veja como a DLX enche teu delivery de pedido</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </Container>
      </a>
    );
  }

  return (
    <section id="delivery" className="border-b border-line/70 py-16 sm:py-20">
      <Container>
        <a
          href={siteConfig.deliveryUrl}
          className="group relative block overflow-hidden rounded-2xl border border-orange/40 bg-card p-8 transition-colors hover:border-orange sm:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
          <div className="pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-orange">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange" />
                Para donos de delivery
              </p>
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-ink sm:text-6xl">
                Quer que a gente faça os anúncios
                <span className="text-orange"> do teu delivery?</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                Os macros ajudam a criar o anúncio. A DLX cuida do resto:
                campanha no Instagram, Facebook e Google, pedido rastreado no
                teu cardápio e relatório toda semana com o custo de cada pedido.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 rounded-md bg-orange px-5 py-3 text-sm font-semibold text-bg transition-opacity group-hover:opacity-90">
                Ver tráfego pago para delivery
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>

            <div className="relative mx-auto hidden md:block">
              <Image
                src="/pizza-delivery.webp"
                alt=""
                width={260}
                height={260}
                className="animate-[spin_40s_linear_infinite] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute -right-2 top-4 rotate-6 rounded-md bg-ink px-3 py-1.5 font-display text-xl tracking-wide text-bg">
                + pedidos
              </span>
            </div>
          </div>
        </a>
      </Container>
    </section>
  );
}
