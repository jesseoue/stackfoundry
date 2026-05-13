import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const workspaceInvites = pgTable("workspace_invites", {
  id: uuid("id").primaryKey().defaultRandom(),
  organizationId: text("organization_id").notNull(),
  email: text("email").notNull(),
  role: text("role").notNull().default("member"),
  tokenHash: text("token_hash").notNull(),
  invitedById: text("invited_by_id").notNull(),
  acceptedAt: timestamp("accepted_at", { withTimezone: true }),
  revokedAt: timestamp("revoked_at", { withTimezone: true }),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
