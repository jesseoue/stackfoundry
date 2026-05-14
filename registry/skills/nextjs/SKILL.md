---
name: nextjs
description: Maintain Next.js App Router code installed by StackFoundry modules.
---

# Next.js Operating Instructions

## Installed Location

- Installed target: `.stackfoundry/skills/nextjs/SKILL.md`
- Registry source: `registry/skills/nextjs/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep server-only data access out of Client Components.
- Put route handlers under `app/api` and UI routes under the relevant App Router segment.
- Prefer Server Components for data loading and add `"use client"` only for interactivity.
- Keep public environment variables prefixed with `NEXT_PUBLIC_`; keep secrets server-only.
- Re-run typecheck and build after changing route handlers, layouts, or shared app configuration.
