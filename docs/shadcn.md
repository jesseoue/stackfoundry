# shadcn Registry Usage

StackFoundry publishes modules as shadcn-compatible `registry:block` items under `/r`.

## Install a Block

```bash
pnpm dlx shadcn@latest add https://stackfoundry.dev/r/api-keys.json
pnpm dlx shadcn@latest add https://stackfoundry.dev/r/stripe-billing.json
pnpm dlx shadcn@latest add https://stackfoundry.dev/r/clerk-auth.json
```

## Local Development

Build the registry output first:

```bash
pnpm shadcn:registry
```

Then run the web app and install from the local URL:

```bash
pnpm dev:web
pnpm dlx shadcn@latest add http://localhost:3000/r/api-keys.json
```

## How It Maps

- Source manifests live in `registry/modules/<name>/module.json`.
- Public shadcn items are generated into `public/r/<name>.json`.
- Each item is emitted as `registry:block`.
- Each file includes a `target` so shadcn installs it into the intended app path.
- Internal module dependencies are emitted as full `https://stackfoundry.dev/r/<dependency>.json` registry URLs for shadcn resolution.
- Env requirements are emitted as `envVars` and retained in `meta.env`.

## Verification

Use the StackFoundry doctor and install smoke tests before publishing changes:

```bash
pnpm check
```

The check suite validates manifests, docs, skills, dependency references, preset file collisions, generated registry output, and real preset installs.
