# Schema Package

Schema constants and validation primitives for StackFoundry registry source.

## Owns

- Required manifest and preset fields.
- Valid module types.
- Valid module statuses.
- Valid registry file types.
- Basic identifier checks such as kebab-case module names and env var names.

## Does Not Own

- Reading manifests from disk.
- Dependency graph traversal.
- Installing files into target projects.
