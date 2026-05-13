# Cloudflare D1 Module

D1 binding usage, SQLite schema starter, and Wrangler database notes.

## Owns

- `cloudflare/d1/schema.sql`
- `cloudflare/d1/queries.ts`
- `apps/web/src/app/(console)/admin/cloudflare/d1/page.tsx`

## Dependencies

No package dependencies.

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Keep secrets in environment variables and never commit local credentials.
- Verify the example route or worker path before promoting this module beyond experimental.
- Update docs, checklist, and manifest metadata when vendor APIs change.
