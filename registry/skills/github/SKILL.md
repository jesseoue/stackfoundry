---
name: github
description: GitHub integration guidance for installed modules.
---

# Github Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/github/SKILL.md`
- Registry source: `registry/skills/github/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep app private keys and webhook secrets server-only.
- Verify webhook signatures.
- Document app permissions and installation flow.
- Test repository, issue, and webhook edge cases.
