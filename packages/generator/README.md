# Generator Package

Install/update generation helpers for StackFoundry.

## Owns

- `.env.stackfoundry.<module>.example` content rendering.
- Safe target file writes.
- Backup behavior when `--force` is used.
- Shared write semantics for source modules and generated registry blocks.

## Does Not Own

- Registry graph resolution.
- Manifest validation.
- command argument parsing.
