# Knock Notifications

Knock adapter for hosted in-app feeds, workflow triggers, and preference-aware notification delivery.

## Owns

- `apps/web/src/lib/knock/client.ts`
- `apps/web/src/components/knock/knock-inbox-provider.tsx`
- `apps/web/src/app/(console)/admin/vendors/knock/page.tsx`

## Dependencies

- `registry:notifications`
- `registry:notification-center`
- `@knocklabs/node`
- `@knocklabs/react`

## Environment

- `KNOCK_API_KEY`
- `NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY`
- `NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID`

## Setup

1. Create a Knock environment.
2. Create an in-app feed channel.
3. Add the server API key and public feed values to preview and production environments.
4. Wrap the authenticated app shell with the Knock feed provider after user identity is available.
5. Trigger workflows from server code only.

## Provider Boundary

Use `notifications` and `notification-center` when the app should own local notification state. Use this module when the team chooses Knock for hosted feeds, workflow orchestration, and cross-channel delivery.

## Verification

- Confirm public keys are browser-safe and secret keys stay server-only.
- Trigger a workflow to a test user.
- Confirm feed read/unread state updates.
- Confirm preferences are respected before sending broad announcements.
