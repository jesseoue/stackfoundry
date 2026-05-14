# Cloudflare Queues

Async jobs, producer/consumer Workers, retries, and DLQ guidance.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-queues.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-queues/page.tsx`
- `docs/providers/cloudflare-queues.md`

## Setup Checklist

- Define producer and consumer ownership
- Document retry and dead-letter behavior
- Keep message payloads bounded
- Verify idempotent consumers

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm stackfoundry add cloudflare-queues --target /tmp/stackfoundry-cloudflare-queues --dry-run`.
