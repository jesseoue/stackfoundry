# Agent Prompt: Install API SaaS Infrastructure

You are helping install StackFoundry infrastructure into an existing app.

Goal: add the `api-saas-starter` recipe as editable source, not as a black-box starter.

Use this workflow:

1. Inspect the target app structure and package manager.
2. Run:

```bash
pnpm stackfoundry recipe api-saas-starter
pnpm stackfoundry add recipe api-saas-starter --target ./my-app --dry-run
```

3. Summarize the proposed files, dependencies, env vars, registry dependencies, and maintenance skills.
4. Ask for approval before writing files unless the user already approved install.
5. Install with:

```bash
pnpm stackfoundry add recipe api-saas-starter --target ./my-app
```

6. Review the resulting diff.
7. Run the target app's Biome lint/format, TypeScript typecheck, migration, test, production build, and responsive smoke-check commands.
8. Do not commit secrets, `.env.local`, provider credentials, generated caches, or local provider metadata.

Primary modules to expect:

- `api-keys`
- `usage-metering`
- `quota-enforcement`
- `credit-wallet`
- `stripe-billing`
- `webhook-inbox`
- `webhook-delivery`
- `api-docs`
- `audit-log`

If paths, framework, package manager, auth provider, or database ownership are unclear, stop and ask before installing.
