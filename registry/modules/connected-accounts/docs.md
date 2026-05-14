# Connected Accounts Module

OAuth account linking, provider metadata, and disconnect controls.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/connected-accounts.ts`
- `apps/web/src/lib/connected-accounts.ts`
- `apps/web/src/app/(console)/settings/account/connected-accounts/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add connected-accounts --target <app> --dry-run`.
