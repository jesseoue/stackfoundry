# Arcjet Security Module

Arcjet request protection starter for bot detection, shielding, and rate limits.

## Owns

- `apps/web/src/lib/arcjet.ts`
- `apps/web/src/app/api/vendor/arcjet/protected/route.ts`
- `apps/web/src/app/(console)/admin/vendors/arcjet/page.tsx`

## Dependencies

- `@arcjet/next`

## Environment

- `ARCJET_KEY`

## Deployment Notes

- Create the vendor project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Update source examples when vendor SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
