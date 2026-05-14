# Autumn Billing Checklist

- [ ] module manifest validates
- [ ] `AUTUMN_SECRET_KEY` is configured server-side only
- [ ] Autumn products, plans, usage features, and overage behavior match local billing mappings
- [ ] client plan ids are validated against server-owned configuration
- [ ] checkout redirect, upgrade, downgrade, saved-payment, and cancellation paths are tested in sandbox
- [ ] install path is verified with `stackfoundry add autumn-billing --target <app> --dry-run`
