# Cloudflare MCP Server

Remote MCP server on Workers with OAuth/auth guidance.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-mcp-server.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-mcp-server/page.tsx`

## Setup Checklist

- Define MCP tools with narrow schemas
- Add auth before side effects
- Document OAuth/client registration
- Verify tool inputs and error handling

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
