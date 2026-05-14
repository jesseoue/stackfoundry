import { unkey } from "./client";

function requireEnv(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is required.`);
  return value;
}

export async function createUnkeyApiKey(ownerId: string) {
  return unkey.keys.create({
    apiId: requireEnv("UNKEY_API_ID"),
    externalId: ownerId,
    prefix: "sf",
  });
}

export async function verifyUnkeyApiKey(key: string) {
  return unkey.keys.verifyKey({ key });
}
