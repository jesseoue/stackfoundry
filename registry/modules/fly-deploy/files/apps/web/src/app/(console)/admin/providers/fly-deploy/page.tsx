import { FlyDeployChecklist } from "@/lib/stackfoundry/providers/fly-deploy";

export default function FlyDeployPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Fly Deploy</h1>
        <p className="text-muted-foreground">App and worker deployment with regionality notes and templates.</p>
      </div>
      <div className="grid gap-3">
        {FlyDeployChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
