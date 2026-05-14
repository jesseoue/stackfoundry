---
name: cloudflare-d1
description: Maintain the Cloudflare D1 provider adapter module installed by StackFoundry.
---

# Cloudflare D1 Skill

## Boundary

This block owns the Cloudflare D1 integration example only. Keep product-specific business logic outside the provider adapter until the app has chosen this provider.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/cloudflare/SKILL.md` (source: `registry/skills/cloudflare/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

## Source Files

- `cloudflare/d1/schema.sql`
- `cloudflare/d1/queries.ts`
- `apps/web/src/app/(console)/admin/cloudflare/d1/page.tsx`

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
