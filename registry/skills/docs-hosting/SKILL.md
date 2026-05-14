---
name: docs-hosting
description: Documentation hosting guidance for installed docs modules.
---

# Docs Hosting Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/docs-hosting/SKILL.md`
- Registry source: `registry/skills/docs-hosting/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Choose in-app docs or hosted docs explicitly.
- Record preview URL, production URL, docs root, and owner.
- Verify local preview and production deploy.
- Check metadata, sitemap, and broken links.
