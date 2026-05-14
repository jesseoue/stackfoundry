---
name: nodemailer
description: Nodemailer SMTP guidance for installed email modules.
---

# Nodemailer Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/nodemailer/SKILL.md`
- Registry source: `registry/skills/nodemailer/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep SMTP credentials server-only.
- Document provider limits and retry behavior.
- Provide plain-text fallbacks.
- Verify deliverability with a test recipient before production.
