---
name: github-integration
description: Maintain the GitHub Integration provider adapter module installed by StackFoundry.
---

# GitHub Integration Skill

## Boundary

This block owns the GitHub Integration integration example only. Keep product-specific business logic outside the provider adapter until the app has chosen this provider.

## Source Files

- `apps/web/src/lib/github/app.ts`
- `apps/web/src/app/api/webhooks/github/route.ts`
- `apps/web/src/app/(console)/admin/providers/github/page.tsx`

## Dependencies

- `octokit`

## Environment

- `GITHUB_APP_ID`
- `GITHUB_PRIVATE_KEY`
- `GITHUB_WEBHOOK_SECRET`

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
