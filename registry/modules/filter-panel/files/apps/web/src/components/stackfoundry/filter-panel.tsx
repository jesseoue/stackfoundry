"use client";

import { useState } from "react";
import { hasActiveFilters, toSearchQueryString, type FilterPanelField, type FilterPanelValues } from "@/lib/stackfoundry/filter-panel";

type FilterPanelProps = {
  fields: FilterPanelField[];
  initialFilters?: FilterPanelValues;
  onApply?: (query: string) => void;
};

export function StackFoundryFilterPanel({
  fields,
  initialFilters = {},
  onApply,
}: FilterPanelProps) {
  const [values, setValues] = useState<FilterPanelValues>(initialFilters);
  const active = hasActiveFilters(fields, values);

  return (
    <form
      className="rounded-xl border bg-card p-4 shadow-xs"
      onSubmit={(event) => {
        event.preventDefault();
        onApply?.(toSearchQueryString(values));
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold tracking-tight">Filters</h2>
        {active ? (
          <button
            type="button"
            className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            onClick={() => {
              const cleared = Object.fromEntries(fields.map((field) => [field.id, ""]));
              setValues(cleared);
              onApply?.("");
            }}
          >
            Clear all
          </button>
        ) : null}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map((field) => (
          <label className="grid gap-1.5 text-sm" key={field.id}>
            <span className="text-xs font-medium text-muted-foreground">{field.label}</span>
            {field.type === "search" ? (
              <input
                type="search"
                value={values[field.id] ?? ""}
                onChange={(event) => setValues((current) => ({ ...current, [field.id]: event.target.value }))}
                className="h-9 rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            ) : (
              <select
                value={values[field.id] ?? ""}
                onChange={(event) => setValues((current) => ({ ...current, [field.id]: event.target.value }))}
                className="h-9 rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">All</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </label>
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="h-9 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Apply filters
        </button>
      </div>
    </form>
  );
}
