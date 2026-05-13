import "server-only";

import { App } from "octokit";

export function createGitHubApp() {
  return new App({
    appId: process.env.GITHUB_APP_ID!,
    privateKey: process.env.GITHUB_PRIVATE_KEY!.replace(/\\n/g, "\n"),
  });
}
