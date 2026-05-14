# Apps

Runnable applications live here.

- `cli/` owns the local `stackfoundry` command used to list, validate, build, install, and diff registry modules.
- `web/` owns the public site and hosts generated registry JSON from `public/r`.

Keep shared library code out of `apps/` once it is useful to more than one app. Move that code into `packages/` with its own README and package boundary.
