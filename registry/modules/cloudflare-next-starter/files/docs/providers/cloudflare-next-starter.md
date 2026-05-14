# Cloudflare Next Starter

This module adds OpenNext for Cloudflare and Wrangler configuration to a consuming Next.js app. It is a deploy adapter, not the default deployment path for StackFoundry itself.

## Owns

- `apps/web/wrangler.jsonc`
- `apps/web/open-next.config.ts`
- `apps/web/public/_headers`
- `apps/web/src/lib/stackfoundry/providers/cloudflare-next-starter.ts`

## Setup

Add package scripts in the consuming app if they are not already present:

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
```

Use Cloudflare dashboard credentials, `wrangler login`, or CI secrets for deployment. Do not commit Cloudflare account credentials, API tokens, `.dev.vars`, or Wrangler local state.
