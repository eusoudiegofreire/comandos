import type { Stack } from "@/lib/types";

/**
 * As 5 stacks prontas do documento ("5 stacks prontas para anúncios"),
 * com a sequência de macros e o texto "Use para..." exatamente como no material.
 */
export const stacks: Stack[] = [
  {
    slug: "anuncio-clean-de-produto",
    nome: "Anúncio clean de produto",
    macros: [
      "/productphoto",
      "/minimalstudio",
      "/studiolighting",
      "/photoreal",
      "/adready",
      "/social4x5",
    ],
    quandoUsar:
      "Use para catálogo, e-commerce e anúncios em que o produto precisa ser identificado rapidamente.",
  },
  {
    slug: "produto-premium",
    nome: "Produto premium",
    macros: [
      "/productphoto",
      "/premiumshowcase",
      "/darkpremium",
      "/rimlight",
      "/macrodetail",
      "/adready",
    ],
    quandoUsar:
      "Use para joias, relógios, óculos, cosméticos e produtos com posicionamento sofisticado.",
  },
  {
    slug: "produto-em-contexto",
    nome: "Produto em contexto",
    macros: [
      "/preserveproduct",
      "/lifestyle",
      "/goldenhour",
      "/depthoffield",
      "/instagramad",
    ],
    quandoUsar: "Use para mostrar como o produto entra na rotina do público.",
  },
  {
    slug: "quebra-de-padrao",
    nome: "Quebra de padrão",
    macros: [
      "/preserveproduct",
      "/gravitydefying",
      "/dramaticlighting",
      "/adcreative",
      "/social4x5",
    ],
    quandoUsar:
      "Use para desenvolver uma hipótese visual mais inesperada para o feed.",
  },
  {
    slug: "anuncio-completo-para-meta-ads",
    nome: "Anúncio completo para Meta Ads",
    macros: [
      "/preserveproduct",
      "/metaad",
      "/productphoto",
      "/adready",
      "/social4x5",
    ],
    completeCom: [
      "Produto:",
      "Público:",
      "Objetivo da campanha:",
      "Oferta:",
      "Benefício principal:",
      "Headline exata:",
      "CTA exato:",
      "Identidade visual:",
      "Elementos obrigatórios:",
      "Elementos proibidos:",
    ],
  },
];
