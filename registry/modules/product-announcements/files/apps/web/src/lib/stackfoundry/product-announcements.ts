export type AnnouncementChannel = "in-app" | "email" | "banner";

export type ProductAnnouncement = {
  title: string;
  body: string;
  channels: AnnouncementChannel[];
  audience: "all" | "admins" | "billing" | "beta";
  scheduledAt?: string;
};

export function createProductAnnouncement(announcement: ProductAnnouncement) {
  if (announcement.channels.length === 0) {
    throw new Error("At least one announcement channel is required.");
  }

  return announcement;
}
