# Fly Deploy

App and worker deployment with regionality notes and templates.

## Owns

- `apps/web/src/lib/stackfoundry/providers/fly-deploy.ts`
- `apps/web/src/app/(console)/admin/providers/fly-deploy/page.tsx`

## Setup Checklist

- Choose primary region intentionally
- Document app name and machines config
- Keep tokens out of source
- Verify health checks and rollback path

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
