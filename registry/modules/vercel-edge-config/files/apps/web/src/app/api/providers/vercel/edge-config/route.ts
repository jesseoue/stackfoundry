import { NextResponse } from "next/server";

import { getEdgeConfigValue } from "@/lib/vercel/edge-config";

export async function GET() {
  const maintenance = await getEdgeConfigValue("maintenance", false);
  return NextResponse.json({ maintenance });
}
