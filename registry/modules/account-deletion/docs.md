# Account Deletion Module

Account deletion requests, grace windows, and cleanup checklist.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/account-deletion.ts`
- `apps/web/src/lib/account-deletion.ts`
- `apps/web/src/app/(console)/settings/account/deletion/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add account-deletion --target <app> --dry-run`.
