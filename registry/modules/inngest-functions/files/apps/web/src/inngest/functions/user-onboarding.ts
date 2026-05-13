import { inngest } from "../client";

export const userOnboarding = inngest.createFunction(
  {
    id: "user-onboarding",
    retries: { attempts: 3 },
    triggers: [{ event: "app/user.created" }],
  },
  async ({ event, step }) => {
    const profile = await step.run("create-profile", async () => ({
      userId: event.data.userId,
      email: event.data.email,
    }));

    await step.run("send-welcome-email", async () => {
      console.log("send welcome email", profile.email);
    });

    return { ok: true, userId: profile.userId };
  }
);
