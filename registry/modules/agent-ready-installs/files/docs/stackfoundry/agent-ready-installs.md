# Agent-Ready StackFoundry Installs

StackFoundry modules are designed for code review and coding-agent workflows. Cursor, Codex, Claude, and similar tools can inspect recipes, dry-run installs, review generated diffs, and keep the installed source maintainable.

## Default Flow

```bash
pnpm stackfoundry recipe api-saas-starter
pnpm stackfoundry add recipe api-saas-starter --target ./my-app --dry-run
pnpm stackfoundry add recipe api-saas-starter --target ./my-app
pnpm stackfoundry diff api-keys --target ./my-app
```

## What Agents Should Read

- `.stackfoundry/context/agent-ready-installs.json`
- `.stackfoundry/prompts/install-api-saas.md`
- `.stackfoundry/prompts/review-stackfoundry-install.md`
- module docs in `.stackfoundry/skills/**/SKILL.md`
- module checklists in installed `tests/checklist.md` files

## Safety Rules

- Dry-run before writing files.
- Review all source files, dependency metadata, env notes, and maintenance skills.
- Keep provider adapters explicit.
- Never commit secrets, `.env.local`, provider credentials, generated caches, or local provider metadata.
- Run lint, typecheck, tests, and migration review after install.

## Best First Path

Use `api-saas-starter` first. It maps to the most concrete SaaS pain: API keys, usage tracking, quotas, credits, billing, docs, webhooks, and request visibility as editable source.
