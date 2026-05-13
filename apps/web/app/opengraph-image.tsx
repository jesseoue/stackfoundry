import { ImageResponse } from "next/og";

export const alt = "StackFoundry source registry for production SaaS modules";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#151515",
          color: "#fbfbfb",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 8%, rgba(209,129,53,0.32), transparent 34%), linear-gradient(180deg, rgba(209,129,53,0.14), transparent 56%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <div style={{ width: 44, height: 8, background: "#d18135" }} />
            <div style={{ width: 32, height: 8, background: "#d18135" }} />
            <div style={{ width: 20, height: 8, background: "#d18135" }} />
          </div>
          <div style={{ fontFamily: "monospace", fontSize: 30 }}>stackfoundry</div>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 84, lineHeight: 0.95, letterSpacing: -4, maxWidth: 900, fontWeight: 650 }}>
            Install production SaaS modules as editable source code.
          </div>
        </div>
        <div style={{ color: "#aaa", display: "flex", fontFamily: "monospace", fontSize: 22, gap: 18 }}>
          <span>routes</span>
          <span>components</span>
          <span>schemas</span>
          <span>env</span>
          <span>docs</span>
          <span>tests</span>
        </div>
      </div>
    ),
    size,
  );
}
