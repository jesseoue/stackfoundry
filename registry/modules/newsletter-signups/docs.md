# Newsletter Signups Module

Newsletter signup capture, double opt-in state, and export workflow.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/newsletter-signups.ts`
- `apps/web/src/lib/newsletter-signups.ts`
- `apps/web/src/app/(console)/admin/newsletter/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add newsletter-signups --target <app> --dry-run`.
