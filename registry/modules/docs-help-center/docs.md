# Docs Help Center Module

Help center index, article metadata, and support escalation paths.

## Owns

- `apps/web/src/lib/docs-help-center.ts`
- `apps/web/src/app/(marketing)/help/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add docs-help-center --target <app> --dry-run`.
