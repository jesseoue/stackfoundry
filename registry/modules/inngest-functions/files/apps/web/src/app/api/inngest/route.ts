import { serve } from "inngest/next";

import { inngest } from "@/inngest/client";
import { userOnboarding } from "@/inngest/functions/user-onboarding";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [userOnboarding],
});
