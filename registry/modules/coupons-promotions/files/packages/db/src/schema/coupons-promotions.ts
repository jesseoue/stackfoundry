import { index, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const couponsPromotions = pgTable(
  "coupons_promotions",
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
    index("coupons_promotions_organization_idx").on(item.organizationId),
    index("coupons_promotions_owner_idx").on(item.ownerId),
  ]
);
