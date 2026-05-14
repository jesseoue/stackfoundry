# Organizations RBAC

Organization role catalog, permission helpers, and workspace role management surface.

## Owns

- `packages/db/src/schema/orgs-rbac.ts`
- `apps/web/src/lib/stackfoundry/orgs-rbac.ts`
- `apps/web/src/app/(console)/settings/workspace/rbac/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep roles scoped to the active organization or workspace.
- Centralize permission checks through shared helpers.
- Record audit events when role assignments or permissions change.
- Keep provider-specific organization behavior in provider adapters.
