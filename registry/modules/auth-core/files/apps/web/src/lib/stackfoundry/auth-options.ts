export type AuthProviderOption = {
  id: "clerk-auth" | "auth-better-auth";
  label: string;
  bestFor: string;
  installCommand: string;
  owns: string[];
};

export const authProviderOptions: AuthProviderOption[] = [
  {
    id: "clerk-auth",
    label: "Clerk",
    bestFor: "managed authentication, hosted UI, organizations, and webhook-based user sync",
    installCommand: "pnpm stackfoundry add clerk-auth --target ./apps/web",
    owns: ["middleware.ts", "(auth) routes", "Clerk webhook route", "authorization helper"],
  },
  {
    id: "auth-better-auth",
    label: "Better Auth",
    bestFor: "source-owned auth server, app-owned UI, and a typed auth client",
    installCommand: "pnpm stackfoundry add auth-better-auth --target ./apps/web",
    owns: ["auth server config", "typed auth client", "App Router auth route handler"],
  },
];

export const authRouteGroups = [
  {
    path: "apps/web/src/app/(marketing)",
    purpose: "public pages that do not require a session",
  },
  {
    path: "apps/web/src/app/(auth)",
    purpose: "sign-in, sign-up, callback, recovery, and auth-specific pages",
  },
  {
    path: "apps/web/src/app/(console)",
    purpose: "authenticated application routes and settings",
  },
  {
    path: "apps/web/src/app/api/webhooks",
    purpose: "provider webhook routes with signature verification and idempotency",
  },
];

export const authLaunchChecks = [
  "Pick one primary auth provider for the first production path.",
  "Document session shape: user id, organization id, role, and permissions.",
  "Protect server routes before fetching tenant data.",
  "Verify sign-in, sign-up, sign-out, protected routes, webhook sync, and session expiry.",
] as const;
