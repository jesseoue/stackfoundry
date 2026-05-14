---
name: clerk-auth
description: Maintain the Clerk Auth provider adapter module installed by StackFoundry.
---

# Clerk Auth Skill

## Boundary

This block owns the Clerk Auth integration example only. Keep product-specific business logic outside the provider adapter until the app has chosen this provider.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/clerk/SKILL.md` (source: `registry/skills/clerk/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

## Source Files

- `middleware.ts`
- `apps/web/src/lib/clerk/authorization.ts`
- `apps/web/src/app/(auth)/sign-in/[[...sign-in]]/page.tsx`
- `apps/web/src/app/(auth)/sign-up/[[...sign-up]]/page.tsx`
- `apps/web/src/app/api/webhooks/clerk/route.ts`
- `apps/web/src/app/(console)/admin/auth/clerk/page.tsx`

## Dependencies

- `@clerk/nextjs`

## Environment

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `CLERK_WEBHOOK_SECRET`

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
