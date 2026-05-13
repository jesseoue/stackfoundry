import { index, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const incidentManagement = pgTable(
  "incident_management",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    ownerId: text("owner_id"),
    organizationId: text("organization_id"),
    key: text("key").notNull(),
    title: text("title").notNull(),
    status: text("status").notNull().default("active"),
    metadata: jsonb("metadata").$type<Record<string, unknown>>().notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (item) => [
    index("incident_management_owner_idx").on(item.ownerId),
    index("incident_management_organization_idx").on(item.organizationId),
  ]
);
