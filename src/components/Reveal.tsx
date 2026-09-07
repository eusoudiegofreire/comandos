import type { CSSProperties, ReactNode } from "react";

/**
 * Animação leve de fade-up ao carregar.
 * É puro CSS: o conteúdo está sempre no DOM e a animação é
 * neutralizada quando o usuário prefere menos movimento
 * (ver prefers-reduced-motion em globals.css).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const style: CSSProperties | undefined = delay
    ? { animationDelay: `${delay}ms` }
    : undefined;

  return (
    <div className={`animate-fade-up ${className}`} style={style}>
      {children}
    </div>
  );
}
