# Fumadocs Deployment Guide

Use Fumadocs when documentation should ship with the Next.js application.

## Install

```bash
pnpm add fumadocs-core fumadocs-ui
pnpm add -D fumadocs-mdx
```

## Wire The App

1. Inspect the target app's `next.config.*`.
2. Add the Fumadocs MDX plugin to the existing config instead of replacing the config.
3. Inspect the root layout before adding any provider.
4. Keep docs content, navigation, and SEO metadata in the same change.

## Deploy

Fumadocs deploys anywhere the Next.js app deploys. Verify:

- `pnpm build` passes.
- `/docs` renders.
- `sitemap.xml` includes public docs routes.
- docs pages have title, description, canonical URL, and Open Graph metadata.
# Fumadocs Deployment Guide

Use Fumadocs when documentation should ship with the Next.js application.

## Install

```bash
pnpm add fumadocs-core fumadocs-ui
pnpm add -D fumadocs-mdx
```

## Wire The App

1. Inspect the target app's `next.config.*`.
2. Add the Fumadocs MDX plugin to the existing Next.js config instead of replacing the config.
3. Inspect the root layout before adding the Fumadocs provider.
4. Keep docs content, navigation, and SEO metadata in the same change.

## Deploy

Fumadocs deploys anywhere the Next.js app deploys. Use the app's current hosting target first. If the app has no host yet, use any Next.js-compatible platform and verify:

- `pnpm build` passes.
- `/docs` renders.
- `sitemap.xml` includes docs routes where public docs should be crawled.
- docs pages have title, description, canonical URL, and Open Graph metadata.

## Handoff

Record the chosen host, preview URL, production URL, and any environment variables in the target repository's docs.
# Fumadocs Deployment Guide

Use Fumadocs when documentation should ship with the Next.js application.

## Install

```bash
pnpm add fumadocs-core fumadocs-ui
pnpm add -D fumadocs-mdx
```

## Wire The App

1. Inspect the target app's `next.config.*`.
2. Add the Fumadocs MDX plugin to the existing Next.js config instead of replacing the config.
3. Inspect the root layout before adding the Fumadocs provider.
4. Keep docs content, navigation, and SEO metadata in the same change.

## Deploy

Fumadocs deploys anywhere the Next.js app deploys. Use the app's current hosting target first. If the app has no host yet, use any Next.js-compatible platform and verify:

- `pnpm build` passes.
- `/docs` renders.
- `sitemap.xml` includes docs routes where public docs should be crawled.
- docs pages have title, description, canonical URL, and Open Graph metadata.

## Handoff

Record the chosen host, preview URL, production URL, and any environment variables in the target repository's docs.
