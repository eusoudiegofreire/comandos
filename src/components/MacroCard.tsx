import type { Macro } from "@/lib/types";
import { categoryMap } from "@/data/categories";
import { CopyButton } from "./CopyButton";

const COMO_USAR =
  "Cole o macro no seu gerador de imagem ou texto e troque o que está entre [colchetes] pelos seus dados.";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <p className="mt-1 text-[14px] leading-relaxed text-ink/90">{children}</p>
    </div>
  );
}

export function MacroCard({ macro }: { macro: Macro }) {
  const categoria = categoryMap[macro.categoria];

  return (
    <article className="paper flex h-full flex-col gap-4 rounded-xl border border-line p-5 transition-colors hover:border-orange/40">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-mono text-lg font-semibold tracking-tight text-ink">
            {macro.nome}
          </h3>
          <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-muted">
            {categoria?.label}
          </p>
        </div>
        {macro.classificacao ? (
          <span className="shrink-0 rounded-full border border-orange/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-orange">
            Biblioteca DLX
          </span>
        ) : null}
      </header>

      <div className="space-y-3.5">
        <Field label="Para que serve">{macro.paraQueServe}</Field>
        <Field label="Por que utilizar">{macro.porQueUtilizar}</Field>
        <Field label="Como usar">{COMO_USAR}</Field>
      </div>

      <div className="mt-auto space-y-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            Exemplo
          </p>
          <div className="mt-1.5 flex items-center gap-2">
            <code className="flex-1 overflow-x-auto rounded-md border border-line bg-bg px-3 py-2 font-mono text-[12.5px] text-ink">
              {macro.exemplo}
            </code>
            <CopyButton
              value={macro.exemplo}
              size="sm"
              label="Copiar"
              copiedLabel="Copiado"
              describe={`o exemplo do macro ${macro.nome}`}
            />
          </div>
        </div>

        {macro.classificacao ? (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              Classificação
            </p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-muted">
              {macro.classificacao}
            </p>
          </div>
        ) : null}
      </div>
    </article>
  );
}
