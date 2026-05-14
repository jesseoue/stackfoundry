import "server-only";

import { Knock } from "@knocklabs/node";

export function getKnockClient() {
  return new Knock({
    apiKey: process.env.KNOCK_API_KEY,
  });
}

export type TriggerKnockWorkflowInput = {
  workflowKey: string;
  recipients: string[];
  data?: Record<string, unknown>;
};

export async function triggerKnockWorkflow({
  workflowKey,
  recipients,
  data = {},
}: TriggerKnockWorkflowInput) {
  if (recipients.length === 0) {
    throw new Error("Knock workflow trigger requires at least one recipient.");
  }

  return getKnockClient().workflows.trigger(workflowKey, {
    recipients,
    data,
  });
}
