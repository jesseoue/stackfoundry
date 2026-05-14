import { authLaunchChecks, authProviderOptions, authRouteGroups } from "@/lib/stackfoundry/auth-options";

export default function AuthArchitecturePage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Auth Architecture</h1>
        <p className="text-muted-foreground">
          Choose one primary auth provider, then keep route groups and authorization boundaries explicit.
        </p>
      </div>

      <section className="grid gap-3 md:grid-cols-2">
        {authProviderOptions.map((provider) => (
          <div className="rounded-lg border p-4" key={provider.id}>
            <h2 className="font-medium">{provider.label}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{provider.bestFor}</p>
            <code className="mt-3 block rounded border bg-muted p-2 text-xs">{provider.installCommand}</code>
          </div>
        ))}
      </section>

      <section className="rounded-lg border p-4">
        <h2 className="font-medium">Recommended App Router layout</h2>
        <div className="mt-4 grid gap-3">
          {authRouteGroups.map((group) => (
            <div className="rounded-md border p-3 text-sm" key={group.path}>
              <code>{group.path}</code>
              <p className="mt-1 text-muted-foreground">{group.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border p-4">
        <h2 className="font-medium">Before production</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
          {authLaunchChecks.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
