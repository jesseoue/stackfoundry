# Unkey Rate Limits Module

Optional Unkey adapter for managed rate-limit namespaces and server-side limit checks.

Use the source-owned `rate-limits` module when you want local database-backed limits by default. Add this module when you want Unkey to enforce limits through its managed rate-limit service.

## Owns

- `apps/web/src/lib/unkey/ratelimit.ts`
- `apps/web/src/app/api/providers/unkey/ratelimit/route.ts`
- `apps/web/src/app/(console)/admin/providers/unkey-rate-limits/page.tsx`

## Dependencies

- `@unkey/ratelimit`

## Environment

- `UNKEY_ROOT_KEY`

## Deployment Notes

- Create and document the Unkey rate-limit namespace before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.
- Return standard rate-limit headers from protected routes so API clients can back off predictably.

## Maintenance

- Keep this module focused on the provider adapter boundary.
- Update source examples when provider SDK APIs change.
- Preserve the source-owned `rate-limits` module as the default path in base presets.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
