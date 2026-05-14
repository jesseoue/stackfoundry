# Vercel Integration

Deployments list, env sync docs, and preview links.

## Official Docs

- [Vercel Integrations](https://vercel.com/docs/integrations)

## Owns

- `apps/web/src/lib/stackfoundry/providers/vercel-integration.ts`
- `apps/web/src/app/(console)/admin/providers/vercel-integration/page.tsx`
- `docs/providers/vercel-integration.md`

## Setup Checklist

- Document Vercel project and team ownership
- Pull envs only after linking
- Record preview and production URLs
- Use inspect/logs for failed deploys

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm stackfoundry add vercel-integration --target /tmp/stackfoundry-vercel-integration --dry-run`.
