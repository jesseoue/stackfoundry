const dependencies = [
  { name: "Postgres", status: "healthy", latencyMs: 12, required: true },
  { name: "Object storage", status: "healthy", latencyMs: 38, required: true },
  { name: "Email provider", status: "degraded", latencyMs: 410, required: false },
];

const statusTone = {
  healthy: "text-green-600",
  degraded: "text-amber-600",
  down: "text-red-600",
} as const;

export default function SystemHealthPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">System Health</h1>
        <p className="text-muted-foreground">Health checks, dependency status, and incident readiness UI.</p>
      </div>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="p-3 text-left">Dependency</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Latency</th>
              <th className="p-3 text-left">Required</th>
            </tr>
          </thead>
          <tbody>
            {dependencies.map((dependency) => (
              <tr key={dependency.name} className="border-t">
                <td className="p-3">{dependency.name}</td>
                <td className={`p-3 ${statusTone[dependency.status]}`}>{dependency.status}</td>
                <td className="p-3">{dependency.latencyMs} ms</td>
                <td className="p-3">{dependency.required ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
