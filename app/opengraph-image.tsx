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
            background: "rgba(255,255,255,0.78)",
            border: "1px solid rgba(255,255,255,0.85)",
            borderRadius: "42px",
            boxShadow: "0 30px 80px rgba(10, 16, 32, 0.14)",
            display: "flex",
            height: 440,
            justifyContent: "center",
            overflow: "hidden",
            width: 440,
          }}
        >
          <img src={brandAssetConfig.sourceLogo} alt="" width="440" height="440" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, width: 590 }}>
          <div style={{ color: "#d6682c", fontSize: 24, fontWeight: 800, letterSpacing: 6, textTransform: "uppercase" }}>
            {brandAssetConfig.tagline}
          </div>
          <div style={{ color: "#0a2240", fontFamily: "serif", fontSize: 86, fontWeight: 900, lineHeight: 0.94 }}>
            {brandAssetConfig.name}
          </div>
          <div style={{ background: "#d6682c", height: 8, width: 410 }} />
          <div style={{ color: "#4b5563", fontSize: 30, lineHeight: 1.35 }}>
            Global academic platform for institutions, lectures, research, opportunities, and intelligent discovery.
          </div>
          <div style={{ color: "#0a2240", fontSize: 23, fontWeight: 800, marginTop: 22 }}>
            Designed and Developed by {brandAssetConfig.architect}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
