# Webhook Inbox Module

Inbound webhook capture, signature metadata, and replay workflow.

## Owns

- `packages/db/src/schema/webhook-inbox.ts`
- `apps/web/src/lib/webhook-inbox.ts`
- `apps/web/src/app/(console)/webhooks/inbox/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add webhook-inbox --target <app> --dry-run`.
