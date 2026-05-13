import { start } from "workflow/api";
import { NextResponse } from "next/server";

import { welcomeWorkflow } from "@/workflows/welcome";

export async function POST(request: Request) {
  const input = await request.json();
  const run = await start(welcomeWorkflow, [input]);

  return NextResponse.json({ runId: run.runId });
}
