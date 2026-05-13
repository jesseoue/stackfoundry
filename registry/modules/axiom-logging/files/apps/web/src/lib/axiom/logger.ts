import "server-only";

import { Axiom } from "@axiomhq/js";

const axiom = new Axiom({ token: process.env.AXIOM_TOKEN });

export async function logAxiomEvent(event: Record<string, unknown>) {
  if (!process.env.AXIOM_DATASET) throw new Error("AXIOM_DATASET is required");
  await axiom.ingest(process.env.AXIOM_DATASET, [{ ...event, timestamp: new Date().toISOString() }]);
}
