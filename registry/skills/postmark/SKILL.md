---
name: postmark
description: Postmark email guidance for installed email modules.
---

# Postmark Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/postmark/SKILL.md`
- Registry source: `registry/skills/postmark/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep server tokens server-only.
- Verify sender signatures/domains.
- Document template aliases and message streams.
- Test bounce and suppression behavior.
