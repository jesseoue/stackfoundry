---
name: timeline-activity
description: Maintain the Timeline Activity module installed by StackFoundry.
---

# Timeline Activity Skill

## Boundary

This module owns the Timeline Activity source block and its safety checklist. Keep event persistence, authorization, and audit logging in the adopting app.

## Shared Skills

When framework or app-shell behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

## Source Files

- `apps/web/src/lib/stackfoundry/timeline-activity.ts`
- `apps/web/src/components/stackfoundry/timeline-activity.tsx`
- `apps/web/src/app/(console)/components/timeline-activity/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- `server-resolve-display-data`
- `tenant-scope-activity`
- `avoid-sensitive-event-details`
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
