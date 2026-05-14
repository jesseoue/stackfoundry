# Readiness

Every module has a readiness `status`. Status is about install trust, not marketing priority.

| Status | Meaning |
| --- | --- |
| `ready` | Has source files, docs, verification checklist, and maintenance skills. The install path is structurally verified. |
| `planned` | Concept reserved for roadmap planning before module shape is clear. |
| `experimental` | Has source files, but the API, files, or behavior may change quickly. |
| `stable` | Ready module with a stable public install contract. |
| `deprecated` | Kept for compatibility; prefer another module or recipe. |

## Rules

- Published registry modules should include installable source files.
- A source-empty idea should stay outside the public registry as a proposal until its source payload is defined.
- A module with source files can be `ready`, `experimental`, `stable`, or `deprecated`.
- `ready` means the registry can install the module and the source parses, not that provider accounts are already configured.
- Provider account setup, secrets, migrations, and production data remain the consumer application's responsibility.

## Command Behavior

The public registry should not publish source-empty modules. Proposal ideas belong in module/provider requests, discussions, or roadmap docs until they have source files, docs, a checklist, and maintenance skills.

```bash
pnpm stackfoundry list --status ready
pnpm stackfoundry list --status experimental
```
