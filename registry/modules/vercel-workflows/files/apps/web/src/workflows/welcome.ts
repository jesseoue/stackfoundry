async function createWorkspace(userId: string) {
  "use step";
  console.log("create workspace", userId);
  return { workspaceId: "workspace_" + userId };
}

async function sendWelcomeEmail(email: string) {
  "use step";
  console.log("send welcome email", email);
}

export async function welcomeWorkflow(input: { userId: string; email: string }) {
  "use workflow";
  console.log("start welcome workflow", input.userId);

  const workspace = await createWorkspace(input.userId);
  await sendWelcomeEmail(input.email);

  return workspace;
}
