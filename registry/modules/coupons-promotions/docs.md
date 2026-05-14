# Coupons Promotions Module

Coupon, promotion code, and referral discount tracking.

## Owns

- `packages/db/src/schema/coupons-promotions.ts`
- `apps/web/src/lib/stackfoundry/coupons-promotions.ts`
- `apps/web/src/app/(console)/billing/coupons/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add coupons-promotions --target /tmp/app --dry-run`.
