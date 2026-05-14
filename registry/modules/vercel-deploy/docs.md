# Vercel Deploy

Vercel project linking, env pull, preview/prod scripts, and deployment docs.

## Owns

- `apps/web/src/lib/stackfoundry/providers/vercel-deploy.ts`
- `apps/web/src/app/(console)/admin/providers/vercel-deploy/page.tsx`
- `docs/providers/vercel-deploy.md`

## Setup Checklist

- Link the Vercel project before pulling env
- Use preview deployments for review
- Promote production intentionally
- Record rollback and inspect commands

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm cli add vercel-deploy --target /tmp/stackfoundry-vercel-deploy --dry-run`.
