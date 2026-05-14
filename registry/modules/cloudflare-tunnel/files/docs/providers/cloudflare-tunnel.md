# Cloudflare Tunnel

Secure tunnel module for exposing local/internal services.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-tunnel.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-tunnel/page.tsx`

## Setup Checklist

- Use named tunnels and scoped routes
- Document connector ownership
- Keep tunnel tokens secret
- Verify zero-trust access policy

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
