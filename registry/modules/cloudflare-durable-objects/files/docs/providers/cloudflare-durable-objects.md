# Cloudflare Durable Objects

Stateful coordination, realtime rooms, per-tenant state, and DO storage.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-durable-objects.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-durable-objects/page.tsx`

## Setup Checklist

- Use Durable Objects for per-entity coordination
- Keep object ids stable
- Document storage and alarm behavior
- Test concurrent requests and reconnects

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
