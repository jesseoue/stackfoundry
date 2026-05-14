# Notifications Module

Notification events, delivery preferences, and provider-neutral send queue.

## Owns

- `packages/db/src/schema/notifications.ts`
- `apps/web/src/lib/notifications.ts`
- `apps/web/src/app/(console)/notifications/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add notifications --target <app> --dry-run`.
