# Maintenance Mode Module

Maintenance windows, banner state, and operator controls.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/maintenance-mode.ts`
- `apps/web/src/lib/maintenance-mode.ts`
- `apps/web/src/app/(console)/admin/maintenance/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider-specific adapters as separate modules.
- Verify install output with `stackfoundry add maintenance-mode --target <app> --dry-run`.
