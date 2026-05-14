---
name: knock
description: Guide maintainers through Knock notification feed and workflow integrations.
---

# Knock Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/knock/SKILL.md`
- Registry source: `registry/skills/knock/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep the secret API key server-only.
- Use public API key and feed channel id only as browser-exposed feed configuration.
- Trigger workflows from server code.
- Pass stable authenticated user ids to the Knock provider.
- Keep preference and unsubscribe behavior explicit.
- Verify test workflow delivery, feed read/unread state, and production env values before launch.
