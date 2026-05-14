# Packages

This directory contains reusable internals for the StackFoundry CLI and registry build pipeline.

The split mirrors the shape of mature source registry CLIs: the executable stays thin, while schema rules, registry IO, generation helpers, and utilities live behind package boundaries.

## Packages

- `schema/` owns manifest constants and validation primitives.
- `registry/` owns registry paths, JSON loading, file listing, hashing, and registry item loading.
- `generator/` owns install-time file rendering helpers and overwrite safety.
- `utils/` owns small shared helpers with no product policy.

## Rules

- Keep product policy out of `utils`.
- Keep IO helpers in `registry`.
- Keep write safety in `generator`.
- Keep validation constants in `schema`.
- Move CLI code into packages only when it reduces coupling or is needed by more than one caller.
