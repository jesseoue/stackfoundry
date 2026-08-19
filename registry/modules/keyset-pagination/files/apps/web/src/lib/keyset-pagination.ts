export type KeysetPage<T> = {
  items: T[];
  nextCursor: string | null;
};

export type KeysetPaginationInput = {
  limit?: number;
  cursor?: string | null;
  defaultLimit?: number;
  maxLimit?: number;
};

export type KeysetPaginationResult = {
  limit: number;
  offset: number;
  requestedNextCursor: string | null;
};

const DEFAULT_LIMIT = 25;
const MAX_LIMIT = 100;

export function parseKeysetPagination({
  limit,
  cursor,
  defaultLimit = DEFAULT_LIMIT,
  maxLimit = MAX_LIMIT,
}: KeysetPaginationInput): KeysetPaginationResult {
  const requestedLimit = limit ?? defaultLimit;
  if (!Number.isInteger(requestedLimit) || requestedLimit < 1) {
    throw new Error("Pagination limit must be a positive integer.");
  }

  return {
    limit: Math.min(requestedLimit, maxLimit),
    offset: cursor ? decodeCursor(cursor) : 0,
    requestedNextCursor: cursor ?? null,
  };
}

export function encodeCursor(offset: number) {
  return Buffer.from(`offset:${offset}`, "utf8").toString("base64url");
}

export function decodeCursor(cursor: string) {
  const value = Buffer.from(cursor, "base64url").toString("utf8");
  const match = /^offset:(\d+)$/.exec(value);
  if (!match) throw new Error("Invalid pagination cursor.");
  return Number.parseInt(match[1], 10);
}

export function createKeysetPage<T extends { id: string }>(
  items: T[],
  { limit, offset }: { limit: number; offset: number },
): KeysetPage<T> {
  const hasMore = items.length > limit;
  const pageItems = hasMore ? items.slice(0, limit) : items;
  const nextCursor = hasMore ? encodeCursor(offset + limit) : null;

  return { items: pageItems, nextCursor };
}

export const keysetPaginationProductionChecks = [
  "Validate limit and cursor before querying",
  "Keep list queries tenant-scoped",
  "Return a stable, opaque next_cursor",
] as const;
