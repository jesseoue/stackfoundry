# Fly Deploy

App and worker deployment with regionality notes and templates.

## Owns

- `apps/web/src/lib/stackfoundry/providers/fly-deploy.ts`
- `apps/web/src/app/(console)/admin/providers/fly-deploy/page.tsx`
- `docs/providers/fly-deploy.md`

## Setup Checklist

- Choose primary region intentionally
- Document app name and machines config
- Keep tokens out of source
- Verify health checks and rollback path

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm cli add fly-deploy --target /tmp/stackfoundry-fly-deploy --dry-run`.
