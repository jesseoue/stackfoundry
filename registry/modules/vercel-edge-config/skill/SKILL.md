---
name: vercel-edge-config
description: Maintain the Vercel Edge Config provider adapter module installed by StackFoundry.
---

# Vercel Edge Config Skill

## Boundary

This block owns the Vercel Edge Config integration example only. Keep product-specific business logic outside the provider adapter until the app has chosen this provider.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/vercel/SKILL.md` (source: `registry/skills/vercel/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

## Source Files

- `apps/web/src/lib/vercel/edge-config.ts`
- `apps/web/src/app/api/providers/vercel/edge-config/route.ts`
- `apps/web/src/app/(console)/admin/providers/vercel-edge-config/page.tsx`

## Dependencies

- `@vercel/edge-config`

## Environment

- `EDGE_CONFIG`

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
