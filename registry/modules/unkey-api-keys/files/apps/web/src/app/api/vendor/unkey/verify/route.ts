import { NextResponse } from "next/server";

import { verifyUnkeyApiKey } from "@/lib/unkey/api-keys";

export async function POST(request: Request) {
  let body: { key?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.key) return NextResponse.json({ error: "key is required" }, { status: 400 });

  const result = await verifyUnkeyApiKey(body.key);
  return NextResponse.json(result);
}
