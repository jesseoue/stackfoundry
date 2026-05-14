---
name: resend-email
description: Maintain the Resend Email provider adapter module installed by StackFoundry.
---

# Resend Email Skill

## Boundary

This block owns the Resend Email integration example only. Keep product-specific business logic outside the provider adapter until the app has chosen this provider.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/resend/SKILL.md` (source: `registry/skills/resend/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

## Source Files

- `apps/web/src/lib/resend/client.ts`
- `apps/web/src/emails/welcome-email.tsx`
- `apps/web/src/app/api/providers/resend/send-welcome/route.ts`
- `apps/web/src/app/(console)/admin/providers/resend/page.tsx`

## Dependencies

- `resend`
- `@react-email/components`

## Environment

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`

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
