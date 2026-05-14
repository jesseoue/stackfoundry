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
- source files or planned file paths
- `docs.md`
- `skill/SKILL.md`
- `tests/checklist.md`

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
