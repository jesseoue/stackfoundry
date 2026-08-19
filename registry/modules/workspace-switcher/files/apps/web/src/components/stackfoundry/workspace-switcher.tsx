"use client";

import { useState } from "react";

export type WorkspaceSwitcherWorkspace = {
  id: string;
  name: string;
  plan?: string;
};

export function StackFoundryWorkspaceSwitcher({
  workspaces,
  activeWorkspaceId,
  onSelect,
}: {
  workspaces: WorkspaceSwitcherWorkspace[];
  activeWorkspaceId: string;
  onSelect: (workspace: WorkspaceSwitcherWorkspace) => void;
}) {
  const [open, setOpen] = useState(false);
  const activeWorkspace = workspaces.find((workspace) => workspace.id === activeWorkspaceId);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex min-w-56 items-center justify-between rounded-md border px-3 py-2 text-sm"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="font-medium">{activeWorkspace?.name ?? "Select workspace"}</span>
        <span aria-hidden="true">▾</span>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label="Workspaces"
          className="absolute z-20 mt-1 w-full rounded-md border bg-background p-1 shadow-sm"
        >
          {workspaces.map((workspace) => (
            <li key={workspace.id} role="option" aria-selected={workspace.id === activeWorkspaceId}>
              <button
                type="button"
                className="w-full rounded px-2 py-1.5 text-left text-sm hover:bg-muted"
                onClick={() => {
                  onSelect(workspace);
                  setOpen(false);
                }}
              >
                <span>{workspace.name}</span>
                {workspace.plan ? <span className="ml-2 text-xs text-muted-foreground">{workspace.plan}</span> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
