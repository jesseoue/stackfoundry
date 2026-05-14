# Convex Realtime

Live queries, subscriptions, realtime dashboards, and optimistic update examples.

## Owns

- `apps/web/src/lib/stackfoundry/providers/convex-realtime.ts`
- `apps/web/src/app/(console)/admin/providers/convex-realtime/page.tsx`

## Setup Checklist

- Use Convex live queries for realtime state
- Keep optimistic updates reversible
- Document subscription ownership
- Verify disconnected and reconnect states

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
