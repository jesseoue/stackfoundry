export const cloudflareKumoUi = {
  packageName: "@cloudflare/kumo",
  installCommand: "pnpm add @cloudflare/kumo",
  docsCommands: [
    "pnpm dlx @cloudflare/kumo ls",
    "pnpm dlx @cloudflare/kumo doc Button",
    "pnpm dlx @cloudflare/kumo blocks",
  ],
  componentAreas: ["Actions", "Forms", "Data Display", "Feedback", "Layout", "Navigation"],
} as const;
