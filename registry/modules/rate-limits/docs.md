# Rate Limits Module

Database-backed limit definitions, fixed-window helper, and UI cards.

## Owns

- `packages/db/src/schema/rate-limits.ts`
- `apps/web/src/lib/rate-limits.ts`
- `apps/web/src/app/(console)/rate-limits/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added as a separate module.
- Update the manifest when source files, schema exports, dependencies, or environment variables change.
- Verify install output with `stackfoundry add rate-limits --target <app> --dry-run` before promoting status.
