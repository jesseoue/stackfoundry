import { VercelIntegrationChecklist } from "@/lib/stackfoundry/providers/vercel-integration";

export default function VercelIntegrationPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Vercel Integration</h1>
        <p className="text-muted-foreground">Deployments list, env sync docs, and preview links.</p>
      </div>
      <div className="grid gap-3">
        {VercelIntegrationChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
