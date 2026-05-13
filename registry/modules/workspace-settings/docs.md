# Workspace Settings Module

Organization members, roles, API keys, billing, and security settings.

## Owns

- `apps/web/src/app/(console)/settings/workspace/page.tsx`
- `apps/web/src/lib/workspace-settings.ts`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added as a separate module.
- Update the manifest when source files, schema exports, dependencies, or environment variables change.
- Verify install output with `stackfoundry add workspace-settings --target <app> --dry-run` before promoting status.
