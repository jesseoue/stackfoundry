# Contributing

Thanks for your interest in StackFoundry.

## Local Development

Use the package manager and Node.js version declared in `package.json`.

```bash
corepack enable
pnpm install
pnpm check
```

Useful focused commands:

```bash
pnpm registry:doctor
pnpm registry:build
pnpm lint
pnpm test
pnpm dev:web
```

## Adding a Module

A module should include:

- `module.json`
- source files when the module is `ready`, `experimental`, or `stable`
- `docs.md`
- `skill/SKILL.md`
- `tests/checklist.md`

Use `stub` for modules that document a real SaaS capability but do not install source yet. Use `ready` only when the module has installable source files and passes registry validation.

## Provider Adapters

Provider contributions are welcome. Keep adapters optional and focused:

- Add provider-specific code in its own module instead of coupling it to source-owned defaults.
- Reference shared provider skills from `registry/skills/<provider>/SKILL.md` when possible.
- Document required environment variables, dashboard resources, webhook setup, and smoke-test steps.
- Do not commit provider credentials, project IDs, customer data, `.env*`, or generated local state.

## Recipes And Presets

Recipes explain install order and architecture. Presets install bundles. If your provider belongs in a larger workflow, update the relevant recipe or preset and regenerate `public/r`.

## Pull Requests

Each PR should focus on one phase or one module.

Include:

- summary
- test plan
- docs changes
- screenshots/GIFs for UI changes
- public-safety checklist

Do not include secrets, private customer data, local environment files, or generated caches.

## CI/CD

Pull requests and pushes to `main` run the GitHub Actions quality gates in `.github/workflows/ci.yml`.

Production and preview deployments use `.github/workflows/deploy-vercel.yml` and require these repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Do not commit `.vercel/`, `.env*`, provider credentials, or generated deployment state.
