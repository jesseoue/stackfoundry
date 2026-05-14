export const cloudflareNextStarterChecklist = [
  "Install @opennextjs/cloudflare and wrangler as dev dependencies",
  "Set the Worker name in apps/web/wrangler.jsonc",
  "Run opennextjs-cloudflare build before Wrangler preview or deploy",
  "Use wrangler deploy --dry-run --env production before publishing",
  "Keep Cloudflare account credentials in the provider dashboard or CI secrets",
] as const;
