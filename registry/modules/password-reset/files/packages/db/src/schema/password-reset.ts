import { index, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const passwordReset = pgTable(
  "password_reset",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    ownerId: text("owner_id"),
    organizationId: text("organization_id"),
    key: text("key").notNull(),
    status: text("status").notNull().default("pending"),
    metadata: jsonb("metadata").$type<Record<string, unknown>>().notNull().default({}),
    expiresAt: timestamp("expires_at", { withTimezone: true }),
    completedAt: timestamp("completed_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (item) => [
    index("password_reset_owner_idx").on(item.ownerId),
    index("password_reset_organization_idx").on(item.organizationId),
  ]
);
