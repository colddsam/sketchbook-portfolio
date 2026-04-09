import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Samrat | Full Stack Developer & Creative Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fbfbfb",
          backgroundImage: "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          color: "#2a2a2a",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: "bold", marginBottom: "20px" }}>
          Samrat
        </div>
        <div style={{ fontSize: 40, color: "#4b5563" }}>
          Full Stack Developer & Creative Designer
        </div>
        <div style={{ fontSize: 30, color: "#9ca3af", marginTop: "40px", fontStyle: "italic" }}>
          Welcome to my sketchbook
        </div>
      </div>
    ),
    { ...size }
  );
}
