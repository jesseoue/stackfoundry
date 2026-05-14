---
name: tinybird
description: Guide maintainers through Tinybird analytics ingestion and high-volume event pipelines.
---

# Tinybird Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/tinybird/SKILL.md`
- Registry source: `registry/skills/tinybird/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Use Tinybird for high-volume analytics and operational event streams that need fast SQL/API serving.
- Keep ingest tokens server-only.
- Use newline-delimited JSON batches with the Events API for throughput.
- Keep data source schemas stable once production data is flowing.
- Avoid secrets, raw prompts, private customer data, and unbounded payloads.
- Document data source names, ingest tokens, pipes, API endpoints, and deployment targets before launch.
