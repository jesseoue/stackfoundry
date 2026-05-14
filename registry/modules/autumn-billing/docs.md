# Autumn Billing

Optional Autumn adapter for plan attach, checkout redirects, usage billing, overages, and plan changes.

Autumn should sit beside the source-owned billing modules, not replace them by default. Use `billing-core` and `usage-metering` for local product state, then map plan ids and usage features into Autumn when the app chooses Autumn for hosted billing logic.

## Owns

- `apps/web/src/lib/autumn/billing.ts`
- `apps/web/src/app/(console)/admin/providers/autumn-billing/page.tsx`

## Dependencies

- `autumn-js`
- `registry:billing-core`
- `registry:usage-metering`

## Environment

- `AUTUMN_SECRET_KEY`

## Provider Notes

- Autumn's `billing.attach` flow attaches a customer to a plan and may return a `paymentUrl` for hosted checkout.
- Keep plan ids in server-owned configuration. Do not trust plan ids, prices, or feature quantities from client input without validation.
- Model products, plans, usage features, included amounts, and overages in Autumn before promoting this adapter.

## Maintenance

- Keep this module focused on the Autumn boundary.
- Update local billing mappings when Autumn product, plan, or feature ids change.
- Verify sandbox checkout, upgrade, downgrade, saved-payment, and cancellation paths before marking stable.
