---
name: knock-notifications
description: Maintain the Knock Notifications module installed by StackFoundry.
---

# Knock Notifications Skill

- Keep `KNOCK_API_KEY` server-only.
- Treat `NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY` and `NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID` as browser-exposed configuration only.
- Trigger Knock workflows from server code, not Client Components.
- Keep app-owned notification state in `notifications` unless the app explicitly chooses hosted Knock feeds.
- Respect notification preferences and unsubscribe requirements before triggering broad workflows.
- Verify a test user feed, read/unread state, workflow trigger, and production environment keys before handoff.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/knock/SKILL.md` (source: `registry/skills/knock/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

