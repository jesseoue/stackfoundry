---
name: supabase
description: Supabase guidance for installed database/auth/storage modules.
---

# Supabase Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/supabase/SKILL.md`
- Registry source: `registry/skills/supabase/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep service-role keys server-only.
- Prefer server-verified users over trusting client session state.
- Document RLS and migration assumptions.
- Verify preview and production environment variables separately.
