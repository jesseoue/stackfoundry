export type OrganizationPermission =
  | "workspace:read"
  | "workspace:update"
  | "members:invite"
  | "members:manage"
  | "billing:manage"
  | "security:manage";

export type OrganizationRole = {
  key: string;
  name: string;
  permissions: OrganizationPermission[];
};

export const defaultOrganizationRoles: OrganizationRole[] = [
  {
    key: "owner",
    name: "Owner",
    permissions: [
      "workspace:read",
      "workspace:update",
      "members:invite",
      "members:manage",
      "billing:manage",
      "security:manage",
    ],
  },
  {
    key: "admin",
    name: "Admin",
    permissions: ["workspace:read", "workspace:update", "members:invite", "members:manage"],
  },
  {
    key: "member",
    name: "Member",
    permissions: ["workspace:read"],
  },
];

export function roleHasPermission(role: OrganizationRole, permission: OrganizationPermission) {
  return role.permissions.includes(permission);
}
