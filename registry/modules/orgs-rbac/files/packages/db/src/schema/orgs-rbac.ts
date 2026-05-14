import { index, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const organizationRoles = pgTable(
  "organization_roles",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    organizationId: text("organization_id").notNull(),
    key: text("key").notNull(),
    name: text("name").notNull(),
    description: text("description"),
    permissions: jsonb("permissions").$type<string[]>().notNull().default([]),
    metadata: jsonb("metadata").$type<Record<string, unknown>>().notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (role) => [
    index("organization_roles_organization_idx").on(role.organizationId),
    index("organization_roles_key_idx").on(role.key),
  ],
);
