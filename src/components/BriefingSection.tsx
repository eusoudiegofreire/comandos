import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { CopyButton } from "./CopyButton";
import {
  briefingFields,
  briefingIntro,
  briefingTemplate,
} from "@/data/briefing";

export function BriefingSection() {
  return (
    <section id="briefing" className="border-b border-line/70 py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Modelo de briefing
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              A “fórmula básica de uso” do material. Escreva o macro escolhido e
              preencha os campos abaixo para dar contexto à IA.
            </p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
              {briefingIntro}
            </p>

            <dl className="mt-6 space-y-3">
              {briefingFields.map((f) => (
                <div
                  key={f.campo}
                  className="flex flex-col gap-0.5 border-b border-line/60 pb-3 sm:flex-row sm:gap-3"
                >
                  <dt className="min-w-[130px] text-[13px] font-semibold text-ink">
                    {f.campo}
                  </dt>
                  <dd className="text-[13px] text-muted">[{f.exemplo}]</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={100}>
            <div className="paper rounded-xl border border-line p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Bloco para copiar
                </p>
                <CopyButton
                  value={briefingTemplate}
                  label="Copiar briefing"
                  copiedLabel="Copiado"
                  describe="o modelo de briefing"
                />
              </div>
              <pre className="mt-4 overflow-x-auto whitespace-pre rounded-md border border-line bg-bg p-4 font-mono text-[12.5px] leading-relaxed text-ink/90">
                {briefingTemplate}
              </pre>
              <p className="mt-4 text-[12.5px] leading-relaxed text-muted">
                Precisa de uma versão mais completa para campanha? A stack{" "}
                <span className="text-ink">“Anúncio completo para Meta Ads”</span>{" "}
                traz a lista estendida (benefício principal, headline exata, CTA
                exato, elementos obrigatórios e proibidos).
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
