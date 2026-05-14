# Cloudflare MCP Server

Remote MCP server on Workers with OAuth/auth guidance.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-mcp-server.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-mcp-server/page.tsx`
- `docs/providers/cloudflare-mcp-server.md`

## Setup Checklist

- Define MCP tools with narrow schemas
- Add auth before side effects
- Document OAuth/client registration
- Verify tool inputs and error handling

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm cli add cloudflare-mcp-server --target /tmp/stackfoundry-cloudflare-mcp-server --dry-run`.
