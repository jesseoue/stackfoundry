# Vercel Blob Module

Vercel Blob upload route, list helper, and file storage dashboard starter.

## Official Docs

- [Vercel Blob Docs](https://vercel.com/docs/storage/vercel-blob)

## Owns

- `apps/web/src/lib/vercel/blob.ts`
- `apps/web/src/app/api/providers/vercel/blob/route.ts`
- `apps/web/src/app/(console)/admin/providers/vercel-blob/page.tsx`

## Dependencies

- `@vercel/blob`

## Environment

- `BLOB_READ_WRITE_TOKEN`

## Deployment Notes

- Create the provider project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the provider adapter boundary.
- Update source examples when provider SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
