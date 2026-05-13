# Agent Context

StackFoundry is a public source registry for production SaaS and AI modules.

## Product Rules

1. The registry is the product. Presets are only bundles of modules.
2. Every module must include source files, docs, env notes, tests/checklist, and agent operating instructions.
3. Base scaffolds must stay small. Optional providers are adapters, not hard dependencies.
4. Do not introduce public-facing references to how the project was authored.
5. Never commit secrets, `.env.local`, provider credentials, private customer data, local caches, or generated machine metadata.

## Initial Modules

- `drizzle-postgres`
- `api-keys`
- `stripe-billing`

## Quality Gates

Before moving to a new phase:

- `git status` is clean except intentional changes.
- Docs are updated.
- Module manifests validate.
- The demo path works from a fresh checkout.
- Changed modules include skill guidance.

## Public Voice

Use this product positioning:

> Install production SaaS and AI features as editable source code.

Avoid overclaiming unsupported providers. Keep launch scope narrow and credible.
