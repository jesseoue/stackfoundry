---
name: contentful
description: Contentful CMS guidance for installed content modules.
---

# Contentful Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/contentful/SKILL.md`
- Registry source: `registry/skills/contentful/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep management tokens server-only.
- Document content model ids and preview behavior.
- Separate preview from production delivery tokens.
- Verify fallback behavior when content is missing.
