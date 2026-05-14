# Generator Package

Reserved for install and update generation logic.

Future responsibilities:

- Resolve files from registry modules into target paths.
- Render generated metadata such as env examples and install manifests.
- Support diff/update plans before files are written.
- Keep overwrite safety rules shared between CLI and any future programmatic API.

Current owner: `apps/cli/src/cli.mjs`.
