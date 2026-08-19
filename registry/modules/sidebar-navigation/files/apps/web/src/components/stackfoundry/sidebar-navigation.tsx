"use client";

import { useId, useState } from "react";
import { filterSidebarNavigation, type SidebarNavigationGroup } from "@/lib/stackfoundry/sidebar-navigation";

type SidebarNavigationProps = {
  brand: string;
  groups: SidebarNavigationGroup[];
  activeHref: string;
  footer?: React.ReactNode;
};

function SidebarContent({
  brand,
  groups,
  activeHref,
  footer,
  onNavigate,
}: SidebarNavigationProps & { onNavigate?: () => void }) {
  const visibleGroups = filterSidebarNavigation(groups);

  return (
    <div className="flex h-full flex-col bg-card">
      <div className="flex h-14 items-center border-b px-4">
        <span className="font-semibold tracking-tight">{brand}</span>
      </div>

      <nav aria-label={`${brand} navigation`} className="flex-1 space-y-5 overflow-y-auto px-3 py-4">
        {visibleGroups.map((group) => (
          <section key={group.id}>
            <h2 className="px-2 pb-2 text-[0.68rem] font-semibold tracking-widest text-muted-foreground uppercase">
              {group.label}
            </h2>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const active = item.href === activeHref;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={onNavigate}
                      className={`flex items-center justify-between rounded-md px-2 py-2 text-sm transition-colors ${
                        active
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.badge !== undefined ? (
                        <span className="rounded-full bg-muted px-2 py-0.5 text-[0.68rem] tabular-nums">
                          {item.badge}
                        </span>
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </nav>

      {footer ? <div className="border-t p-4 text-xs text-muted-foreground">{footer}</div> : null}
    </div>
  );
}

export function StackFoundrySidebarNavigation(props: SidebarNavigationProps) {
  const [open, setOpen] = useState(false);
  const mobilePanelId = useId();

  return (
    <>
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-sm lg:hidden"
        aria-expanded={open}
        aria-controls={mobilePanelId}
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true">☰</span>
        <span className="sr-only">Open navigation</span>
      </button>

      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r lg:block">
        <SidebarContent {...props} />
      </aside>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation"
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div
            id={mobilePanelId}
            className="absolute inset-y-0 left-0 w-72 border-r shadow-lg"
            role="dialog"
            aria-modal="true"
            aria-label={`${props.brand} navigation`}
          >
            <SidebarContent {...props} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}
