import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Campusitory touch icon";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0a2240",
          color: "#f7f4ed",
          display: "flex",
          flexDirection: "column",
          fontSize: 82,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          lineHeight: 1,
          width: "100%",
        }}
      >
        <div>C</div>
        <div style={{ background: "#d6682c", borderRadius: 999, height: 8, marginTop: 8, width: 78 }} />
      </div>
    ),
    size,
  );
}
