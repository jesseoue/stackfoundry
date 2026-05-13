export type AccountSettingsSection = {
  id: string;
  title: string;
  href: string;
};

export const accountSettingsSections: AccountSettingsSection[] = [
  { id: "profile", title: "Profile", href: "/settings/account" },
  { id: "security", title: "Security", href: "/settings/account/security" },
  { id: "notifications", title: "Notifications", href: "/settings/account/notifications" },
];
