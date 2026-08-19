import { encodeCursor, parseKeysetPagination } from "@/lib/keyset-pagination";

const example = parseKeysetPagination({ limit: 25, cursor: null });
const examples = [
  { field: "limit", value: example.limit },
  { field: "offset", value: example.offset },
  { field: "next_cursor", value: encodeCursor(25) },
];

export default function KeysetPaginationPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Keyset Pagination</h1>
        <p className="text-muted-foreground">Keyset pagination helpers for stable API lists.</p>
      </div>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="p-3 text-left">Response field</th>
              <th className="p-3 text-left">Example</th>
            </tr>
          </thead>
          <tbody>
            {examples.map((item) => (
              <tr key={item.field} className="border-t">
                <td className="p-3 font-mono text-xs">{item.field}</td>
                <td className="p-3 font-mono text-xs">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
