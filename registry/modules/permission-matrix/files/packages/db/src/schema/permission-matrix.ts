import { index, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const permissionMatrix = pgTable(
  "permission_matrix",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    organizationId: text("organization_id"),
    ownerId: text("owner_id"),
    key: text("key").notNull(),
    status: text("status").notNull().default("active"),
    metadata: jsonb("metadata").$type<Record<string, unknown>>().notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (item) => [
    index("permission_matrix_organization_idx").on(item.organizationId),
    index("permission_matrix_owner_idx").on(item.ownerId),
  ]
);
