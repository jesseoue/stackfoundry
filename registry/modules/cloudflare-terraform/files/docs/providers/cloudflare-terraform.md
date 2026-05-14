# Cloudflare Terraform

IaC module for zones, Workers, R2, D1, Queues, and secrets.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-terraform.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-terraform/page.tsx`

## Setup Checklist

- Keep Terraform state out of source
- Document provider account scope
- Plan before apply
- Review secret handling separately

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
