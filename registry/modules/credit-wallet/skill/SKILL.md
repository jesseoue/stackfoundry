---
name: credit-wallet
description: Maintain the Credit Wallet module installed by StackFoundry.
---

# Credit Wallet Skill

## Purpose

Use this module for prepaid credit systems, AI token wallets, usage top-ups, and admin-issued credits.

## Safety Rules

- Derive balances from the ledger instead of storing mutable balance as the source of truth.
- Require idempotency keys for consumption tied to requests, jobs, or inference ids.
- Never allow silent negative balances.
- Record source, actor, and expiration for credit grants when available.

## Change Checklist

- Update `module.json`, `docs.md`, and `tests/checklist.md` when file targets or invariants change.
- Verify grant, consume, refund, expiration, and insufficient-credit paths.
- Run `pnpm registry:doctor` and a module install dry-run before handoff.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)
- `.stackfoundry/skills/drizzle/SKILL.md` (source: `registry/skills/drizzle/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

