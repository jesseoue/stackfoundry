# Modules

Each child directory is one installable registry module.

Required files:

- `module.json` declares the install contract.
- `docs.md` explains setup, ownership, and maintenance.
- `files/` contains source files copied into a target app.
- `skill/SKILL.md` gives module-scoped maintainer guidance.
- `tests/checklist.md` defines verification expectations.

Modules should be small, provider boundaries should be explicit, and source files should install into canonical app paths.

Run `pnpm registry:doctor` after changing any module.
