import { API_ERROR_CODES } from "@/lib/api-errors";

const rows = [
  { code: API_ERROR_CODES.validation, status: 400, useCase: "Invalid request body, query, or path parameter." },
  { code: API_ERROR_CODES.unauthorized, status: 401, useCase: "Missing, malformed, or revoked API key." },
  { code: API_ERROR_CODES.forbidden, status: 403, useCase: "Valid key without access to this resource." },
  { code: API_ERROR_CODES.notFound, status: 404, useCase: "Resource does not exist in this workspace." },
  { code: API_ERROR_CODES.conflict, status: 409, useCase: "Concurrent update or duplicate key." },
  { code: API_ERROR_CODES.rateLimited, status: 429, useCase: "Short-term request limit exceeded." },
  { code: API_ERROR_CODES.quotaExceeded, status: 402, useCase: "Billing quota or plan limit exceeded." },
  { code: API_ERROR_CODES.internal, status: 500, useCase: "Unexpected internal failure." },
];

export default function APIErrorsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">API Errors</h1>
        <p className="text-muted-foreground">
          Machine-readable API error shape, code catalog, and response helpers.
        </p>
      </div>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="p-3 text-left">Code</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Use case</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.code} className="border-t">
                <td className="p-3 font-mono text-xs">{row.code}</td>
                <td className="p-3">{row.status}</td>
                <td className="p-3">{row.useCase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
