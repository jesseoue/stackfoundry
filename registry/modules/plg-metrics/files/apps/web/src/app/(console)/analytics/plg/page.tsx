import { activationEventTypes } from "@/lib/stackfoundry/plg-metrics";

export default function PLGMetricsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">PLG Metrics</h1>
        <p className="text-muted-foreground">
          Track activation events and product-led growth signals across workspaces.
        </p>
      </div>
      <div className="grid gap-3">
        {activationEventTypes.map((eventType) => (
          <section key={eventType} className="rounded-lg border p-4">
            <h2 className="font-medium">{eventType}</h2>
            <p className="text-sm text-muted-foreground">Activation event</p>
          </section>
        ))}
      </div>
    </main>
  );
}
