# Convex Backend

Convex project setup, generated functions, provider wrapper, and deployment docs.

## Owns

- `apps/web/src/lib/stackfoundry/providers/convex-backend.ts`
- `apps/web/src/app/(console)/admin/providers/convex-backend/page.tsx`

## Setup Checklist

- Create a Convex project
- Set CONVEX_DEPLOYMENT and NEXT_PUBLIC_CONVEX_URL
- Generate Convex types after schema/function changes
- Deploy functions before enabling UI paths

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
