---
name: neon-postgres
description: Maintain the Neon Postgres vendor registry block installed by StackFoundry.
---

# Neon Postgres Skill

## Boundary

This block owns the Neon Postgres integration example only. Keep product-specific business logic outside the vendor adapter until the app has chosen this provider.

## Source Files

- `apps/web/src/lib/neon/client.ts`
- `apps/web/src/lib/neon/branching.ts`
- `apps/web/src/app/(console)/admin/data/neon/page.tsx`

## Dependencies

- `@neondatabase/serverless`

## Environment

- `DATABASE_URL`

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
