"use client";

import { useId, useMemo, useState } from "react";
import type { CategoryId } from "@/lib/types";
import { macros } from "@/data/macros";
import { categories } from "@/data/categories";
import { Container } from "./Container";
import { MacroCard } from "./MacroCard";

type Filter = CategoryId | "todas";

const norm = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export function LibraryExplorer() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("todas");
  const searchId = useId();

  const q = norm(query.trim());

  const filtered = useMemo(() => {
    const tokens = q ? q.split(/\s+/) : [];
    return macros.filter((m) => {
      if (filter !== "todas" && m.categoria !== filter) return false;
      if (tokens.length === 0) return true;
      const haystack = norm(
        [
          m.nome,
          m.paraQueServe,
          m.porQueUtilizar,
          m.exemplo,
          m.classificacao ?? "",
        ].join(" "),
      );
      return tokens.every((t) => haystack.includes(t));
    });
  }, [filter, q]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { todas: macros.length };
    for (const c of categories) {
      map[c.id] = macros.filter((m) => m.categoria === c.id).length;
    }
    return map;
  }, []);

  const groups = categories
    .map((c) => ({
      category: c,
      items: filtered.filter((m) => m.categoria === c.id),
    }))
    .filter((g) => g.items.length > 0);

  const isFiltering = q.length > 0 || filter !== "todas";

  const reset = () => {
    setQuery("");
    setFilter("todas");
  };

  return (
    <section id="biblioteca" className="border-b border-line/70 py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            A biblioteca completa
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            {macros.length} macros e atalhos do material, organizados nas 7
            categorias originais. Use a busca e os filtros juntos para chegar
            rápido ao que precisa.
          </p>
        </div>

        {/* Controles */}
        <div className="mt-10 space-y-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label
              htmlFor={searchId}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted sm:sr-only"
            >
              Buscar macro
            </label>
            <div className="relative flex-1">
              <span
                aria-hidden
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              >
                ⌕
              </span>
              <input
                id={searchId}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por nome, uso ou palavra-chave…"
                autoComplete="off"
                className="w-full rounded-md border border-line bg-graphite py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-muted/70 focus:border-orange/60"
              />
            </div>
            {isFiltering ? (
              <button
                type="button"
                onClick={reset}
                className="self-start rounded-md border border-line px-3 py-2 text-xs uppercase tracking-wide text-muted transition-colors hover:border-orange/50 hover:text-ink sm:self-auto"
              >
                Limpar
              </button>
            ) : null}
          </div>

          <div
            role="group"
            aria-label="Filtrar por categoria"
            className="flex flex-wrap gap-2"
          >
            <Chip
              active={filter === "todas"}
              onClick={() => setFilter("todas")}
              label="Todas"
              count={counts.todas}
            />
            {categories.map((c) => (
              <Chip
                key={c.id}
                active={filter === c.id}
                onClick={() => setFilter(c.id)}
                label={c.label}
                count={counts[c.id]}
              />
            ))}
          </div>
        </div>

        <p aria-live="polite" className="mt-6 text-[13px] text-muted">
          Mostrando{" "}
          <span className="text-ink">{filtered.length}</span> de {macros.length}{" "}
          {filtered.length === 1 ? "macro" : "macros"}
          {filter !== "todas" ? (
            <>
              {" "}
              em{" "}
              <span className="text-ink">
                {categories.find((c) => c.id === filter)?.label}
              </span>
            </>
          ) : null}
          {q ? (
            <>
              {" "}
              para <span className="text-ink">“{query.trim()}”</span>
            </>
          ) : null}
          .
        </p>

        {/* Resultados agrupados por categoria */}
        {groups.length > 0 ? (
          <div className="mt-10 space-y-14">
            {groups.map(({ category, items }) => (
              <div key={category.id} id={`categoria-${category.id}`}>
                <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line/70 pb-3">
                  <span className="font-mono text-xs text-orange">
                    {String(category.ordem).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl tracking-tight text-ink sm:text-2xl">
                    {category.label}
                  </h3>
                  <span className="text-[12px] text-muted">
                    {items.length}{" "}
                    {items.length === 1 ? "macro" : "macros"}
                  </span>
                </div>

                {category.nota ? (
                  <p className="mb-5 rounded-md border border-orange/25 bg-orange/[0.06] px-3 py-2 text-[12.5px] leading-relaxed text-muted">
                    {category.nota}
                  </p>
                ) : null}

                <ul
                  role="list"
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {items.map((m) => (
                    <li key={m.slug} className="h-full">
                      <MacroCard macro={m} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-xl border border-dashed border-line p-10 text-center">
            <p className="text-[15px] text-ink">
              Nenhum macro encontrado para essa combinação.
            </p>
            <p className="mt-1 text-[13px] text-muted">
              Tente outra palavra ou volte para “Todas”.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 rounded-md bg-orange px-4 py-2 text-xs font-semibold uppercase tracking-wide text-bg transition-opacity hover:opacity-90"
            >
              Limpar busca e filtros
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

function Chip({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12.5px] transition-colors ${
        active
          ? "border-orange bg-orange/10 text-ink"
          : "border-line text-muted hover:border-orange/40 hover:text-ink"
      }`}
    >
      <span>{label}</span>
      <span
        className={`text-[11px] ${active ? "text-orange" : "text-muted/70"}`}
      >
        {count}
      </span>
    </button>
  );
}
