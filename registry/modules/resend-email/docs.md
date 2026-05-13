# Resend Email Module

Resend transactional email client, React Email welcome template, and send route.

## Owns

- `apps/web/src/lib/resend/client.ts`
- `apps/web/src/emails/welcome-email.tsx`
- `apps/web/src/app/api/vendor/resend/send-welcome/route.ts`
- `apps/web/src/app/(console)/admin/vendors/resend/page.tsx`

## Dependencies

- `resend`
- `@react-email/components`

## Environment

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`

## Deployment Notes

- Create the vendor project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Update source examples when vendor SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
