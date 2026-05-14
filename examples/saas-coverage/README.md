# SaaS Coverage Example

This example proves the broad SaaS coverage preset:

- tenant context and custom domains
- tenant isolation checks and permission matrices
- billing portal, seats, dunning, tax, refunds, and reconciliation
- idempotency, CSRF, input validation, secrets, and dependency audit blocks
- uptime, on-call, postmortem, SLA, support, feedback, and bug report workflows
- reusable product components for command menus, toasts, empty/loading states, error boundaries, data tables, and settings layouts

## Smoke Install

```bash
rm -rf /tmp/stackfoundry-saas-coverage
mkdir -p /tmp/stackfoundry-saas-coverage
pnpm cli add preset saas-coverage --target /tmp/stackfoundry-saas-coverage
```

## Dry Run

```bash
pnpm cli add preset saas-coverage --target /tmp/stackfoundry-saas-coverage --dry-run
```

## What This Proves

- Broad modules can install together without target path collisions.
- Component blocks install beside product modules.
- Security and billing operation blocks carry docs, checklists, and skills.
- The preset stays registry-compatible through generated `public/r/saas-coverage.json`.
