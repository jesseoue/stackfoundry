# Tinybird Analytics

Tinybird Events API adapter for high-volume product, usage, and AI analytics event streams.

## Owns

- `apps/web/src/lib/tinybird/analytics.ts`
- `apps/web/src/app/(console)/admin/vendors/tinybird/page.tsx`

## Dependencies

- `registry:plg-metrics`
- `registry:usage-metering`

## Environment

- `TINYBIRD_TOKEN`
- `TINYBIRD_API_URL`
- `TINYBIRD_ANALYTICS_DATASOURCE`

## Use Cases

- high-volume clickstream and product analytics
- usage events that need fast aggregation
- AI token, model, latency, and cost events
- operational event streams that outgrow app database tables

## Implementation Notes

This adapter uses Tinybird's Events API with newline-delimited JSON batching. Keep the app-owned event taxonomy in `plg-metrics`; use this module when the team chooses Tinybird as the analytics ingestion and serving layer.

## Verification

- Create the Tinybird data source before production ingestion.
- Use an ingest token scoped to the target data source.
- Batch events instead of sending one request per event in high-volume paths.
- Confirm no secrets, raw prompts, or private customer data are sent as analytics payloads.
