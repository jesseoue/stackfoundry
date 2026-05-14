# Cloudflare Agents SDK

Stateful AI agents on Workers, React hooks, WebSocket/RPC surface.

## Official Docs

- [Cloudflare Agents Docs](https://developers.cloudflare.com/agents/)

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-agents-sdk.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-agents-sdk/page.tsx`
- `docs/providers/cloudflare-agents-sdk.md`

## Setup Checklist

- Use Agents SDK for stateful AI interactions
- Document agent state schema
- Keep callable methods explicit
- Verify WebSocket/RPC behavior before launch

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm stackfoundry add cloudflare-agents-sdk --target /tmp/stackfoundry-cloudflare-agents-sdk --dry-run`.
