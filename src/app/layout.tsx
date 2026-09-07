import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import { totalMacros } from "@/data/macros";
import { categories } from "@/data/categories";
import { stacks } from "@/data/stacks";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas",
});

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${totalMacros} macros de prompting para anúncios`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.brand, url: siteConfig.instagram.url }],
  creator: siteConfig.brand,
  publisher: siteConfig.brand,
  keywords: [
    "macros de prompting",
    "prompts para anúncios",
    "Meta Ads",
    "criativos",
    "IA aplicada a anúncios",
    "tráfego pago",
    "DLX Digital",
  ],
  category: "marketing",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — biblioteca de macros de prompting`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "pt-BR",
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.brand,
      sameAs: [siteConfig.instagram.url],
    },
    about: {
      "@type": "CreativeWork",
      name: "Biblioteca de macros e fórmulas de prompting para anúncios",
      keywords: categories.map((c) => c.label).join(", "),
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Macros de prompting para anúncios",
      numberOfItems: totalMacros,
      itemListElement: [
        ...categories.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
        })),
        {
          "@type": "ListItem",
          position: categories.length + 1,
          name: `${stacks.length} stacks prontas`,
        },
      ],
    },
  };

  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${bebas.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
