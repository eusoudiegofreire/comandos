import type { Category } from "@/lib/types";

/**
 * As 7 categorias do documento original, na mesma ordem.
 */
export const categories: Category[] = [
  {
    id: "criacao",
    ordem: 1,
    label: "Criação de anúncios",
  },
  {
    id: "fotografia",
    ordem: 2,
    label: "Fotografia de produto",
  },
  {
    id: "iluminacao",
    ordem: 3,
    label: "Iluminação e direção de arte",
  },
  {
    id: "demonstracao",
    ordem: 4,
    label: "Produto em uso e demonstração",
  },
  {
    id: "explicacao",
    ordem: 5,
    label: "Explicação visual e autoridade",
  },
  {
    id: "video",
    ordem: 6,
    label: "Vídeos e anúncios em Reels",
  },
  {
    id: "personalizadas",
    ordem: 7,
    label: "Macros personalizadas da nossa biblioteca",
    nota: "Comandos personalizados da nossa biblioteca — não são funções nativas universais.",
  },
];

export const categoryMap: Record<string, Category> = Object.fromEntries(
  categories.map((c) => [c.id, c]),
);
