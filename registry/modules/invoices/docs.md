# Invoices Module

Invoice records, payment status, and billing history UI.

## Owns

- `apps/web/src/lib/invoices.ts`
- `apps/web/src/app/(console)/billing/invoices/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add invoices --target <app> --dry-run`.
