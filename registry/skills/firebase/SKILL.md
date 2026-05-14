---
name: firebase
description: Firebase guidance for installed backend modules.
---

# Firebase Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/firebase/SKILL.md`
- Registry source: `registry/skills/firebase/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep service account credentials server-only.
- Document project, emulator, and production setup.
- Verify security rules before production.
- Separate client config from admin credentials.
