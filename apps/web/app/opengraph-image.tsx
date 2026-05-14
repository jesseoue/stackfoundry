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
          background: "#111111",
          color: "#fbfbfb",
          display: "flex",
          flexDirection: "column",
          padding: "62px 72px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 14% 18%, rgba(255, 163, 64, 0.44), transparent 30%), radial-gradient(circle at 88% 18%, rgba(255, 122, 20, 0.38), transparent 34%), linear-gradient(135deg, rgba(209,129,53,0.22), transparent 54%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -172,
            top: 36,
            width: 560,
            height: 560,
            opacity: 0.9,
            display: "flex",
            flexDirection: "column",
            gap: 42,
            transform: "rotate(-8deg)",
          }}
        >
          <div style={{ width: 540, height: 72, background: "#f29a3a", borderRadius: 14 }} />
          <div style={{ width: 400, height: 72, background: "#f29a3a", borderRadius: 14 }} />
          <div style={{ width: 260, height: 72, background: "#f29a3a", borderRadius: 14 }} />
        </div>
        <div
          style={{
            position: "absolute",
            right: -90,
            bottom: -90,
            width: 360,
            height: 360,
            border: "1px solid rgba(242,154,58,0.38)",
            borderRadius: 999,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <div style={{ width: 44, height: 8, background: "#f29a3a", borderRadius: 2 }} />
              <div style={{ width: 32, height: 8, background: "#f29a3a", borderRadius: 2 }} />
              <div style={{ width: 20, height: 8, background: "#f29a3a", borderRadius: 2 }} />
            </div>
            <div style={{ fontFamily: "monospace", fontSize: 30, letterSpacing: -1 }}>stackfoundry</div>
          </div>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#cfcfcf",
              display: "flex",
              fontFamily: "monospace",
              fontSize: 18,
              padding: "10px 14px",
            }}
          >
            source modules
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "#f29a3a",
                fontFamily: "monospace",
                fontSize: 22,
                letterSpacing: 2,
                marginBottom: 22,
                textTransform: "uppercase",
              }}
            >
              production SaaS / editable source
            </div>
            <div
              style={{
                fontSize: 96,
                lineHeight: 0.9,
                letterSpacing: -5.4,
                maxWidth: 820,
                fontWeight: 760,
              }}
            >
              Ship the SaaS parts people actually need.
            </div>
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "#c9c9c9", display: "flex", fontFamily: "monospace", fontSize: 22, gap: 14 }}>
            {["billing", "api keys", "webhooks", "drizzle", "docs", "tests"].map((label) => (
              <span
                key={label}
                style={{
                  border: "1px solid rgba(255,255,255,0.16)",
                  display: "flex",
                  padding: "9px 12px",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                {label}
              </span>
            ))}
          </div>
          <div style={{ color: "#ffffff", display: "flex", fontFamily: "monospace", fontSize: 25 }}>
            stackfoundry<span style={{ color: "#f29a3a" }}>.dev</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
