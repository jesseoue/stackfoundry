const sections = [
  { title: "Members", description: "Manage teammates, roles, and pending invites." },
  { title: "Billing", description: "Plan, invoices, payment method, and usage limits." },
  { title: "Security", description: "Domains, SSO, audit log, and API access." },
];

export default function WorkspaceSettingsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Workspace Settings</h1>
        <p className="text-muted-foreground">Centralize organization controls without coupling to a specific auth provider.</p>
      </div>
      <div className="grid gap-3">
        {sections.map((section) => (
          <section key={section.title} className="rounded-lg border p-4">
            <h2 className="font-medium">{section.title}</h2>
            <p className="text-sm text-muted-foreground">{section.description}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
