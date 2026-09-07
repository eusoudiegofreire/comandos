"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type CopyState = "idle" | "copied" | "error";

export function CopyButton({
  value,
  label = "Copiar",
  copiedLabel = "Copiado!",
  className = "",
  size = "md",
  describe,
}: {
  value: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  size?: "sm" | "md";
  /** Texto acessível extra, ex.: "o macro /adcreative". */
  describe?: string;
}) {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setState("copied");
    } catch {
      setState("error");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2200);
  }, [value]);

  const text =
    state === "copied"
      ? copiedLabel
      : state === "error"
        ? "Copie manualmente"
        : label;

  const sizing =
    size === "sm"
      ? "px-2.5 py-1 text-[11px] gap-1.5"
      : "px-3.5 py-2 text-xs gap-2";

  return (
    <button
      type="button"
      onClick={copy}
      data-state={state}
      aria-label={
        describe ? `${label} ${describe}` : label
      }
      className={`inline-flex items-center rounded-md border font-medium uppercase tracking-wide transition-colors ${sizing} ${
        state === "copied"
          ? "border-orange/60 text-orange"
          : "border-line text-muted hover:border-orange/50 hover:text-ink"
      } ${className}`}
    >
      <span aria-hidden="true" className="text-sm leading-none">
        {state === "copied" ? "✓" : "⧉"}
      </span>
      <span>{text}</span>
      <span aria-live="polite" className="sr-only">
        {state === "copied"
          ? "Conteúdo copiado para a área de transferência."
          : state === "error"
            ? "Não foi possível copiar automaticamente."
            : ""}
      </span>
    </button>
  );
}
