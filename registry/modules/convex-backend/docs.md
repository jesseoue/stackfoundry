# Convex Backend

Convex project setup, generated functions, provider wrapper, and deployment docs.

## Owns

- `apps/web/src/lib/stackfoundry/providers/convex-backend.ts`
- `apps/web/src/app/(console)/admin/providers/convex-backend/page.tsx`
- `docs/providers/convex-backend.md`

## Setup Checklist

- Create a Convex project
- Set CONVEX_DEPLOYMENT and NEXT_PUBLIC_CONVEX_URL
- Generate Convex types after schema/function changes
- Deploy functions before enabling UI paths

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm stackfoundry add convex-backend --target /tmp/stackfoundry-convex-backend --dry-run`.
