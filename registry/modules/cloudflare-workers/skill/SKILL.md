---
name: cloudflare-workers
description: Maintain the Cloudflare Workers provider adapter module installed by StackFoundry.
---

# Cloudflare Workers Skill

## Boundary

This block owns the Cloudflare Workers integration example only. Keep product-specific business logic outside the provider adapter until the app has chosen this provider.

## Source Files

- `cloudflare/workers/api-worker.ts`
- `cloudflare/workers/wrangler.example.jsonc`
- `apps/web/src/app/(console)/admin/cloudflare/workers/page.tsx`

## Dependencies

- `wrangler (dev)`

## Environment

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

## Deployment Checks

- Create the provider project/resource before deploying.
- Add env vars to preview and production environments.
- Run the included smoke route, task, worker, or helper after deploy.
- Confirm logs do not include secrets, tokens, raw webhook payloads, or customer data.

## Maintenance Rules

- Keep SDK imports and examples aligned with current provider docs.
- Keep secrets server-only and out of client components.
- Update `module.json`, `docs.md`, and `tests/checklist.md` together when dependencies, env vars, or files change.
- Prefer small provider adapters over coupling shared domain modules to one provider.
