import type { BriefingField } from "@/lib/types";

/**
 * "Fórmula básica de uso" do documento.
 * Serve como modelo para completar qualquer macro.
 */
export const briefingIntro = "Use assim:";
export const briefingCommandLine = "/COMANDO";

export const briefingFields: BriefingField[] = [
  { campo: "Produto", exemplo: "produto ou serviço" },
  { campo: "Público", exemplo: "público do anúncio" },
  { campo: "Objetivo", exemplo: "mensagens, vendas, reconhecimento" },
  { campo: "Oferta", exemplo: "oferta" },
  { campo: "Formato", exemplo: "1:1, 4:5 ou 9:16" },
  { campo: "Identidade visual", exemplo: "cores, logo e estilo" },
  { campo: "Texto exato", exemplo: '"[headline e CTA]"' },
  { campo: "Preservar", exemplo: "produto, embalagem, pessoa e logo" },
  { campo: "Não adicionar", exemplo: "textos, marcas ou objetos extras" },
];

/** Bloco completo, pronto para copiar. */
export const briefingTemplate = [
  briefingCommandLine,
  "",
  "Produto: [produto ou serviço]",
  "Público: [público do anúncio]",
  "Objetivo: [mensagens, vendas, reconhecimento]",
  "Oferta: [oferta]",
  "Formato: [1:1, 4:5 ou 9:16]",
  "Identidade visual: [cores, logo e estilo]",
  'Texto exato: "[headline e CTA]"',
  "Preservar: [produto, embalagem, pessoa e logo]",
  "Não adicionar: [textos, marcas ou objetos extras]",
].join("\n");
