# Public Roadmap

Public roadmap board with planned, in-progress, and shipped product work.

## Owns

- `apps/web/src/lib/stackfoundry/public-roadmap.ts`
- `apps/web/src/app/(marketing)/roadmap/page.tsx`

## Invariants

- Public roadmap items must not expose private customer names, revenue data, or security-sensitive plans.
- Roadmap statuses should be clear and conservative: planned, in progress, shipped.
- Link roadmap items to feature requests when customer feedback is public-safe.
- Keep shipped items aligned with changelog and product announcements.
