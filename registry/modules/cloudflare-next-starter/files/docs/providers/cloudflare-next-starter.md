# Cloudflare Next Starter

This module adds OpenNext for Cloudflare and Wrangler configuration to a consuming Next.js app. It is a deploy adapter, not the default deployment path for StackFoundry itself.

## Owns

- `apps/web/wrangler.jsonc`
- `apps/web/open-next.config.ts`
- `apps/web/public/_headers`
- `apps/web/src/lib/stackfoundry/providers/cloudflare-next-starter.ts`

## Setup

The StackFoundry command merges these package scripts into `apps/web/package.json`:

```json
{
  "build:cloudflare": "opennextjs-cloudflare build",
  "preview:cloudflare": "opennextjs-cloudflare build && opennextjs-cloudflare preview --env preview",
  "deploy:cloudflare": "opennextjs-cloudflare build && opennextjs-cloudflare deploy --env production",
  "check:cloudflare": "opennextjs-cloudflare build && wrangler deploy --dry-run --env production"
}
```

## Verification

```bash
pnpm install
pnpm build:cloudflare
pnpm check:cloudflare
pnpm cf-typegen
```

Wrangler `>=3.99.0` is required for Next.js apps using OpenNext for Cloudflare. Use Cloudflare dashboard credentials, `wrangler login`, or CI secrets for deployment. Do not commit Cloudflare account credentials, API tokens, `.dev.vars`, `.wrangler/`, or `.open-next/`.
