import { NextResponse } from "next/server";

import { unkeyRatelimit } from "@/lib/unkey/ratelimit";

export async function POST(request: Request) {
  const { identifier = "anonymous" } = await request.json();
  const result = await unkeyRatelimit.limit(identifier);
  return NextResponse.json(result);
}
