import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const rateLimitRules = pgTable("rate_limit_rules", {
  id: uuid("id").primaryKey().defaultRandom(),
  key: text("key").notNull().unique(),
  limit: integer("limit").notNull(),
  windowSeconds: integer("window_seconds").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const rateLimitHits = pgTable("rate_limit_hits", {
  id: uuid("id").primaryKey().defaultRandom(),
  ruleKey: text("rule_key").notNull(),
  subject: text("subject").notNull(),
  windowStart: timestamp("window_start", { withTimezone: true }).notNull(),
  count: integer("count").notNull().default(0),
});
