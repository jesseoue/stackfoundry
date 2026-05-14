---
name: axiom
description: Axiom logging guidance for installed observability modules.
---

# Axiom Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/axiom/SKILL.md`
- Registry source: `registry/skills/axiom/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep ingest tokens server-only.
- Document datasets and retention expectations.
- Avoid logging secrets and private customer data.
- Verify structured events in preview and production.
