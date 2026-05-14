export type RoadmapStatus = "planned" | "in-progress" | "shipped";

export type RoadmapItem = {
  title: string;
  description: string;
  status: RoadmapStatus;
  href?: string;
};

export const roadmapStatusLabels: Record<RoadmapStatus, string> = {
  planned: "Planned",
  "in-progress": "In progress",
  shipped: "Shipped",
};

export function createRoadmapItem(item: RoadmapItem) {
  return item;
}
