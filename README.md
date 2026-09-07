# Biblioteca de Anúncios · DLX Digital

Página web com a biblioteca de **macros e fórmulas de prompting** para criar
mais hipóteses visuais e acelerar a produção de anúncios. É o material gratuito
entregue no Direct para quem comenta no carrossel do Instagram.

> **Posicionamento:** os termos com `/` são macros, atalhos ou fórmulas de
> prompting — **não** são comandos secretos nem funções oficiais/universais do
> ChatGPT. A IA aparece como ferramenta para ampliar as possibilidades de teste.
> A página não faz promessas de vendas, CTR ou resultados garantidos.

## O que a página tem

- Apresentação curta do material e a mensagem principal.
- Aviso explicando o que é um "macro".
- **58 macros/atalhos** do documento original, transcritos sem alteração de
  sentido, organizados nas **7 categorias** originais.
- Campo de busca + filtros por categoria, que funcionam juntos.
- Um card por macro com: nome, para que serve, por que utilizar, como usar,
  exemplo e classificação (quando o documento informa), além de botão para
  copiar o exemplo com confirmação.
- As **5 stacks prontas** do material (com a lista "Depois complete com" da
  stack de Meta Ads).
- Modelo de briefing (a "fórmula básica de uso"), com botão para copiar.
- CTA final para conhecer / falar com a DLX Digital.
- SEO básico: metadata, Open Graph, `sitemap.xml`, `robots.txt` e JSON-LD.

> Observação: o material foi divulgado como "40 macros", mas as 7 seções do
> documento somam **58 itens**. Todos foram incluídos, sem inventar nem
> duplicar. Ajuste `siteConfig` se quiser outro número no texto.

## Stack

- [Next.js 16](https://nextjs.org) — App Router
- TypeScript
- Tailwind CSS v4
- Sem banco de dados, sem login. Todo o conteúdo vive em `src/data/`.

## Estrutura

```
src/
  app/
    layout.tsx          Metadata, fontes, JSON-LD
    page.tsx            Composição das seções
    globals.css         Tokens da identidade DLX + texturas + animação
    opengraph-image.tsx Imagem Open Graph gerada no build
    sitemap.ts / robots.ts
  components/            Componentes reutilizáveis (Header, Hero, cards, etc.)
  config/
    site.ts             Nome, URL e Instagram — ajuste antes do deploy
  data/
    categories.ts       As 7 categorias
    macros.ts           Os 58 macros
    stacks.ts           As 5 stacks prontas
    briefing.ts         A fórmula básica de uso
  lib/
    types.ts            Tipos compartilhados
```

## Rodar localmente

Pré-requisito: Node.js 20+.

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Scripts

| Script              | O que faz                          |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento        |
| `npm run build`     | Build de produção                  |
| `npm run start`     | Sobe o build de produção           |
| `npm run lint`      | ESLint (`eslint-config-next`)      |
| `npm run typecheck` | Checagem de tipos (`tsc --noEmit`) |

Antes de publicar:

```bash
npm run lint && npm run typecheck && npm run build
```

## Editar o conteúdo

Todo o material está em `src/data/`. Para ajustar um texto, mudar um exemplo ou
adicionar um item, edite o arquivo correspondente — os componentes se atualizam
sozinhos. Não é preciso mexer no código dos componentes.

## Configuração antes do deploy

Em `src/config/site.ts`, troque `url` pelo domínio final (hoje há um
placeholder `https://dlx-biblioteca-anuncios.vercel.app`). Esse valor alimenta
`metadataBase`, o `sitemap.xml`, o `robots.txt` e as URLs de Open Graph.

## Deploy na Vercel

O projeto é zero-config para a Vercel (framework detectado automaticamente:
Next.js). Não há variáveis de ambiente.

- **Build command:** `next build` (padrão)
- **Output:** gerenciado pela Vercel
- **Install command:** `npm install` (padrão)

Passos: importe o repositório na Vercel e clique em **Deploy**. Depois de saber o
domínio definitivo, atualize `siteConfig.url` e faça um novo commit.
