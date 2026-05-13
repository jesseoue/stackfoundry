# Support Console Module

Support workspace for customer lookup, notes, and escalation state.

## Owns

- `apps/web/src/lib/support-console.ts`
- `apps/web/src/app/(console)/admin/support/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add support-console --target <app> --dry-run`.
