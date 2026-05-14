# Cloudflare Workers AI

Workers AI inference, embeddings, and image generation examples.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-workers-ai.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-workers-ai/page.tsx`
- `docs/providers/cloudflare-workers-ai.md`

## Setup Checklist

- Keep model ids explicit
- Document prompt and safety boundaries
- Track usage and failures
- Verify fallback behavior

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm stackfoundry add cloudflare-workers-ai --target /tmp/stackfoundry-cloudflare-workers-ai --dry-run`.
