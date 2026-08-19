import { getStepperState, type StepperFlowStep } from "@/lib/stackfoundry/stepper-flow";

type StepperFlowProps = {
  title: string;
  steps: StepperFlowStep[];
  activeStepId: string;
};

export function StackFoundryStepperFlow({ title, steps, activeStepId }: StepperFlowProps) {
  const { activeIndex, completedCount, completionRatio } = getStepperState(steps, activeStepId);
  const progressPercent = Math.round(Math.max(0, Math.min(1, completionRatio)) * 100);

  return (
    <section className="rounded-xl border bg-card p-5 shadow-xs">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold tracking-tight">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Step {activeIndex + 1} of {steps.length} · {completedCount} completed
          </p>
        </div>
        <p className="text-sm font-medium tabular-nums">{progressPercent}%</p>
      </header>

      <div
        className="mt-5 h-2 overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressPercent}
        aria-label={`${title} completion`}
      >
        <div className="h-full rounded-full bg-primary transition-[width] duration-500" style={{ width: `${progressPercent}%` }} />
      </div>

      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => {
          const state = index < activeIndex ? "complete" : index === activeIndex ? "current" : "upcoming";
          return (
            <li
              key={step.id}
              aria-current={state === "current" ? "step" : undefined}
              className={`rounded-lg border p-4 transition-colors ${
                state === "current" ? "border-primary/50 bg-primary/5" : "bg-background"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={`grid size-7 shrink-0 place-items-center rounded-full border text-xs font-semibold ${
                    state === "complete"
                      ? "border-transparent bg-primary text-primary-foreground"
                      : state === "current"
                        ? "border-primary text-primary"
                        : "text-muted-foreground"
                  }`}
                >
                  {state === "complete" ? "✓" : index + 1}
                </span>
                <div>
                  <p className="text-sm font-medium">{step.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {state === "complete" ? "Completed · " : state === "current" ? "Current · " : ""}
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
