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
