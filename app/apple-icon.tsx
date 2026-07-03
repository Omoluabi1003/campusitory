import { ImageResponse } from "next/og";
import { brandAssetConfig } from "@/lib/brand-assets";

export const runtime = "edge";
export const alt = "Campusitory Apple touch icon";
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
          background: "#f7f4ed",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <img src={brandAssetConfig.sourceLogo} alt="" width="180" height="180" />
      </div>
    ),
    size,
  );
}
