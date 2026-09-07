/**
 * Configuração central do site.
 * Ajuste SITE_URL para o domínio final antes do deploy de produção.
 */
export const siteConfig = {
  name: "Biblioteca de Anúncios · DLX Digital",
  shortName: "Biblioteca de Anúncios",
  // Placeholder — trocar pelo domínio real quando publicado na Vercel.
  url: "https://dlx-biblioteca-anuncios.vercel.app",
  description:
    "Macros e fórmulas de prompting para criar mais hipóteses visuais e acelerar a produção de anúncios. Material gratuito da DLX Digital.",
  locale: "pt-BR",
  brand: "DLX Digital",
  instagram: {
    handle: "@dlxdigitaloficial",
    url: "https://instagram.com/dlxdigitaloficial",
  },
} as const;

export type SiteConfig = typeof siteConfig;
