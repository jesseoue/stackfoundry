import { ConvexIntegrationChecklist } from "@/lib/stackfoundry/providers/convex-integration";

export default function ConvexIntegrationPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Convex Integration</h1>
        <p className="text-muted-foreground">Convex dashboard links, deployment status, and schema/function notes.</p>
      </div>
      <div className="grid gap-3">
        {ConvexIntegrationChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
