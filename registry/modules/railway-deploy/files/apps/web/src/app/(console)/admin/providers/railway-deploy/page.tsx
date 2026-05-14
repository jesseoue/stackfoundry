import { RailwayDeployChecklist } from "@/lib/stackfoundry/providers/railway-deploy";

export default function RailwayDeployPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Railway Deploy</h1>
        <p className="text-muted-foreground">Full-stack deploy option for Node apps, workers, and databases.</p>
      </div>
      <div className="grid gap-3">
        {RailwayDeployChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
