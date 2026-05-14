# Cloudflare Tunnel

Secure tunnel module for exposing local/internal services.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-tunnel.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-tunnel/page.tsx`
- `docs/providers/cloudflare-tunnel.md`

## Setup Checklist

- Use named tunnels and scoped routes
- Document connector ownership
- Keep tunnel tokens secret
- Verify zero-trust access policy

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm stackfoundry add cloudflare-tunnel --target /tmp/stackfoundry-cloudflare-tunnel --dry-run`.
