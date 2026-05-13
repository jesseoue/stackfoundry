import "server-only";

import { createDb } from "@workspace/db";

const globalForDb = globalThis as typeof globalThis & {
  __stackfoundryDb?: ReturnType<typeof createDb>;
};

function getConnectionString() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set.");
  }
  return url;
}

export function getDb() {
  if (!globalForDb.__stackfoundryDb) {
    globalForDb.__stackfoundryDb = createDb(getConnectionString());
  }
  return globalForDb.__stackfoundryDb;
}
