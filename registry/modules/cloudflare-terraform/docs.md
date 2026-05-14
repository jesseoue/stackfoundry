# Cloudflare Terraform

IaC module for zones, Workers, R2, D1, Queues, and secrets.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-terraform.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-terraform/page.tsx`
- `docs/providers/cloudflare-terraform.md`

## Setup Checklist

- Keep Terraform state out of source
- Document provider account scope
- Plan before apply
- Review secret handling separately

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm cli add cloudflare-terraform --target /tmp/stackfoundry-cloudflare-terraform --dry-run`.
