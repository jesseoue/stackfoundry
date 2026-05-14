# Credit Wallet

Prepaid credits, grant/consume ledger, low-balance checks, and AI or usage-based wallet flows.

## Owns

- `packages/db/src/schema/credit-wallet.ts`
- `apps/web/src/lib/stackfoundry/credit-wallet.ts`
- `apps/web/src/app/(console)/billing/credits/page.tsx`

## Dependencies

- `registry:billing-core`
- `registry:usage-metering`

## Use Cases

- AI token wallets
- prepaid usage credits
- one-off credit packs
- admin-issued promotional credits
- low-balance upgrade prompts

## Invariants

- Credit balances must be derived from a ledger, not overwritten ad hoc.
- Consumption must be idempotent when tied to a request, job, or inference id.
- Credit grants should record source, actor, and expiration when applicable.
- Never allow a production path to silently create negative balances.

## Verification

- Run `pnpm registry:doctor` after editing the module.
- Run `pnpm cli add credit-wallet --target /tmp/stackfoundry-credit-wallet --dry-run`.
- Test grant, consume, refund, expiration, and insufficient-credit paths before marking stable.
