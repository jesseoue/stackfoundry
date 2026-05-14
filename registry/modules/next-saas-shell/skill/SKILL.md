---
name: next-saas-shell
description: Maintain the Next SaaS Shell module installed by StackFoundry.
---

# Next SaaS Shell Maintenance Instructions

- Keep this module provider-neutral. Add auth, billing, database, analytics, and email through separate modules.
- Preserve the app config, navigation, app shell, launch page, and dashboard ownership described in `docs.md`.
- Do not add secrets, provider SDKs, or database assumptions to this base shell.
- Keep routes intentionally small so teams can replace them after install.
- Verify `next-saas-shell` standalone and the broader `next-saas` preset before changing file targets.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

