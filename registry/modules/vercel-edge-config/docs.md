# Vercel Edge Config Module

Edge Config read helper for low-latency flags, redirects, and rollout config.

## Official Docs

- [Vercel Edge Config Docs](https://vercel.com/docs/edge-config)

## Owns

- `apps/web/src/lib/vercel/edge-config.ts`
- `apps/web/src/app/api/providers/vercel/edge-config/route.ts`
- `apps/web/src/app/(console)/admin/providers/vercel-edge-config/page.tsx`

## Dependencies

- `@vercel/edge-config`

## Environment

- `EDGE_CONFIG`

## Deployment Notes

- Create the provider project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the provider adapter boundary.
- Update source examples when provider SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
