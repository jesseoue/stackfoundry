---
name: sentry
description: Sentry monitoring guidance for installed observability modules.
---

# Sentry Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/sentry/SKILL.md`
- Registry source: `registry/skills/sentry/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep DSN and auth token usage documented.
- Scrub PII and secrets before capture.
- Document release, environment, and sampling behavior.
- Verify errors are captured in preview before production.
