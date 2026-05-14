import { index, integer, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const oneTimePurchases = pgTable(
  "one_time_purchases",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    ownerId: text("owner_id"),
    organizationId: text("organization_id"),
    provider: text("provider").notNull(),
    providerOrderId: text("provider_order_id").notNull(),
    productKey: text("product_key").notNull(),
    amount: integer("amount").notNull(),
    currency: text("currency").notNull(),
    status: text("status").notNull().default("pending"),
    fulfillmentStatus: text("fulfillment_status").notNull().default("pending"),
    metadata: jsonb("metadata").$type<Record<string, unknown>>().notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (item) => [
    index("one_time_purchases_provider_order_idx").on(item.provider, item.providerOrderId),
    index("one_time_purchases_owner_idx").on(item.ownerId),
    index("one_time_purchases_organization_idx").on(item.organizationId),
  ]
);
