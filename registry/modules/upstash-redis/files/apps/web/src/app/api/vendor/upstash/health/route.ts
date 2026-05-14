import { NextResponse } from "next/server";

import { pingRedis } from "@/lib/upstash/redis";

export async function GET() {
  const pong = await pingRedis();
  return NextResponse.json({ ok: pong === "PONG" });
}
