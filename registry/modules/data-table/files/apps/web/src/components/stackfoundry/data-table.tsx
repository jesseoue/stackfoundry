type Column<T> = { key: keyof T; label: string };

export function StackFoundryDataTable<T extends { id: string }>({
  rows,
  columns,
  empty = "No records found.",
}: {
  rows: T[];
  columns: Array<Column<T>>;
  empty?: string;
}) {
  if (rows.length === 0) return <div className="rounded-lg border p-6 text-sm text-muted-foreground">{empty}</div>;

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead>
          <tr>{columns.map((column) => <th key={String(column.key)} className="p-3 text-left">{column.label}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t">
              {columns.map((column) => <td key={String(column.key)} className="p-3">{String(row[column.key] ?? "")}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
