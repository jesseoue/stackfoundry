# Cloudflare Queues

Async jobs, producer/consumer Workers, retries, and DLQ guidance.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-queues.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-queues/page.tsx`

## Setup Checklist

- Define producer and consumer ownership
- Document retry and dead-letter behavior
- Keep message payloads bounded
- Verify idempotent consumers

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
