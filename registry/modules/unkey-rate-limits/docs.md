# Unkey Rate Limits Module

Unkey rate limit namespace helper and protected route example.

## Owns

- `apps/web/src/lib/unkey/ratelimit.ts`
- `apps/web/src/app/api/vendor/unkey/ratelimit/route.ts`
- `apps/web/src/app/(console)/admin/vendors/unkey-rate-limits/page.tsx`

## Dependencies

- `@unkey/ratelimit`

## Environment

- `UNKEY_ROOT_KEY`

## Deployment Notes

- Create the vendor project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Update source examples when vendor SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
