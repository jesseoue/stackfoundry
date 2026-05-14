# Registry Compatibility

StackFoundry publishes SaaS modules as registry-compatible source blocks.

The goal is to publish production SaaS modules as editable source: a registry item declares metadata, dependencies, files, targets, environment requirements, docs, and installable code.

## Install a StackFoundry Block

With the StackFoundry CLI:

```bash
pnpm stackfoundry add https://stackfoundry.dev/r/api-keys.json --target ./my-app
pnpm stackfoundry add https://stackfoundry.dev/r/vendor-examples.json --target ./my-app
```

## Local Development

Build the registry output first:

```bash
pnpm registry:build
```

Then run the web app and install from the local URL:

```bash
pnpm dev:web
pnpm stackfoundry add http://localhost:3000/r/api-keys.json --target /tmp/app
```

## How It Maps to the Registry Model

- Source manifests live in `registry/modules/<name>/module.json`.
- `/r/registry.json` is the public registry index. It uses `https://ui.shadcn.com/schema/registry.json`, lists available blocks, and is not itself installable.
- Public installable registry items are generated into `public/r/<name>.json`.
- The same generated output is mirrored to `apps/web/public/r` so Vercel serves `/r/<name>.json` as static JSON from the Next app.
- Each module item is emitted as `registry:block` with `https://ui.shadcn.com/schema/registry-item.json`.
- Each file includes a `target` so registry clients install it into the intended app path.
- Internal module dependencies are emitted as full `https://stackfoundry.dev/r/<dependency>.json` registry URLs.
- Env requirements are emitted as `envVars` and retained in `meta.env`.
- Module and shared technology skills are emitted as `maintenanceSkills` so registry URL installs include maintenance guidance.
- StackFoundry CLI can install generated module items directly, including aggregate preset blocks such as `/r/vendor-examples.json`.
- `/r/presets/*.json` files are StackFoundry preset manifests for tooling and inspection. They are intentionally not shadcn registry item documents; use `/r/<preset>.json` for installable preset payloads.

## StackFoundry Rules

- Registry blocks are SaaS modules, not UI components.
- Module source lives in `registry/modules`; generated registry JSON lives in `public/r`.
- Presets compose modules and can be emitted as aggregate blocks when the preset name does not collide with a module name.
- Shared technology skills live in `registry/skills` and can be referenced by the source manifest's skill list.
- Vendor modules should stay adapters around shared product capabilities.
- Skills and checklists are part of the block, because maintainability is part of the product.

## Verification

Use the StackFoundry doctor and install smoke tests before publishing changes:

```bash
pnpm check
```

The check suite validates manifests, docs, skills, dependency references, preset file collisions, generated registry output, and real preset installs.
