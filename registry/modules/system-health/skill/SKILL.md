---
name: system-health
description: Maintain the System Health module installed by StackFoundry.
---

# System Health Maintenance Instructions

## Invariants

- Report down when any required dependency is down.
- Return HTTP 503 only for down status; degraded remains HTTP 200.
- Keep health output free of secrets and tenant-specific data.
- Alert before required dependencies fail.

## Maintenance

- Preserve the module ownership described in `docs.md`.
- Keep default source templates compact, typed, and provider-neutral.
- Update `tests/checklist.md` when behavior changes.
- Do not commit secrets, local state, or generated machine metadata.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.
