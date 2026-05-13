---
name: clerk-auth
description: Maintain the Clerk Auth vendor registry block installed by StackFoundry.
---

# Clerk Auth Skill

## Boundary

This block owns the Clerk Auth integration example only. Keep product-specific business logic outside the vendor adapter until the app has chosen this provider.

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

- Create the vendor project/resource before deploying.
- Add env vars to preview and production environments.
- Run the included smoke route, task, worker, or helper after deploy.
- Confirm logs do not include secrets, tokens, raw webhook payloads, or customer data.

## Maintenance Rules

- Keep SDK imports and examples aligned with current vendor docs.
- Keep secrets server-only and out of client components.
- Update `module.json`, `docs.md`, and `tests/checklist.md` together when dependencies, env vars, or files change.
- Prefer small provider adapters over coupling shared domain modules to one vendor.
