# Cloudflare Agents SDK

Stateful AI agents on Workers, React hooks, WebSocket/RPC surface.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-agents-sdk.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-agents-sdk/page.tsx`

## Setup Checklist

- Use Agents SDK for stateful AI interactions
- Document agent state schema
- Keep callable methods explicit
- Verify WebSocket/RPC behavior before launch

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
