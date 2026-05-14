# MFA Security Module

Multi-factor authentication recovery, enforcement, and settings surfaces.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/mfa-security.ts`
- `apps/web/src/lib/mfa-security.ts`
- `apps/web/src/app/(console)/settings/account/mfa/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add mfa-security --target <app> --dry-run`.
