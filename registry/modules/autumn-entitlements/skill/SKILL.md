---
name: autumn-entitlements
description: Maintain the optional Autumn Entitlements adapter installed by StackFoundry.
---

# Autumn Entitlements Maintenance Instructions

- Treat Autumn as an optional provider adapter. Keep `entitlements` and `plan-gating` as the source-owned default path.
- Map local entitlement names to Autumn feature ids in one server-side boundary.
- Use `check` before expensive work and `track` after successful work unless check-and-consume is explicitly required.
- Include idempotency keys when tracking usage from retryable requests or jobs.
- Test boolean features, metered features, exhausted included usage, overage-enabled usage, and denied upgrade prompts.
- Do not introduce provider lock-in outside the adapter boundary.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/autumn/SKILL.md` (source: `registry/skills/autumn/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

