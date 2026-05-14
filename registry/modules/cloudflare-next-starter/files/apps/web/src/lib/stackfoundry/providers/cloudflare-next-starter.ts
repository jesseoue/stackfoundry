export const cloudflareNextStarterChecklist = [
  "Install @opennextjs/cloudflare and wrangler as dev dependencies",
  "Set the Worker name in apps/web/wrangler.jsonc",
  "Confirm apps/web/package.json includes the Cloudflare build, preview, deploy, check, and typegen scripts",
  "Confirm .gitignore excludes .open-next/, .dev.vars, .dev.vars.*, and .wrangler/",
  "Run opennextjs-cloudflare build before Wrangler preview or deploy",
  "Use wrangler deploy --dry-run --env production before publishing",
  "Run wrangler types --env-interface CloudflareEnv after changing bindings",
  "Keep Cloudflare account credentials in the provider dashboard or CI secrets",
] as const;
