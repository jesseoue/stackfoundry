---
name: cloudflare-kv
description: Maintain the Cloudflare KV provider adapter module installed by StackFoundry.
---

# Cloudflare KV Skill

## Boundary

This block owns the Cloudflare KV integration example only. Keep product-specific business logic outside the provider adapter until the app has chosen this provider.

## Source Files

- `cloudflare/kv/config.ts`
- `apps/web/src/app/(console)/admin/cloudflare/kv/page.tsx`

## Dependencies

- `wrangler (dev)`

## Environment

- No provider env vars declared.

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
