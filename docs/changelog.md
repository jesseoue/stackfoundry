# Changelog

This page mirrors the release changelog and keeps the latest public registry changes easy to scan from the docs.

## Unreleased

### Added

1. Added SaaS recipes, readiness statuses, stricter validation, and a proposal path for future complete product workflows.
2. Added recipe commands and install paths, including `api-saas-starter`, `enterprise-saas`, `ai-saas-starter`, `cloudflare-saas`, `support-ops`, `security-center`, `integration-marketplace`, and `customer-intelligence`.
3. Added an installable `cloudflare-next-starter` module for consuming apps while keeping StackFoundry itself on the standard Next.js/Vercel path.
4. Added Vercel AI building blocks: `ai-sdk`, `ai-elements`, and `ai-chatbot-sdk`.
5. Added `cloudflare-kumo-ui` as an optional Cloudflare UI building-block module.
6. Added docs for recipes, install order, readiness, conventions, and this mirrored changelog.
7. Added OpenSSF Scorecard scanning and private vulnerability reporting links.

### Changed

1. Sharpened public positioning around the API SaaS wedge: API keys, usage tracking, rate limits, credits, Stripe billing, docs, and webhooks as editable source.
2. Pointed module maintenance skills to installed shared provider, framework, database, SDK, and platform skills.
3. Standardized provider adapter registry language and replaced legacy provider wording/paths.
4. Renamed public command examples to `stackfoundry`.
5. Updated `AGENTS.md` to match the current recipes, readiness, generated-output, and maintenance-skill model.
6. Improved README badges, contribution controls, provider request templates, repo topics, and docs navigation for public discovery.
7. Updated GitHub Actions dependencies for checkout, Node setup, pnpm setup, and dependency review.

### Security

1. Hardened public repository security posture with private vulnerability reporting, safer checkout settings, OpenSSF Scorecard, dependency review, CodeQL, Dependabot vulnerability alerts, and clearer public-safety rules.

### Fixed

1. Fixed GitHub integration private-key newline handling in the installable source template.
2. Resolved the `next-saas` module/preset ambiguity by renaming the source shell module to `next-saas-shell`.

## 1.0.0

1. Released StackFoundry as a public source registry for production SaaS modules.
2. Standardized provider adapters as explicit module choices, separate from source-owned defaults.
3. Added reusable registry card surfaces for modules, presets, provider adapters, and compact discovery rows.
4. Expanded registry validation, generated public registry output, and module maintenance skill coverage.
5. Added GitHub-ready CI, security checks, repository hygiene, and ownership gates for the hosted web app.

## 0.0.0

1. Initial public seed for StackFoundry.
2. Added registry plan and initial module manifests.
