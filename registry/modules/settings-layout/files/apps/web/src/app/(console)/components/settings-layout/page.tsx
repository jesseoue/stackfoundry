export function SettingsLayout({
  title = "Settings Layout",
  description = "Reusable settings shell for account, workspace, billing, and security pages.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="rounded-lg border p-6">
      <h2 className="font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </section>
  );
}
