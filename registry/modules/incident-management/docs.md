# Incident Management Module

Incident records, severity, status updates, and internal coordination UI.

## Owns

- `packages/db/src/schema/incident-management.ts`
- `apps/web/src/lib/incident-management.ts`
- `apps/web/src/app/(console)/admin/incidents/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add incident-management --target <app> --dry-run`.
