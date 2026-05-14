export type StackFoundryAppConfig = {
  name: string;
  description: string;
  supportEmail: string;
  marketingUrl: string;
  dashboardUrl: string;
};

export const stackfoundryAppConfig: StackFoundryAppConfig = {
  name: "Acme SaaS",
  description: "A production SaaS application assembled from editable source modules.",
  supportEmail: "support@example.com",
  marketingUrl: "/launch",
  dashboardUrl: "/dashboard",
};

export const stackfoundryLaunchChecklist = [
  "Choose account mode: personal, team, or hybrid.",
  "Install database, auth, billing, and API modules intentionally.",
  "Copy generated env examples into your secret manager.",
  "Run migrations only after reviewing schema slices.",
  "Run module checklists before enabling production traffic.",
] as const;
