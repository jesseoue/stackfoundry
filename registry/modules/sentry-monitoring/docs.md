# Sentry Monitoring Module

Sentry Next.js config files, manual capture helper, and release deployment notes.

## Owns

- `apps/web/src/lib/sentry/capture.ts`
- `apps/web/sentry.client.config.ts`
- `apps/web/sentry.server.config.ts`
- `apps/web/src/app/(console)/admin/vendors/sentry/page.tsx`

## Dependencies

- `@sentry/nextjs`

## Environment

- `NEXT_PUBLIC_SENTRY_DSN`
- `SENTRY_AUTH_TOKEN`
- `SENTRY_ORG`
- `SENTRY_PROJECT`

## Deployment Notes

- Create the vendor project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Update source examples when vendor SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
