---
name: datadog
description: Datadog monitoring guidance for installed observability modules.
---

# Datadog Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/datadog/SKILL.md`
- Registry source: `registry/skills/datadog/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep API/app keys server-only.
- Document service, environment, and version tags.
- Avoid logging secrets and private customer data.
- Verify logs, traces, and monitors after deploy.
