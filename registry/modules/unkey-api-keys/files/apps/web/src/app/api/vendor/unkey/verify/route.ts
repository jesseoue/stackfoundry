import { NextResponse } from "next/server";

import { verifyUnkeyApiKey } from "@/lib/unkey/api-keys";

export async function POST(request: Request) {
  const { key } = await request.json();
  const result = await verifyUnkeyApiKey(key);
  return NextResponse.json(result);
}
