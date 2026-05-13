# API Keys Module

Adds API key creation, hashing, scopes, usage metadata, and management UI.

## Owns

- API key schema
- key creation and revocation actions
- key verification helper
- usage/last-used metadata
- audit log events

## Security

Never store plaintext API keys. Store a prefix for display and a secure hash for verification.
