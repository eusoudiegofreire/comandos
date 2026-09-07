import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  return (
    <section id="dlx" className="py-16 sm:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-2xl border border-line paper p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange/10 blur-3xl" />

          <div className="relative flex flex-col gap-6">
            <Image
              src="/logo.png"
              alt="DLX Digital"
              width={44}
              height={44}
              className="rounded-md"
            />

            <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
              Feito pela <span className="text-orange">DLX Digital</span>
            </h2>

            <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
              Trabalhamos com tráfego pago, criativos, copy e IA aplicada a
              anúncios — sempre tratando a IA como ferramenta para ampliar as
              hipóteses de teste. Se quiser conhecer o trabalho ou trocar uma
              ideia sobre o seu projeto, o melhor caminho é o Instagram.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-orange px-5 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
              >
                Falar com a DLX no Instagram
              </a>
              <span className="text-[13px] text-muted">
                {siteConfig.instagram.handle}
              </span>
            </div>

            <p className="max-w-2xl text-[12.5px] leading-relaxed text-muted/80">
              Este material é gratuito e serve para acelerar a produção de
              variações. Ele não promete vendas, CTR nem qualquer resultado
              garantido.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
