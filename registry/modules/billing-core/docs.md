# Billing Core Module

Provider-neutral customer, plan, and subscription primitives.

This is the default source-owned billing foundation. Use provider adapters such as `stripe-billing`, `autumn-billing`, or `autumn-entitlements` only when the app chooses those providers.

## Owns

- `packages/db/src/schema/billing-core.ts`
- `apps/web/src/lib/billing-core.ts`
- `apps/web/src/app/(console)/billing/core/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add billing-core --target <app> --dry-run`.
