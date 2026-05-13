# Login Activity Module

Login history, device metadata, and suspicious sign-in review UI.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/login-activity.ts`
- `apps/web/src/lib/login-activity.ts`
- `apps/web/src/app/(console)/settings/account/login-activity/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider-specific adapters as separate modules.
- Verify install output with `stackfoundry add login-activity --target <app> --dry-run`.
