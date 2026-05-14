# Plan Gating Module

Server-side plan checks and upgrade prompt surfaces.

## Owns

- `apps/web/src/lib/plan-gating.ts`
- `apps/web/src/app/(console)/billing/plan-gating/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add plan-gating --target <app> --dry-run`.
