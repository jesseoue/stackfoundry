---
name: security-activity
description: Maintain the Security Activity module installed by StackFoundry.
---

# Security Activity Skill

## Boundary

This module owns the Security Activity source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Shared Skills

When framework or app-shell behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

## Source Files

- `apps/web/src/lib/stackfoundry/security-activity.ts`
- `apps/web/src/components/stackfoundry/security-activity.tsx`
- `apps/web/src/app/(console)/components/security-activity/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- `tenant-scoped-events`
- `redact-sensitive-details`
- `immutable-audit-source`
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
