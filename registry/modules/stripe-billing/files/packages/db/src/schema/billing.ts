import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const billingCustomers = pgTable("billing_customers", {
  id: uuid("id").primaryKey().defaultRandom(),
  ownerId: text("owner_id").notNull(),
  provider: text("provider").notNull().default("stripe"),
  providerCustomerId: text("provider_customer_id").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  ownerId: text("owner_id").notNull(),
  provider: text("provider").notNull().default("stripe"),
  providerSubscriptionId: text("provider_subscription_id").notNull(),
  status: text("status").notNull(),
  currentPeriodEndsAt: timestamp("current_period_ends_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const webhookEvents = pgTable("webhook_events", {
  id: uuid("id").primaryKey().defaultRandom(),
  provider: text("provider").notNull(),
  providerEventId: text("provider_event_id").notNull(),
  eventType: text("event_type").notNull(),
  processedAt: timestamp("processed_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
