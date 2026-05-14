# Workspace Branding Module

Workspace logo, color, domain, and branded experience settings.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/workspace-branding.ts`
- `apps/web/src/lib/workspace-branding.ts`
- `apps/web/src/app/(console)/settings/workspace/branding/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add workspace-branding --target <app> --dry-run`.
