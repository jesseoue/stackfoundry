---
name: integration-card
description: Maintain the Integration Card module installed by StackFoundry.
---

# Integration Card Skill

## Boundary

This module owns the Integration Card source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Shared Skills

When framework or app-shell behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

## Source Files

- `apps/web/src/lib/stackfoundry/integration-card.ts`
- `apps/web/src/components/stackfoundry/integration-card.tsx`
- `apps/web/src/app/(console)/components/integration-card/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- `server-side-credentials`
- `workspace-scoped-connections`
- `secrets-manager-only`
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
