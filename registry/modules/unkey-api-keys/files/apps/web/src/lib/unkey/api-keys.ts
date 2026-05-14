import { unkey } from "./client";

export async function createUnkeyApiKey(ownerId: string) {
  return unkey.keys.create({
    apiId: process.env.UNKEY_API_ID!,
    externalId: ownerId,
    prefix: "sf",
  });
}

export async function verifyUnkeyApiKey(key: string) {
  return unkey.keys.verifyKey({ key });
}
