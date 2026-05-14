import { ConvexBackendChecklist } from "@/lib/stackfoundry/providers/convex-backend";

export default function ConvexBackendPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Convex Backend</h1>
        <p className="text-muted-foreground">Convex project setup, generated functions, provider wrapper, and deployment docs.</p>
      </div>
      <div className="grid gap-3">
        {ConvexBackendChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
