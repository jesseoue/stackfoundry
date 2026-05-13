import "server-only";

import { createHash, randomBytes, timingSafeEqual } from "node:crypto";

export function createInviteToken() {
  return randomBytes(32).toString("base64url");
}

export function hashInviteToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export function safeCompareInviteToken(token: string, expectedHash: string) {
  const actual = Buffer.from(hashInviteToken(token));
  const expected = Buffer.from(expectedHash);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function getInviteExpiry(days = 7) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
}
