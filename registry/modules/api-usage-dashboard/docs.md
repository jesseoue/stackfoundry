# API Usage Dashboard Module

Per-key usage cards, request totals, errors, and limit visibility.

## Owns

- `apps/web/src/lib/api-usage-dashboard.ts`
- `apps/web/src/app/(console)/developers/usage/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add api-usage-dashboard --target <app> --dry-run`.
