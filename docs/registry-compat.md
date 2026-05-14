# Registry Compatibility

StackFoundry publishes SaaS modules as registry-compatible source blocks.

The goal is to publish production SaaS modules as editable source: a registry item declares metadata, dependencies, files, targets, environment requirements, docs, and installable code.

## Install a StackFoundry Block

With the StackFoundry CLI:

```bash
pnpm cli add https://stackfoundry.dev/r/api-keys.json --target ./my-app
pnpm cli add https://stackfoundry.dev/r/vendor-examples.json --target ./my-app
```

## Local Development

Build the registry output first:

```bash
pnpm registry:build
```

Then run the web app and install from the local URL:

```bash
pnpm dev:web
pnpm cli add http://localhost:3000/r/api-keys.json --target /tmp/app
```

## How It Maps to the Registry Model

- Source manifests live in `registry/modules/<name>/module.json`.
- Public registry items are generated into `public/r/<name>.json`.
- The same generated output is mirrored to `apps/web/public/r` so Vercel serves `/r/<name>.json` as static JSON from the Next app.
- Each item is emitted as `registry:block`.
- Each file includes a `target` so registry clients install it into the intended app path.
- Internal module dependencies are emitted as full `https://stackfoundry.dev/r/<dependency>.json` registry URLs.
- Env requirements are emitted as `envVars` and retained in `meta.env`.
- Module and shared technology skills are emitted as `agentSkills` so registry URL installs include maintenance guidance.
- StackFoundry CLI can install these generated items directly, including aggregate preset blocks such as `vendor-examples`.

## StackFoundry Rules

- Registry blocks are SaaS modules, not UI components.
- Module source lives in `registry/modules`; generated registry JSON lives in `public/r`.
- Presets compose modules and can be emitted as aggregate blocks when the preset name does not collide with a module name.
- Shared technology skills live in `registry/skills` and can be referenced by `agents.skills`.
- Vendor modules should stay adapters around shared product capabilities.
- Skills and checklists are part of the block, because maintainability is part of the product.

## Verification

Use the StackFoundry doctor and install smoke tests before publishing changes:

```bash
pnpm check
```

The check suite validates manifests, docs, skills, dependency references, preset file collisions, generated registry output, and real preset installs.
