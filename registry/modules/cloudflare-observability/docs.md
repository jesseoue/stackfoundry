# Cloudflare Observability

Workers logs, traces, analytics, and tail workers.

## Official Docs

- [Cloudflare Workers Observability](https://developers.cloudflare.com/workers/observability/)

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-observability.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-observability/page.tsx`
- `docs/providers/cloudflare-observability.md`

## Setup Checklist

- Enable logs/traces before production
- Avoid logging secrets or customer data
- Document dashboard and alert ownership
- Verify deploy log access

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm stackfoundry add cloudflare-observability --target /tmp/stackfoundry-cloudflare-observability --dry-run`.
