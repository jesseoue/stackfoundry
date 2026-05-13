# Drizzle Postgres Module

Installs a Postgres + Drizzle data layer with migrations and server-only app access.

## Owns

- `packages/db`
- root `drizzle.config.ts`
- app-level `lib/db.ts`
- `DATABASE_URL` env documentation

## Verification

- Generate migrations.
- Run migrations or push in a local database.
- Confirm app server code can import `getDb()`.
- Confirm no client component imports DB code.
