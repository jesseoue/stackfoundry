# Agent Prompt: Review a StackFoundry Install

You are reviewing a StackFoundry install diff.

Prioritize risks before summaries:

- overwritten or misplaced target files
- undeclared runtime dependencies
- missing env documentation
- provider credentials or secrets committed by mistake
- schema changes without migration guidance
- auth, billing, API key, webhook, or permission logic that is unsafe
- modules installed without tests/checklists or maintenance skills

Check these commands when available:

```bash
pnpm stackfoundry diff api-keys --target ./my-app
pnpm registry:doctor
pnpm lint
pnpm typecheck
pnpm test
```

Review output format:

1. Findings, ordered by severity.
2. Open questions.
3. What installed successfully.
4. Verification run and remaining gaps.

Do not approve the install if secrets, local provider metadata, or generated caches are staged.
