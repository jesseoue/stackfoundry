import { start } from "workflow/api";
import { NextResponse } from "next/server";

import { welcomeWorkflow } from "@/workflows/welcome";

export async function POST(request: Request) {
  let input: unknown;

  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const run = await start(welcomeWorkflow, [input]);

  return NextResponse.json({ runId: run.runId });
}
