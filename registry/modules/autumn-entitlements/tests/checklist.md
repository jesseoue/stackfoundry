# Autumn Entitlements Checklist

- [ ] module manifest validates
- [ ] `AUTUMN_SECRET_KEY` is configured server-side only
- [ ] local entitlement names are mapped to Autumn feature ids
- [ ] boolean feature, metered feature, exhausted balance, and overage-enabled paths are tested
- [ ] retryable usage tracking includes idempotency keys
- [ ] install path is verified with `stackfoundry add autumn-entitlements --target <app> --dry-run`
