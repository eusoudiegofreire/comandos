import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function DisclaimerCallout() {
  return (
    <section id="como-ler" className="border-b border-line/70 bg-graphite">
      <Container className="py-16 sm:py-20">
        <Reveal className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Antes de tudo: o que é um “macro”
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Os termos com barra <span className="text-ink">(“/”)</span> deste
              material são <strong className="text-ink">macros</strong>,{" "}
              <strong className="text-ink">atalhos</strong> ou{" "}
              <strong className="text-ink">fórmulas de prompting</strong>: formas
              curtas de escrever uma instrução para uma IA de imagem ou texto.
            </p>
          </div>

          <ul className="space-y-4 text-[15px] leading-relaxed">
            <li className="flex gap-3">
              <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
              <span className="text-muted">
                <strong className="text-ink">Não são comandos secretos.</strong>{" "}
                Não existe função oculta sendo revelada aqui.
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
              <span className="text-muted">
                <strong className="text-ink">
                  Não são funções oficiais nem universais do ChatGPT.
                </strong>{" "}
                Escrever <code className="rounded bg-card px-1.5 py-0.5 text-[13px] text-ink">/macro</code>{" "}
                não aciona nada “por dentro” do modelo — é só um jeito organizado
                de montar o pedido.
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
              <span className="text-muted">
                <strong className="text-ink">
                  Servem para ampliar as hipóteses de teste.
                </strong>{" "}
                Cada macro é um ponto de partida para gerar uma variação
                diferente do mesmo produto.
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
              <span className="text-muted">
                <strong className="text-ink">
                  A última categoria é a biblioteca da DLX.
                </strong>{" "}
                Os 10 comandos de “Macros personalizadas da nossa biblioteca” são
                propostas nossas — não funções nativas universais.
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal
          delay={120}
          className="paper mt-10 rounded-xl border border-line p-5 sm:p-6"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Como ler cada card
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            <span className="text-ink">Nome</span> é o atalho ·{" "}
            <span className="text-ink">Para que serve</span> e{" "}
            <span className="text-ink">Por que utilizar</span> vêm do material ·{" "}
            <span className="text-ink">Exemplo</span> é a forma de uso exata do
            documento (troque o que está entre colchetes pelos seus dados) ·{" "}
            <span className="text-ink">Classificação</span> aparece quando o
            documento a informa.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
