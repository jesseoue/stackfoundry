# Backup Restore Module

Backup run records, restore checklist, and continuity dashboard.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/backup-restore.ts`
- `apps/web/src/lib/backup-restore.ts`
- `apps/web/src/app/(console)/admin/backups/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add backup-restore --target <app> --dry-run`.
