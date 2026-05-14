import "server-only";

import { Unkey } from "@unkey/api";

function requireEnv(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is required.`);
  return value;
}

export const unkey = new Unkey({ rootKey: requireEnv("UNKEY_ROOT_KEY") });
