---
name: drizzle-postgres
description: Maintain the Drizzle Postgres module installed by StackFoundry.
---

# Drizzle Postgres Operating Instructions

- Keep DB access server-only.
- Add tables under the schema directory and export them from the schema barrel.
- Generate and commit migration SQL when schema changes are intended.
- Do not import DB helpers from Client Components.
- Include tenant/user/org scope in cached query tags when data is user-specific.
