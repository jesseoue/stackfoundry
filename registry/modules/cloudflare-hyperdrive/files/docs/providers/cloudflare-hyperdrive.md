# Cloudflare Hyperdrive

Postgres/MySQL connection acceleration for Workers.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-hyperdrive.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-hyperdrive/page.tsx`

## Setup Checklist

- Bind Hyperdrive explicitly
- Document origin database ownership
- Keep DATABASE_URL server-only
- Verify query latency from Workers

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
