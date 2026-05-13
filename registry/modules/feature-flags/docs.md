# Feature Flags Module

Flag table, evaluation helper, admin UI, and per-org targeting.

## Owns

- `packages/db/src/schema/feature-flags.ts`
- `apps/web/src/lib/feature-flags.ts`
- `apps/web/src/app/(console)/feature-flags/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added as a separate module.
- Update the manifest when source files, schema exports, dependencies, or environment variables change.
- Verify install output with `stackfoundry add feature-flags --target <app> --dry-run` before promoting status.
