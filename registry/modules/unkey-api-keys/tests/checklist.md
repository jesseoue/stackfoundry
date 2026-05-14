# Unkey API Keys Checklist

- [ ] module manifest validates
- [ ] Unkey API exists in preview and production
- [ ] env vars are configured in deployment platform
- [ ] root key remains server-only
- [ ] `create` returns the plaintext key only once and the app handles it accordingly
- [ ] `verifyKey` enforces validity, permissions, and roles on the server
- [ ] smoke route/helper is verified after deploy
- [ ] logs do not include secrets or user-sensitive payloads
- [ ] rollback and alerting behavior is documented
