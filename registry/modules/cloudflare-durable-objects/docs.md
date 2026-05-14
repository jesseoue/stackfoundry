# Cloudflare Durable Objects

Stateful coordination, realtime rooms, per-tenant state, and DO storage.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-durable-objects.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-durable-objects/page.tsx`
- `docs/providers/cloudflare-durable-objects.md`

## Setup Checklist

- Use Durable Objects for per-entity coordination
- Keep object ids stable
- Document storage and alarm behavior
- Test concurrent requests and reconnects

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm stackfoundry add cloudflare-durable-objects --target /tmp/stackfoundry-cloudflare-durable-objects --dry-run`.
