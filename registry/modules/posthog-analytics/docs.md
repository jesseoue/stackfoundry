# PostHog Analytics Module

PostHog Next.js provider, pageview tracking, and event capture helper.

## Official Docs

- [PostHog Docs](https://posthog.com/docs)

## Owns

- `apps/web/src/components/providers/posthog-provider.tsx`
- `apps/web/src/components/analytics/track-button.tsx`
- `apps/web/src/app/(console)/admin/providers/posthog/page.tsx`

## Dependencies

- `posthog-js`
- `@posthog/next`

## Environment

- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`

## Deployment Notes

- Create the provider project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the provider adapter boundary.
- Update source examples when provider SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
