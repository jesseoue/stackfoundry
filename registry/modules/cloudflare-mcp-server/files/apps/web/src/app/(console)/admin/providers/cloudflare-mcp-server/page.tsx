import { CloudflareMcpServerChecklist } from "@/lib/stackfoundry/providers/cloudflare-mcp-server";

export default function CloudflareMcpServerPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Cloudflare MCP Server</h1>
        <p className="text-muted-foreground">Remote MCP server on Workers with OAuth/auth guidance.</p>
      </div>
      <div className="grid gap-3">
        {CloudflareMcpServerChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
