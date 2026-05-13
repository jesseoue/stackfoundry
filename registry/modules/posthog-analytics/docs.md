# PostHog Analytics Module

PostHog Next.js provider, pageview tracking, and event capture helper.

## Owns

- `apps/web/src/components/providers/posthog-provider.tsx`
- `apps/web/src/components/analytics/track-button.tsx`
- `apps/web/src/app/(console)/admin/vendors/posthog/page.tsx`

## Dependencies

- `posthog-js`
- `@posthog/next`

## Environment

- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`

## Deployment Notes

- Create the vendor project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Update source examples when vendor SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
