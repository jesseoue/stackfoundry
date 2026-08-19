---
name: stepper-flow
description: Maintain the Stepper Flow module installed by StackFoundry.
---

# Stepper Flow Skill

## Boundary

This module owns the Stepper Flow source block and its safety checklist. Keep flow persistence, payment, and business transition rules outside the reusable block.

## Shared Skills

When framework or app-shell behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

## Source Files

- `apps/web/src/lib/stackfoundry/stepper-flow.ts`
- `apps/web/src/components/stackfoundry/stepper-flow.tsx`
- `apps/web/src/app/(console)/components/stepper-flow/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- `server-validate-step-transition`
- `preserve-completed-step-data`
- `keep-building-blocks-stateless`
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
