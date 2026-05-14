---
name: knock
description: Guide maintainers through Knock notification feed and workflow integrations.
---

# Knock Guidance

- Keep the secret API key server-only.
- Use public API key and feed channel id only as browser-exposed feed configuration.
- Trigger workflows from server code.
- Pass stable authenticated user ids to the Knock provider.
- Keep preference and unsubscribe behavior explicit.
- Verify test workflow delivery, feed read/unread state, and production env values before launch.
