import { index, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const accountModes = pgTable(
  "account_modes",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    accountId: text("account_id").notNull(),
    mode: text("mode").notNull().default("personal"),
    status: text("status").notNull().default("active"),
    metadata: jsonb("metadata").$type<Record<string, unknown>>().notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (item) => [index("account_modes_account_idx").on(item.accountId)]
);
