import { CloudflareTerraformChecklist } from "@/lib/stackfoundry/providers/cloudflare-terraform";

export default function CloudflareTerraformPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Cloudflare Terraform</h1>
        <p className="text-muted-foreground">IaC module for zones, Workers, R2, D1, Queues, and secrets.</p>
      </div>
      <div className="grid gap-3">
        {CloudflareTerraformChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
