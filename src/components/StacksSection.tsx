import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { CopyButton } from "./CopyButton";
import { stacks } from "@/data/stacks";

function stackToText(macros: string[], completeCom?: string[]) {
  const chain = [macros[0], ...macros.slice(1).map((m) => `+ ${m}`)].join("\n");
  if (!completeCom?.length) return chain;
  return `${chain}\n\nDepois complete com:\n${completeCom.join("\n")}`;
}

export function StacksSection() {
  return (
    <section id="stacks" className="border-b border-line/70 bg-graphite py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            5 stacks prontas para anúncios
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Combinações de macros na ordem sugerida pelo material. Cada stack é um
            ponto de partida para gerar uma hipótese visual diferente.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {stacks.map((stack, i) => (
            <Reveal
              key={stack.slug}
              delay={i * 60}
              className="paper flex h-full flex-col gap-4 rounded-xl border border-line p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-xs text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display text-xl tracking-tight text-ink sm:text-2xl">
                    {stack.nome}
                  </h3>
                </div>
                <CopyButton
                  value={stackToText(stack.macros, stack.completeCom)}
                  size="sm"
                  label="Copiar stack"
                  copiedLabel="Copiado"
                  describe={`a stack ${stack.nome}`}
                />
              </div>

              <ul className="space-y-1 font-mono text-[13px] text-ink/90">
                {stack.macros.map((m, idx) => (
                  <li key={`${stack.slug}-${m}`}>
                    {idx > 0 ? <span className="text-orange">+ </span> : null}
                    {m}
                  </li>
                ))}
              </ul>

              {stack.quandoUsar ? (
                <p className="mt-auto text-[13.5px] leading-relaxed text-muted">
                  {stack.quandoUsar}
                </p>
              ) : null}

              {stack.completeCom ? (
                <div className="mt-auto rounded-md border border-line bg-bg p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    Depois complete com
                  </p>
                  <ul className="mt-2 grid grid-cols-1 gap-x-4 gap-y-1 text-[12.5px] text-ink/90 sm:grid-cols-2">
                    {stack.completeCom.map((campo) => (
                      <li key={campo}>{campo}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
