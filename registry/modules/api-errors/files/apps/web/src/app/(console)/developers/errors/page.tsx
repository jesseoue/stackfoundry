const tasks = [
  "Configure defaults",
  "Connect persistence or provider adapter",
  "Verify production checklist",
];

export default function APIErrorsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">API Errors</h1>
        <p className="text-muted-foreground">Machine-readable API error shape, code catalog, and response helpers.</p>
      </div>
      <ul className="grid gap-3">
        {tasks.map((task) => (
          <li key={task} className="rounded-lg border p-4 text-sm">{task}</li>
        ))}
      </ul>
    </main>
  );
}
