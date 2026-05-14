import type { ReactNode } from "react";

import { stackfoundryAppConfig } from "@/lib/stackfoundry/app-config";
import { stackfoundryPrimaryNav } from "@/lib/stackfoundry/app-navigation";

export function StackFoundryAppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className="fixed inset-y-0 hidden w-64 border-r bg-card p-4 lg:block">
        <a className="font-semibold tracking-tight" href={stackfoundryAppConfig.dashboardUrl}>
          {stackfoundryAppConfig.name}
        </a>
        <nav className="mt-6 grid gap-1">
          {stackfoundryPrimaryNav.map((item) => (
            <a
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 border-b bg-background/90 px-4 py-3 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <a className="font-medium lg:hidden" href={stackfoundryAppConfig.dashboardUrl}>
              {stackfoundryAppConfig.name}
            </a>
            <p className="hidden text-sm text-muted-foreground sm:block">
              {stackfoundryAppConfig.description}
            </p>
            <a
              className="text-sm text-muted-foreground hover:text-foreground"
              href={stackfoundryAppConfig.marketingUrl}
            >
              Launch page
            </a>
          </div>
        </header>
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
