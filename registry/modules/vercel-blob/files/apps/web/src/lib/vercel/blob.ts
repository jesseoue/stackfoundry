import "server-only";

import { list, put } from "@vercel/blob";

export async function uploadBlob(name: string, body: Blob | Buffer) {
  return put(name, body, { access: "public" });
}

export async function listBlobs(prefix?: string) {
  return list({ prefix });
}
