const deployChecks = [
  "Model boolean, metered, and credit features in Autumn before enforcing gates",
  "Use check before work and track after successful work unless check-and-consume is intentional",
  "Set AUTUMN_SECRET_KEY in preview and production environments",
  "Keep local entitlement names mapped to Autumn feature ids",
];

export default function AutumnEntitlementsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Autumn Entitlements</h1>
        <p className="text-muted-foreground">
          Optional Autumn adapter for feature checks, metered usage, credits, and upgrade context.
        </p>
      </div>
      <div className="grid gap-3">
        {deployChecks.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
