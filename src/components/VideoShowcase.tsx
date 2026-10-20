import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { CopyButton } from "./CopyButton";
import { videoExemplo as v } from "@/data/video";

function Badge({ n, label }: { n: string; label: string }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange font-mono text-[11px] font-semibold text-bg">
        {n}
      </span>
      {label}
    </p>
  );
}

function Op({ s }: { s: string }) {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center font-display text-5xl text-orange lg:pt-24"
    >
      {s}
    </div>
  );
}

export function VideoShowcase() {
  return (
    <section id="video" className="relative overflow-hidden border-b border-line/70 py-16 sm:py-24">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-orange/10 blur-3xl" />
      <Container className="relative">
        <Reveal className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-orange">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange" />
            Novo · vídeo com IA
          </p>
          <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-ink sm:text-6xl">
            Imagem <span className="text-orange">+</span> prompt{" "}
            <span className="text-orange">=</span> vídeo
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
            Um anúncio parado virou um vídeo de 8 segundos. A mesma imagem, um
            prompt bem estruturado e o {v.ferramenta}. Copia o prompt, troca pelo
            teu produto e testa.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[0.9fr_auto_1.25fr_auto_0.9fr]">
          {/* 1. imagem */}
          <Reveal delay={60}>
            <Badge n="1" label="A imagem" />
            <div className="paper overflow-hidden rounded-xl border border-line">
              <Image
                src={v.imagem}
                alt="Imagem de referência: entregador da Só Pizzas em carro voador entregando pizza na sacada"
                width={501}
                height={556}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-2 text-[12px] text-muted">Arte estática do anúncio, usada como referência.</p>
          </Reveal>

          <Op s="+" />

          {/* 2. prompt */}
          <Reveal delay={120} className="min-w-0">
            <div className="flex items-start justify-between gap-3">
              <Badge n="2" label="O prompt" />
              <CopyButton value={v.prompt} size="sm" label="Copiar prompt" copiedLabel="Copiado" describe="o prompt do vídeo" />
            </div>
            <div className="paper relative rounded-xl border border-line">
              <pre className="max-h-[440px] overflow-auto whitespace-pre-wrap break-words p-4 font-mono text-[12px] leading-relaxed text-ink/90">
                {v.prompt}
              </pre>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 rounded-b-xl bg-gradient-to-t from-card to-transparent" />
            </div>
            <ul className="mt-4 space-y-2">
              {v.estrutura.map((e) => (
                <li key={e.bloco} className="flex gap-3 text-[13px] leading-relaxed">
                  <span className="min-w-[118px] font-mono text-[12px] uppercase text-orange">{e.bloco}</span>
                  <span className="text-muted">{e.texto}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Op s="=" />

          {/* 3. vídeo */}
          <Reveal delay={180}>
            <Badge n="3" label="O resultado" />
            <div className="mx-auto max-w-[300px] rounded-[28px] border border-line bg-graphite p-2 shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(255,90,31,0.12)]">
              <video
                poster={v.poster}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                className="aspect-[9/16] w-full rounded-[22px] bg-black object-cover"
              >
                <source src={v.video} type="video/mp4" />
                <source src={v.videoWebm} type="video/webm" />
                Seu navegador não reproduz vídeo.
              </video>
            </div>
            <p className="mt-3 text-center text-[12px] text-muted">
              {v.duracao} · {v.formato} · ative o som no player
            </p>
          </Reveal>
        </div>

        {/* passo a passo */}
        <Reveal delay={120} className="mt-16">
          <h3 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Passo a passo no Google Flow
          </h3>
          <p className="mt-2 text-[14px] text-muted">
            Sem mistério: dá pra fazer em poucos minutos.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {v.passos.map((p, i) => (
              <li key={p.t} className="paper rounded-xl border border-line p-5">
                <span className="font-mono text-xs text-orange">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 font-display text-xl tracking-tight text-ink">{p.t}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{p.s}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[12.5px] text-muted/80">
            Os nomes dos menus do Flow podem mudar com atualizações. O resultado
            varia a cada geração: gere algumas versões e fique com a melhor.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
