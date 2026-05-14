# Cloudflare Next Starter Checklist

- [ ] module manifest validates
- [ ] Wrangler config uses `.open-next/worker.js` and `.open-next/assets`
- [ ] static asset headers are installed
- [ ] docs explain OpenNext build, preview, and deploy commands
- [ ] docs warn against committing Cloudflare credentials or local Wrangler state
- [ ] consuming app can run `opennextjs-cloudflare build`
- [ ] consuming app can run `wrangler deploy --dry-run --env production`
