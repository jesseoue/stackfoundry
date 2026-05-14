---
name: cloudflare
description: Cloudflare platform guidance for installed Workers, storage, and edge modules.
---

# Cloudflare Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/cloudflare/SKILL.md`
- Registry source: `registry/skills/cloudflare/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep bindings explicit in config and docs.
- Do not commit wrangler secrets or account credentials.
- Document local dev, preview, and production deployment commands.
- Verify bindings, routes, and logs after deploy.
