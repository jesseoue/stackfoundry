import "server-only";

import { neon } from "@neondatabase/serverless";

export function createNeonSql() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required for Neon Postgres");
  }

  return neon(process.env.DATABASE_URL);
}
