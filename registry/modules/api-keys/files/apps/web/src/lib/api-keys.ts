import "server-only";

import { createHash, randomBytes, timingSafeEqual } from "node:crypto";

const KEY_PREFIX = "sf";

export function createApiKeySecret() {
  const secret = randomBytes(32).toString("base64url");
  return `${KEY_PREFIX}_${secret}`;
}

export function getApiKeyPrefix(secret: string) {
  return secret.slice(0, 12);
}

export function hashApiKey(secret: string) {
  return createHash("sha256").update(secret).digest("hex");
}

export function safeCompareHash(secret: string, expectedHash: string) {
  const actual = Buffer.from(hashApiKey(secret));
  const expected = Buffer.from(expectedHash);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}
