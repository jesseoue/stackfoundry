import { defaultOrganizationRoles } from "@/lib/stackfoundry/orgs-rbac";

export default function WorkspaceRolesPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Workspace Roles</h1>
        <p className="text-muted-foreground">
          Review organization roles and the permissions they grant inside this workspace.
        </p>
      </div>
      <div className="grid gap-3">
        {defaultOrganizationRoles.map((role) => (
          <section key={role.key} className="rounded-lg border p-4">
            <h2 className="font-medium">{role.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {role.permissions.length} permissions
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
