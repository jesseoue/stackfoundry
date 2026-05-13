import "server-only";

import { get } from "@vercel/edge-config";

export async function getEdgeConfigValue<T>(key: string, fallback: T) {
  const value = await get<T>(key);
  return value ?? fallback;
}
