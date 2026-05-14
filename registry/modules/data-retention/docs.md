# Data Retention Module

Retention policies, deletion windows, and compliance review UI.

## Owns

- `packages/db/src/schema/data-retention.ts`
- `apps/web/src/lib/data-retention.ts`
- `apps/web/src/app/(console)/data/retention/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add data-retention --target <app> --dry-run`.
