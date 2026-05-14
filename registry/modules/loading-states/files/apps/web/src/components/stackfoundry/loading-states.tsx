export function LoadingStates({
  title = "Loading States",
  description = "Skeleton and loading state components for async SaaS surfaces.",
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
