---
name: filter-panel
description: Maintain the Filter Panel module installed by StackFoundry.
---

# Filter Panel Skill

## Boundary

This module owns the Filter Panel source block and its safety checklist. Keep product-specific query construction and authorization outside the reusable block.

## Shared Skills

When framework or app-shell behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

## Source Files

- `apps/web/src/lib/stackfoundry/filter-panel.ts`
- `apps/web/src/components/stackfoundry/filter-panel.tsx`
- `apps/web/src/app/(console)/components/filter-panel/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- `server-validate-filter-input`
- `preserve-tenant-scope`
- `keep-building-blocks-stateless`
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
