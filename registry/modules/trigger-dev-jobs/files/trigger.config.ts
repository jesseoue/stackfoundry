import { defineConfig } from "@trigger.dev/sdk";

export default defineConfig({
  project: process.env.TRIGGER_PROJECT_ID ?? "proj_replace_me",
  dirs: ["./apps/web/src/trigger"],
});
