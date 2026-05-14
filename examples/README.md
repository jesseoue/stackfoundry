# Examples

Examples are install targets and walkthroughs for proving registry modules outside the source tree.

They are intentionally small. An example should demonstrate how a module or preset lands in a real app shape without becoming a second product.

## Current Examples

- `next-saas/` documents the core SaaS preset smoke path.

## Rules

- Do not put secrets or `.env.local` files here.
- Prefer commands that recreate generated output over committed generated app code.
- Keep examples aligned with `pnpm test:registry:install`.
- If an example requires a vendor account, document required env vars and a no-account dry-run path.
