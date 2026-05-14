import { StackFoundryAppShell } from "@/components/stackfoundry/app-shell";
import { stackfoundryLaunchChecklist } from "@/lib/stackfoundry/app-config";
import { stackfoundryPrimaryNav } from "@/lib/stackfoundry/app-navigation";

const stats = [
  ["Modules", "Source-owned capabilities"],
  ["Env", "Explicit setup notes"],
  ["Checks", "Review before production"],
];

export default function DashboardPage() {
  return (
    <StackFoundryAppShell>
      <div className="grid gap-6">
        <section className="rounded-lg border bg-card p-6">
          <p className="text-sm font-medium text-muted-foreground">Dashboard</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">SaaS setup overview</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Use this page as the first authenticated surface after installing the base shell. Add
            auth, billing, database, API, and operations modules as your product shape becomes
            clear.
          </p>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          {stats.map(([title, description]) => (
            <div className="rounded-lg border bg-card p-5" key={title}>
              <h2 className="font-medium">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </section>
        <section className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="font-medium">Primary navigation</h2>
            <div className="mt-4 grid gap-3">
              {stackfoundryPrimaryNav.map((item) => (
                <a
                  className="rounded-md border p-3 text-sm hover:bg-muted"
                  href={item.href}
                  key={item.href}
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="mt-1 block text-muted-foreground">{item.description}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="font-medium">Launch checklist</h2>
            <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
              {stackfoundryLaunchChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </StackFoundryAppShell>
  );
}
