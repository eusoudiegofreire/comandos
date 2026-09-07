import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { totalMacros } from "@/data/macros";
import { categories } from "@/data/categories";
import { stacks } from "@/data/stacks";

const STATS = [
  { valor: String(totalMacros), rotulo: "macros e atalhos" },
  { valor: String(categories.length), rotulo: "categorias" },
  { valor: String(stacks.length), rotulo: "stacks prontas" },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden border-b border-line/70">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-72 w-72 rounded-full bg-orange/10 blur-3xl" />

      <Container className="relative py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Material gratuito · DLX Digital
          </p>

          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Biblioteca de macros para{" "}
            <span className="text-orange">criar anúncios</span> com IA
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Macros e fórmulas de prompting para criar mais hipóteses visuais e
            acelerar a produção de anúncios. Aqui a IA aparece como ferramenta
            para ampliar as possibilidades de teste — não como atalho para
            resultado garantido.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            É o conteúdo prometido no carrossel, reunido de forma organizada:
            todos os macros do material, separados por categoria, com busca,
            filtros, exemplos e as stacks prontas.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-12 flex flex-wrap gap-x-10 gap-y-6"
        >
          {STATS.map((s) => (
            <div key={s.rotulo}>
              <div className="font-display text-4xl text-ink">{s.valor}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted">
                {s.rotulo}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={200} className="mt-12">
          <div className="flex flex-wrap gap-3">
            <a
              href="#biblioteca"
              className="rounded-md bg-orange px-5 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              Abrir a biblioteca
            </a>
            <a
              href="#como-ler"
              className="rounded-md border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-orange/50"
            >
              Como ler os macros
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
