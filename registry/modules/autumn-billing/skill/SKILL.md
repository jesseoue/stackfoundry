---
name: autumn-billing
description: Maintain the optional Autumn Billing adapter installed by StackFoundry.
---

# Autumn Billing Maintenance Instructions

- Treat Autumn as an optional provider adapter. Keep `billing-core` and `usage-metering` as the source-owned default path.
- Keep Autumn product, plan, and feature ids in server-owned configuration.
- Validate client-selected plan ids against local allowlists before calling `billing.attach`.
- Verify checkout redirects, saved-payment plan changes, upgrades, downgrades, and cancellation state mapping in sandbox.
- Keep `module.json`, `docs.md`, and `tests/checklist.md` aligned when env vars, dependencies, or target files change.
- Do not introduce provider lock-in outside the adapter boundary.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/autumn/SKILL.md` (source: `registry/skills/autumn/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

