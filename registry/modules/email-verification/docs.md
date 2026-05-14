# Email Verification Module

Email verification token helpers and verification state UI.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/email-verification.ts`
- `apps/web/src/lib/email-verification.ts`
- `apps/web/src/app/(auth)/email-verification/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add email-verification --target <app> --dry-run`.
