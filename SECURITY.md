# Security Policy

Please do not open public issues for vulnerabilities.

Use GitHub private vulnerability reporting for security issues:

https://github.com/jesseoue/stackfoundry/security/advisories/new

## Scope

Report issues that could affect:

- generated registry payloads under `/r`
- the `stackfoundry` install/diff/build command
- module source that could leak secrets, bypass tenant boundaries, or write unsafe files
- GitHub Actions, release, and deployment workflows
- provider adapter templates that mishandle credentials, webhooks, signatures, or customer data

## Public Safety

Do not include secrets, tokens, credentials, private customer data, provider account IDs, raw webhook payloads, or production logs in public issues, pull requests, screenshots, or discussions.

If a secret is exposed, rotate it with the provider first, then remove it from the repository and any affected history.

## Supported Version

Security fixes target the current `main` branch and the latest GitHub release.

## Response Expectations

The maintainer will triage private vulnerability reports as soon as possible. For public reports that look security-sensitive, the issue may be closed and moved to private handling.

## Repository Protections

This repository uses:

- GitHub branch protection on `main`
- CI quality gates through GitHub Actions
- CodeQL analysis
- dependency review on pull requests
- Dependabot updates
- scoped CODEOWNERS for hosted web app and automation surfaces
- generated registry validation before release/deploy
