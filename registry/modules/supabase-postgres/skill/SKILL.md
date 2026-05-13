---
name: supabase-postgres
description: Maintain the Supabase Postgres vendor module installed by StackFoundry.
---

# Supabase Postgres Maintenance Instructions

- Preserve the vendor boundary documented in `docs.md`.
- Keep example code compact and easy to replace with production logic.
- Never commit provider secrets, local tokens, or generated vendor state.
- Update `module.json` when dependencies, env vars, or install paths change.
