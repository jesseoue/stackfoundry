---
name: tinybird-analytics
description: Maintain the Tinybird Analytics module installed by StackFoundry.
---

# Tinybird Analytics Skill

- Keep `TINYBIRD_TOKEN` server-only.
- Use `TINYBIRD_API_URL` and `TINYBIRD_ANALYTICS_DATASOURCE` to target the right workspace and data source.
- Batch newline-delimited JSON events for high-volume paths.
- Keep event names, user/account identifiers, and metadata shape stable.
- Avoid sending secrets, private customer data, raw prompts, or unbounded payloads.
- Keep Tinybird resource files and deployment notes in sync if the app adds `.datasource` or `.pipe` files later.
