# Convex Integration

Convex dashboard links, deployment status, and schema/function notes.

## Owns

- `apps/web/src/lib/stackfoundry/providers/convex-integration.ts`
- `apps/web/src/app/(console)/admin/providers/convex-integration/page.tsx`

## Setup Checklist

- Link the target Convex project
- Record dashboard and deployment URLs
- Document schema ownership
- Verify preview and production deployments separately

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
