const tasks = [
  "Configure defaults",
  "Connect persistence or provider adapter",
  "Verify production checklist",
];

export default function PasswordResetPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Password Reset</h1>
        <p className="text-muted-foreground">Expiring reset token helpers and password recovery page templates.</p>
      </div>
      <ul className="grid gap-3">
        {tasks.map((task) => (
          <li key={task} className="rounded-lg border p-4 text-sm">{task}</li>
        ))}
      </ul>
    </main>
  );
}
