# Mintlify Docs Checklist

- [ ] module manifest validates
- [ ] `docs/mintlify/docs.json` navigation matches page files
- [ ] `mint dev` runs from `docs/mintlify`
- [ ] deployment guide records the chosen Mintlify project and docs URL
- [ ] public docs pages have title and description metadata
- [ ] app docs and hosted docs ownership boundaries are documented
# Mintlify Docs Checklist

## Module Contract

- [ ] `module.json` validates with `pnpm registry:doctor`.
- [ ] Public description accurately states what the module owns.
- [ ] Dependencies and registry dependencies are necessary and minimal.
- [ ] Environment variables are documented and safe for preview/production.

## Source Install

- [ ] Source files are declared in `module.json`.
- [ ] Install dry-run succeeds with `pnpm stackfoundry add docs-mintlify --target /tmp/app --dry-run`.
- [ ] Real install is tested before moving the module to stable.
- [ ] Existing target files are not overwritten without explicit `--force`.

## Safety

- [ ] No secrets, tokens, credentials, private data, local caches, or generated machine metadata are included.
- [ ] Auth, tenant, billing, security, and data-export assumptions are documented when relevant.
- [ ] Sensitive or destructive actions have confirmation, audit, or rollback guidance.
- [ ] Provider-specific behavior is isolated unless this module is explicitly a provider adapter.

## Maintenance

- [ ] `docs.md` explains why the module exists and how to keep it flexible.
- [ ] `skill/SKILL.md` gives maintainers clear rules.
- [ ] Registry output is rebuilt with `pnpm registry:build`.
- [ ] Any preset that includes this module still passes install smoke tests.
