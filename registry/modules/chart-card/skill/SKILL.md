---
name: chart-card
description: Maintain the Chart Card module installed by StackFoundry.
---

# Chart Card Skill

## Boundary

This module owns the Chart Card source block and its safety checklist. Keep product-specific analytics and charting integrations outside the reusable block.

## Shared Skills

When framework or app-shell behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

## Source Files

- `apps/web/src/lib/stackfoundry/chart-card.ts`
- `apps/web/src/components/stackfoundry/chart-card.tsx`
- `apps/web/src/app/(console)/components/chart-card/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- `server-resolve-display-data`
- `keep-building-blocks-stateless`
- `provide-chart-alternatives`
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
