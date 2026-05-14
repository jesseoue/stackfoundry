---
name: resend
description: Resend email guidance for installed email modules.
---

# Resend Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/resend/SKILL.md`
- Registry source: `registry/skills/resend/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep API keys server-only.
- Verify sender domain before production send.
- Provide plain-text fallbacks for transactional email.
- Document bounce, retry, and suppression behavior.
