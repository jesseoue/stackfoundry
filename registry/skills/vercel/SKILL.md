---
name: vercel
description: Vercel platform guidance for installed deployment and storage modules.
---

# Vercel Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/vercel/SKILL.md`
- Registry source: `registry/skills/vercel/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Document project linking and environment variable ownership.
- Keep server-only secrets out of public env vars.
- Verify preview and production deployment paths.
- Record deployment URL and rollback notes.
