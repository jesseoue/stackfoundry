# Cloudflare Workers AI

Workers AI inference, embeddings, and image generation examples.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-workers-ai.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-workers-ai/page.tsx`

## Setup Checklist

- Keep model ids explicit
- Document prompt and safety boundaries
- Track usage and failures
- Verify fallback behavior

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
