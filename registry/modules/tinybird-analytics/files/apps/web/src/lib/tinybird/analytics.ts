import "server-only";

export type TinybirdAnalyticsEvent = {
  timestamp?: string;
  event: string;
  userId?: string;
  accountId?: string;
  sessionId?: string;
  route?: string;
  properties?: Record<string, unknown>;
};

export type IngestTinybirdAnalyticsOptions = {
  events: TinybirdAnalyticsEvent[];
  dataSource?: string;
};

const defaultApiUrl = "https://api.tinybird.co";

function getTinybirdConfig(dataSource?: string) {
  const token = process.env.TINYBIRD_TOKEN;
  const apiUrl = process.env.TINYBIRD_API_URL ?? defaultApiUrl;
  const targetDataSource = dataSource ?? process.env.TINYBIRD_ANALYTICS_DATASOURCE;

  if (!token) {
    throw new Error("TINYBIRD_TOKEN is required to ingest analytics events.");
  }
  if (!targetDataSource) {
    throw new Error("TINYBIRD_ANALYTICS_DATASOURCE is required to ingest analytics events.");
  }

  return { token, apiUrl, dataSource: targetDataSource };
}

function serializeEvents(events: TinybirdAnalyticsEvent[]) {
  return events
    .map((event) =>
      JSON.stringify({
        timestamp: event.timestamp ?? new Date().toISOString(),
        event: event.event,
        user_id: event.userId,
        account_id: event.accountId,
        session_id: event.sessionId,
        route: event.route,
        properties: event.properties ?? {},
      }),
    )
    .join("\n");
}

export async function ingestTinybirdAnalytics({
  events,
  dataSource,
}: IngestTinybirdAnalyticsOptions) {
  if (events.length === 0) return { ingested: 0 };

  const config = getTinybirdConfig(dataSource);
  const response = await fetch(`${config.apiUrl}/v0/events?name=${config.dataSource}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${config.token}`,
      "content-type": "application/x-ndjson",
    },
    body: serializeEvents(events),
  });

  if (!response.ok) {
    throw new Error(`Tinybird analytics ingest failed with ${response.status}`);
  }

  return { ingested: events.length };
}

export function createTinybirdAnalyticsEvent(event: TinybirdAnalyticsEvent) {
  return {
    timestamp: event.timestamp ?? new Date().toISOString(),
    event: event.event,
    userId: event.userId,
    accountId: event.accountId,
    sessionId: event.sessionId,
    route: event.route,
    properties: event.properties ?? {},
  };
}
