# Admin Console Module

Super-admin shell for users, workspaces, metrics, and operational controls.

## Owns

- `apps/web/src/lib/admin-console.ts`
- `apps/web/src/app/(console)/admin/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add admin-console --target <app> --dry-run`.
