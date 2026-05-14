# Mintlify Docs

Hosted documentation workspace starter with Mintlify configuration, pages, and deployment guidance.

Use this module when docs should live in a dedicated docs workspace and deploy through Mintlify.

## Owns

- `docs/mintlify/docs.json`
- `docs/mintlify/introduction.mdx`
- `docs/mintlify/quickstart.mdx`
- `docs/mintlify/deployment.md`

## Verification

- Run `pnpm registry:doctor` after editing the module.
- Run `pnpm stackfoundry add docs-mintlify --target /tmp/stackfoundry-docs-mintlify --dry-run`.
- Run `mint dev` from the directory that contains `docs.json`.
# Mintlify Docs

Hosted documentation workspace starter with Mintlify configuration, pages, and deployment guidance.

## Why This Exists

Docs modules help teams ship product documentation with a clear hosting choice and SEO ownership model.

This module has installable source files and can be smoke-tested through the StackFoundry command.

## Owns

- `docs/mintlify/docs.json`
- `docs/mintlify/introduction.mdx`
- `docs/mintlify/quickstart.mdx`
- `docs/mintlify/deployment.md`

## Dependencies

- `registry:seo`

## Environment

- `NEXT_PUBLIC_DOCS_URL`

## Flexibility

- Keep the module boundary small and editable.
- Prefer provider-neutral domain shapes unless this module is explicitly a provider adapter.
- Add provider behavior in an adapter module rather than coupling shared modules to one provider.
- Preserve compatibility for installed source, env files, and public registry item names.

## Safety

- Do not commit secrets, credentials, private customer data, local caches, or generated machine metadata.
- Keep auth, tenancy, billing, and data-access assumptions documented before promoting the module.
- Record audit events for sensitive state changes when the module handles users, tenants, billing, security, or data exports.
- Keep destructive behavior opt-in and documented.

## Verification

- Run `pnpm registry:doctor` after editing the module.
- Run `pnpm stackfoundry add docs-mintlify --target /tmp/stackfoundry-docs-mintlify --dry-run` before handoff.
- If the module has source files, run a real install into a temporary target before marking it stable.
- Update `tests/checklist.md` and `skill/SKILL.md` with behavior changes.

## Maintenance

- Keep `module.json`, `docs.md`, `tests/checklist.md`, and `skill/SKILL.md` in sync.
- Keep public descriptions concise and implementation details in source files or docs.
- Rebuild the public registry with `pnpm registry:build` after source changes.
