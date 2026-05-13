import { task } from "@trigger.dev/sdk";

export const syncWorkspaceUsage = task({
  id: "sync-workspace-usage",
  run: async (payload: { workspaceId: string }) => {
    console.log("sync usage", payload.workspaceId);
    return { synced: true, workspaceId: payload.workspaceId };
  },
});
