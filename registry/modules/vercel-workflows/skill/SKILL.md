---
name: vercel-workflows
description: Maintain the Vercel Workflows vendor registry block installed by StackFoundry.
---

# Vercel Workflows Skill

## Boundary

This block owns the Vercel Workflows integration example only. Keep product-specific business logic outside the vendor adapter until the app has chosen this provider.

## Source Files

- `apps/web/src/workflows/welcome.ts`
- `apps/web/src/app/api/workflows/welcome/route.ts`
- `apps/web/src/app/(console)/admin/workflows/vercel/page.tsx`

## Dependencies

- `workflow`

## Environment

- No vendor env vars declared.

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
