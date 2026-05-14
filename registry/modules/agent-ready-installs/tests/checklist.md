# Agent-Ready Installs Checklist

- [ ] module manifest validates
- [ ] prompt files do not mention secrets or local credentials
- [ ] context JSON has dry-run, install, diff, and validation commands
- [ ] one-shot prompt metadata maps each prompt to an existing recipe name
- [ ] every ready recipe has a matching one-shot prompt
- [ ] each one-shot prompt defines a completed SaaS endpoint and definition of done
- [ ] each one-shot prompt includes Next.js App Router route group and catch-all guidance
- [ ] verification guidance includes Biome lint/format, TypeScript typecheck, tests, production build, and responsive smoke checks
- [ ] docs explain generic coding-agent workflows
- [ ] API SaaS remains the default first install path
- [ ] dry-run install shows only prompt/context/docs files
