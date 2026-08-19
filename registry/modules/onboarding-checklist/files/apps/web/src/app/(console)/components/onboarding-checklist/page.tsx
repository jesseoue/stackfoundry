import { StackFoundryOnboardingChecklist } from "@/components/stackfoundry/onboarding-checklist";

const tasks = [
  { id: "invite", title: "Invite your team", description: "Collaborators can join with the correct role.", completed: true },
  { id: "keys", title: "Create an API key", description: "Use scoped keys for each integration.", completed: false },
  { id: "billing", title: "Add billing details", completed: false },
];

export default function OnboardingChecklistDemo() {
  return <StackFoundryOnboardingChecklist tasks={tasks} />;
}
