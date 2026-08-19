---
name: quota-meters
description: Maintain the Quota Meters module installed by StackFoundry.
---

# Quota Meters Skill

## Boundary

This module owns the Quota Meters source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Shared Skills

When framework or app-shell behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

## Source Files

- `apps/web/src/lib/stackfoundry/quota-meters.ts`
- `apps/web/src/components/stackfoundry/quota-meters.tsx`
- `apps/web/src/app/(console)/components/quota-meters/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- `tenant-scoped-usage`
- `server-owned-enforcement`
- `sync-entitlement-labels`
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
