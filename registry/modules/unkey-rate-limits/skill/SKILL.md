---
name: unkey-rate-limits
description: Maintain the Unkey Rate Limits provider adapter module installed by StackFoundry.
---

# Unkey Rate Limits Skill

## Boundary

This block owns the Unkey Rate Limits integration example only. Keep `rate-limits` as the source-owned default path and keep product-specific business logic outside the provider adapter until the app has chosen this provider.

## Source Files

- `apps/web/src/lib/unkey/ratelimit.ts`
- `apps/web/src/app/api/providers/unkey/ratelimit/route.ts`
- `apps/web/src/app/(console)/admin/providers/unkey-rate-limits/page.tsx`

## Dependencies

- `@unkey/ratelimit`

## Environment

- `UNKEY_ROOT_KEY`

## Deployment Checks

- Create the provider project/resource before deploying.
- Add env vars to preview and production environments.
- Run the included smoke route, task, worker, or helper after deploy.
- Confirm logs do not include secrets, tokens, raw webhook payloads, or customer data.

## Maintenance Rules

- Keep SDK imports and examples aligned with current provider docs.
- Keep namespaces stable and return rate-limit headers from protected routes.
- Keep secrets server-only and out of client components.
- Update `module.json`, `docs.md`, and `tests/checklist.md` together when dependencies, env vars, or files change.
- Prefer small provider adapters over coupling shared domain modules to one provider.
