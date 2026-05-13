# Password Reset Module

Expiring reset token helpers and password recovery page templates.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/password-reset.ts`
- `apps/web/src/lib/password-reset.ts`
- `apps/web/src/app/(auth)/password-reset/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider-specific adapters as separate modules.
- Verify install output with `stackfoundry add password-reset --target <app> --dry-run`.
