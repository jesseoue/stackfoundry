import { NextResponse } from "next/server";

import { logAxiomEvent } from "@/lib/axiom/logger";

export async function POST() {
  await logAxiomEvent({ event: "stackfoundry.smoke", source: "registry" });
  return NextResponse.json({ ok: true });
}
