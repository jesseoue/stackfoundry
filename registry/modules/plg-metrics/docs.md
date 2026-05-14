# PLG Metrics

Product-led growth event schema, metric helpers, and activation metrics dashboard starter.

## Owns

- `packages/db/src/schema/plg-metrics.ts`
- `apps/web/src/lib/stackfoundry/plg-metrics.ts`
- `apps/web/src/app/(console)/analytics/plg/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep event names stable and namespaced.
- Keep product events tenant-scoped when they represent workspace activity.
- Keep provider ingestion adapters separate from app-owned metric definitions.
- Avoid customer-identifying metadata unless the consuming app has a retention policy.
