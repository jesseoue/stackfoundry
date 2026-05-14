import "server-only";

import { Ratelimit } from "@unkey/ratelimit";

function requireEnv(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is required.`);
  return value;
}

export const unkeyRatelimit = new Ratelimit({
  rootKey: requireEnv("UNKEY_ROOT_KEY"),
  namespace: "stackfoundry.api",
  limit: 60,
  duration: "1m",
});
