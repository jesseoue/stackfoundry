# File Uploads Module

File metadata, upload policy helpers, and upload management UI.

## Owns

- `packages/db/src/schema/file-uploads.ts`
- `apps/web/src/lib/file-uploads.ts`
- `apps/web/src/app/(console)/files/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add file-uploads --target <app> --dry-run`.
