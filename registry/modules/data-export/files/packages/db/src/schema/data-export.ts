import { index, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const dataExport = pgTable(
  "data_export",
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
    index("data_export_owner_idx").on(item.ownerId),
    index("data_export_organization_idx").on(item.organizationId),
  ]
);
