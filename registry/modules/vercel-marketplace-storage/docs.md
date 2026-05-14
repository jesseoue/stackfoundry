# Vercel Marketplace Storage

Guided setup for Neon, Supabase, Upstash, AWS, and marketplace integrations.

## Owns

- `apps/web/src/lib/stackfoundry/providers/vercel-marketplace-storage.ts`
- `apps/web/src/app/(console)/admin/providers/vercel-marketplace-storage/page.tsx`
- `docs/providers/vercel-marketplace-storage.md`

## Setup Checklist

- Choose storage by product need
- Document Marketplace integration ownership
- Pull provisioned env vars
- Verify preview and production env scopes

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm cli add vercel-marketplace-storage --target /tmp/stackfoundry-vercel-marketplace-storage --dry-run`.
