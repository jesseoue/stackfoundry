# StackFoundry Docs

- [Registry](./registry.md)
- [Modules](./modules.md)
- [Providers](./providers.md)
- [Recipes](./recipes.md)
- [Install order](./install-order.md)
- [Readiness](./readiness.md)
- [Conventions](./conventions.md)
- [Maintenance instructions](./maintenance.md)
- [Repository map](./repository.md)
- [Registry compatibility](./registry-compat.md)

## Start Here

1. Read the [Registry](./registry.md), [Readiness](./readiness.md), and [Conventions](./conventions.md) docs.
2. Inspect the [Recipes](./recipes.md) and [Install order](./install-order.md) docs.
3. Run `pnpm stackfoundry recipes` and `pnpm stackfoundry recipe api-saas-starter`.
4. Inspect the first modules in `registry/modules`.
5. Run `pnpm registry:doctor`.
6. Try `pnpm stackfoundry add api-keys --target /tmp/app --dry-run`.
