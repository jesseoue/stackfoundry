# Data Export Module

User and workspace export requests with status tracking.

## Owns

- `packages/db/src/schema/data-export.ts`
- `apps/web/src/lib/data-export.ts`
- `apps/web/src/app/(console)/data/export/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add data-export --target <app> --dry-run`.
