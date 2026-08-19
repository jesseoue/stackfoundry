---
name: feedback-collector
description: Maintain the Feedback Collector module installed by StackFoundry.
---

# Feedback Collector Skill

## Boundary

This module owns the Feedback Collector source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Shared Skills

When framework or app-shell behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

## Source Files

- `apps/web/src/lib/stackfoundry/feedback-collector.ts`
- `apps/web/src/components/stackfoundry/feedback-collector.tsx`
- `apps/web/src/app/(console)/components/feedback-collector/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- `authenticated-server-action`
- `rate-limit-writes`
- `no-secret-ingestion`
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
