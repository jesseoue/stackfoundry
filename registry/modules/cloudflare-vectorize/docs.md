# Cloudflare Vectorize

Vector search and RAG provider module.

## Official Docs

- [Cloudflare Vectorize Docs](https://developers.cloudflare.com/vectorize/)

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-vectorize.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-vectorize/page.tsx`
- `docs/providers/cloudflare-vectorize.md`

## Setup Checklist

- Define index dimensions and metric once
- Batch embedding writes
- Document namespace strategy
- Verify retrieval quality with fixtures

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm stackfoundry add cloudflare-vectorize --target /tmp/stackfoundry-cloudflare-vectorize --dry-run`.
