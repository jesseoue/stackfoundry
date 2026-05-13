# Cursor Pagination Module

Cursor-based pagination helpers for stable API lists.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `apps/web/src/lib/cursor-pagination.ts`
- `apps/web/src/app/(console)/developers/pagination/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep the default module provider-neutral.
- Add provider-specific adapters as separate modules.
- Verify install output with `stackfoundry add cursor-pagination --target <app> --dry-run`.
