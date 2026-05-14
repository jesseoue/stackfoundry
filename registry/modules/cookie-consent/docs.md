# Cookie Consent Module

Cookie category preferences and consent banner state.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/cookie-consent.ts`
- `apps/web/src/lib/cookie-consent.ts`
- `apps/web/src/app/(marketing)/privacy/cookies/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add cookie-consent --target <app> --dry-run`.
