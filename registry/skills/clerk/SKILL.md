---
name: clerk
description: Clerk authentication guidance for installed auth modules.
---

# Clerk Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/clerk/SKILL.md`
- Registry source: `registry/skills/clerk/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep Clerk secrets server-only.
- Protect routes and server actions before reading tenant data.
- Keep webhook verification and user sync idempotent.
- Document sign-in, sign-up, organization, and billing assumptions.
