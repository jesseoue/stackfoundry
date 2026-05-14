---
name: trigger-dev-jobs
description: Maintain the Trigger.dev Jobs provider adapter module installed by StackFoundry.
---

# Trigger.dev Jobs Skill

## Boundary

This block owns the Trigger.dev Jobs integration example only. Keep product-specific business logic outside the provider adapter until the app has chosen this provider.

## Source Files

- `apps/web/src/trigger/example.ts`
- `apps/web/src/app/api/tasks/trigger-dev/route.ts`
- `trigger.config.ts`
- `apps/web/src/app/(console)/admin/workflows/trigger-dev/page.tsx`

## Dependencies

- `@trigger.dev/sdk`
- `trigger.dev (dev)`

## Environment

- `TRIGGER_SECRET_KEY`
- `TRIGGER_PROJECT_ID`

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
