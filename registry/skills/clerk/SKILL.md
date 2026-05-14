---
name: clerk
description: Clerk authentication guidance for installed auth modules.
---

# Clerk Guidance

- Keep Clerk secrets server-only.
- Protect routes and server actions before reading tenant data.
- Keep webhook verification and user sync idempotent.
- Document sign-in, sign-up, organization, and billing assumptions.
