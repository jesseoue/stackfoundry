const flags = [
  { key: "new_onboarding", enabled: true, scope: "20% rollout" },
  { key: "admin_console_v2", enabled: false, scope: "staff only" },
];

export default function FeatureFlagsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Feature Flags</h1>
        <p className="text-muted-foreground">Control progressive rollouts without adding a provider dependency.</p>
      </div>
      <div className="grid gap-3">
        {flags.map((flag) => (
          <div key={flag.key} className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <p className="font-medium">{flag.key}</p>
              <p className="text-sm text-muted-foreground">{flag.scope}</p>
            </div>
            <span className="text-sm">{flag.enabled ? "Enabled" : "Disabled"}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
