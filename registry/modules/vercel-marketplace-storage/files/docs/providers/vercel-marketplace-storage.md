# Vercel Marketplace Storage

Guided setup for Neon, Supabase, Upstash, AWS, and marketplace integrations.

## Owns

- `apps/web/src/lib/stackfoundry/providers/vercel-marketplace-storage.ts`
- `apps/web/src/app/(console)/admin/providers/vercel-marketplace-storage/page.tsx`

## Setup Checklist

- Choose storage by product need
- Document Marketplace integration ownership
- Pull provisioned env vars
- Verify preview and production env scopes

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
