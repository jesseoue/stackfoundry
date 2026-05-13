# Vercel Blob Module

Vercel Blob upload route, list helper, and file storage dashboard starter.

## Owns

- `apps/web/src/lib/vercel/blob.ts`
- `apps/web/src/app/api/vendor/vercel/blob/route.ts`
- `apps/web/src/app/(console)/admin/vendors/vercel-blob/page.tsx`

## Dependencies

- `@vercel/blob`

## Environment

- `BLOB_READ_WRITE_TOKEN`

## Deployment Notes

- Create the vendor project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Update source examples when vendor SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
