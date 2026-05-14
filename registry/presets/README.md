# Presets

Presets are curated module bundles.

They are not the product by themselves. A preset should only group modules for a clear install path, such as:

- `next-saas`
- `vendor-examples`
- `vercel-native`
- `cloudflare-native`

Rules:

- Do not duplicate module names in a preset.
- Do not include modules with conflicting target files.
- Keep base presets on source-owned defaults unless the preset explicitly represents provider examples.
- Put optional provider adapters such as Autumn and Unkey in `vendor-examples` or provider-specific presets before adding them to broad base presets.
- Keep preset names stable because generated aggregate registry blocks use them.
- Run `pnpm registry:doctor` after editing a preset.
