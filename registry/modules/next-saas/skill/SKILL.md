---
name: next-saas
description: Maintain the Next SaaS module installed by StackFoundry.
---

# Next SaaS Maintenance Instructions

- Keep this module provider-neutral. Add auth, billing, database, analytics, and email through separate modules.
- Preserve the app config, navigation, app shell, launch page, and dashboard ownership described in `docs.md`.
- Do not add secrets, provider SDKs, or database assumptions to this base shell.
- Keep routes intentionally small so teams can replace them after install.
- Verify `next-saas` standalone and the broader `next-saas` preset before changing file targets.
