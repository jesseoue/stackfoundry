import { ImageResponse } from "next/og";

export const alt = "StackFoundry source registry for production SaaS modules";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#070707",
        color: "#fffaf4",
        display: "flex",
        padding: 0,
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
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
          opacity: 0.42,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 16% 20%, rgba(255, 151, 46, 0.76), transparent 28%), radial-gradient(circle at 92% 6%, rgba(255, 87, 34, 0.62), transparent 35%), radial-gradient(circle at 82% 88%, rgba(114, 255, 179, 0.2), transparent 30%), linear-gradient(135deg, rgba(255,140,40,0.24), transparent 54%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -130,
          top: -40,
          width: 620,
          height: 620,
          opacity: 0.9,
          display: "flex",
          flexDirection: "column",
          gap: 34,
          transform: "rotate(-12deg)",
        }}
      >
        <div style={{ width: 620, height: 78, background: "#ff9b38", borderRadius: 18 }} />
        <div style={{ width: 470, height: 78, background: "#ff7a1a", borderRadius: 18 }} />
        <div style={{ width: 300, height: 78, background: "#ffc15a", borderRadius: 18 }} />
      </div>
      <div
        style={{
          position: "absolute",
          left: 58,
          bottom: 44,
          width: 520,
          height: 120,
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255,255,255,0.13)",
          borderRadius: 24,
          transform: "rotate(-1.5deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 76,
          bottom: 70,
          width: 330,
          height: 330,
          border: "1px solid rgba(255, 180, 73, 0.42)",
          borderRadius: 999,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 112,
          bottom: 106,
          width: 252,
          height: 252,
          border: "1px solid rgba(255, 180, 73, 0.24)",
          borderRadius: 999,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          padding: "58px 70px 52px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <div style={{ width: 44, height: 8, background: "#ff9b38", borderRadius: 2 }} />
              <div style={{ width: 32, height: 8, background: "#ff9b38", borderRadius: 2 }} />
              <div style={{ width: 20, height: 8, background: "#ff9b38", borderRadius: 2 }} />
            </div>
            <div style={{ fontFamily: "monospace", fontSize: 31, letterSpacing: -1 }}>
              stackfoundry
            </div>
          </div>
          <div
            style={{
              background: "rgba(255, 154, 56, 0.14)",
              border: "1px solid rgba(255,154,56,0.42)",
              color: "#ffd39d",
              display: "flex",
              fontFamily: "monospace",
              fontSize: 18,
              padding: "10px 14px",
              borderRadius: 999,
            }}
          >
            source registry
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "#ffae55",
                fontFamily: "monospace",
                fontSize: 22,
                letterSpacing: 2,
                marginBottom: 22,
                textTransform: "uppercase",
              }}
            >
              200+ SaaS blocks / editable source
            </div>
            <div
              style={{
                fontSize: 104,
                lineHeight: 0.88,
                letterSpacing: -6,
                maxWidth: 850,
                fontWeight: 820,
              }}
            >
              Stop rebuilding SaaS plumbing.
            </div>
            <div
              style={{
                color: "#d7d0c8",
                fontSize: 28,
                lineHeight: 1.28,
                marginTop: 24,
                maxWidth: 760,
              }}
            >
              Install production modules as source: billing, auth, docs, webhooks, analytics, ops.
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
          <div
            style={{
              color: "#c9c9c9",
              display: "flex",
              fontFamily: "monospace",
              fontSize: 22,
              gap: 14,
            }}
          >
            {["billing", "api keys", "webhooks", "drizzle", "docs", "ops"].map((label) => (
              <span
                key={label}
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 999,
                  display: "flex",
                  padding: "9px 12px",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                {label}
              </span>
            ))}
          </div>
          <div style={{ color: "#ffffff", display: "flex", fontFamily: "monospace", fontSize: 25 }}>
            stackfoundry<span style={{ color: "#ff9b38" }}>.dev</span>
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
