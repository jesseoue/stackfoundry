import { StackFoundryWorkspaceSwitcher } from "@/components/stackfoundry/workspace-switcher";

const workspaces = [
  { id: "workspace-1", name: "Acme", plan: "Pro" },
  { id: "workspace-2", name: "Globex", plan: "Team" },
];

export default function WorkspaceSwitcherDemo() {
  return (
    <StackFoundryWorkspaceSwitcher
      workspaces={workspaces}
      activeWorkspaceId={workspaces[0].id}
      onSelect={() => undefined}
    />
  );
}
