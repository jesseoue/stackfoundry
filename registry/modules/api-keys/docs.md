# API Keys Module

Adds API key creation, hashing, scopes, usage metadata, and management UI.

This is the default source-owned API key path. Use it when the application should own key storage and verification in its database. Add `unkey-api-keys` only when the app chooses Unkey as a managed provider adapter.

## Owns

- API key schema
- key creation and revocation actions
- key verification helper
- usage/last-used metadata
- audit log events

## Security

Never store plaintext API keys. Store a prefix for display and a secure hash for verification.

## Adapter Options

- `unkey-api-keys` for managed key issuance, verification, metadata, permissions, and roles.
- `unkey-rate-limits` for managed rate limits alongside or instead of local `rate-limits`.
