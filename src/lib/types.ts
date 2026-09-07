export type CategoryId =
  | "criacao"
  | "fotografia"
  | "iluminacao"
  | "demonstracao"
  | "explicacao"
  | "video"
  | "personalizadas";

export interface Category {
  id: CategoryId;
  /** Número da seção no documento original. */
  ordem: number;
  label: string;
  /** Observação literal do documento, quando existir. */
  nota?: string;
}

export interface Macro {
  /** Identificador sem a barra, ex.: "adcreative". */
  slug: string;
  /** Nome exibido, exatamente como no documento, ex.: "/adcreative". */
  nome: string;
  categoria: CategoryId;
  /** Coluna "Para que serve" do documento. */
  paraQueServe: string;
  /** Coluna "Por que utilizar" do documento. */
  porQueUtilizar: string;
  /** Coluna "Como usar" do documento — também serve como exemplo. */
  exemplo: string;
  /**
   * Classificação informada no documento.
   * A Seção 7 marca estes itens como comandos personalizados da biblioteca,
   * que não são funções nativas universais.
   */
  classificacao?: string;
}

export interface Stack {
  slug: string;
  nome: string;
  /** Sequência de macros que compõem a stack, na ordem do documento. */
  macros: string[];
  /** Texto "Use para..." do documento. Ausente na stack 5. */
  quandoUsar?: string;
  /** Lista "Depois complete com:" — presente apenas na stack 5. */
  completeCom?: string[];
}

export interface BriefingField {
  campo: string;
  exemplo: string;
}
