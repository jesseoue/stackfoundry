export type SidebarNavigationItem = {
  id: string;
  label: string;
  href: string;
  badge?: string | number;
};

export type SidebarNavigationGroup = {
  id: string;
  label: string;
  items: SidebarNavigationItem[];
};

export function filterSidebarNavigation(
  groups: SidebarNavigationGroup[],
  canSeeItem: (item: SidebarNavigationItem) => boolean = () => true,
) {
  return groups
    .map((group) => ({
      ...group,
      items: group.items.filter(canSeeItem),
    }))
    .filter((group) => group.items.length > 0);
}

export const sidebarNavigationChecks = [
  "Derive navigation and permission-sensitive links from the server",
  "Hide links the user cannot open; do not rely on disabled styling",
  "Keep route transitions keyboard reachable and focus visible",
] as const;
