const invites = [
  { email: "teammate@example.com", role: "member", status: "pending" },
  { email: "admin@example.com", role: "admin", status: "accepted" },
];

export default function WorkspaceInvitesPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Workspace Invites</h1>
        <p className="text-muted-foreground">Send, resend, and revoke invitations for a workspace.</p>
      </div>
      <div className="grid gap-3">
        {invites.map((invite) => (
          <div key={invite.email} className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <p className="font-medium">{invite.email}</p>
              <p className="text-sm text-muted-foreground">{invite.role}</p>
            </div>
            <span className="text-sm">{invite.status}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
