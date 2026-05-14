export function CommandMenu({
  title = "Command Menu",
  description = "Keyboard-first command menu component for SaaS navigation and actions.",
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
