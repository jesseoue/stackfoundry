# Cloudflare Turnstile

Bot protection for signup, contact, waitlist, and abuse-sensitive forms.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-turnstile.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-turnstile/page.tsx`
- `docs/providers/cloudflare-turnstile.md`

## Setup Checklist

- Protect signup/contact/waitlist first
- Keep secret key server-only
- Verify token server-side
- Document failure and fallback UX

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm cli add cloudflare-turnstile --target /tmp/stackfoundry-cloudflare-turnstile --dry-run`.
