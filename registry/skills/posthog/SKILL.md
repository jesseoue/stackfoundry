---
name: posthog
description: PostHog analytics guidance for installed analytics modules.
---

# Posthog Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/posthog/SKILL.md`
- Registry source: `registry/skills/posthog/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep server and client keys separated.
- Avoid sending secrets or private customer data in events.
- Document event names, properties, and identity rules.
- Verify opt-out and consent behavior when applicable.
