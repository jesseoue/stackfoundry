---
name: metric-card
description: Maintain the Metric Card module installed by StackFoundry.
---

# Metric Card Skill

## Boundary

This module owns the Metric Card source block and its safety checklist. Keep product-specific metric calculations outside the reusable block.

## Shared Skills

When framework or app-shell behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

## Source Files

- `apps/web/src/lib/stackfoundry/metric-card.ts`
- `apps/web/src/components/stackfoundry/metric-card.tsx`
- `apps/web/src/app/(console)/components/metric-card/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- `server-resolve-display-data`
- `keep-building-blocks-stateless`
- `avoid-misleading-metrics`
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
