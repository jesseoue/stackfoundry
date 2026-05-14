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
