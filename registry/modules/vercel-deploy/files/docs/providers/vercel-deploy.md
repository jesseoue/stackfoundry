# Vercel Deploy

Vercel project linking, env pull, preview/prod scripts, and deployment docs.

## Owns

- `apps/web/src/lib/stackfoundry/providers/vercel-deploy.ts`
- `apps/web/src/app/(console)/admin/providers/vercel-deploy/page.tsx`

## Setup Checklist

- Link the Vercel project before pulling env
- Use preview deployments for review
- Promote production intentionally
- Record rollback and inspect commands

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
