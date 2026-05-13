# Unkey API Keys Module

Unkey key creation and verification helpers with protected route example.

## Owns

- `apps/web/src/lib/unkey/client.ts`
- `apps/web/src/lib/unkey/api-keys.ts`
- `apps/web/src/app/api/vendor/unkey/verify/route.ts`
- `apps/web/src/app/(console)/admin/vendors/unkey/page.tsx`

## Dependencies

- `@unkey/api`

## Environment

- `UNKEY_ROOT_KEY`
- `UNKEY_API_ID`

## Deployment Notes

- Create the vendor project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Update source examples when vendor SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
