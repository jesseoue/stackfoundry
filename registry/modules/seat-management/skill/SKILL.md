---
name: seat-management
description: Maintain the Seat Management module installed by StackFoundry.
---

# Seat Management Skill

## Boundary

This module owns the Seat Management source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)
- `.stackfoundry/skills/drizzle/SKILL.md` (source: `registry/skills/drizzle/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

## Source Files

- `packages/db/src/schema/seat-management.ts`
- `apps/web/src/lib/stackfoundry/seat-management.ts`
- `apps/web/src/app/(console)/billing/seats/page.tsx`

## Dependencies

- Depends on `billing-core`
- Depends on `orgs-rbac`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
