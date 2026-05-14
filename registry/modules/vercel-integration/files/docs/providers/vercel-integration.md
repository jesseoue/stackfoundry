# Vercel Integration

Deployments list, env sync docs, and preview links.

## Owns

- `apps/web/src/lib/stackfoundry/providers/vercel-integration.ts`
- `apps/web/src/app/(console)/admin/providers/vercel-integration/page.tsx`

## Setup Checklist

- Document Vercel project and team ownership
- Pull envs only after linking
- Record preview and production URLs
- Use inspect/logs for failed deploys

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
