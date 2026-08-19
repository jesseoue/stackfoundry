# Changelog

## Unreleased

### Added

- Added Playwright E2E coverage for the public site, registry JSON contract, navigation, docs, alternatives, responsive Chromium runs, console errors, and failed requests.
- Added a dedicated CI E2E job with Chromium dependency setup and failure-report upload.

- Refined the public site with a cooler high-contrast palette, gradient brand mark, cleaner docs reading column, stronger homepage hierarchy, and clearer alternatives comparisons.

- Added the Product Dashboard registry wave: `metric-card`, `chart-card`, `sidebar-navigation`, `filter-panel`, `stepper-flow`, and `timeline-activity`.

- Added category-specific maintenance invariants across the full SaaS module registry.
- Upgraded core API error, pagination, usage metering, and system health modules from placeholder scaffolds to typed production helpers.

### Changed

- Normalized helper file types to `registry:lib` across upgraded modules.
- Aligned module guidance with current Vercel best practices: Node.js 24, Fluid Compute, server-side authorization, tenant-scoped data access, and production-safe error handling.

- Upgraded AI modules to AI SDK 7 with the current Gateway provider and UI message stream response APIs.
- Pinned current shadcn-compatible building-block dependencies: TanStack Table 9.1, CMDK 1.1, and Sonner 2.0.
- Added complete current shadcn registry item types, including base, font, and item.

### Changed

- Simplified AI client transports and server streaming to match current AI SDK examples.

- Added current shadcn registry file-type support for libs, UI primitives, hooks, styles, themes, and standalone blocks.
- Upgraded the data table to TanStack Table, the command menu to CMDK, and toast notifications to Sonner.

### Changed

- Updated Vercel AI SDK and AI Gateway guidance for the AI SDK 5 server transport, streaming, fallback, and cost model.
- Normalized installable React files to `registry:component` and helper files to typed registry library items.

- Added the Product UI registry wave: `workspace-switcher`, `quota-meters`, `onboarding-checklist`, `security-activity`, `integration-card`, and `feedback-collector`.
- Added complete `stackfoundry diff` coverage for package scripts, `.gitignore` merges, and generated environment examples.
- Added registry validation that every registry index item resolves to an installed source module.

### Changed

- Pinned all runtime and development dependencies to reproducible supported versions and upgraded to Node 24, Next.js 16.3, React 19.2, Biome 2.5, and pnpm 10.34.
- Updated GitHub Actions to current supported versions while preserving Dependabot-managed tags.
- Normalized module, preset, and recipe manifest formatting without changing registry semantics.
- Preserved existing target `.gitignore` content when appending StackFoundry-generated entries.

- Added SaaS recipes, readiness statuses, and stricter validation for complete product workflows.
- Added recipe commands and install paths, including `api-saas-starter`, `enterprise-saas`, `ai-saas-starter`, `cloudflare-saas`, `support-ops`, `security-center`, `integration-marketplace`, and `customer-intelligence`.
- Added an installable `cloudflare-next-starter` module for consuming apps while keeping StackFoundry itself on the standard Next.js/Vercel path.
- Added Vercel AI building blocks: `ai-sdk`, `ai-elements`, and `ai-chatbot-sdk`.
- Added `cloudflare-kumo-ui` as an optional Cloudflare UI building-block module.
- Added `agent-ready-installs` with prompt packs and context files for coding assistants.
- Added docs for recipes, install order, readiness, conventions, and a mirrored docs changelog.
- Added OpenSSF Scorecard scanning and private vulnerability reporting links.

### Changed

- Added official upstream documentation links across provider-backed modules and cleaned duplicated Mintlify module docs.
- Promoted installable preset manifests from `planned` to `ready` now that their source modules validate.
- Sharpened public positioning around the API SaaS wedge: API keys, usage tracking, rate limits, credits, Stripe billing, docs, and webhooks as editable source.
- Pointed module maintenance skills to installed shared provider, framework, database, SDK, and platform skills.
- Standardized provider adapter registry language and replaced legacy provider wording/paths.
- Renamed public command examples to `stackfoundry`.
- Updated AGENTS.md to match the current recipes, readiness, generated-output, and maintenance-skill model.
- Improved README badges, contribution controls, provider request templates, repo topics, and docs navigation for public discovery.
- Updated GitHub Actions dependencies for checkout, Node setup, pnpm setup, and dependency review.

### Security

- Hardened public repository security posture with private vulnerability reporting, safer checkout settings, OpenSSF Scorecard, dependency review, CodeQL, Dependabot vulnerability alerts, and clearer public-safety rules.

### Fixed

- Fixed GitHub integration private-key newline handling in the installable source template.
- Resolved the `next-saas` module/preset ambiguity by renaming the source shell module to `next-saas-shell`.

## 1.0.0

- Released StackFoundry as a public source registry for production SaaS modules.
- Standardized provider adapters as explicit module choices, separate from source-owned defaults.
- Added reusable registry card surfaces for modules, presets, provider adapters, and compact discovery rows.
- Expanded registry validation, generated public registry output, and module maintenance skill coverage.
- Added GitHub-ready CI, security checks, repository hygiene, and ownership gates for the hosted web app.

## 0.0.0

- Initial public seed for StackFoundry.
- Added registry plan and initial module manifests.
