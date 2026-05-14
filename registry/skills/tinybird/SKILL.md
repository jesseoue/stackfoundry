---
name: tinybird
description: Guide maintainers through Tinybird analytics ingestion and high-volume event pipelines.
---

# Tinybird Guidance

- Use Tinybird for high-volume analytics and operational event streams that need fast SQL/API serving.
- Keep ingest tokens server-only.
- Use newline-delimited JSON batches with the Events API for throughput.
- Keep data source schemas stable once production data is flowing.
- Avoid secrets, raw prompts, private customer data, and unbounded payloads.
- Document data source names, ingest tokens, pipes, API endpoints, and deployment targets before launch.
