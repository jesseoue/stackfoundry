const checks = [
  "Create a Knock environment and in-app feed channel.",
  "Add server and public Knock environment variables.",
  "Wrap the authenticated app shell after user identity is available.",
  "Trigger workflows from server code only.",
  "Verify read/unread state and preferences with a test user.",
];

export default function KnockNotificationsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Knock Notifications</h1>
        <p className="text-muted-foreground">
          Optional hosted in-app feed and workflow adapter for the notification core.
        </p>
      </div>
      <div className="grid gap-3">
        {checks.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
