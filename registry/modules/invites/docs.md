# Invites Module

Email invitations, pending invitation state, role assignment, and resend/cancel flows.

## Owns

- `packages/db/src/schema/invites.ts`
- `apps/web/src/lib/invites.ts`
- `apps/web/src/app/(console)/settings/workspace/invites/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added as a separate module.
- Update the manifest when source files, schema exports, dependencies, or environment variables change.
- Verify install output with `stackfoundry add invites --target <app> --dry-run` before promoting status.
