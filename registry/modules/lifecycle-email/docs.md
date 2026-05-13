# Lifecycle Email Module

Lifecycle email campaign definitions, audience rules, and delivery checklist.

## Owns

- `apps/web/src/lib/lifecycle-email.ts`
- `apps/web/src/app/(console)/admin/lifecycle-email/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add lifecycle-email --target <app> --dry-run`.
