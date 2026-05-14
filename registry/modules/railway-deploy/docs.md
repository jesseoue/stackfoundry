# Railway Deploy

Full-stack deploy option for Node apps, workers, and databases.

## Owns

- `apps/web/src/lib/stackfoundry/providers/railway-deploy.ts`
- `apps/web/src/app/(console)/admin/providers/railway-deploy/page.tsx`
- `docs/providers/railway-deploy.md`

## Setup Checklist

- Document Railway project and service names
- Configure build/start commands
- Scope variables by environment
- Verify health checks and rollback path

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm stackfoundry add railway-deploy --target /tmp/stackfoundry-railway-deploy --dry-run`.
