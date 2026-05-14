# Resend Email Module

Resend transactional email client, React Email welcome template, and send route.

## Official Docs

- [Resend Docs](https://resend.com/docs)

## Owns

- `apps/web/src/lib/resend/client.ts`
- `apps/web/src/emails/welcome-email.tsx`
- `apps/web/src/app/api/providers/resend/send-welcome/route.ts`
- `apps/web/src/app/(console)/admin/providers/resend/page.tsx`

## Dependencies

- `resend`
- `@react-email/components`

## Environment

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`

## Deployment Notes

- Create the provider project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the provider adapter boundary.
- Update source examples when provider SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
