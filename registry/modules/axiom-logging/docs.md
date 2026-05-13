# Axiom Logging Module

Axiom structured event logger and server route for deployment smoke checks.

## Owns

- `apps/web/src/lib/axiom/logger.ts`
- `apps/web/src/app/api/vendor/axiom/log/route.ts`
- `apps/web/src/app/(console)/admin/vendors/axiom/page.tsx`

## Dependencies

- `@axiomhq/js`

## Environment

- `AXIOM_TOKEN`
- `AXIOM_DATASET`

## Deployment Notes

- Create the vendor project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Update source examples when vendor SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
