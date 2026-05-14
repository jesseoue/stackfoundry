---
name: cloudflare-mcp-server
description: Maintain the Cloudflare MCP Server module installed by StackFoundry.
---

# Cloudflare MCP Server Maintenance Instructions

- Keep module ownership clear.
- Update docs with behavior changes.
- Add verification steps before release.
- Do not introduce provider lock-in outside the module boundary.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/cloudflare/SKILL.md` (source: `registry/skills/cloudflare/SKILL.md`)
- `.stackfoundry/skills/mcp/SKILL.md` (source: `registry/skills/mcp/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

