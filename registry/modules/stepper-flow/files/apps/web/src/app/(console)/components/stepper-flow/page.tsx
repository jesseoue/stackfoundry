import { StackFoundryStepperFlow } from "@/components/stackfoundry/stepper-flow";

const steps = [
  { id: "workspace", label: "Create workspace", description: "Name and default region" },
  { id: "team", label: "Invite team", description: "Optional during setup" },
  { id: "connect", label: "Connect data", description: "Add your first integration" },
];

export default function StepperFlowDemo() {
  return <StackFoundryStepperFlow title="Workspace setup" steps={steps} activeStepId="connect" />;
}
