---
name: upstash
description: Upstash Redis guidance for installed cache/rate-limit modules.
---

# Upstash Guidance

- Keep Redis URL and token server-only.
- Document region and durability assumptions.
- Use explicit key prefixes for tenant/user scope.
- Verify rate-limit and cache invalidation behavior.
