# Cloudflare Next Starter

OpenNext and Wrangler starter for deploying a consuming Next.js app to Cloudflare Workers.

## Owns

- `apps/web/wrangler.jsonc`
- `apps/web/open-next.config.ts`
- `apps/web/public/_headers`
- `apps/web/src/lib/stackfoundry/providers/cloudflare-next-starter.ts`
- `docs/providers/cloudflare-next-starter.md`

## Dependencies

- `@opennextjs/cloudflare`
- `wrangler`

## Environment

No app environment variables are required by default. Cloudflare account credentials should live in the Cloudflare dashboard, local Wrangler auth, or CI secrets.

## Maintenance

- Keep this module focused on the Cloudflare deployment boundary for consuming apps.
- Do not add Cloudflare deployment dependencies to the StackFoundry web app itself.
- Run a Wrangler dry run before publishing a consuming app deployment.
- Update docs, checklist, and source files together when OpenNext or Wrangler behavior changes.
