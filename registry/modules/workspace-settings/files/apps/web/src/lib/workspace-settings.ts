export type WorkspaceSettingsSection = {
  id: string;
  title: string;
  href: string;
};

export const workspaceSettingsSections: WorkspaceSettingsSection[] = [
  { id: "members", title: "Members", href: "/settings/workspace" },
  { id: "billing", title: "Billing", href: "/settings/workspace/billing" },
  { id: "security", title: "Security", href: "/settings/workspace/security" },
];
