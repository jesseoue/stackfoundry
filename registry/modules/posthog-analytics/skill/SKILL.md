---
name: posthog-analytics
description: Maintain the PostHog Analytics provider adapter module installed by StackFoundry.
---

# PostHog Analytics Skill

## Boundary

This block owns the PostHog Analytics integration example only. Keep product-specific business logic outside the provider adapter until the app has chosen this provider.

## Source Files

- `apps/web/src/components/providers/posthog-provider.tsx`
- `apps/web/src/components/analytics/track-button.tsx`
- `apps/web/src/app/(console)/admin/providers/posthog/page.tsx`

## Dependencies

- `posthog-js`
- `@posthog/next`

## Environment

- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`

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
