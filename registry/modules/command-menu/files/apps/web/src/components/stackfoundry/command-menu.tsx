"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";

export type CommandMenuAction = {
  id: string;
  label: string;
  group: string;
  hint?: string;
  onSelect: () => void;
};

export function StackFoundryCommandMenu({
  actions,
  shortcut = "k",
}: {
  actions: CommandMenuAction[];
  shortcut?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === shortcut && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [shortcut]);

  const groups = [...new Set(actions.map((action) => action.group))];

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command menu"
      className="fixed left-1/2 top-24 z-50 w-[min(32rem,90vw)] -translate-x-1/2 overflow-hidden rounded-lg border bg-background shadow-lg"
    >
      <Command.Input
        className="w-full border-b bg-transparent px-4 py-3 text-sm outline-none"
        placeholder="Type a command..."
      />
      <Command.List className="max-h-72 overflow-y-auto p-2">
        <Command.Empty className="px-3 py-6 text-center text-sm text-muted-foreground">
          No matching commands.
        </Command.Empty>
        {groups.map((group) => (
          <Command.Group
            key={group}
            heading={group}
            className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-muted-foreground"
          >
            {actions
              .filter((action) => action.group === group)
              .map((action) => (
                <Command.Item
                  key={action.id}
                  value={action.label}
                  onSelect={() => {
                    action.onSelect();
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded px-3 py-2 text-sm data-[selected=true]:bg-muted"
                >
                  {action.label}
                  {action.hint ? (
                    <span className="ml-2 text-xs text-muted-foreground">{action.hint}</span>
                  ) : null}
                </Command.Item>
              ))}
          </Command.Group>
        ))}
      </Command.List>
    </Command.Dialog>
  );
}
