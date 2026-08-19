import { StackFoundryIntegrationCard } from "@/components/stackfoundry/integration-card";

export default function IntegrationCardDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <StackFoundryIntegrationCard
        name="GitHub"
        description="Sync repository activity, issues, and pull requests."
        category="Developer tools"
        status="connected"
        lastSyncedAt="2026-08-19T15:20:00Z"
        onManage={() => undefined}
      />
      <StackFoundryIntegrationCard
        name="Linear"
        description="Create and resolve issues from product events."
        category="Project management"
        status="available"
        onConnect={() => undefined}
      />
    </div>
  );
}
