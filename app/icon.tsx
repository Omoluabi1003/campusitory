import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Campusitory logo";
export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0a2240",
          borderRadius: "96px",
          color: "#f7f4ed",
          display: "flex",
          flexDirection: "column",
          fontSize: 220,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          lineHeight: 1,
          width: "100%",
        }}
      >
        <div>C</div>
        <div style={{ background: "#d6682c", borderRadius: 999, height: 18, marginTop: 16, width: 220 }} />
      </div>
    ),
    size,
  );
}
