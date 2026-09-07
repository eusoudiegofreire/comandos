import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { totalMacros } from "@/data/macros";
import { categories } from "@/data/categories";
import { stacks } from "@/data/stacks";

export const alt = `${siteConfig.name} — biblioteca de macros de prompting para anúncios`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080808",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#FF5A1F",
            }}
          />
          <div
            style={{
              color: "#A5A5A0",
              fontSize: 28,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {siteConfig.brand}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#F4F1EA",
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            Biblioteca de Anúncios
          </div>
          <div style={{ color: "#A5A5A0", fontSize: 32, maxWidth: 880 }}>
            Macros e fórmulas de prompting para criar mais hipóteses visuais e
            acelerar a produção de anúncios.
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, color: "#F4F1EA", fontSize: 26 }}>
          <span>
            <span style={{ color: "#FF5A1F" }}>{totalMacros}</span> macros
          </span>
          <span>
            <span style={{ color: "#FF5A1F" }}>{categories.length}</span>{" "}
            categorias
          </span>
          <span>
            <span style={{ color: "#FF5A1F" }}>{stacks.length}</span> stacks
            prontas
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
