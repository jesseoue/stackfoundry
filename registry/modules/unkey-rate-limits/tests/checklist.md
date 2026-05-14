# Unkey Rate Limits Checklist

- [ ] module manifest validates
- [ ] Unkey rate-limit namespace exists in preview and production
- [ ] env vars are configured in deployment platform
- [ ] root key remains server-only
- [ ] protected routes return predictable limit headers
- [ ] deny paths are fail-closed for abuse-sensitive endpoints
- [ ] smoke route/helper is verified after deploy
- [ ] logs do not include secrets or user-sensitive payloads
- [ ] rollback and alerting behavior is documented
