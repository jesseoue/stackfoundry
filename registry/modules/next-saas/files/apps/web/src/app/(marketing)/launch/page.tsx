import { stackfoundryAppConfig, stackfoundryLaunchChecklist } from "@/lib/stackfoundry/app-config";

const featureRows = [
  "Accounts, workspace settings, and tenant boundaries",
  "Billing, entitlements, usage, credits, and invoices",
  "API keys, webhooks, developer docs, and usage dashboards",
  "Operations, audit logs, background jobs, and health checks",
];

export default function LaunchPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-16">
      <section className="max-w-3xl space-y-5">
        <p className="text-sm font-medium text-muted-foreground">Launch-ready SaaS shell</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          {stackfoundryAppConfig.name}
        </h1>
        <p className="text-lg text-muted-foreground">{stackfoundryAppConfig.description}</p>
        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            href={stackfoundryAppConfig.dashboardUrl}
          >
            Open dashboard
          </a>
          <a
            className="rounded-md border px-4 py-2 text-sm font-medium"
            href={`mailto:${stackfoundryAppConfig.supportEmail}`}
          >
            Contact support
          </a>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {featureRows.map((feature) => (
          <div className="rounded-lg border bg-card p-5" key={feature}>
            <p className="text-sm text-muted-foreground">{feature}</p>
          </div>
        ))}
      </section>
      <section className="rounded-lg border bg-card p-5">
        <h2 className="font-medium">Before production</h2>
        <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
          {stackfoundryLaunchChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
