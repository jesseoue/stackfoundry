---
name: unkey-api-keys
description: Maintain the Unkey API Keys provider adapter module installed by StackFoundry.
---

# Unkey API Keys Skill

## Boundary

This block owns the Unkey API Keys integration example only. Keep `api-keys` as the source-owned default path and keep product-specific business logic outside the provider adapter until the app has chosen this provider.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/unkey/SKILL.md` (source: `registry/skills/unkey/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

## Source Files

- `apps/web/src/lib/unkey/client.ts`
- `apps/web/src/lib/unkey/api-keys.ts`
- `apps/web/src/app/api/providers/unkey/verify/route.ts`
- `apps/web/src/app/(console)/admin/providers/unkey/page.tsx`

## Dependencies

- `@unkey/api`

## Environment

- `UNKEY_ROOT_KEY`
- `UNKEY_API_ID`

## Deployment Checks

- Create the provider project/resource before deploying.
- Add env vars to preview and production environments.
- Run the included smoke route, task, worker, or helper after deploy.
- Confirm logs do not include secrets, tokens, raw webhook payloads, or customer data.

## Maintenance Rules

- Keep SDK imports and examples aligned with current provider docs.
- Use `verifyKey` for request-time checks and keep permission/role decisions on the server.
- Keep secrets server-only and out of client components.
- Update `module.json`, `docs.md`, and `tests/checklist.md` together when dependencies, env vars, or files change.
- Prefer small provider adapters over coupling shared domain modules to one provider.
