export type FilterPanelOption = {
  value: string;
  label: string;
};

export type FilterPanelField = {
  id: string;
  label: string;
  type: "select" | "search";
  options?: FilterPanelOption[];
};

export type FilterPanelValues = Record<string, string>;

export function hasActiveFilters(fields: FilterPanelField[], values: FilterPanelValues) {
  return fields.some((field) => values[field.id]?.trim().length > 0);
}

export function toSearchQueryString(values: FilterPanelValues) {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(values)) {
    if (value.trim()) searchParams.set(key, value.trim());
  }
  return searchParams.toString();
}

export const filterPanelChecks = [
  "Parse and validate filters in the server route before querying",
  "Keep tenant and authorization scopes independent from user filters",
  "Encode filter state in the URL so views remain shareable and restorable",
] as const;
