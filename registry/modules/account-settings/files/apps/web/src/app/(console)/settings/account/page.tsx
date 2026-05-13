const sections = [
  { title: "Profile", description: "Name, avatar, and public identity." },
  { title: "Security", description: "Password, passkeys, and two-factor settings." },
  { title: "Notifications", description: "Product, billing, and security email preferences." },
];

export default function AccountSettingsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Account Settings</h1>
        <p className="text-muted-foreground">Give users a clear home for personal settings.</p>
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
