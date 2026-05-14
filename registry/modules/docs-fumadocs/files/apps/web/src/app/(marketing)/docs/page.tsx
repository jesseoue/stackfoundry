import { fumadocsRoutes, fumadocsSetupChecklist } from "@/lib/docs/fumadocs";

export default function DocsPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Documentation</p>
        <h1 className="text-4xl font-semibold tracking-tight">Docs that deploy with your app</h1>
        <p className="max-w-2xl text-muted-foreground">
          Start with a clean docs landing page, then wire Fumadocs MDX and navigation after checking the target app's
          existing Next.js configuration.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {fumadocsRoutes.map((route) => (
          <a key={route.href} className="rounded-lg border p-4 transition-colors hover:bg-muted/50" href={route.href}>
            <h2 className="font-medium">{route.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{route.description}</p>
          </a>
        ))}
      </section>

      <section className="rounded-lg border p-5">
        <h2 className="font-medium">Setup checklist</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          {fumadocsSetupChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
import { fumadocsRoutes, fumadocsSetupChecklist } from "@/lib/docs/fumadocs";

export default function DocsPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Documentation</p>
        <h1 className="text-4xl font-semibold tracking-tight">Docs that deploy with your app</h1>
        <p className="max-w-2xl text-muted-foreground">
          Start with a clean docs landing page, then wire Fumadocs MDX and navigation after checking the target app's
          existing Next.js configuration.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {fumadocsRoutes.map((route) => (
          <a key={route.href} className="rounded-lg border p-4 transition-colors hover:bg-muted/50" href={route.href}>
            <h2 className="font-medium">{route.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{route.description}</p>
          </a>
        ))}
      </section>

      <section className="rounded-lg border p-5">
        <h2 className="font-medium">Setup checklist</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          {fumadocsSetupChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
import { fumadocsRoutes, fumadocsSetupChecklist } from "@/lib/docs/fumadocs";

export default function DocsPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">Documentation</p>
        <h1 className="text-4xl font-semibold tracking-tight">Docs that deploy with your app</h1>
        <p className="max-w-2xl text-muted-foreground">
          Start with a clean docs landing page, then wire Fumadocs MDX and navigation after checking the target app's
          existing Next.js configuration.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {fumadocsRoutes.map((route) => (
          <a key={route.href} className="rounded-lg border p-4 transition-colors hover:bg-muted/50" href={route.href}>
            <h2 className="font-medium">{route.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{route.description}</p>
          </a>
        ))}
      </section>

      <section className="rounded-lg border p-5">
        <h2 className="font-medium">Setup checklist</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          {fumadocsSetupChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
