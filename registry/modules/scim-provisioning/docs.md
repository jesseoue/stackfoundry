# SCIM Provisioning Module

SCIM token records, provisioning events, and directory sync status.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/scim-provisioning.ts`
- `apps/web/src/lib/scim-provisioning.ts`
- `apps/web/src/app/(console)/settings/workspace/scim/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add scim-provisioning --target <app> --dry-run`.
