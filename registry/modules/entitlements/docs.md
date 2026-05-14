# Entitlements Module

Feature entitlement definitions, checks, and admin review UI.

## Owns

- `packages/db/src/schema/entitlements.ts`
- `apps/web/src/lib/entitlements.ts`
- `apps/web/src/app/(console)/billing/entitlements/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add entitlements --target <app> --dry-run`.
