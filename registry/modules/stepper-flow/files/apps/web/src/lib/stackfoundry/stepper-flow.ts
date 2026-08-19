export type StepperFlowStep = {
  id: string;
  label: string;
  description?: string;
};

export function getStepperState(steps: StepperFlowStep[], activeStepId: string) {
  const activeIndex = steps.findIndex((step) => step.id === activeStepId);
  if (activeIndex < 0) {
    return {
      activeIndex: 0,
      completedCount: 0,
      completionRatio: 0,
      nextStep: steps[0] ?? undefined,
    };
  }

  return {
    activeIndex,
    completedCount: activeIndex,
    completionRatio: steps.length > 0 ? activeIndex / steps.length : 0,
    nextStep: steps[activeIndex + 1],
  };
}

export const stepperFlowChecks = [
  "Validate step transitions and completion on the server",
  "Persist completed work before allowing destructive or paid transitions",
  "Expose progress semantically rather than relying on color alone",
] as const;
