---
name: docs-mintlify
description: Maintain the Mintlify Docs module installed by StackFoundry.
---

# Mintlify Docs Maintenance Instructions

- Use this module when docs should deploy as a hosted documentation workspace.
- Keep Mintlify files under `docs/mintlify` unless the user chooses a different docs root.
- Run `mint dev` from the directory that contains `docs.json`.
- Help the user connect the docs repository and record the production docs URL.
- Keep navigation in `docs.json` aligned with MDX files.
---
name: docs-mintlify
description: Maintain the Mintlify Docs module installed by StackFoundry.
---

# Mintlify Docs Skill

## Purpose

Hosted documentation workspace starter with Mintlify configuration, pages, and deployment guidance.

## Ownership

- `docs/mintlify/docs.json`
- `docs/mintlify/introduction.mdx`
- `docs/mintlify/quickstart.mdx`
- `docs/mintlify/deployment.md`

## Defaults

- Keep the module source-owned and easy to replace.
- Keep provider-specific code in this module only when the module is explicitly a provider adapter.
- Keep shared domain behavior provider-neutral.
- Keep env vars server-only unless the variable is intentionally public and prefixed accordingly.

## Safety Rules

- Never add secrets, provider credentials, private customer data, local caches, or generated machine metadata.
- Document auth, tenant, billing, and data-access assumptions before changing behavior.
- Add or preserve audit guidance for sensitive state changes.
- Prefer explicit failures over silent fallback behavior for production paths.

## Change Checklist

- Update `module.json` when files, dependencies, env vars, status, or registry dependencies change.
- Update `docs.md` when setup, ownership, provider boundaries, or deployment behavior changes.
- Update `tests/checklist.md` when verification expectations change.
- Run `pnpm registry:doctor` and a module install dry-run before handoff.
