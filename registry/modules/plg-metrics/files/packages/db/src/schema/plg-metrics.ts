import { index, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const productEvents = pgTable(
  "product_events",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    organizationId: text("organization_id"),
    actorId: text("actor_id"),
    eventType: text("event_type").notNull(),
    source: text("source").notNull().default("app"),
    metadata: jsonb("metadata").$type<Record<string, unknown>>().notNull().default({}),
    occurredAt: timestamp("occurred_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (event) => [
    index("product_events_organization_idx").on(event.organizationId),
    index("product_events_type_idx").on(event.eventType),
    index("product_events_occurred_at_idx").on(event.occurredAt),
  ],
);
