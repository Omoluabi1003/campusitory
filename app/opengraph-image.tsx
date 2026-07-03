import { ImageResponse } from "next/og";
import { brandAssetConfig } from "@/lib/brand-assets";

export const runtime = "edge";
export const alt = "Campusitory, Knowledge in Motion";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #f7f4ed 0%, #eef3f4 55%, #f7f4ed 100%)",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#0a2240",
            borderRadius: "42px",
            boxShadow: "0 30px 80px rgba(10, 16, 32, 0.14)",
            color: "#f7f4ed",
            display: "flex",
            flexDirection: "column",
            fontSize: 220,
            fontWeight: 700,
            height: 440,
            justifyContent: "center",
            lineHeight: 1,
            width: 440,
          }}
        >
          <div>C</div>
          <div style={{ background: "#d6682c", borderRadius: 999, height: 16, marginTop: 18, width: 210 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, width: 590 }}>
          <div style={{ color: "#d6682c", fontSize: 24, fontWeight: 700, letterSpacing: 6, textTransform: "uppercase" }}>
            {brandAssetConfig.tagline}
          </div>
          <div style={{ color: "#0a2240", fontSize: 86, fontWeight: 700, lineHeight: 0.94 }}>
            {brandAssetConfig.name}
          </div>
          <div style={{ background: "#d6682c", height: 8, width: 410 }} />
          <div style={{ color: "#4b5563", fontSize: 30, lineHeight: 1.35 }}>
            Global academic platform for institutions, lectures, research, opportunities, and intelligent discovery.
          </div>
          <div style={{ color: "#0a2240", fontSize: 23, fontWeight: 700, marginTop: 22 }}>
            Designed and Developed by {brandAssetConfig.architect}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
