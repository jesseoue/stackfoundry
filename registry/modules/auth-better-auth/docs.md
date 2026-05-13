# Better Auth Module

Better Auth server config, Next.js route handler, and typed client starter.

## Owns

- `apps/web/src/lib/auth.ts`
- `apps/web/src/lib/auth-client.ts`
- `apps/web/src/app/api/auth/[...all]/route.ts`
- `apps/web/src/app/(console)/admin/auth/better-auth/page.tsx`

## Dependencies

`better-auth`

## Environment

- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Keep secrets in environment variables and never commit local credentials.
- Verify the example route or worker path before promoting this module beyond experimental.
- Update docs, checklist, and manifest metadata when vendor APIs change.
