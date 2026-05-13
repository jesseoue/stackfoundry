# Clerk Auth Module

Clerk sign-in/sign-up pages, middleware, server auth helper, and webhook starter.

## Owns

- `middleware.ts`
- `apps/web/src/lib/clerk/authorization.ts`
- `apps/web/src/app/(auth)/sign-in/[[...sign-in]]/page.tsx`
- `apps/web/src/app/(auth)/sign-up/[[...sign-up]]/page.tsx`
- `apps/web/src/app/api/webhooks/clerk/route.ts`
- `apps/web/src/app/(console)/admin/auth/clerk/page.tsx`

## Dependencies

`@clerk/nextjs`

## Environment

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `CLERK_WEBHOOK_SECRET`

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Keep secrets in environment variables and never commit local credentials.
- Verify the example route or worker path before promoting this module beyond experimental.
- Update docs, checklist, and manifest metadata when vendor APIs change.
