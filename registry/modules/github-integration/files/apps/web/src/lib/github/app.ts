import "server-only";

import { App } from "octokit";

function requireEnv(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is required.`);
  return value;
}

export function createGitHubApp() {
  return new App({
    appId: requireEnv("GITHUB_APP_ID"),
    privateKey: requireEnv("GITHUB_PRIVATE_KEY").replace(/\\n/g, "\n"),
  });
}
