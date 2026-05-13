# Neon Postgres Module

Neon serverless Postgres client, Drizzle-compatible env wiring, and branching notes.

## Owns

- `apps/web/src/lib/neon/client.ts`
- `apps/web/src/lib/neon/branching.ts`
- `apps/web/src/app/(console)/admin/data/neon/page.tsx`

## Dependencies

`@neondatabase/serverless`

## Environment

- `DATABASE_URL`

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Keep secrets in environment variables and never commit local credentials.
- Verify the example route or worker path before promoting this module beyond experimental.
- Update docs, checklist, and manifest metadata when vendor APIs change.
