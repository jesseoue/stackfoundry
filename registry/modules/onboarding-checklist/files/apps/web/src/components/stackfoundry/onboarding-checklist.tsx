export type OnboardingTask = {
  id: string;
  title: string;
  description?: string;
  href?: string;
  completed: boolean;
};

export function StackFoundryOnboardingChecklist({ tasks }: { tasks: OnboardingTask[] }) {
  const completed = tasks.filter((task) => task.completed).length;
  const percentage = tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0;

  return (
    <section className="rounded-lg border p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Getting started</h2>
        <span className="text-sm text-muted-foreground">{completed}/{tasks.length}</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuemin={0} aria-valuemax={tasks.length} aria-valuenow={completed} aria-label="Onboarding progress">
        <div className="h-full bg-primary" style={{ width: `${percentage}%` }} />
      </div>

      <ol className="mt-4 space-y-3">
        {tasks.map((task) => {
          const content = (
            <>
              <span aria-hidden="true" className={`grid size-5 place-items-center rounded-full border text-xs ${task.completed ? "border-primary bg-primary text-primary-foreground" : ""}`}>
                {task.completed ? "✓" : task.href ? "→" : ""}
              </span>
              <span>
                <span className="text-sm font-medium">{task.title}</span>
                {task.description ? <span className="block text-sm text-muted-foreground">{task.description}</span> : null}
              </span>
            </>
          );

          return (
            <li key={task.id}>
              {task.href ? (
                <a href={task.href} className="flex gap-3 rounded-md p-2 hover:bg-muted">
                  {content}
                </a>
              ) : (
                <div className="flex gap-3 p-2">{content}</div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
