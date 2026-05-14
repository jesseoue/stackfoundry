---
name: unkey
description: Unkey guidance for installed API key and rate-limit modules.
---

# Unkey Guidance

- Keep root keys server-only.
- Hash or delegate secret storage; never log plaintext keys.
- Document key scopes and rate-limit namespaces.
- Verify revoke, rotate, and limit paths.
