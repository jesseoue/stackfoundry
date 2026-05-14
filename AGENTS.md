# Agent Context

StackFoundry is a public source registry for production SaaS modules.

## Product Rules

1. The registry is the product. Modules are source-delivered capabilities; presets install bundles; recipes explain complete workflow paths and install order.
2. Published modules must include source files, docs, env notes when needed, tests/checklist, and maintenance skills. Proposal ideas belong in requests or roadmap docs until source exists.
3. Base scaffolds must stay small. Optional providers are adapters, not hard dependencies.
4. Do not introduce public-facing references to how the project was authored.
5. Never commit secrets, `.env.local`, provider credentials, private customer data, local caches, or generated machine metadata.

## Core Registry Concepts

- Readiness statuses: `ready`, `planned`, `experimental`, `stable`, `deprecated`.
- Current source shape: `registry/modules`, `registry/presets`, `registry/recipes`, and `registry/skills`.
- Public generated output lives in `public/r` and `apps/web/public/r`; never edit generated registry output by hand.
- Shared provider/framework/database/platform guidance belongs in `registry/skills/<name>/SKILL.md` and is installed to `.stackfoundry/skills/<name>/SKILL.md`.
- The hosted web app is Next.js on Vercel. Cloudflare support is an installable registry starter for consuming apps, not this repo's default deployment path.

## Quality Gates

Before moving to a new phase:

- `git status` is clean except intentional changes.
- Docs are updated.
- Module manifests validate.
- Generated registry output is rebuilt when source registry files change.
- Recipes, presets, and install order are updated when a workflow changes.
- Changed modules include maintenance skills and checklist updates.
- `pnpm check` passes before release or handoff.

## Public Voice

Use this product positioning:

> Install production SaaS modules as editable source code.

Avoid overclaiming unsupported providers. Keep launch scope narrow and credible. AI-related modules are optional module categories, not the core project identity.
