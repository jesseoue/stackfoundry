import "server-only";

import { auth } from "@clerk/nextjs/server";

export async function requireClerkUser() {
  const session = await auth();
  if (!session.userId) throw new Error("Authentication required");
  return session;
}
