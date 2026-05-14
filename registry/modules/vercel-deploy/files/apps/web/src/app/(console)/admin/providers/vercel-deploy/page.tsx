import { VercelDeployChecklist } from "@/lib/stackfoundry/providers/vercel-deploy";

export default function VercelDeployPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Vercel Deploy</h1>
        <p className="text-muted-foreground">Vercel project linking, env pull, preview/prod scripts, and deployment docs.</p>
      </div>
      <div className="grid gap-3">
        {VercelDeployChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
