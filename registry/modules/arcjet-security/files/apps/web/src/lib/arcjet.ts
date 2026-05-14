import arcjet, { shield, tokenBucket } from "@arcjet/next";

function requireEnv(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is required.`);
  return value;
}

export const aj = arcjet({
  key: requireEnv("ARCJET_KEY"),
  rules: [
    shield({ mode: "LIVE" }),
    tokenBucket({ mode: "LIVE", refillRate: 10, interval: 60, capacity: 20 }),
  ],
});
