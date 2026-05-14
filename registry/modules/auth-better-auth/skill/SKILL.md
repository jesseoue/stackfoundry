---
name: auth-better-auth
description: Maintain the Better Auth provider adapter module installed by StackFoundry.
---

# Better Auth Skill

## Boundary

This block owns the Better Auth integration example only. Keep product-specific business logic outside the provider adapter until the app has chosen this provider.

## Source Files

- `apps/web/src/lib/auth.ts`
- `apps/web/src/lib/auth-client.ts`
- `apps/web/src/app/api/auth/[...all]/route.ts`
- `apps/web/src/app/(console)/admin/auth/better-auth/page.tsx`

## Dependencies

- `better-auth`

## Environment

- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`

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
