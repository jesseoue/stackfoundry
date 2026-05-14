# Webhook Delivery Module

Outbound webhook endpoints, signing helpers, retries, and delivery logs.

## Owns

- `packages/db/src/schema/webhook-delivery.ts`
- `apps/web/src/lib/webhook-delivery.ts`
- `apps/web/src/app/(console)/developers/webhooks/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add webhook-delivery --target <app> --dry-run`.
