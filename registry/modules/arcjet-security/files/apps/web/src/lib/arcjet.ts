import arcjet, { shield, tokenBucket } from "@arcjet/next";

export const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({ mode: "LIVE" }),
    tokenBucket({ mode: "LIVE", refillRate: 10, interval: 60, capacity: 20 }),
  ],
});
