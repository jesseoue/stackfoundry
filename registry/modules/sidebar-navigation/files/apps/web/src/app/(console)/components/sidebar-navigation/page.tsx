import { StackFoundrySidebarNavigation } from "@/components/stackfoundry/sidebar-navigation";

const groups = [
  {
    id: "overview",
    label: "Overview",
    items: [
      { id: "dashboard", label: "Dashboard", href: "/dashboard" },
      { id: "analytics", label: "Analytics", href: "/analytics" },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    items: [
      { id: "requests", label: "API requests", href: "/requests", badge: 12 },
      { id: "security", label: "Security", href: "/security" },
      { id: "settings", label: "Settings", href: "/settings" },
    ],
  },
];

export default function SidebarNavigationDemo() {
  return (
    <StackFoundrySidebarNavigation
      brand="Acme Console"
      groups={groups}
      activeHref="/dashboard"
      footer="Workspace: Acme · Pro plan"
    />
  );
}
