# Notification Center Module

In-app notification inbox with read state and preference-aware display.

## Owns

- `apps/web/src/lib/notification-center.ts`
- `apps/web/src/app/(console)/notifications/center/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add notification-center --target <app> --dry-run`.
