# Convex Realtime

Live queries, subscriptions, realtime dashboards, and optimistic update examples.

## Owns

- `apps/web/src/lib/stackfoundry/providers/convex-realtime.ts`
- `apps/web/src/app/(console)/admin/providers/convex-realtime/page.tsx`
- `docs/providers/convex-realtime.md`

## Setup Checklist

- Use Convex live queries for realtime state
- Keep optimistic updates reversible
- Document subscription ownership
- Verify disconnected and reconnect states

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm cli add convex-realtime --target /tmp/stackfoundry-convex-realtime --dry-run`.
