export type StackFoundryNavItem = {
  label: string;
  href: string;
  description: string;
};

export const stackfoundryPrimaryNav: StackFoundryNavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    description: "Overview, setup progress, and launch checks.",
  },
  {
    label: "Billing",
    href: "/billing",
    description: "Plans, invoices, portal, usage, and entitlements.",
  },
  {
    label: "Developers",
    href: "/api-keys",
    description: "API keys, webhooks, API docs, and usage visibility.",
  },
  {
    label: "Settings",
    href: "/settings/account",
    description: "Account, workspace, security, and notification settings.",
  },
];
