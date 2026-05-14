# Cloudflare Observability

Workers logs, traces, analytics, and tail workers.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-observability.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-observability/page.tsx`

## Setup Checklist

- Enable logs/traces before production
- Avoid logging secrets or customer data
- Document dashboard and alert ownership
- Verify deploy log access

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
