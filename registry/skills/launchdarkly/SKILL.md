---
name: launchdarkly
description: LaunchDarkly flag guidance for installed feature flag modules.
---

# Launchdarkly Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/launchdarkly/SKILL.md`
- Registry source: `registry/skills/launchdarkly/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep SDK keys scoped to server or client intentionally.
- Document flag keys, environments, and fallbacks.
- Avoid leaking private targeting traits.
- Verify offline/default behavior.
