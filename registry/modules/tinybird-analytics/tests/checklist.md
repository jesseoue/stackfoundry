# Tinybird Analytics Checklist

- [ ] module manifest validates
- [ ] Tinybird data source exists
- [ ] ingest token is scoped to the analytics data source
- [ ] batched event ingestion succeeds
- [ ] high-volume paths do not make one request per event
- [ ] payload excludes secrets, raw prompts, and private customer data
- [ ] downstream pipe/API endpoint expectations are documented
