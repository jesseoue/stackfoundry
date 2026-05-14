# Product Announcements

In-app and email-ready product announcements for launches, releases, and maintenance notices.

## Owns

- `apps/web/src/lib/stackfoundry/product-announcements.ts`
- `apps/web/src/app/(console)/admin/announcements/page.tsx`

## Invariants

- Respect notification preferences and unsubscribe rules.
- Keep internal-only launch notes separate from customer-facing announcements.
- Include audience, channel, scheduled time, and rollback notes before sending.
- Coordinate shipped announcements with changelog, roadmap, and lifecycle email modules.
