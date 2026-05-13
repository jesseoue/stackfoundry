---
name: upstash-redis
description: Maintain the Upstash Redis vendor registry block installed by StackFoundry.
---

# Upstash Redis Skill

## Boundary

This block owns the Upstash Redis integration example only. Keep product-specific business logic outside the vendor adapter until the app has chosen this provider.

## Source Files

- `apps/web/src/lib/upstash/redis.ts`
- `apps/web/src/lib/upstash/ratelimit.ts`
- `apps/web/src/app/api/vendor/upstash/health/route.ts`
- `apps/web/src/app/(console)/admin/vendors/upstash/page.tsx`

## Dependencies

- `@upstash/redis`
- `@upstash/ratelimit`

## Environment

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

## Deployment Checks

- Create the vendor project/resource before deploying.
- Add env vars to preview and production environments.
- Run the included smoke route, task, worker, or helper after deploy.
- Confirm logs do not include secrets, tokens, raw webhook payloads, or customer data.

## Maintenance Rules

- Keep SDK imports and examples aligned with current vendor docs.
- Keep secrets server-only and out of client components.
- Update `module.json`, `docs.md`, and `tests/checklist.md` together when dependencies, env vars, or files change.
- Prefer small provider adapters over coupling shared domain modules to one vendor.
