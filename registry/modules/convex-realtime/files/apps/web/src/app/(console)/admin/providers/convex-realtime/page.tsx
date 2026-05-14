import { ConvexRealtimeChecklist } from "@/lib/stackfoundry/providers/convex-realtime";

export default function ConvexRealtimePage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Convex Realtime</h1>
        <p className="text-muted-foreground">Live queries, subscriptions, realtime dashboards, and optimistic update examples.</p>
      </div>
      <div className="grid gap-3">
        {ConvexRealtimeChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
