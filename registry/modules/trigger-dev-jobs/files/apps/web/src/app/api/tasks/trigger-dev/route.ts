import { tasks } from "@trigger.dev/sdk";
import { NextResponse } from "next/server";

import type { syncWorkspaceUsage } from "@/trigger/example";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const handle = await tasks.trigger<typeof syncWorkspaceUsage>("sync-workspace-usage", payload);

  return NextResponse.json(handle);
}
