---
name: openfeature
description: OpenFeature flag guidance for installed feature flag modules.
---

# Openfeature Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/openfeature/SKILL.md`
- Registry source: `registry/skills/openfeature/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep provider adapters behind the OpenFeature interface.
- Document flag keys and fallback values.
- Avoid evaluating private traits on the client unless intended.
- Verify default behavior when provider is unavailable.
