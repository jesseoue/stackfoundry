import { index, integer, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const creditWalletLedger = pgTable(
  "credit_wallet_ledger",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    ownerId: text("owner_id"),
    organizationId: text("organization_id"),
    idempotencyKey: text("idempotency_key"),
    direction: text("direction").notNull(),
    amount: integer("amount").notNull(),
    reason: text("reason").notNull(),
    source: text("source"),
    metadata: jsonb("metadata").$type<Record<string, unknown>>().notNull().default({}),
    expiresAt: timestamp("expires_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (item) => [
    index("credit_wallet_owner_idx").on(item.ownerId),
    index("credit_wallet_organization_idx").on(item.organizationId),
    index("credit_wallet_idempotency_idx").on(item.idempotencyKey),
  ]
);
