# Background Jobs Module

Job table, queue abstraction, retry/cancel UI, and worker handoff patterns.

## Owns

- `packages/db/src/schema/background-jobs.ts`
- `apps/web/src/lib/background-jobs.ts`
- `apps/web/src/app/(console)/jobs/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added as a separate module.
- Update the manifest when source files, schema exports, dependencies, or environment variables change.
- Verify install output with `stackfoundry add background-jobs --target <app> --dry-run` before promoting status.
