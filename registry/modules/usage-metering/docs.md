# Usage Metering Module

Usage event capture, aggregation helpers, and billing-ready usage UI.

## Owns

- `packages/db/src/schema/usage-metering.ts`
- `apps/web/src/lib/usage-metering.ts`
- `apps/web/src/app/(console)/usage/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add usage-metering --target <app> --dry-run`.
