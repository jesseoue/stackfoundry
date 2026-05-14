---
name: mcp
description: MCP guidance for installed client/server modules.
---

# Mcp Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/mcp/SKILL.md`
- Registry source: `registry/skills/mcp/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep server credentials and OAuth secrets server-only.
- Document tool schemas and trust boundaries.
- Validate tool inputs before side effects.
- Verify connection, auth, and error handling.
