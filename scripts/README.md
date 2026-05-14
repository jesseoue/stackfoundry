# Scripts

Reserved for standalone maintenance scripts.

Prefer `apps/cli` for product behavior and package scripts in `package.json` for simple command composition. Add a script here only when it is too large or too specific for either place.

Examples of acceptable scripts:

- one-off registry migrations
- release artifact checks
- documentation generation helpers
- non-product maintenance utilities

Scripts must be safe to run locally, avoid destructive defaults, and document required environment variables.
