import { CloudflareDurableObjectsChecklist } from "@/lib/stackfoundry/providers/cloudflare-durable-objects";

export default function CloudflareDurableObjectsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Cloudflare Durable Objects</h1>
        <p className="text-muted-foreground">Stateful coordination, realtime rooms, per-tenant state, and DO storage.</p>
      </div>
      <div className="grid gap-3">
        {CloudflareDurableObjectsChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
