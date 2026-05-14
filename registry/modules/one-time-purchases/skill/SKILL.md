---
name: one-time-purchases
description: Maintain the One-Time Purchases module installed by StackFoundry.
---

# One-Time Purchases Skill

## Purpose

Use this module for add-ons, credit packs, lifetime deals, and other one-off payment records.

## Safety Rules

- Fulfill only after a verified provider event, not after a redirect.
- Preserve provider, provider order id, amount, currency, product key, and fulfillment status.
- Make fulfillment idempotent and safe to retry.
- Keep refunds and disputes tied back to the original order record.

## Change Checklist

- Update `module.json`, `docs.md`, and `tests/checklist.md` when file targets or invariants change.
- Test completed, failed, refunded, disputed, and already-fulfilled paths.
- Run `pnpm registry:doctor` and a module install dry-run before handoff.
