# StackFoundry Docs

- [Registry](./registry.md)
- [Modules](./modules.md)
- [Providers](./providers.md)
- [Recipes](./recipes.md)
- [Install order](./install-order.md)
- [Readiness](./readiness.md)
- [Conventions](./conventions.md)
- [Maintenance instructions](./maintenance.md)
- [Changelog](./changelog.md)
- [Repository map](./repository.md)
- [Registry compatibility](./registry-compat.md)

## Start Here

1. Start with the API SaaS wedge: `pnpm stackfoundry recipe api-saas-starter`.
2. Dry-run the full path: `pnpm stackfoundry add recipe api-saas-starter --target ./my-app --dry-run`.
3. Read the [Registry](./registry.md), [Recipes](./recipes.md), and [Install order](./install-order.md) docs.
4. Inspect the first modules in `registry/modules`: `api-keys`, `usage-metering`, `credit-wallet`, `stripe-billing`, and `webhook-delivery`.
5. Add agent-ready prompts when you want a coding assistant to drive the install: `pnpm stackfoundry add agent-ready-installs --target ./my-app --dry-run`.
6. Run `pnpm registry:doctor`.
7. Use [Readiness](./readiness.md) and [Conventions](./conventions.md) before adding new modules.
