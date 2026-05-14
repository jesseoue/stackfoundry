export function EmptyStates({
  title = "Empty States",
  description = "Reusable empty state component with action and guidance slots.",
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
