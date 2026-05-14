# Railway Deploy

Full-stack deploy option for Node apps, workers, and databases.

## Owns

- `apps/web/src/lib/stackfoundry/providers/railway-deploy.ts`
- `apps/web/src/app/(console)/admin/providers/railway-deploy/page.tsx`

## Setup Checklist

- Document Railway project and service names
- Configure build/start commands
- Scope variables by environment
- Verify health checks and rollback path

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
