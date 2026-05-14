const checklist = [
  "Choose personal, team, or hybrid defaults",
  "Document billing and invite assumptions",
  "Keep provider adapters outside the shared module",
];

export default function AccountModesPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Account Modes</h1>
        <p className="text-muted-foreground">
          Configure personal, team, and hybrid account behavior for SaaS apps.
        </p>
      </div>
      <div className="grid gap-3">
        {checklist.map((item) => (
          <div key={item} className="rounded-lg border p-4 text-sm">
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}
