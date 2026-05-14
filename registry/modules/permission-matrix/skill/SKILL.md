---
name: permission-matrix
description: Maintain the Permission Matrix module installed by StackFoundry.
---

# Permission Matrix Skill

## Boundary

This module owns the Permission Matrix source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)
- `.stackfoundry/skills/drizzle/SKILL.md` (source: `registry/skills/drizzle/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

## Source Files

- `packages/db/src/schema/permission-matrix.ts`
- `apps/web/src/lib/stackfoundry/permission-matrix.ts`
- `apps/web/src/app/(console)/settings/workspace/permissions/page.tsx`

## Dependencies

- Depends on `orgs-rbac`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
