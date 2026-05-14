# Autumn Entitlements

Optional Autumn adapter for feature checks, metered usage, check-and-consume flows, credit balances, and upgrade context.

Autumn should extend the source-owned entitlement and plan-gating modules. Keep local feature names, UI gates, and fallback behavior clear, then map them to Autumn feature ids when this provider is selected.

## Owns

- `apps/web/src/lib/autumn/entitlements.ts`
- `apps/web/src/app/(console)/admin/providers/autumn-entitlements/page.tsx`

## Dependencies

- `autumn-js`
- `registry:entitlements`
- `registry:plan-gating`

## Environment

- `AUTUMN_SECRET_KEY`

## Provider Notes

- `check` returns whether a customer can use a feature. It supports required balances for metered features.
- Use `sendEvent` only when you intentionally want check-and-consume behavior in one operation.
- Use `track` after successful work for usage events, and include idempotency keys on retryable operations.
- Usage-based pricing can allow overages even after included usage is consumed, so gates should handle the returned upgrade or balance context explicitly.

## Maintenance

- Keep feature ids, plan gates, and upgrade copy documented together.
- Test boolean features, metered features, exhausted balances, overage paths, and idempotent retries before marking stable.
- Keep provider secrets server-only.
