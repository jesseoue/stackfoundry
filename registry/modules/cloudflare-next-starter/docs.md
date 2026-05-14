# Cloudflare Next Starter

OpenNext and Wrangler starter for deploying a consuming Next.js app to Cloudflare Workers.

## Official Docs

- [Cloudflare Next.js Guide](https://developers.cloudflare.com/workers/frameworks/framework-guides/nextjs/)

## Owns

- `apps/web/wrangler.jsonc`
- `apps/web/open-next.config.ts`
- `apps/web/public/_headers`
- `apps/web/src/lib/stackfoundry/providers/cloudflare-next-starter.ts`
- `docs/providers/cloudflare-next-starter.md`

## Dependencies

- `@opennextjs/cloudflare`
- `wrangler` `>=3.99.0`

## Package Scripts

The StackFoundry command merges Cloudflare scripts into `apps/web/package.json`:

```json
{
  "build:cloudflare": "opennextjs-cloudflare build",
  "preview:cloudflare": "opennextjs-cloudflare build && opennextjs-cloudflare preview --env preview",
  "deploy:cloudflare": "opennextjs-cloudflare build && opennextjs-cloudflare deploy --env production",
  "check:cloudflare": "opennextjs-cloudflare build && wrangler deploy --dry-run --env production",
  "cf-typegen": "wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts"
}
```

The module also adds `.open-next/`, `.dev.vars`, `.dev.vars.*`, and `.wrangler/` to the target app's `.gitignore`.

## Environment

No app environment variables are required by default. Cloudflare account credentials should live in the Cloudflare dashboard, local Wrangler auth, or CI secrets.

## Maintenance

- Keep this module focused on the Cloudflare deployment boundary for consuming apps.
- Do not add Cloudflare deployment dependencies to the StackFoundry web app itself.
- Run a Wrangler dry run before publishing a consuming app deployment.
- Generate Cloudflare environment types after changing bindings with `pnpm cf-typegen`.
- Update docs, checklist, and source files together when OpenNext or Wrangler behavior changes.
