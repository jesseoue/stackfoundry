# Cloudflare Vectorize

Vector search and RAG provider module.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-vectorize.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-vectorize/page.tsx`

## Setup Checklist

- Define index dimensions and metric once
- Batch embedding writes
- Document namespace strategy
- Verify retrieval quality with fixtures

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
