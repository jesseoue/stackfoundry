---
name: workspace-switcher
description: Maintain the Workspace Switcher module installed by StackFoundry.
---

# Workspace Switcher Skill

## Boundary

This module owns the Workspace Switcher source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Shared Skills

When framework or app-shell behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

## Source Files

- `apps/web/src/lib/stackfoundry/workspace-switcher.ts`
- `apps/web/src/components/stackfoundry/workspace-switcher.tsx`
- `apps/web/src/app/(console)/components/workspace-switcher/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- `server-scoped-workspaces`
- `audit-sensitive-switches`
- `fail-closed-access`
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
