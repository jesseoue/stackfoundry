const tasks = [
  "Configure defaults",
  "Connect persistence or provider adapter",
  "Verify production checklist",
];

export default function ContactFormsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Contact Forms</h1>
        <p className="text-muted-foreground">Contact form submissions, spam review, and routing workflow.</p>
      </div>
      <ul className="grid gap-3">
        {tasks.map((task) => (
          <li key={task} className="rounded-lg border p-4 text-sm">{task}</li>
        ))}
      </ul>
    </main>
  );
}
