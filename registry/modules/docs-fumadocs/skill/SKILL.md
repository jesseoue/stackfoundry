---
name: docs-fumadocs
description: Maintain the Fumadocs Docs module installed by StackFoundry.
---

# Fumadocs Docs Maintenance Instructions

- Use this module when docs should live inside the Next.js app.
- Inspect the target app's `next.config.*`, root layout, and existing docs setup before wiring Fumadocs.
- Install `fumadocs-core`, `fumadocs-ui`, and `fumadocs-mdx` only when the app is ready for the adapter.
- Keep docs route metadata and sitemap entries in sync with public docs routes.
- Verify local docs navigation, `pnpm build`, and the deployed docs URL.
