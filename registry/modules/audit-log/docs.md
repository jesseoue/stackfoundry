# Audit Log Module

Append-only activity table, event helpers, and admin timeline UI.

## Owns

- `packages/db/src/schema/audit-log.ts`
- `apps/web/src/lib/audit-log.ts`
- `apps/web/src/app/(console)/audit-log/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added as a separate module.
- Update the manifest when source files, schema exports, dependencies, or environment variables change.
- Verify install output with `stackfoundry add audit-log --target <app> --dry-run` before promoting status.
