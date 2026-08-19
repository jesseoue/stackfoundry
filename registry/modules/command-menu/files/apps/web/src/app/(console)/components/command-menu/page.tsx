import { StackFoundryCommandMenu } from "@/components/stackfoundry/command-menu";

const actions = [
  { id: "workspace", label: "Switch workspace", group: "Navigation", hint: "Workspace", onSelect: () => undefined },
  { id: "keys", label: "Create API key", group: "Developer", hint: "API", onSelect: () => undefined },
  { id: "support", label: "Contact support", group: "Help", onSelect: () => undefined },
];

export default function CommandMenuDemo() {
  return <StackFoundryCommandMenu actions={actions} />;
}
