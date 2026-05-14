# Conventions

Registry modules should feel like they came from one SaaS system. These conventions keep source modules composable.

## Schema Conventions

Default table fields should be consistent:

- `id`
- `ownerId` or `organizationId` when user/workspace scoped
- `createdAt`
- `updatedAt` when mutable
- `deletedAt` when soft deletion is supported
- `createdBy` when operator attribution matters
- `status`
- `metadata`
- `source` for provider/import origin
- `externalId` for provider-owned identifiers

## Status Conventions

Use plain lifecycle names that can be shared across modules:

- `draft`
- `pending`
- `active`
- `paused`
- `archived`
- `failed`
- `completed`
- `cancelled`

Provider-specific status values should be mapped behind adapter code before they reach source-owned product modules.

## Event Conventions

Events should include:

- `type`
- `actorId`
- `organizationId`
- `targetType`
- `targetId`
- `source`
- `metadata`
- `createdAt`

Use namespaced event types such as `api_key.created`, `webhook.delivery_failed`, `billing.invoice_paid`, and `support.ticket_escalated`.

## Money And Credits

Money values should be stored as integer minor units with a currency code. Credit ledgers should use signed integer amounts, reason codes, actor attribution, and reconciliation metadata.

## Tenant Isolation

Tenant-scoped modules must make the tenant boundary explicit in schema, queries, route handlers, and tests. Cross-tenant admin flows should live behind operator permissions and audit events.
