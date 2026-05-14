---
name: api-keys
description: Maintain the API keys module installed by StackFoundry.
---

# API Keys Operating Instructions

- Never store plaintext keys.
- Store key prefixes only for display.
- Hash key secrets with a strong one-way hash.
- Scope every key to a user, account, or organization.
- Log create, rotate, revoke, and failed verification events.
- When adding scopes, update docs, tests, and UI labels together.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/drizzle/SKILL.md` (source: `registry/skills/drizzle/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

