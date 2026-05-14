# Cloudflare Hyperdrive

Postgres/MySQL connection acceleration for Workers.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-hyperdrive.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-hyperdrive/page.tsx`
- `docs/providers/cloudflare-hyperdrive.md`

## Setup Checklist

- Bind Hyperdrive explicitly
- Document origin database ownership
- Keep DATABASE_URL server-only
- Verify query latency from Workers

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm cli add cloudflare-hyperdrive --target /tmp/stackfoundry-cloudflare-hyperdrive --dry-run`.
