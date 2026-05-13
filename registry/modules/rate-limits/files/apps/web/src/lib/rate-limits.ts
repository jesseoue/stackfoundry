import "server-only";

export type RateLimitRule = {
  key: string;
  limit: number;
  windowSeconds: number;
};

export function getRateLimitWindow(now: Date, windowSeconds: number) {
  const windowMs = windowSeconds * 1000;
  return new Date(Math.floor(now.getTime() / windowMs) * windowMs);
}

export function describeRateLimit(rule: RateLimitRule) {
  return rule.limit + " requests per " + rule.windowSeconds + " seconds";
}

export function isRateLimited(count: number, rule: RateLimitRule) {
  return count >= rule.limit;
}
