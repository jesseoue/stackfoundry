---
name: drizzle
description: Maintain Drizzle ORM and Postgres code installed by StackFoundry modules.
---

# Drizzle Operating Instructions

- Keep database access in server-only code.
- Add schema changes under `packages/db/src/schema` and export shared tables from the schema barrel.
- Generate and commit migrations when schema changes are intended.
- Use typed query helpers instead of raw SQL unless the query needs a documented escape hatch.
- Include tenant, organization, or user scope in queries and cache tags whenever data is not global.
