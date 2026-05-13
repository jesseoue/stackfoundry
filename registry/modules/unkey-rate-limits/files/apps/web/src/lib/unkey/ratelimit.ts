import "server-only";

import { Ratelimit } from "@unkey/ratelimit";

export const unkeyRatelimit = new Ratelimit({
  rootKey: process.env.UNKEY_ROOT_KEY!,
  namespace: "stackfoundry.api",
  limit: 60,
  duration: "1m",
});
