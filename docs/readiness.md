# Readiness

Every module has a readiness `status`. Status is about install trust, not marketing priority.

| Status | Meaning |
| --- | --- |
| `ready` | Has source files, docs, verification checklist, and maintenance skills. The install path is structurally verified. |
| `stub` | Listed with docs/checklist/skills, but currently installs maintenance metadata only. Source payload still needs to be written. |
| `planned` | Concept reserved for roadmap planning before module shape is clear. |
| `experimental` | Has source files, but the API, files, or behavior may change quickly. |
| `stable` | Ready module with a stable public install contract. |
| `deprecated` | Kept for compatibility; prefer another module or recipe. |

## Rules

- A module with no source files should be `stub` or `planned`.
- A module with source files can be `ready`, `experimental`, `stable`, or `deprecated`.
- `ready` means the registry can install the module and the source parses, not that provider accounts are already configured.
- Provider account setup, secrets, migrations, and production data remain the consumer application's responsibility.

## Command Behavior

Directly installing a source-empty module warns that it installs maintenance metadata only. Recipes may include stubs to show architecture direction, but teams should inspect readiness before relying on a module in production.

```bash
pnpm stackfoundry list --status ready
pnpm stackfoundry list --status stub
```
