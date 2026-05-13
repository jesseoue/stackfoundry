# Upstash Redis Module

Upstash Redis client, serverless rate limiter, and deployment smoke route.

## Owns

- `apps/web/src/lib/upstash/redis.ts`
- `apps/web/src/lib/upstash/ratelimit.ts`
- `apps/web/src/app/api/vendor/upstash/health/route.ts`
- `apps/web/src/app/(console)/admin/vendors/upstash/page.tsx`

## Dependencies

- `@upstash/redis`
- `@upstash/ratelimit`

## Environment

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

## Deployment Notes

- Create the vendor project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Update source examples when vendor SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
