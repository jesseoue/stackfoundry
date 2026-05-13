import { tasks } from "@trigger.dev/sdk";
import { NextResponse } from "next/server";

import type { syncWorkspaceUsage } from "@/trigger/example";

export async function POST(request: Request) {
  const payload = await request.json();
  const handle = await tasks.trigger<typeof syncWorkspaceUsage>("sync-workspace-usage", payload);

  return NextResponse.json(handle);
}
