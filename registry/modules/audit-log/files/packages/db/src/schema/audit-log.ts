import { index, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const auditLogEvents = pgTable(
  "audit_log_events",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    actorId: text("actor_id"),
    actorType: text("actor_type").notNull().default("user"),
    action: text("action").notNull(),
    resourceType: text("resource_type").notNull(),
    resourceId: text("resource_id"),
    organizationId: text("organization_id"),
    metadata: jsonb("metadata").$type<Record<string, unknown>>().notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index("audit_log_events_org_idx").on(table.organizationId),
    index("audit_log_events_resource_idx").on(table.resourceType, table.resourceId),
  ]
);
