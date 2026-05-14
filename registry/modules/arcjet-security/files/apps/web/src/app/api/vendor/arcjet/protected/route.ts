import { NextResponse } from "next/server";

import { aj } from "@/lib/arcjet";

export async function GET(request: Request) {
  const decision = await aj.protect(request);
  if (decision.isDenied()) return NextResponse.json({ error: "Denied" }, { status: 429 });

  return NextResponse.json({ ok: true });
}
