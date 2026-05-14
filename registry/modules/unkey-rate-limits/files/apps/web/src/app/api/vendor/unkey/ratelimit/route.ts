import { NextResponse } from "next/server";

import { unkeyRatelimit } from "@/lib/unkey/ratelimit";

export async function POST(request: Request) {
  let body: { identifier?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = await unkeyRatelimit.limit(body.identifier ?? "anonymous");
  return NextResponse.json(result);
}
