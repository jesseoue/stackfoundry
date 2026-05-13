const exampleEvents = [
  { action: "billing.subscription_updated", actor: "system", resource: "subscription" },
  { action: "api_key.created", actor: "user_123", resource: "api_key" },
  { action: "workspace.member_invited", actor: "user_456", resource: "invite" },
];

export default function AuditLogPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Audit Log</h1>
        <p className="text-muted-foreground">Review sensitive account, workspace, and system events.</p>
      </div>
      <div className="grid gap-3">
        {exampleEvents.map((event) => (
          <div key={event.action} className="rounded-lg border p-4">
            <p className="font-medium">{event.action}</p>
            <p className="text-sm text-muted-foreground">{event.actor} changed {event.resource}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
