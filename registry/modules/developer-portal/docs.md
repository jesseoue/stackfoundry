# Developer Portal Module

Developer dashboard shell for keys, docs, webhooks, and usage.

## Owns

- `apps/web/src/lib/developer-portal.ts`
- `apps/web/src/app/(console)/developers/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add developer-portal --target <app> --dry-run`.
