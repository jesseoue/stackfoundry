import { WorkflowEntrypoint, type WorkflowStep, type WorkflowEvent } from "cloudflare:workers";

export type OnboardingParams = { userId: string; email: string };

export class OnboardingWorkflow extends WorkflowEntrypoint<Env, OnboardingParams> {
  async run(event: WorkflowEvent<OnboardingParams>, step: WorkflowStep) {
    await step.do("create workspace", async () => {
      console.log("create workspace", event.payload.userId);
    });

    await step.do("send welcome email", async () => {
      console.log("send welcome email", event.payload.email);
    });
  }
}
