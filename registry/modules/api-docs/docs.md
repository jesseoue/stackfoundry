# API Docs Module

API reference shell with auth, pagination, and error examples.

## Owns

- `apps/web/src/lib/api-docs.ts`
- `apps/web/src/app/(console)/developers/docs/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add api-docs --target <app> --dry-run`.
