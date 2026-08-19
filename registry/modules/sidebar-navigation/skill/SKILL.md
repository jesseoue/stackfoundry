---
name: sidebar-navigation
description: Maintain the Sidebar Navigation module installed by StackFoundry.
---

# Sidebar Navigation Skill

## Boundary

This module owns the Sidebar Navigation source block and its safety checklist. Keep app routing rules and authorization data outside the reusable block.

## Shared Skills

When framework or app-shell behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

## Source Files

- `apps/web/src/lib/stackfoundry/sidebar-navigation.ts`
- `apps/web/src/components/stackfoundry/sidebar-navigation.tsx`
- `apps/web/src/app/(console)/components/sidebar-navigation/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- `authorize-navigation-groups`
- `keep-navigation-server-derived`
- `keep-building-blocks-stateless`
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
