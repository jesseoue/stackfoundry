# Supabase Postgres Module

Supabase SSR clients, Postgres env wiring, and RLS-first setup notes.

## Owns

- `apps/web/src/lib/supabase/server.ts`
- `apps/web/src/lib/supabase/admin.ts`
- `supabase/rls-notes.sql`
- `apps/web/src/app/(console)/admin/data/supabase/page.tsx`

## Dependencies

`@supabase/ssr`, `@supabase/supabase-js`

## Environment

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Maintenance

- Keep this module focused on the provider adapter boundary.
- Keep secrets in environment variables and never commit local credentials.
- Verify the example route or worker path before promoting this module beyond experimental.
- Update docs, checklist, and manifest metadata when provider APIs change.
