# Convex Integration

Convex dashboard links, deployment status, and schema/function notes.

## Official Docs

- [Convex Docs](https://docs.convex.dev)

## Owns

- `apps/web/src/lib/stackfoundry/providers/convex-integration.ts`
- `apps/web/src/app/(console)/admin/providers/convex-integration/page.tsx`
- `docs/providers/convex-integration.md`

## Setup Checklist

- Link the target Convex project
- Record dashboard and deployment URLs
- Document schema ownership
- Verify preview and production deployments separately

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm stackfoundry add convex-integration --target /tmp/stackfoundry-convex-integration --dry-run`.
