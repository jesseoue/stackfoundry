import { index, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const connectedAccounts = pgTable(
  "connected_accounts",
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
    index("connected_accounts_owner_idx").on(item.ownerId),
    index("connected_accounts_organization_idx").on(item.organizationId),
  ]
);
