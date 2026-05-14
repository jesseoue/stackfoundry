# Packages

This directory is reserved for extracted workspace packages.

Keep code in `apps/cli` until a boundary is useful to more than one caller. When a package becomes real, it should include its own `package.json`, README, tests, and ownership notes.

## Reserved Boundaries

- `generator/` will own install/update rendering primitives.
- `registry/` will own registry loading, dependency graph checks, and generated output helpers.
- `schema/` will own manifest and preset schemas.
- `utils/` will own small shared helpers that have no product-specific behavior.

Do not add empty package exports just to satisfy structure. Add code here only when the boundary reduces coupling.
