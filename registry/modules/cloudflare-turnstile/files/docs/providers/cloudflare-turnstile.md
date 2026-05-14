# Cloudflare Turnstile

Bot protection for signup, contact, waitlist, and abuse-sensitive forms.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-turnstile.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-turnstile/page.tsx`

## Setup Checklist

- Protect signup/contact/waitlist first
- Keep secret key server-only
- Verify token server-side
- Document failure and fallback UX

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
