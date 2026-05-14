# One-Time Purchases

One-off payments, order records, add-ons, lifetime deals, and fulfillment tracking.

## Owns

- `packages/db/src/schema/one-time-purchases.ts`
- `apps/web/src/lib/stackfoundry/one-time-purchases.ts`
- `apps/web/src/app/(console)/billing/purchases/page.tsx`

## Dependencies

- `registry:billing-core`

## Invariants

- Fulfillment must happen once per paid order.
- Payment provider event ids should be stored and deduped by the billing provider module.
- Orders should preserve amount, currency, provider, provider object id, and fulfillment status.
- Refund/dispute modules should reference order records instead of inventing separate commerce state.
- Do not treat checkout redirects as proof of payment.

## Verification

- Run `pnpm registry:doctor` after editing the module.
- Run `pnpm cli add one-time-purchases --target /tmp/stackfoundry-one-time-purchases --dry-run`.
- Test checkout completed, payment failed, refunded, and already-fulfilled paths before marking stable.
